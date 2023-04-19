import React from "react"

export const SearchContext=React.createContext()

export default function SearchContextProvider({children}){
    const [search,setsearch]=React.useState(null)
    return <SearchContext.Provider value={{search,setsearch}}>{children}</SearchContext.Provider>
}