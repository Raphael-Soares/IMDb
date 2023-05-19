import React from "react";

import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
    return (
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600 inline">
            {Icon && <Icon className="sm:hidden " />}
            <p className="hidden sm:inline md:inline lg:inline">{title}</p>
        </Link>
    );
}
