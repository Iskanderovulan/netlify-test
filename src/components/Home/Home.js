import React, { useState, useEffect } from 'react';
import { API_PRODUCTS, API_CATEGORY } from '../../config';
import Categories from '../Categories/Categories';
import Products from './Products';


const Home = () => {

    const [data, setData] = useState([])

    const [value, setValue] = useState('')

    const handleValue = (e) => {
        setValue('category/' + e.target.value)
    }

    const getAllProducts = async (value = '') => {
        try {
            const request = await fetch(API_PRODUCTS + value)
            const response = await request.json()
            setData(response)
        } catch (e) {
            alert(e)
        }
    }
    // getAllProducts()
    console.log(value);

    useEffect(() => {
        if (value === 'category/all items') {
            // setValue('')
            getAllProducts()
        } else {
            getAllProducts(value)
        }

    }, [value])



    useEffect(() => {
        getAllProducts()
    }, [])
    // console.log(data.length > 0 ? data : 'zapros eshe ne sovershen');
    console.log(data);

    const products = data?.map(el =>
        <Products
            item={el}
            key={el.id}
        />
    )
    console.log(value);
    return (
        <div>
            <Categories
                handleValue={handleValue}
            />
            <h2>home</h2>
            {products}
        </div>
    );
};

export default Home;