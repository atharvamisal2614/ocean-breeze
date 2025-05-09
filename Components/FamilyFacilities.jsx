import Image from "next/image";

const FamilyFacilities = () => {
    return (
        <section className="px-6 md:px-16 py-16 bg-blue-50">
            <div className="flex flex-row justify-between gap-8 items-start">
                {/* Left Side: Title + Two Cards */}
                <div className="w-[60%]">
                    {/* Family-Friendly Title */}
                    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-left">
                        Family-Friendly Facilities
                    </h2>

                    <div className="grid grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white shadow-xl rounded-xl  h-[360px] flex flex-col">
                            <Image
                                src="/images/play-area.jpg"
                                alt="Kids Play Area"
                                width={500}
                                height={300}
                                className="rounded-md w-full h-2/3 object-cover"
                            />
                            <h3 className="text-xl font-bold text-blue-700 text-center mt-4">Kids' Play Area</h3>
                            <p className="text-gray-800 mt-2 text-center">
                                Let your children have fun and stay active in our safe and engaging play zone, filled with joy and color.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-xl rounded-xl  h-[360px] flex flex-col">
                            <Image
                                src="/images/chess.jpg"
                                alt="Indoor Games"
                                width={500}
                                height={300}
                                className="rounded-md w-full h-2/3 object-cover"
                            />
                            <h3 className="text-xl font-bold text-blue-700 mt-4 text-center">Indoor Games</h3>
                            <p className="text-gray-800 mt-2 text-center">
                                Enjoy quality time with family and friends with a variety of indoor games available at the resort.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vertical Line */}
                <div className="h-[410px] w-[2px] bg-black rounded-full mt-10"></div>

                {/* Right Side: Title + Pool Card */}
                <div className="w-[40%]">
                    {/* Upcoming Attractions Title */}
                    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-left">
                        Upcoming Attractions
                    </h2>

                    <div className="bg-white shadow-xl rounded-xl  h-[360px] flex flex-col">
                        <Image
                            src="/images/swimming-pool.jpg"
                            alt="Swimming Pool Coming Soon"
                            width={600}
                            height={350}
                            className="rounded-md w-full h-2/3 object-cover"
                        />
                        <h3 className="text-xl font-bold text-blue-700 mt-4 text-center">Swimming Pool (Coming Soon)</h3>
                        <p className="text-gray-800 mt-2 text-center">
                            We're excited to announce that a refreshing swimming pool is under development — perfect for a dip under the sun!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FamilyFacilities;
