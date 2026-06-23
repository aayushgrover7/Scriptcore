import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const COORDS = {
  'South Windsor, CT': [41.839, -72.589],
  'Glastonbury, CT':   [41.703, -72.608],
  'Shrewsbury, MA':    [42.295, -71.719],
  'Rockville, MD':     [39.084, -77.153],
}

function markerIcon(isHome) {
  const color = isHome ? '#22d3ee' : '#818cf8'
  return L.divIcon({
    html: `<div style="
      width:16px;height:16px;border-radius:50%;
      background:${color};
      border:2.5px solid #fff;
      box-shadow:0 0 0 3px ${color}55, 0 2px 6px rgba(0,0,0,0.5);
    "></div>`,
    className: '',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -12],
  })
}

export default function ChapterMap({ chapters }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10" style={{ height: 420 }}>
      <MapContainer
        center={[41.2, -74.2]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={19}
        />
        {chapters.map((c) => {
          const pos = COORDS[c.name]
          if (!pos) return null
          return (
            <Marker key={c.name} position={pos} icon={markerIcon(c.home)}>
              <Popup>
                <strong>{c.name}</strong>
                {c.home && <><br /><span>Home Base</span></>}
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}
