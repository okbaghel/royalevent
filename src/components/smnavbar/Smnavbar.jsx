import nav from '@/components/navbar/navbar.module.css'
import Link from 'next/link'

const Smnavbar=()=>{
    return(
        <nav className="h-[10vh]  sticky top-0   backdrop-blur z-50 ">
            <div className="ml-9 mr-9 ">
               <div className={`${nav.navcon1}  flex justify-center items-center text-center mx-auto h-[7vh]`}>

  <span  className="mx-4  hover:text-yellow-300 transition duration-300">
    <Link href="/">HOME</Link>
  </span>
  <span className="mx-4 transition duration-300">
    <Link href="/about">ABOUT US</Link>
  </span>
  <span className="mx-4  transition duration-300">
    <Link href="">PAGES</Link>
  </span>
  <span className="mx-4 texttransition duration-300">
    <Link href="">MENU</Link>
  </span>
  <span className="mx-4  transition duration-300">
    <Link href="">SERVICES</Link>
  </span>
  <span className="mx-4  transition duration-300">
    <Link href="">BLOG</Link>
  </span>
  <span className="mx-4  transition duration-300">
    <Link href="">CONTACT</Link>
  </span>
</div>
</div>
        </nav>
    )
}
export default Smnavbar;