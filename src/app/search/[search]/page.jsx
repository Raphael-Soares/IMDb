import React from "react";
import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;
export default async function page({ params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${params.search}&page=1&include_adult=false`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch API");
    }

    const data = await res.json();
    const { results } = data;

    return (
        <div>
            {results && results.length > 0 ? (
                <Results results={results} />
            ) : (
                <h1 className="text-2xl text-center mx-auto mt-32">
                    No results found for {params.search}
                </h1>
            )}
        </div>
    );
}
