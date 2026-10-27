const FIELD = { length: 1050, width: 680, marginX: 48, marginY: 34 };

function fieldPct(pos, vertical) {
  const along = vertical ? pos.y : pos.x;
  const across = vertical ? pos.x : pos.y;
  const totalAlong = FIELD.length + 2 * FIELD.marginX;
  const totalAcross = FIELD.width + 2 * FIELD.marginY;
  const a = (FIELD.marginX + along / 100 * FIELD.length) / totalAlong * 100;
  const b = (FIELD.marginY + across / 100 * FIELD.width) / totalAcross * 100;
  return vertical ? { left: b, top: a } : { left: a, top: b };
}

function pitchSvg(vertical) {
  const s = vertical ? "v" : "h";
  const bandWidth = 1146 / 14;
  const stripes = Array.from({ length: 14 }, (_, i) =>
    i % 2 ? `<rect x="${-48 + i * bandWidth}" y="-34" width="${bandWidth + 0.5}" height="748"/>` : ""
  ).join("");

  const goal = `<g>
    <rect x="-38" y="295" width="38" height="90" fill="rgba(0,0,0,.22)"/>
    <rect x="-38" y="295" width="38" height="90" fill="url(#net-${s})"/>
    <path d="M0 295H-38V385H0" fill="none" stroke="#f4f0e4" stroke-width="3.2" stroke-linejoin="round"/>
    <circle cx="0" cy="295" r="3.6" fill="#f4f0e4"/>
    <circle cx="0" cy="385" r="3.6" fill="#f4f0e4"/>
  </g>`;

  const field = `
    <rect x="-48" y="-34" width="1146" height="748" fill="url(#grass-${s})"/>
    <g fill="rgba(160,215,120,.1)">${stripes}</g>
    <rect x="-48" y="-34" width="1146" height="748" filter="url(#grain-${s})" opacity=".2"/>
    <rect x="-48" y="-34" width="1146" height="748" fill="url(#vignette-${s})"/>
    <g fill="none" stroke="#efe9d6" stroke-opacity=".9" stroke-width="2.4" stroke-linejoin="miter">
      <rect x="0" y="0" width="1050" height="680"/>
      <path d="M525 0V680"/>
      <circle cx="525" cy="340" r="91.5"/>
      <path d="M0 138.4H165V541.6H0"/>
      <path d="M1050 138.4H885V541.6H1050"/>
      <path d="M0 248.4H55V431.6H0"/>
      <path d="M1050 248.4H995V431.6H1050"/>
      <path d="M165 266.87A91.5 91.5 0 0 1 165 413.13"/>
      <path d="M885 266.87A91.5 91.5 0 0 0 885 413.13"/>
      <path d="M10 0A10 10 0 0 1 0 10"/>
      <path d="M1040 0A10 10 0 0 0 1050 10"/>
      <path d="M0 670A10 10 0 0 1 10 680"/>
      <path d="M1050 670A10 10 0 0 0 1040 680"/>
    </g>
    <g fill="#efe9d6" fill-opacity=".9">
      <circle cx="525" cy="340" r="3.2"/>
      <circle cx="110" cy="340" r="3.2"/>
      <circle cx="940" cy="340" r="3.2"/>
    </g>
    ${goal}
    <g transform="translate(1050 0) scale(-1 1)">${goal}</g>`;

  const flag = (x, y) => {
    const px = vertical ? FIELD.width - y : x;
    const py = vertical ? x : y;
    const d = px === 0 ? 1 : -1;
    return `<g>
      <ellipse cx="${px}" cy="${py + 1.5}" rx="5" ry="2" fill="#000" opacity=".35"/>
      <path d="M${px} ${py}V${py - 24}" stroke="#f4f0e4" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M${px} ${py - 24}L${px + d * 15} ${py - 18.5}L${px} ${py - 13}Z" fill="#d7a84a"/>
      <circle cx="${px}" cy="${py}" r="2.8" fill="#f4f0e4"/>
    </g>`;
  };

  const flags = [flag(0, 0), flag(1050, 0), flag(0, 680), flag(1050, 680)].join("");
  const body = vertical ? `<g transform="translate(680 0) rotate(90)">${field}</g>` : field;
  const viewBox = vertical ? "-34 -48 748 1146" : "-48 -34 1146 748";

  return `<svg class="pitch__svg pitch__svg--${s}" viewBox="${viewBox}" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="grass-${s}" cx=".5" cy=".5" r=".75"><stop offset="0" stop-color="#22552f"/><stop offset="1" stop-color="#15391f"/></radialGradient>
      <radialGradient id="vignette-${s}" cx=".5" cy=".5" r=".72"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".32"/></radialGradient>
      <filter id="grain-${s}" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency=".45" numOctaves="3" seed="7"/>
        <feColorMatrix type="matrix" values="0 0 0 0 .75  0 0 0 0 .95  0 0 0 0 .7  0 0 0 .8 -.3"/>
      </filter>
      <pattern id="net-${s}" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M6 0H0V6" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width=".8"/></pattern>
    </defs>
    ${body}${flags}
  </svg>`;
}

