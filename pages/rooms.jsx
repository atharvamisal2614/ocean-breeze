import React from 'react';
import Link from 'next/link';

const roomsData = [
  {
    name: 'Cottage',
    path: '/rooms/cottage',
    img: '/images/rooms/cottage.jpg'
  },
  {
    name: 'Deluxe Room (Non-AC)',
    path: '/rooms/deluxe-nonac',
    img: '/images/rooms/deluxe-room.jpeg'
  },
  {
    name: 'Deluxe Room (AC)',
    path: '/rooms/deluxe-ac',
    img: '/images/rooms/deluxe-room.jpeg'
  },
  {
    name: 'Super Deluxe Room (AC)',
    path: '/rooms/super-deluxe-ac',
    img: '/images/rooms/super-deluxe-room.jpeg'
  },
  {
    name: 'Dormitory (Non AC)',
    path: '/rooms/dormitory-nonac',
    img: '/images/rooms/dormitory.avif'
  },
  {
    name: 'Dormitory (AC)',
    path: '/rooms/dormitory-ac',
    img: '/images/rooms/dormitory.avif'
  },

];

export default function RoomsList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Rooms & Accommodation</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roomsData.map((room, index) => (
          <Link href={room.path} key={index}>
            <div className="rounded-xl shadow-md overflow-hidden hover:scale-105 transition cursor-pointer">
              <img src={room.img} alt={room.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center font-semibold">{room.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}