import { useCallback, useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Toggler = ({ size }: { size: number }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isDarkIcon, setIsDarkIcon] = useState(false);

    //Get user preferred theme
    const userTheme = () => {
        if (window) {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            return isDark;
        }
    }

    //Get theme from local storage
    const getThemeFromLocalStorage = () => {
        return localStorage.getItem("theme") || '';
    }

    //Save theme to local storage
    const saveThemeToLocalStorage = (theme: string) => {
        localStorage.setItem("theme", theme);
    }



    //Apply user preferred theme or local storage stored theme
    useEffect(() => {
        if (!getThemeFromLocalStorage()) {
            const theme = userTheme();
            setIsDarkIcon(theme ? true : false);
            theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
        } else {
            const savedTheme = getThemeFromLocalStorage();
            setIsDarkIcon(savedTheme === "light" ? false : true);
            savedTheme === "dark" ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
        }

    }, []);



    //Toggle theme
    const handleThemeToggle = useCallback(() => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            setIsDarkIcon(true);
            document.documentElement.classList.add('dark');
            saveThemeToLocalStorage("dark");
        } else {
            setIsDarkIcon(false);
            document.documentElement.classList.remove('dark');
            saveThemeToLocalStorage("light")
        }
    }, [isDarkMode]);



    return (
        <DarkModeSwitch
            checked={isDarkIcon}
            onChange={handleThemeToggle}
            size={size}
        />
    )
}

export default Toggler