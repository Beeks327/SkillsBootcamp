// Exercise 3 – Weather App (React via CDN, no build tools)
const { useEffect, useState } = React;

function useLocalJson() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // First, try to read inline JSON (works from file://)
    const tag = document.getElementById('weather-data');
    if (tag) {
      try {
        const parsed = JSON.parse(tag.textContent);
        setData(parsed);
        return; // success
      } catch (e) {
        setError('Could not parse inline JSON.');
      }
    }

    // Fallback: try fetching weather.json (requires running a local server)
    fetch('weather.json')
      .then(r => r.json())
      .then(setData)
      .catch(() => setError('Could not fetch weather.json (run a local server).'));
  }, []);

  return { data, error };
}

function ForecastCard({ f }){
  return (
    <div className="card">
      <div className="day">{f.day}</div>
      <div>{f.text}</div>
      <div className="range">{f.min}°C / {f.max}°C</div>
    </div>
  );
}

function App(){
  const { data, error } = useLocalJson();
  if (error) return <p className="note">{error}</p>;
  if (!data) return <p className="note">Loading…</p>;

  const { location, current, forecast } = data;
  return (
    <section className="panel" role="region" aria-label="Weather panel">
      <div className="header">
        <div className="place">{location.city}, {location.country}</div>
        <div className="now">Now • {current.condition}</div>
      </div>

      <div className="current">
        <div className="temp">{current.temp_c}°C</div>
        <div className="details">
          <div>Humidity: {current.humidity}%</div>
          <div>Wind: {current.wind_kph} kph</div>
        </div>
      </div>

      <div className="forecast">
        {forecast.map((f, i) => <ForecastCard key={i} f={f} />)}
      </div>

      <p className="note">Tip: To load from <code>weather.json</code>, run a local server (see README).</p>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
