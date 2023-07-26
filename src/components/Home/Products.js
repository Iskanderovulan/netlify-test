import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'


const Products = ({ item }) => {

    const navigate = useNavigate()

    // const func = (e) => {
    //     e.stopPropagation()
    //     navigate('/users')
    // }
    return (
        <div onClick={() => navigate(`/details/${item.id}`)}>
            <img src={item.image} alt="" />
            {/* <button onClick={func}>asdasdas</button> */}
        </div>
    );
};

export default Products;