import Image from "next/image";

const attractions = [
  {
    name: "Karde Beach",
    emoji: "🌅",
    description: "Calm waters, dolphin rides, and a peaceful shoreline",
    distance: "2.1 km",
    image: "/images/karde.avif",
  },
  {
    name: "Palande Beach",
    emoji: "🐬",
    description: "Scenic, less crowded, and ideal for long walks",
    distance: "2.1 km",
    image: "/images/palande.jpg",
  },
  {
    name: "Anjarle Turtle Festival",
    emoji: "🐢",
    description: "Visit between February and April to witness Olive Ridley turtle hatchlings",
    distance: "2.1 km",
    image: "/images/anjarle.webp",
  },
  {
    name: "Panhalekaji Caves",
    emoji: "🏛️",
    description: "Ancient rock-cut caves ideal for history lovers",
    distance: "2.1 km",
    image: "/images/panhalekaji.jpg",
  },
  {
    name: "Suvarnadurg Fort",
    emoji: "🏰",
    description: "A sea fort accessible by boat",
    distance: "2.1 km",
    image: "/images/suvarnadurga.jpeg",
  },
  {
    name: "Murud Beach & Fishing Village",
    emoji: "🌴",
    description: "Experience the daily life of local fishermen",
    distance: "2.1 km",
    image: "/images/murud.jpg",
  },
];

export default function NearbyAttractions() {
  return (
    <section className="py-12 px-4 md:px-16 bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Nearby Attractions</h2>
      <p className="text-center text-gray-600 mb-10">
        Explore the beauty and culture of the Dapoli region with these nearby must-visit places:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((place, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative h-56 w-full">
              <Image
                src={place.image}
                alt={place.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-600">
                {place.emoji} {place.name}
              </h3>
              <p className="text-sm text-gray-600">{place.description}</p>
              {place.distance && (
                <p className="text-xs text-gray-500 mt-1">📍 {place.distance}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
