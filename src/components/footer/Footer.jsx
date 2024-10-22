import Image from "next/image"; // Make sure to import Image
import footer from '@/components/footer/footer.module.css'

const Footer = () => {
    return (
        <div className={`${footer.con}`}>
            <div className="flex flex-col justify-center items-center space-y-4">
                {/* Contact Information */}
                <div className="flex mr-11 flex-col md:flex-row justify-between items-center w-full max-w-4xl px-4">
                    <div className="flex flex-col items-center md:items-start space-y-1">
                        <p className=" text-gray-400 text-lg font-semibold">123-456-7890</p>
                        <p className="text-gray-400">yogeshbaghel09.in@gmail.com
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image src="/logo.webp" width="400" height="400" alt="Logo" />
                    </div>
                    <div className=" mr-5 flex flex-col items-center md:items-end space-y-1">
                        <p className=" text-gray-400 text-lg font-semibold">Chicago, IL 60606</p>
                        <p className="text-gray-400">123, New Lenox</p>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                </div>

                {/* Copyright Notice */}
                <div className="mt-11">
                    <p className="text-gray-400 text-sm">Yogesh Baghel  © {new Date().getFullYear()}| All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
