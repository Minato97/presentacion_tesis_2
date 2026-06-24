/* Captura 4 vistas del sistema SMMyE (localhost:8000) en alta resolución.
   Se autentica por API (admin/123456) y guarda PNG en ../assets/. */
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE   = 'http://localhost:8000';
const OUT    = path.resolve(__dirname, '..', 'assets');

const wait = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
    defaultViewport: { width: 1600, height: 900, deviceScaleFactor: 2 },
  });
  const page = await browser.newPage();

  const cleanSwal = () => page.evaluate(() => {
    document.querySelectorAll('.swal2-container').forEach(e => e.remove());
  }).catch(() => {});

  const hideChrome = () => page.evaluate(() => {
    let s = document.getElementById('cap-hide');
    if (!s) { s = document.createElement('style'); s.id = 'cap-hide';
      s.textContent = '.chat-teaser{display:none!important}.chat-panel{display:none!important}';
      document.head.appendChild(s); }
  }).catch(() => {});

  const shot = async (file, ms = 3500) => {
    await wait(ms);
    await cleanSwal();
    await hideChrome();
    await wait(300);
    const p = path.join(OUT, file);
    await page.screenshot({ path: p });
    console.log('OK ->', p);
  };

  // 1) Landing pública — forzar tema claro (sembrar antes y recargar)
  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    localStorage.setItem('SensorSesion', JSON.stringify({
      user: '', estacion: '', sensor: '', estadisticas: [], muestras: [], theme: 'light',
    }));
  });
  await page.reload({ waitUntil: 'domcontentloaded' });
  await shot('sys-01-landing.png');

  // Autenticación por API + sembrar token/usuario/tema en localStorage
  const tok = await page.evaluate(async () => {
    const r = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ usuario: 'admin', password: '123456' }),
    });
    const d = await r.json();
    return d.access_token;
  });
  console.log('token?', !!tok);
  await page.evaluate(async (t) => {
    localStorage.setItem('token', JSON.stringify(t));
    const me = await fetch('/api/auth/me', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + t, 'Accept': 'application/json' },
    }).then(r => r.json());
    localStorage.setItem('SensorSesion', JSON.stringify({
      user: me, estacion: '', sensor: '', estadisticas: [], muestras: [], theme: 'light',
    }));
  }, tok);

  // 2) Modo invitado (monitoreo público)
  await page.goto(BASE + '/invitado/monitoreo-invitado', { waitUntil: 'domcontentloaded' });
  await shot('sys-02-invitado.png');

  // 3) Modo admin (dashboard / inicio)
  await page.goto(BASE + '/admin', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(
    () => /PANEL DE CONTROL|Nodos IoT totales|Buenas/i.test(document.body.innerText),
    { timeout: 15000 }
  ).catch(() => {});
  await shot('sys-03-admin.png', 2500);

  // 4) Monitoreo actual (admin) — seleccionar el primer nodo real para mostrar sensores
  await page.goto(BASE + '/admin/monitoreo', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.nodo-sel-btn', { timeout: 15000 }).catch(() => {});
  await wait(3000); // dejar que cargue la lista de estaciones
  await cleanSwal();
  try {
    await page.click('.nodo-sel-btn');                 // abrir menú
    await page.waitForSelector('.fs-node-item:not(.fs-node-item--none)', { timeout: 8000 });
    await wait(500);
    const picked = await page.$$eval('.fs-node-item:not(.fs-node-item--none)', els => {
      if (!els.length) return null;
      els[0].click();
      return els[0].innerText.trim();
    });
    console.log('nodo seleccionado:', picked);
    // esperar a que rendericen las tarjetas de sensores
    await page.waitForSelector('.sensor-card', { timeout: 12000 }).catch(() => {});
    await wait(3000);
  } catch (e) { console.log('no se pudo seleccionar nodo:', e.message); }
  await shot('sys-04-monitoreo.png', 600);

  await browser.close();
  console.log('DONE');
})().catch(e => { console.error('FATAL', e); process.exit(1); });
