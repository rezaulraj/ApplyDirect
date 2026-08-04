import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Where the talent comes from
const asiaSources = [
  { name: "India", coordinates: [78.9, 20.6] },
  { name: "Philippines", coordinates: [122.9, 12.9] },
  { name: "Nepal", coordinates: [84.1, 28.4] },
];

// Where the talent is placed
const europeDestinations = [
  { name: "Croatia", coordinates: [15.98, 45.6] },
  { name: "Romania", coordinates: [24.9, 45.9] },
  { name: "Serbia", coordinates: [20.9, 44.2] },
];

const highlighted = new Set([
  "India",
  "Philippines",
  "Nepal",
  "Croatia",
  "Romania",
  "Serbia",
  "Germany",
]);

export default function GlobalMap() {
  const introRef = useReveal("fade");
  const mapRef = useReveal("scale");
  const sectionRef = useShrinkOnScroll();

  return (
    <section className="full-section" ref={sectionRef}>
      <div className="container section-inner">
        <div ref={introRef} className="reveal">
          <div className="eyebrow-tag" style={{ color: "var(--accent)" }}>
            Global Reach
          </div>
          <h2 className="section-title">Asian talent, placed across Europe</h2>
          <p className="section-sub">
            Our strongest corridor moves skilled professionals from South and Southeast Asia into
            fast-growing European markets.
          </p>
        </div>

        <div ref={mapRef} className="map-wrap reveal">
          <ComposableMap projectionConfig={{ scale: 155, center: [40, 15] }} width={980} height={480}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = highlighted.has(geo.properties.name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? "rgba(0,194,168,0.35)" : "rgba(255,255,255,0.06)"}
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill: "rgba(0,194,168,0.45)" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {asiaSources.map((from) =>
              europeDestinations.map((to) => (
                <Line
                  key={`${from.name}-${to.name}`}
                  from={from.coordinates}
                  to={to.coordinates}
                  stroke="var(--accent)"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeOpacity={0.45}
                  strokeDasharray="1 4"
                />
              ))
            )}

            {asiaSources.map((city) => (
              <Marker key={city.name} coordinates={city.coordinates}>
                <circle r={5} className="dot" />
                <circle r={5} className="dot pulse" />
              </Marker>
            ))}
            {europeDestinations.map((city) => (
              <Marker key={city.name} coordinates={city.coordinates}>
                <circle r={5} fill="var(--secondary)" />
                <circle r={5} fill="var(--secondary)" className="pulse" />
              </Marker>
            ))}
          </ComposableMap>

          <div className="map-stat glass-dark" style={{ top: "8%", left: "5%" }}>
            <strong>3</strong> Sourcing Regions in Asia
          </div>
          <div className="map-stat glass-dark" style={{ bottom: "6%", right: "5%" }}>
            <strong>3</strong> Destination Markets in Europe
          </div>
        </div>
      </div>
    </section>
  );
}
