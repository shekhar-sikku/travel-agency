"use client"

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/logo.svg" alt="logo" width={74} height={29} />
            </Link>
            
            <ul className="hidden h-full gap-10 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:scale-105">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
            </div>

            <div className="inline-block lg:hidden" >
                <Image src="/menu.svg" alt="menu" width={25} height={30} onClick={() => setToggle((prev) => !prev)} className="cursor-pointer" />

                <div className={`${toggle ? 'flex' : 'hidden'} bg-gray-100 absolute top-16 right-6 p-6 my-2 min-w-[150px] 
                rounded-[10px] scale-up-center shadow-2xl z-10`}>

                    <ul className='flexCenter flex-col gap-6 p-6 regular-16 text-gray-50'>
                        {NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key} onClick={() => setToggle((prev) => !prev)} >
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;