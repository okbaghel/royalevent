import Image from 'next/image';

const Card = () => {
    return (
        <div className="w-full flex justify-center items-center space-x-4">
            {/* Card 1 */}
            <div className="relative group w-[30vw] h-[50vh] overflow-hidden rounded-lg shadow-lg">
                <Image 
                    src="/events.jpg" 
                    alt="Food" 
                    layout="fill" 
                    objectFit="cover" 
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <h3 className="text-white text-lg">Events</h3>
                </div>
            </div>

            {/* Card 2 */}
            <div className="relative group w-[30vw] h-[50vh] overflow-hidden rounded-lg shadow-lg">
                <Image 
                    src="/food.jpg" 
                    alt="Food" 
                    layout="fill" 
                    objectFit="cover" 
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <h3 className="text-white text-lg">Veg Foodie</h3>
                </div>
            </div>

            {/* Card 3 */}
            <div className="relative group w-[30vw] h-[50vh] overflow-hidden rounded-lg shadow-lg">
                <Image 
                    src="/food2.jpg" 
                    alt="Food" 
                    layout="fill" 
                    objectFit="cover" 
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-110" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <h3 className="text-white text-lg">Venues</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;
