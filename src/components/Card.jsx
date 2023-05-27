import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
    return (
        <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md sm:p-3 rounded-lg sm:border sm:border-slate-300 sm:m-2 transition-shadow">
            <Link href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
                    alt={result.title || result.original_name}
                    width={500}
                    height={300}
                    className="sm:rounded-t-md group-hover:opacity-75 transition-opacity"
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            </Link>

            <div className="p-2">
                <p className="line-clamp-2 text-md">{result.overview}</p>
                <h2 className="truncate text-lg font-bold">
                    {result.title || result.original_name}
                </h2>
                <p className="flex items-center">
                    {result.release_date || result.first_air_date}
                    <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
                </p>
            </div>
        </div>
    );
}
