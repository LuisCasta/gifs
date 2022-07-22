import { useEffect, useState } from "react"
import { useFetchGif } from "../Hooks/useFetchGif";
import { GitItem } from "./GitItem";

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGif(category)
    console.log('isLoading', isLoading)

    isLoading && (<h2>Cargando...</h2>)

    return (
    <>
        <div className="card-grid">
            {
                images.map( image => (
                   <GitItem
                   key={image.id} 
                   {...image}
                   />
                ))
            }
        </div>
    </>
    )
}
