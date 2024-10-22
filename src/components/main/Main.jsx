import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import main from '@/components/main/main.module.css';
import Image from 'next/image';

const Main = () => {
    return (
        <div className="ml-9 mr-9 flex justify-center items-center flex-col rounded-2xl">
            <Carousel className={`${main.slidercon}`}>
                <CarouselContent>
                    {Array.from({ length: 50 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className={`${main.slider} relative`}>
                                <Image
                                    src="/food4.jpg"
                                    className={`${main.img} object-cover`}
                                    width="1000"
                                    height="1000"
                                    alt="food"
                                />
                                {/* Overlay for quote and button */}
                                <div className="mr-11 absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
                                    <h1 className="mr-11 text-white text-5xl md:text-6xl font-semibold text-center mb-5">
                                        “Delicious food awaits!”
                                    </h1>
                                    <button className=" mr-11 relative inline-flex items-center justify-center min-w-[250px] p-3 px-8 overflow-hidden text-lg font-semibold text-gray-800 border-2 border-transparent rounded-2xl bg-gradient-to-r from-pink-300 to-orange-300 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-orange-200 group">
                                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out bg-white opacity-0 group-hover:opacity-20 rounded-lg"></span>
                                        <span className="absolute left-0 w-1 transition-all duration-300 ease-out bg-white group-hover:w-full"></span>
                                        <span className="relative z-10">Order Now</span>
                                    </button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className={`${main.con} flex flex-col justify-center items-center `}>
                <p className="text-gray-400" >Catering</p>
                <h1 className="text-4xl">Welcome to the Best</h1>
                <h1 className="text-3xl">Catering Company</h1>

            </div>
        </div>
    );
}

export default Main;
