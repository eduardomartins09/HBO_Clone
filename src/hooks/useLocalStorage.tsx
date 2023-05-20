import { useEffect, useState } from "react";

export function useLocalStorage<T>( key: string, initialValue: T[] | (() => T)) {
    const [data, setData] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])

    return [data, setData] as [typeof data, typeof setData]
}