import React from "react"

export const SearchContext=React.createContext()

export default function SearchContextProvider({children}){
    const [search,setsearch]=React.useState([])
    return <SearchContext.Provider value={{search,setsearch}}>{children}</SearchContext.Provider>
}