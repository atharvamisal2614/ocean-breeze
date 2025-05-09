import Image from "next/image";

const IntroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-blue-50">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 md:mr-16">
                <Image
                    src="/images/resort.jpg" // Make sure this image exists in the public folder
                    alt="Ocean Breeze Beach Resort"
                    width={1000}
                    height={1000}
                    className="rounded-2xl shadow-lg"
                />
            </div>

            {/* Right Side - Text Content */}
            <div className="md:w-1/2 max-w-3xl space-y-6 text-center md:text-left">
                <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 text-transparent bg-clip-text">
                    A Serene Beachside Escape in the Heart of Konkan
                </h2>
                <p className="text-gray-700 text-lg text-justify">
                    Welcome to <span className="font-bold ">Ocean Breeze Beach Resort</span>, a 3-star getaway nestled in the tranquil coastal town of Dapoli, Maharashtra. Just a short walking distance from pristine Karde and Palande Beaches (2.1 km), our resort offers a perfect blend of natural beauty, comfort, and traditional Konkan hospitality.
                </p>
                <p className="text-gray-700 text-lg text-justify">
                    Whether you are planning a family vacation, a romantic retreat, or a weekend escape with friends, we provide a peaceful haven with modern amenities and a touch of Malvani culture.
                </p>
            </div>
        </section>
    );
};

export default IntroSection;
