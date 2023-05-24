"use client";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const currentTheme = theme === "system" ? systemTheme : theme;
    console.log(currentTheme);

    useEffect(() => setMounted(true), []);

    return (
        mounted && (
            <>
                {currentTheme === "dark" ? (
                    <MdDarkMode
                        onClick={() => setTheme("light")}
                        className="text-2xl cursor-pointer hover:text-amber-500 transition-colors duration-300"
                    />
                ) : (
                    <MdLightMode
                        onClick={() => setTheme("dark")}
                        className="text-2xl cursor-pointer hover:text-amber-500 transition-colors duration-300"
                    />
                )}
            </>
        )
    );
}
