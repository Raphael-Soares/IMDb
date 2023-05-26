import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function Card({ result }) {
    return (
        <div className="cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md sm:p-3 rounded-lg sm:border sm:border-slate-300 sm:m-2 transition-shadow">
            <Link href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        result.backdrop_path || result.poster_path
                    }`}
                    alt={result.title || result.original_name}
                    width={1920}
                    height={1080}
                    layout="responsive"
                />
            </Link>
        </div>
    );
}
