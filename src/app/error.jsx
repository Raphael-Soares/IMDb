"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log("error");

        return () => {};
    }, [error]);

    return (
        <div className="text-center mt-10">
            <h1>Something went wrong: {error.message}</h1>
            <button
                className="hover:text-amber-500 bg-amber-300 rounded px-4 py-2  "
                onClick={() => reset()}
            >
                Reset
            </button>
        </div>
    );
}
