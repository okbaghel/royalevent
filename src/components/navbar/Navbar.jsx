import Link from "next/link";
import Image from "next/image";
import nav from '@/components/navbar/navbar.module.css';
import Smnavbar from "../smnavbar/Smnavbar";



const Navbar=()=>{
    return(
        <>
        <Smnavbar/>
        <nav className="h-[10vh]  z-10 relative ">
           
            <div className="ml-9 mr-9   ">
               
                <div className="h-[13vh] flex justify-center ">

                  {/* <div className={`${nav.navcon21}`}>
                    <p>Address</p>
                    <p>78676878778</p>
                  </div> */}
                  <div>
                    <div className={`${nav.circle }`}>
                        <Image src="/logo.webp" width="500" height="500"/>
                    </div>
                  </div>
                  {/* <div>
                    <h1>Your Cart</h1>
                  </div> */}
                </div>
            </div>

        </nav>
        </>
    )

}
export default Navbar;