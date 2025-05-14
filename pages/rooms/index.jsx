import rooms from '@/data/rooms';
import RoomCard from '@/components/RoomCard';

export default function RoomsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Rooms & Accommodation at Ocean Breeze Beach Resort</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Relax, unwind, and feel at home with our wide range of thoughtfully designed rooms and cottages. Whether you're a solo traveler, couple, family, or a large group, we offer accommodations to suit every need and budget — all nestled close to the serene shores of Karde and Palande beaches.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <RoomCard key={room.slug} room={room} />
        ))}
      </div>
    </div>
  );
}
