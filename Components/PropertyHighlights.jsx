import Image from "next/image";

const PropertyHighlights = () => {
    return (
        <section className="px-6 md:px-16 py-16 bg-blue-50">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                Property Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Card 1 - Beautifully Painted Property */}
                <div className="flex flex-col items-center bg-white h-96 rounded-lg shadow-lg">
                    <Image
                        src="/images/painted-properties.jpg" // Replace with your image path
                        alt="Beautifully Painted Property"
                        width={300}
                        height={200}
                        className="w-full h-2/3 object-cover rounded-t-lg"
                    />
                    <h3 className="text-lg font-bold text-blue-700 mt-4">
                        Beautifully Painted Property
                    </h3>
                    <p className="text-gray-800 text-center mt-2">
                        The walls and spaces of the resort are adorned with colorful and artistic paintings.
                    </p>
                </div>

                {/* Card 2 - Walking Distance to Beach */}
                <div className="flex flex-col items-center bg-white h-96 rounded-lg shadow-lg">
                    <Image
                        src="/images/beach-walk.jpg" // Replace with your image path
                        alt="Walking Distance to Beach"
                        width={300}
                        height={200}
                        className="w-full h-2/3 object-cover rounded-t-lg"
                    />
                    <h3 className="text-lg font-bold text-blue-700 mt-4">
                        Walking Distance to Beach
                    </h3>
                    <p className="text-gray-800 text-center mt-2">
                        Enjoy quick access to Karde and Palande Beaches, known for their clean sand.
                    </p>
                </div>

                {/* Card 3 - Ample Parking */}
                <div className="flex flex-col items-center bg-white h-96 rounded-lg shadow-lg">
                    <Image
                        src="/images/parking.avif" // Replace with your image path
                        alt="Ample Parking"
                        width={300}
                        height={200}
                        className="w-full h-2/3 object-cover rounded-t-lg"
                    />
                    <h3 className="text-lg font-bold text-blue-700 mt-4">
                        Ample Parking
                    </h3>
                    <p className="text-gray-800 text-center mt-2">
                        We offer a huge parking space for cars, making it convenient for all guests.
                    </p>
                </div>

                {/* Card 4 - Garden Area */}
                <div className="flex flex-col items-center bg-white h-96 rounded-lg shadow-lg">
                    <Image
                        src="/images/garden.jpg" // Replace with your image path
                        alt="Garden Area"
                        width={300}
                        height={200}
                        className="w-full h-2/3 object-cover rounded-t-lg"
                    />
                    <h3 className="text-lg font-bold text-blue-700 mt-4">
                        Garden Area
                    </h3>
                    <p className="text-gray-800 text-center mt-2">
                        Relax amidst lush greenery and take peaceful walks within our well-maintained garden.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PropertyHighlights;