const kitPalettes = {
  cream: { light: "#fbf6e8", mid: "#ebe2cb", dark: "#c4b794", trim: "#b8923f", collar: "#163d2b", inner: "#8c8068" },
  green: { light: "#2d6a46", mid: "#1a4a32", dark: "#0d2c1c", trim: "#cfa24a", collar: "#cfa24a", inner: "#06170f" },
  grey: { light: "#7d827b", mid: "#4f554f", dark: "#2c312d", trim: "#8e9088", collar: "#9a9c94", inner: "#1b1f1c" }
};

function jerseySvg(kit, uid) {
  const p = kitPalettes[kit] || kitPalettes.cream;
  const id = "j-" + String(uid).replace(/[^a-z0-9]/gi, "");
  const body = "M58 12C48 15 36 20 26 27L5 58Q3 62 8 64L35 76C34 98 38 120 36 138Q80 146 124 138C122 120 126 98 125 76L152 64Q157 62 155 58L134 27C124 20 112 15 102 12Q80 36 58 12Z";
  return `<svg viewBox="0 0 160 150" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${id}-fabric" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="${p.light}"/><stop offset=".55" stop-color="${p.mid}"/><stop offset="1" stop-color="${p.dark}"/></linearGradient>
      <linearGradient id="${id}-side" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".2"/><stop offset=".25" stop-color="#fff" stop-opacity=".07"/><stop offset=".75" stop-color="#000" stop-opacity=".02"/><stop offset="1" stop-color="#000" stop-opacity=".24"/></linearGradient>
      <clipPath id="${id}-clip"><path d="${body}"/></clipPath>
    </defs>
    <path d="${body}" fill="url(#${id}-fabric)"/>
    <g clip-path="url(#${id}-clip)">
      <rect width="160" height="150" fill="url(#${id}-side)"/>
      <path d="M36 78Q46 86 45 102M124 78Q114 86 115 102" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="6" stroke-linecap="round"/>
      <path d="M4 63.5L36 78M156 63.5L124 78" stroke="${p.trim}" stroke-width="15"/>
      <path d="M29 29C31 45 34 62 35 76M131 29C129 45 126 62 125 76" fill="none" stroke="#000" stroke-opacity=".22" stroke-width="1.2"/>
      <path d="M30 128Q80 136 130 128V150H30Z" fill="${p.trim}"/>
      <path d="M30 128Q80 136 130 128" fill="none" stroke="#000" stroke-opacity=".2" stroke-width="1"/>
    </g>
    <path d="M58 12Q80 21 102 12Q80 36 58 12Z" fill="${p.inner}"/>
    <path d="M58 12Q80 36 102 12" fill="none" stroke="${p.collar}" stroke-width="3.8" stroke-linecap="round"/>
    <path d="${body}" fill="none" stroke="#000" stroke-opacity=".35" stroke-width="1.3" stroke-linejoin="round"/>
  </svg>`;
}

function benchSvg(uid) {
  const id = "b-" + uid;
  const seat = i => {
    const y = 20 + i * 52;
    return `<g class="seat seat-${i}">
    <defs>
      <linearGradient id="${id}-seat${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--seat-hi)"/><stop offset="1" style="stop-color:var(--seat-lo)"/></linearGradient>
      <linearGradient id="${id}-back${i}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--seat-lo)"/><stop offset="1" style="stop-color:var(--seat-deep)"/></linearGradient>
    </defs>
    <ellipse cx="44" cy="${y + 47}" rx="34" ry="2.5" fill="#000" opacity=".3"/>
    <rect x="13" y="${y}" width="46" height="5" rx="2.5" fill="url(#${id}-metal)"/>
    <rect x="13" y="${y + 40}" width="46" height="5" rx="2.5" fill="url(#${id}-metal)"/>
    <rect x="12" y="${y + 5}" width="52" height="35" rx="14" fill="url(#${id}-seat${i})" stroke="#000" stroke-opacity=".4"/>
    <path d="M20 ${y + 14}H50" stroke="#fff" stroke-opacity=".28" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M22 ${y + 31}H54" stroke="#000" stroke-opacity=".22" stroke-width="1.6" stroke-linecap="round"/>
    <rect x="62" y="${y + 1}" width="18" height="43" rx="9" fill="url(#${id}-back${i})" stroke="#000" stroke-opacity=".45"/>
    <path d="M67 ${y + 9}V${y + 36}" stroke="#fff" stroke-opacity=".25" stroke-width="2" stroke-linecap="round"/>
  </g>`;
  };
  return `<svg class="bench-svg" viewBox="0 0 100 184" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${id}-metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef1ee"/><stop offset=".5" stop-color="#8f9a92"/><stop offset="1" stop-color="#4a534d"/></linearGradient>
      <linearGradient id="${id}-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#fff" stop-opacity=".03"/></linearGradient>
    </defs>
    <rect x="4" y="4" width="92" height="176" rx="7" fill="url(#${id}-glass)" stroke="url(#${id}-metal)" stroke-width="3"/>
    <rect x="86" y="4" width="10" height="176" rx="4" fill="url(#${id}-metal)" opacity=".85"/>
    <rect x="4" y="4" width="92" height="8" rx="4" fill="url(#${id}-metal)"/>
    <path d="M10 14L90 14" stroke="#fff" stroke-opacity=".25"/>
    ${seat(0)}${seat(1)}${seat(2)}
  </svg>`;
}
