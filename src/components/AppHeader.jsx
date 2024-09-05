import React from "react"
import { useTheme } from "../../context/ThemeContext"

export default function AppHeader() {
    const { theme } = useTheme()

    return (
        <header>
            <img
                className="logo"
                // src="/logo.svg"
                src={theme === "dark" ? "/logoDarkMode.png" : "/logo.svg"}
                alt="Weather app logo"
                aria-label="Weather app logo"
            />

        </header>
    )
}
