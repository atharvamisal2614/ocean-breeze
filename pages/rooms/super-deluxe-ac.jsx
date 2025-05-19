import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdSquareFoot, MdPeople } from "react-icons/md";
import {
  MdOutlineBedroomParent,
  MdTv,
  MdChargingStation,
  MdCleaningServices,
} from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { GiTowel, GiWaterBottle, GiPillow } from "react-icons/gi";
import { FaBath, FaWifi, FaSnowflake, FaNewspaper } from "react-icons/fa";
import { BiBlanket } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FcFilingCabinet } from "react-icons/fc";

const Cottages = () => {
  const features = [
    { icon: <BsFillTelephoneFill size={40} className="text-red-500" />, name: "Closets, Telephone" },
    { icon: <MdTv size={40} className="text-blue-500" />, name: "TV with satellite channels" },
    { icon: <FcFilingCabinet size={40} className="text-yellow-500" />, name: "Cupboard" },
    { icon: <FaBath size={40} className="text-green-500" />, name: "Private bathroom" },
    { icon: <MdChargingStation size={40} className="text-purple-500" />, name: "Seating area with charging points" },
    { icon: <GiTowel size={40} className="text-pink-500" />, name: "Blanket & Towels" },
    { icon: <FaWifi size={40} className="text-pink-500" />, name: "Paid Wifi" },
  ];

  const amenities = [
    
    { icon: <MdCleaningServices size={40} className="text-gray-700 mx-auto" />, name: "Daily Housekeeping" },
  { icon: <FaBath size={40} className="text-green-500" />, name: "Hot and Cold Water" },
  { icon: <BiBlanket size={40} className="text-pink-500" />, name: "Blanket" },
    { icon: <FaNewspaper size={40} className="text-gray-500 mx-auto" />, name: "Newspaper" },
  ];

  // Images to show below features on left
  const miniImages = [
    "/images/rooms/cottage.jpg",
    "/images/rooms/cottage.jpg",
    "/images/rooms/cottage.jpg",
  ];

  return (
    <div className="flex justify-center items-start p-5 min-h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
        {/* Left: Features + Images */}
        <div className="md:w-3/5  p-6">
          <h1 className="text-4xl text-gray-700 mb-8 font-semibold">Super Deluxe Room(AC)</h1>

          <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
            <Image
              src="/images/rooms/cottage.jpg"
              alt="Cottage Room"
              fill
              className="object-cover"
              priority
            />
          </div>

            <div className="grid grid-cols-3 gap-6">
            {miniImages.map((img, idx) => (
              <div key={idx} className="relative w-full h-32 rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`Mini Cottage Image ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold mb-6 mt-6 text-gray-700">Features</h2>
          <div className="grid grid-cols-3 gap-8 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {feature.icon}
                <p className="mt-3 text-gray-600 text-sm">{feature.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Description + Size + Amenities + Booking */}
        <div className="md:w-2/5 p-6  flex flex-col justify-between">
          <div>
            <h2 className="text-3xl mt-3 font-semibold mb-4 text-gray-700">Description</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Elevate your stay in our Super Deluxe AC Rooms featuring upgraded amenities and a refined ambiance.
            </p>

            <div className="flex flex-col gap-4 mb-6">
              
<h3 className="text-xl font-semibold  text-gray-700">Size</h3>
  <div className="flex items-center gap-3 text-red-500">
    <MdSquareFoot size={30} />
    <span className="text-gray-600 text-lg">225 sq.ft (21 sq.mt) </span>
  </div>
  <div className="flex items-center gap-3 text-green-500">
    <MdPeople size={30} />
    <span className="text-gray-600 text-lg">Occupancy: Max 4 Guests</span>
  </div>
  <div className="flex items-center gap-3 text-blue-500">
    <FaBed size={30} />
    <span className="text-gray-600 text-lg">Bed: Double Bed</span>
  </div>
</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Top Amenities</h3>
            <div className="grid grid-cols-2 gap-6">
              {amenities.map((amenity, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {amenity.icon}
                  <p className="mt-2 text-gray-600 text-center">{amenity.name}</p>
                </div>
              ))}
            </div>
          </div>

    
        </div>
      </div>
    </div>
  );
};

export default Cottages;
