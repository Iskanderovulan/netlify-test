import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Users from './components/Users/Users';


const Views = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/details/:id' element={<Details />} />
        </Routes>
    );
};

export default Views;