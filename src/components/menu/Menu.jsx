import Image from "next/image";
import menu from "@/components/menu/menu.module.css";
import main from '@/components/main/main.module.css'
import Menucard from "../menucard/Menucard";

const Menu = () => {
  return (
    <div className="flex flex-col m-11 rounded-2xl">
      {/* Hero Section */}
      <div className="relative group rounded-2xl h-[60vh]">
        <Image
          src="/success.jpg"
          alt="Food"
          fill  // Replacing layout="fill" with fill
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-100 bg-black bg-opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <p className="text-white">About Us</p>
          <h1 className="text-white text-4xl font-semibold text-center">
            Our Story of
          </h1>
          <h1 className="text-white text-4xl">Success!</h1>
        </div>
      </div>

      {/* History Section */}
      <div className={`${menu.menucon1}`}>
        <div className={`${menu.menucon2}`}>
          <div className={`${menu.incon1}`}>
            <Image
              src="/food.jpg"
              width={1000}
              height={1000}
              objectFit="contain"
              className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"  // Slightly increasing the scale for hover
              alt="Pic"
            />
          </div>
          <div className="flex justify-center items-center w-[50%]">
            <div className="flex flex-col justify-center p-11 items-center ">
              <h1 className="text-2xl mb-6">A Perfect Blend  Inspiring Ideas and Professional Staff</h1>
              <p>1997  Silver service is oriented for  left hand, and serves the food with their right hand. It is common for the waiter to hold the serving-fork above the serving-spoon both in the right hand, and use the fingers to manipulate the two as a pincer for picking up and transferring the food.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${main.con} flex flex-col justify-center items-center `}>
                <p className="text-gray-400" >Catering</p>
                <h1 className="text-4xl">Our Menu</h1>

            </div>

        {/* cards */}
        <div className="flex justify-center items-center gap-2">
          <Menucard params="Canapes"/>
          <Menucard  params="Small Plates"/>
          <Menucard params="Sweets"/>
          <Menucard params="Drinks"/>
        </div>

        <div className="flex flex-col justify-center items-center gap-4  p-8 ">
  <p className="text-xl font-medium text-gray-700 text-center">
    and much more sensational food & drinks...
  </p>
  <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:from-blue-500 hover:to-green-400 focus:outline-none focus:ring-4 focus:ring-blue-300">
    View Full Menu
  </button>
</div>

    </div>

   
    
  );
};

export default Menu;
