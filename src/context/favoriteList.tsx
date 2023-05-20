import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Value = {
    id: number
    poster_path: string
}

export type InitValue = {
    list: Value[]
    addToList: (list: Value) => void
    removeOfList: (id: number) => void
}

type FavoriteListProviderProps = {
    children: ReactNode
}

export const FavoriteListContext = createContext({} as InitValue)

export const FavoriteListProvider = ({ children }: FavoriteListProviderProps) => {
    const [list, setList] = useLocalStorage<Value[]>("list-items", [])

    function addToList(listItem: Value) {
        setList([...list, listItem]) 
    }

    function removeOfList(listItem: number) {
        setList([...list.filter(item => item.id !== listItem)])
    }

    return (
        <FavoriteListContext.Provider value={{ list, addToList, removeOfList }}>
            {children}
        </FavoriteListContext.Provider>
    )
}

export function useList() {
    const context = useContext(FavoriteListContext)
    return context
}
