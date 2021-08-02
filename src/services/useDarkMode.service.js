import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../store/theme/theme.context'


export const useDarkMode = () => {

    const { darkMode } = useContext(ThemeContext)

    useEffect(() => {
        const root = window.document.documentElement
        if (darkMode) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [darkMode])

}
