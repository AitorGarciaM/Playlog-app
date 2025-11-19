import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme/theme";

export const useTheme = () => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);

        const root = document.documentElement;
        Object.entries(newTheme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
        });
    };

    useEffect(() => {
        toggleTheme();
    }, []);

    return { theme, toggleTheme };
};