import { FaWind, FaBellConcierge, FaBed, FaTree } from "react-icons/fa6";

const AccommodationSection = () => {
    return (
        <section className="px-6 md:px-16 py-16 bg-blue-50">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                Accommodation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <FaWind className="text-5xl text-sky-500" size={65}/>
                    <h3 className="text-lg font-bold text-blue-700">Air-conditioned Comfort</h3>
                    <p className="text-gray-800">
                        Enjoy cool, refreshing air with modern air-conditioning units and private bathrooms that offer complete convenience and privacy.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <FaBellConcierge className="text-5xl text-yellow-500" size={65}/>
                    <h3 className="text-lg font-bold text-blue-700">Room Service</h3>
                    <p className="text-gray-800">
                        Indulge in delicious meals and beverages brought right to your room, allowing you to unwind without lifting a finger.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <FaBed className="text-5xl text-pink-500" size={65}/>
                    <h3 className="text-lg font-bold text-blue-700">Elegant Interiors</h3>
                    <p className="text-gray-800">
                        Sleep peacefully in well-furnished rooms that blend modern elegance with cozy comfort for a truly relaxing stay.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <FaTree className="text-5xl text-green-600" size={65}/>
                    <h3 className="text-lg font-bold text-blue-700">Lush Gardens</h3>
                    <p className="text-gray-800">
                        Step out into beautifully maintained green gardens where nature meets serenity, perfect for a morning walk or evening tea.
                    </p>
                </div>
            </div>

            <p className="text-center text-gray-900 text-lg max-w-3xl mx-auto mt-12">
                Whether you are waking up to birdsong or relaxing with a cup of tea in your private space,<br/> <span className="font-bold text-blue-700">your comfort is our top priority</span>.
            </p>
        </section>
    );
};

export default AccommodationSection;
