import Link from 'next/link'
import Image from "next/image";

const Menucard = ({params}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-7 bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 w-[250px]">
      {/* Image Container */}
      <div className="relative w-64 h-48 overflow-hidden gap-5  ">
        <Image
          src="/food.jpg"
          alt="Canapas"
          fill
          objectFit="contain"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>

      {/* Text Content */}
      <div className="text-center ">
       <Link href="#"><p className="text-2xl font-semibold text-gray-700">{params}</p></Link>
      </div>

    
     
    </div>

  );
};

export default Menucard;

