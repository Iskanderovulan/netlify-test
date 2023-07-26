import React, { useState, useEffect, useCallback } from 'react';
import { API_CATEGORIES } from '../../config';

const Categories = ({ handleValue }) => {

    const [data, setData] = useState([])

    const getCategories = useCallback(async () => {

        try {
            const request = await fetch(API_CATEGORIES)
            const response = await request.json()
            setData(['all items', ...response])

        } catch (e) {
            alert(e)
        }

    }, [])
    console.log(data);
    // getAllProducts()

    useEffect(() => {
        getCategories()
    }, [getCategories])



    return (
        <select
            onChange={handleValue}
            name="CHOOSE CATEGORY"
        >
            {data?.map(el => {
                return (
                    <option key={el}>{el}</option>
                )
            })}
        </select>
    );
};

export default Categories;