import Link from 'next/link';

export default function RoomCard({ room }) {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden bg-white">
      <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{room.name}</h3>
        <Link href={`/rooms/${room.slug}`}>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
