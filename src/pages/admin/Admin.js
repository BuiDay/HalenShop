import React from 'react';
import Home from "../../components/admin/Home/Home"
import ViewProducts from "../../components/admin/viewProducts/ViewProducts"
import AddProducts from "../../components/admin/addProducts/AddProducts"
import Order from "../../components/admin/Order/Order"
import Navbar from '../../components/admin/navbar/Navbar';
import styles from "./AdminStyle.module.scss"
import { Route, Routes } from 'react-router-dom';

const Admin = () => {
    return (
        <div className={styles.admin}>
            <div className={styles.navbar}>
            <Navbar />
            </div>
            <div className={styles.content}>
                <Routes>
                    <Route path='home' element={<Home />} />
                    <Route path='all-products' element={ <ViewProducts /> } />
                    <Route path='add-products/:id' element={ <AddProducts /> } />
                    <Route path='order-products' element={ <Order /> } />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;