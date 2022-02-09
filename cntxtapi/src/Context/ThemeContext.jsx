import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) =>{
    const [Theme,setTheme] = useState(0);
const ToggleTheme = (v)=>{
    setTheme(v + 1);
}
    return (
    <ThemeContext.Provider value = {Theme, ToggleTheme}>{children}</ThemeContext.Provider>
    )
}