import { buildFlavorText } from "@/utils/buildFlavorText"
import { useEffect, useState } from "react"

export default function CardDescription({description}: {description: string}) {

    const[flavorTexts, setFlavorTexts] = useState([])

    useEffect(() => {
        fetch(description)
        .then((res) => res.json())
        .then((json) => setFlavorTexts(json?.flavor_text_entries))
    }, [description])

    const flavorText = buildFlavorText(flavorTexts)

    return (
        <p>{flavorText}</p>
    )
}