import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Purch'])

    const onAddCategorie = (newCategory) => {
        
        if(categories.includes(newCategory)) return;

        setCategories([newCategory,...categories])

    }
    return (
        <>
            <h1>React Gif</h1>    

            <AddCategory
                onNewCategory={onAddCategorie}
            />
            {
                categories.map(category => (
                    <GifGrid category={category} key={category}/>
                ))
            }
                
        </>

  )
}
