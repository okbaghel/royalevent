import Image from 'next/image';

const Plan = () => {
    return (
        <div className="flex flex-col min-h-[90vh] mb-11">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center min-h-[20vh]">
                <p className="text-sm uppercase tracking-widest text-gray-500">Our Services</p>
                <h1 className="text-5xl font-bold text-gray-900 mt-2">Planning a Fabulous Event?</h1>
            </div>

            {/* Main Content */}
            <div className="flex items-center justify-center w-full h-full py-10 space-x-10">
                
                {/* Left Column */}
                <div className="flex flex-col w-[30vw]">
                    <div className="m-4 p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-800">Wedding</h1>
                            <h1 className="text-4xl font-bold text-gray-300">01</h1>
                        </div>
                        <p className="mt-4 text-gray-600">On one of the most important days of your life, we provide a full catering program tailored to your needs.</p>
                    </div>
                    <div className="m-4 p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-800">Corporate Event</h1>
                            <h1 className="text-4xl font-bold text-gray-300">02</h1>
                        </div>
                        <p className="mt-4 text-gray-600">Professional event management services for successful corporate events.</p>
                    </div>
                </div>

                {/* Center Image */}
                <div className="w-[30vw] flex justify-center items-center ">
                    <div className="relative w-full h-[400px] overflow-hidden ">
                        <Image src="/bg_services.webp" layout="fill" objectFit="cover" alt="Event Image" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col w-[30vw]">
                    <div className="m-4 p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-800">Birthday Party</h1>
                            <h1 className="text-4xl font-bold text-gray-300">03</h1>
                        </div>
                        <p className="mt-4 text-gray-600">Make your birthday celebration memorable with our catering and decor services.</p>
                    </div>
                    <div className="m-4 p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-800">Private Gathering</h1>
                            <h1 className="text-4xl font-bold text-gray-300">04</h1>
                        </div>
                        <p className="mt-4 text-gray-600">Host an exclusive private gathering with personalized services that cater to all your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
