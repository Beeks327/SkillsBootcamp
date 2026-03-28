# Exercise 3 – Weather App (React via CDN)

Two ways to load data:

1) **Open index.html directly** → Uses inline JSON inside a `<script type="application/json">` tag.
2) **From `weather.json`** → Requires a local server (browsers block `fetch` from `file://`).

### Run a quick local server (pick one):
- Python 3: `python -m http.server 5173`
- Node (npx): `npx serve .`

Then browse to the folder and open `index.html`.

When you’re ready to use a real API later, add `useEffect` with `async/await` to fetch from a weather API endpoint.
