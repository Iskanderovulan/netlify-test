import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { API_PRODUCTS } from '../../config';
import { useNavigate } from 'react-router-dom';


const Details = () => {


    const { id } = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const getDetails = useCallback(async () => {
        // setIsLoading(true)
        try {
            const request = await fetch(`${API_PRODUCTS}/${id}`)
            const response = await request.json()

            setData(response)
            setError('')
        } catch (e) {
            // alert(e)
            console.log(e);
            setError(e.toString())
        }
        setIsLoading(false)
    }, [id])
    // getAllProducts()

    useEffect(() => {
        getDetails()
    }, [getDetails])
    // console.log(data.length > 0 ? data : 'zapros eshe ne sovershen');
    console.log(data);


    const navigateToPreviosPage = () => {
        navigate(-1)
    }

    return (
        <div>
            {error && <h2>{error}</h2>}
            {isLoading && <h2>loading...</h2>}
            <img
                width='300px'
                height='300px'
                src={data.image}
                alt=""
            />
            <p>{data.price}</p>
            <p>{data.rating?.rate}</p>
            <button onClick={navigateToPreviosPage}>to Prev</button>
        </div>
    );
};

export default Details;