import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { FC } from 'react';

interface MarkerData {
  position: LatLngExpression;
  title: string;
  description: string;
}

const markers: MarkerData[] = [
  {
    position: [34.0522, -118.2437], // Los Angeles
    title: 'Collaboration',
    description: 'Fostering teamwork and synergy to achieve common goals. Our projects thrive on open communication and shared expertise.',
  },
  {
    position: [40.7128, -74.0060], // New York City
    title: 'Development',
    description: 'Providing resources and opportunities for personal and professional growth. We focus on skill-building workshops and hands-on projects.',
  },
  {
    position: [41.8781, -87.6298], // Chicago
    title: 'Leadership',
    description: 'Empowering members to take initiative and guide projects. We cultivate leadership qualities through mentorship and real-world challenges.',
  },
];

const InteractiveMap: FC = () => {
  const center: LatLngExpression = [38.9072, -94.5786]; // Centered on the US

  return (
    <div id="about" className="h-screen bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore the pillars of Growth Driven Pioneers. Click on the markers to learn more.
        </p>
      </div>
      <div className="container mx-auto h-3/4">
        <MapContainer center={center} zoom={4} scrollWheelZoom={false} className="h-full w-full rounded-lg shadow-lg">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">{marker.title}</h3>
                  <p>{marker.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default InteractiveMap;
