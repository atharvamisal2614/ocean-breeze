import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

export default function ResortInfo() {
  return (
    <section className="bg-blue-50 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Contact Us */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            📞 Contact Us
          </h2>
          <p className="mb-3 flex items-start gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            Bhandrawada, Murud Rd, Dapoli, Maharashtra 415713
          </p>
          <p className="mb-3 flex items-start gap-2 text-gray-700">
            <FaPhoneAlt className="text-green-600 mt-1" />
            Call: <a href="tel:09404328158" className="text-blue-700 hover:underline ml-1">094043 28158</a>
          </p>
          <p className="flex items-start gap-2 text-gray-700">
            <FaEnvelope className="text-red-500 mt-1" />
            Email: <span className="ml-1">[Insert Email ID]</span>
          </p>
        </div>

        {/* Guest Reviews */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            💬 Guest Reviews
          </h2>
          <div className="bg-blue-50 p-4 rounded-lg shadow mb-4">
            <p className="text-gray-800 italic flex gap-2">
              <FaQuoteLeft className="text-gray-400 mt-1" />
              "A beautiful place close to the beach, peaceful environment and the Malvani food is just superb!"
            </p>
            <p className="text-sm font-semibold mt-2 text-right">– Priya S.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <p className="text-gray-800 italic flex gap-2">
              <FaQuoteLeft className="text-gray-400 mt-1" />
              "Lovely garden, spacious parking, and really enjoyed the indoor games with kids."
            </p>
            <p className="text-sm font-semibold mt-2 text-right">– Ramesh P.</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🔒 Why Choose Us?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaStar className="text-yellow-500 mt-1" />
              Ideal for families, couples, and group vacations
            </li>
            <li className="flex items-start gap-2">
              <FaStar className="text-yellow-500 mt-1" />
              Proximity to beautiful beaches and scenic spots
            </li>
            <li className="flex items-start gap-2">
              <FaStar className="text-yellow-500 mt-1" />
              Traditional hospitality with modern comfort
            </li>
            <li className="flex items-start gap-2">
              <FaStar className="text-yellow-500 mt-1" />
              Affordable luxury and home-like stay
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}