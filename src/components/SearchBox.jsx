"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [input, setInput] = useState("");
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        if (input === "") return;
        router.push(`/search/${input}`);
    }
    return (
        <form
            className="flex flex-row max-w-6xl mx-auto justify-between items-center px-5"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Search keywords..."
                className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />

            <button disabled={!input} type="submit" className="text-amber-500 disabled:gray-400">
                Search
            </button>
        </form>
    );
}
