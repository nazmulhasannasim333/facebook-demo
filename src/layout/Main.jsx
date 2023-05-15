import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollRestoration />
        </div>
    );
};

export default Main;