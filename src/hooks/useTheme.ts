import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    // Change the theme in React, in HTML, and in localStorage
    const applyTheme = (value: Theme) => {
        setTheme(value);
        document.documentElement.setAttribute('data-theme', value);
        localStorage.setItem('theme', value);
    };

    useEffect(() => {
        const stored = localStorage.getItem('theme') as Theme | null;
        if (stored) {
            applyTheme(stored);
            return;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        applyTheme(theme === 'dark' ? 'light' : 'dark');
    };
 console.log(localStorage.getItem('theme'))
    return { theme, toggleTheme };
};