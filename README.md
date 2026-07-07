# ⚓ Day Skipper Theory Trainer

A free, self-contained web app for practising **RYA Day Skipper shorebased theory**
questions. Pick a topic or take a mixed test; every question comes with a worked
explanation. No accounts, no tracking, no backend — just open it in a browser.

**Topics covered**

- Charts & chartwork
- Compass, course & position (variation, deviation, leeway)
- Tides (springs/neaps, Rule of Twelfths, height & range, streams)
- Buoyage (IALA Region A — lateral, cardinal, isolated danger, safe water, special)
- Lights & light characteristics
- Collision regulations (IRPCS / COLREGs)
- Safety (VHF, distress, flares)
- Meteorology
- Passage planning & pilotage
- Seamanship, ropework & anchoring
- Electronic navigation
- Nautical terms

> ⚠️ **Study practice only.** Always navigate using official, up-to-date charts and
> publications. This project is not affiliated with or endorsed by the RYA.

---

## Run it locally

It's plain HTML/CSS/JS, so just open `index.html` in a browser. (Some browsers
restrict `file://` — if anything looks off, serve it locally instead:)

```bash
# from the project folder
python -m http.server 8000
# then visit http://localhost:8000
```

## Host it free on GitHub Pages

1. Create a new repository on GitHub (e.g. `dayskipper-theory`).
2. Push this folder to it (see below).
3. On GitHub go to **Settings → Pages**, set **Source: Deploy from a branch**,
   choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute your app is live at
   `https://<your-username>.github.io/dayskipper-theory/`.

```bash
git init
git add .
git commit -m "Day Skipper theory trainer"
git branch -M main
git remote add origin https://github.com/<your-username>/dayskipper-theory.git
git push -u origin main
```

## Add or edit questions

All questions live in [`questions.js`](questions.js) as a simple array. Each entry:

```js
{
  id: 61,
  category: "Tides",
  q: "Your question text?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 2,            // zero-based index of the correct option
  explain: "Why the correct answer is correct."
}
```

Add a new object to the array, save, and reload — new categories appear in the
topic menu automatically.

## Licence

MIT — free to use, modify and share.
