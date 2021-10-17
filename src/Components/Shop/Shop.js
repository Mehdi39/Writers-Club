import React from 'react';
import { useEffect, useState } from 'react'
import Header from '../Header/Header';
import Writer from '../Writer/Writer';

const Shop = () => {
    const [writers, setWriters] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./writers.JSON')
        .then(res => res.json())
        .then(data => setWriters(data))
    }, [])

    const handleSelectionBtn = (writers) => {
        const newCart = [...cart, writers]
        setCart(newCart)
    }

    return (
        <div className="">
            <div>
                <Header cart={cart}/>
            </div>
            <div className="row">
                {
                    writers.map( writer => <Writer key={writer.id} writersInfo={writer} handleSelectionBtn={handleSelectionBtn}/>)
                }
            </div>



        </div>
    );
};

export default Shop;