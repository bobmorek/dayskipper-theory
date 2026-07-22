/* ===========================================================
   Day Skipper Theory Trainer — diagram generators
   Self-contained inline SVG (no external images). Loaded before
   questions.js so questions can reference DIAGRAMS.* for images.
   =========================================================== */

const DIAGRAMS = (function () {
  "use strict";

  let _uid = 0;
  const uid = () => "dg" + ++_uid;

  const NAVY = "#0a2a44";
  const BLACK = "#141414";
  const YELLOW = "#f2c200";
  const RED = "#d8342a";
  const GREEN = "#17924a";
  const WHITE = "#ffffff";

  function svg(w, h, inner, cls) {
    return (
      `<svg class="q-svg${cls ? " " + cls : ""}" viewBox="0 0 ${w} ${h}" ` +
      `xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid meet">` +
      inner +
      `</svg>`
    );
  }

  // gentle sea at the base of a floating mark
  function water() {
    return (
      `<path d="M0 208 q20 -7 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#3a8fc4" stroke-width="3" opacity="0.85"/>` +
      `<path d="M0 216 q20 -7 40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#3a8fc4" stroke-width="2" opacity="0.5"/>`
    );
  }

  const BODY = "66,95 94,95 98,205 62,205"; // pillar-buoy silhouette
  function bodyOutline() {
    return `<polygon points="${BODY}" fill="none" stroke="${NAVY}" stroke-width="2"/>`;
  }
  function clippedBody(rects) {
    const id = uid();
    return (
      `<clipPath id="${id}"><polygon points="${BODY}"/></clipPath>` +
      `<g clip-path="url(#${id})">${rects}</g>` +
      bodyOutline()
    );
  }

  // ---------------- Cardinal marks ----------------
  function cardinal(dir) {
    const cx = 80, w = 30, h = 26, y1 = 30, y2 = 58;
    const up = (cy) =>
      `<polygon points="${cx},${cy} ${cx - w / 2},${cy + h} ${cx + w / 2},${cy + h}" fill="${BLACK}"/>`;
    const down = (cy) =>
      `<polygon points="${cx - w / 2},${cy} ${cx + w / 2},${cy} ${cx},${cy + h}" fill="${BLACK}"/>`;

    let top, bot, bands;
    if (dir === "N") { top = up(y1); bot = up(y2); bands = [[95, 55, BLACK], [150, 55, YELLOW]]; }
    if (dir === "S") { top = down(y1); bot = down(y2); bands = [[95, 55, YELLOW], [150, 55, BLACK]]; }
    if (dir === "E") { top = up(y1); bot = down(y2); bands = [[95, 37, BLACK], [132, 36, YELLOW], [168, 37, BLACK]]; }
    if (dir === "W") { top = down(y1); bot = up(y2); bands = [[95, 37, YELLOW], [132, 36, BLACK], [168, 37, YELLOW]]; }

    const rects = bands
      .map((b) => `<rect x="58" y="${b[0]}" width="44" height="${b[1]}" fill="${b[2]}"/>`)
      .join("");

    return svg(160, 240,
      top + bot +
      `<rect x="78" y="84" width="4" height="12" fill="${BLACK}"/>` +
      clippedBody(rects) +
      water()
    );
  }

  // ---------------- Lateral marks (IALA Region A) ----------------
  function lateralPort() {
    return svg(160, 240,
      `<rect x="66" y="40" width="28" height="22" rx="2" fill="${RED}" stroke="${NAVY}" stroke-width="2"/>` +
      `<rect x="78" y="62" width="4" height="30" fill="${BLACK}"/>` +
      `<rect x="60" y="92" width="40" height="114" rx="4" fill="${RED}" stroke="${NAVY}" stroke-width="2"/>` +
      water()
    );
  }
  function lateralStbd() {
    return svg(160, 240,
      `<polygon points="80,40 66,66 94,66" fill="${GREEN}" stroke="${NAVY}" stroke-width="2"/>` +
      `<rect x="78" y="66" width="4" height="26" fill="${BLACK}"/>` +
      `<polygon points="80,92 60,206 100,206" fill="${GREEN}" stroke="${NAVY}" stroke-width="2"/>` +
      water()
    );
  }

  // ---------------- Isolated danger / safe water / special ----------------
  function isolatedDanger() {
    return svg(160, 240,
      `<circle cx="80" cy="40" r="12" fill="${BLACK}"/>` +
      `<circle cx="80" cy="67" r="12" fill="${BLACK}"/>` +
      `<rect x="78" y="79" width="4" height="16" fill="${BLACK}"/>` +
      clippedBody(
        `<rect x="58" y="95" width="44" height="45" fill="${BLACK}"/>` +
        `<rect x="58" y="140" width="44" height="24" fill="${RED}"/>` +
        `<rect x="58" y="164" width="44" height="41" fill="${BLACK}"/>`
      ) +
      water()
    );
  }
  function safeWater() {
    return svg(160, 240,
      `<circle cx="80" cy="52" r="13" fill="${RED}"/>` +
      `<rect x="78" y="65" width="4" height="30" fill="${BLACK}"/>` +
      clippedBody(
        `<rect x="58" y="95" width="14.7" height="110" fill="${RED}"/>` +
        `<rect x="72.7" y="95" width="14.7" height="110" fill="${WHITE}"/>` +
        `<rect x="87.4" y="95" width="14.6" height="110" fill="${RED}"/>`
      ) +
      water()
    );
  }
  function specialMark() {
    return svg(160, 240,
      `<g stroke-linecap="round">` +
      `<line x1="69" y1="40" x2="91" y2="62" stroke="${BLACK}" stroke-width="9"/>` +
      `<line x1="91" y1="40" x2="69" y2="62" stroke="${BLACK}" stroke-width="9"/>` +
      `<line x1="69" y1="40" x2="91" y2="62" stroke="${YELLOW}" stroke-width="5"/>` +
      `<line x1="91" y1="40" x2="69" y2="62" stroke="${YELLOW}" stroke-width="5"/>` +
      `</g>` +
      `<rect x="78" y="62" width="4" height="33" fill="${BLACK}"/>` +
      clippedBody(`<rect x="58" y="95" width="44" height="110" fill="${YELLOW}"/>`) +
      water()
    );
  }

  // ---------------- Vessel lights at night (vertical arrangement) ----------------
  function lights(colours) {
    const map = { R: "#ff3b30", G: "#25d366", W: "#fff7cc" };
    const n = colours.length, gap = 34, y0 = 100 - ((n - 1) * gap) / 2;
    let inner = `<rect x="0" y="0" width="140" height="200" rx="12" fill="#081320"/>`;
    inner += `<rect x="66" y="20" width="8" height="160" rx="3" fill="#1b3346"/>`; // suggestion of a mast
    colours.forEach((c, i) => {
      const cy = y0 + i * gap, fill = map[c] || c;
      inner += `<circle cx="70" cy="${cy}" r="19" fill="${fill}" opacity="0.22"/>`;
      inner += `<circle cx="70" cy="${cy}" r="10.5" fill="${fill}"/>`;
    });
    return svg(140, 200, inner);
  }

  // ---------------- Day shapes ----------------
  function dayShape(kind) {
    const cx = 70;
    const ball = (cy) => `<circle cx="${cx}" cy="${cy}" r="17" fill="${BLACK}"/>`;
    const coneDown = (cy) =>
      `<polygon points="${cx - 18},${cy - 17} ${cx + 18},${cy - 17} ${cx},${cy + 17}" fill="${BLACK}"/>`;
    const coneUp = (cy) =>
      `<polygon points="${cx},${cy - 17} ${cx - 18},${cy + 17} ${cx + 18},${cy + 17}" fill="${BLACK}"/>`;
    const diamond = (cy) =>
      `<polygon points="${cx},${cy - 19} ${cx + 17},${cy} ${cx},${cy + 19} ${cx - 17},${cy}" fill="${BLACK}"/>`;
    const cylinder = (cy) =>
      `<rect x="${cx - 15}" y="${cy - 20}" width="30" height="40" rx="2" fill="${BLACK}"/>`;

    let shapes = "", topY = 100;
    if (kind === "ball") { shapes = ball(100); topY = 83; }
    if (kind === "cone-down") { shapes = coneDown(100); topY = 83; }
    if (kind === "cone-up") { shapes = coneUp(100); topY = 83; }
    if (kind === "cylinder") { shapes = cylinder(100); topY = 80; }
    if (kind === "two-balls") { shapes = ball(72) + ball(120); topY = 55; }
    if (kind === "ball-diamond-ball") { shapes = ball(58) + diamond(100) + ball(142); topY = 41; }
    if (kind === "three-balls") { shapes = ball(55) + ball(100) + ball(145); topY = 38; }

    return svg(140, 200,
      `<line x1="${cx}" y1="14" x2="${cx}" y2="${topY}" stroke="#8aa0b2" stroke-width="2"/>` +
      shapes
    );
  }

  // ---------------- Light characteristic timelines ----------------
  function rhythm(kind) {
    const x0 = 12, x1 = 248, top = 22, hgt = 30;
    const patterns = {
      iso: rep([[20, 1], [20, 0]], 6),
      occulting: rep([[34, 1], [10, 0]], 5),
      flashing: rep([[10, 1], [34, 0]], 5),
      quick: rep([[7, 1], [7, 0]], 17),
    };
    function rep(unit, times) {
      const out = [];
      for (let i = 0; i < times; i++) unit.forEach((u) => out.push(u.slice()));
      return out;
    }
    const total = patterns[kind].reduce((s, seg) => s + seg[0], 0);
    const scale = (x1 - x0) / total;
    let x = x0, bars = "";
    patterns[kind].forEach((seg) => {
      const wpx = seg[0] * scale;
      if (seg[1]) bars += `<rect x="${x.toFixed(1)}" y="${top}" width="${wpx.toFixed(1)}" height="${hgt}" fill="${YELLOW}"/>`;
      x += wpx;
    });
    return svg(260, 84,
      `<rect x="${x0}" y="${top}" width="${x1 - x0}" height="${hgt}" rx="4" fill="#0e2233"/>` +
      bars +
      `<rect x="${x0}" y="${top}" width="${x1 - x0}" height="${hgt}" rx="4" fill="none" stroke="${NAVY}" stroke-width="1.5"/>` +
      // legend
      `<rect x="${x0}" y="62" width="14" height="12" fill="${YELLOW}"/>` +
      `<text x="${x0 + 20}" y="72" font-size="12" fill="currentColor">light shown</text>` +
      `<rect x="128" y="62" width="14" height="12" fill="#0e2233"/>` +
      `<text x="148" y="72" font-size="12" fill="currentColor">eclipse (dark)</text>`,
      "wide"
    );
  }

  return {
    cardinal, lateralPort, lateralStbd, isolatedDanger, safeWater, specialMark,
    lights, dayShape, rhythm,
  };
})();

if (typeof module !== "undefined") { module.exports = DIAGRAMS; }
