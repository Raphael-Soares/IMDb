import React from "react";
import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";

function Header() {
    return (
        <header className="flex flex-row justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6">
            <div className="flex flex-row">
                <MenuItem title="Home" address="/" Icon={AiFillHome} />
                <MenuItem title="About" address="/about" Icon={AiFillInfoCircle} />
            </div>
            <div className="">
                <Link href="/">
                    <h2 className="text-2xl inline gap-1">
                        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
                        <span className="text-xl ">Clone</span>
                    </h2>
                </Link>
            </div>
        </header>
    );
}

export default Header;
