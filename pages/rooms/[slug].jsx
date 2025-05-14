import { useRouter } from 'next/router';
import rooms from '@/data/rooms';

export default function RoomDetail() {
  const { query } = useRouter();
  const room = rooms.find((r) => r.slug === query.slug);

  if (!room) return <p className="text-center mt-10">Room not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img src={room.image} alt={room.name} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h2 className="text-3xl font-bold mb-4">{room.name}</h2>
      <p className="mb-6 text-gray-600">{room.description}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">Room Details:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Size:</strong> {room.size}</li>
            <li><strong>Occupancy:</strong> {room.occupancy}</li>
            <li><strong>Bed:</strong> {room.bed}</li>
            {room.view && <li><strong>View:</strong> {room.view}</li>}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Features:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {room.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">Popular Amenities:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {room.amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
