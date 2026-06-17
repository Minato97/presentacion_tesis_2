/* =============================================================
   icons.js — Set de íconos SVG (line icons, color de marca)
   Uso:  ${icon('target')}  ${icon('mcp', 'big')}
   Heredan el color con currentColor.
   ============================================================= */
(function () {
  const P = {
    target:   '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    compass:  '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    book:     '<path d="M4 5a2 2 0 0 1 2-2h7v16H6a2 2 0 0 0-2 2z"/><path d="M13 3h5a2 2 0 0 1 2 2v14a2 2 0 0 0-2 2h-5"/>',
    microscope:'<path d="M6 18h10"/><path d="M9 18a5 5 0 1 0 6-5"/><path d="M10 14l-2-3 3-2 2 3"/><path d="M9 7l3-2"/><path d="M4 22h16"/>',
    gear:     '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/><path d="M10 21v-3h4v3"/>',
    clipboard:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v1H9z"/><path d="M8.5 11h7M8.5 15h5"/>',
    handshake:'<path d="M3 12l4-4 5 3 5-3 4 4"/><path d="M3 12v3l5 4 2-2"/><path d="M21 12v3l-5 4-3-3"/><path d="M12 11l2 2"/>',
    calendar: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 9h16M8 3v4M16 3v4"/>',
    sensor:   '<path d="M5 13a7 7 0 0 1 14 0"/><path d="M8 13a4 4 0 0 1 8 0"/><circle cx="12" cy="13" r="1.3" fill="currentColor"/><path d="M12 13v7M9 20h6"/>',
    brain:    '<path d="M9 4a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 11a2.5 2.5 0 0 0 1.5 4.5A2.5 2.5 0 0 0 9 20a2 2 0 0 0 2-2V5a1 1 0 0 0-2-1z"/><path d="M15 4a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 11a2.5 2.5 0 0 1-1.5 4.5A2.5 2.5 0 0 1 15 20a2 2 0 0 1-2-2V5a1 1 0 0 1 2-1z"/>',
    robot:    '<rect x="5" y="8" width="14" height="11" rx="2.5"/><path d="M12 4v4M12 4a1.4 1.4 0 1 0 0-.01"/><circle cx="9.2" cy="13" r="1.2" fill="currentColor"/><circle cx="14.8" cy="13" r="1.2" fill="currentColor"/><path d="M9.5 16.3h5"/><path d="M3 12v3M21 12v3"/>',
    chip:     '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 10h4v4h-4z" fill="currentColor" opacity=".25"/><path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/>',
    search:   '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/>',
    user:     '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    chat:     '<path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2z"/><path d="M8 9h8M8 12h5"/>',
    chart:    '<path d="M4 4v16h16"/><path d="M8 16v-4M12 16v-7M16 16v-5"/>',
    tools:    '<path d="M14.5 5.5a3.5 3.5 0 0 0-4.6 4.6L4 16v4h4l5.9-5.9a3.5 3.5 0 0 0 4.6-4.6l-2.3 2.3-2-2z"/>',
    globe:    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/>',
    check:    '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>',
    ruler:    '<rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(0 12 12)"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/>',
    database: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    server:   '<rect x="4" y="4" width="16" height="7" rx="1.5"/><rect x="4" y="13" width="16" height="7" rx="1.5"/><circle cx="8" cy="7.5" r="1" fill="currentColor"/><circle cx="8" cy="16.5" r="1" fill="currentColor"/>',
    screen:   '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    shield:   '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    leaf:     '<path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14z"/><path d="M5 19c4-6 8-9 12-11"/>',
    wind:     '<path d="M3 8h10a3 3 0 1 0-3-3"/><path d="M3 12h14a3 3 0 1 1-3 3"/><path d="M3 16h8a2.5 2.5 0 1 1-2.5 2.5"/>',
    sun:      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
    rain:     '<path d="M7 14a5 5 0 0 1 .5-9.9A6 6 0 0 1 19 7a4 4 0 0 1-1 7"/><path d="M9 18l-1 2M13 18l-1 2M17 18l-1 2"/>',
    sprout:   '<path d="M12 21v-7"/><path d="M12 14C9 14 6 12 6 8c4 0 6 2 6 6z"/><path d="M12 12c0-3 2-5 6-5 0 4-3 6-6 5z"/>',
    network:  '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M12 7.2L6.5 16M12 7.2L17.5 16M7 18h10"/>',
    cloud:    '<path d="M7 18a4 4 0 0 1 .6-7.95A6 6 0 0 1 19 11a3.5 3.5 0 0 1-.5 7z"/>',
    flask:    '<path d="M9 3h6M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-5-8V3"/><path d="M7.5 14h9"/>',
    cycle:    '<path d="M4 12a8 8 0 0 1 13.7-5.7L20 8"/><path d="M20 4v4h-4"/><path d="M20 12a8 8 0 0 1-13.7 5.7L4 16"/><path d="M4 20v-4h4"/>',
    lock:     '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15" r="1.3" fill="currentColor"/>'
  };

  window.icon = function (name, size) {
    const d = P[name] || P.check;
    const cls = 'svgic' + (size ? ' ' + size : '');
    return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  };
})();
