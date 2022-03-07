import React from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/images/logo.png'

const Layout = () => {
    return (
        <>
            <div id='menu'>
                <div id="logo">
                    <img src={logo} alt="Bilgi Teknolojileri ve Haberleşme Şb. Md. Stok Takip Sistemi" />
                </div>
                <div id='menuheader'>stok takip</div>
                <div class="links">
                    <Link to="/" class="active">genel döküm</Link>
                    <Link to="/birimler">birimler</Link>
                    <Link to="/cihazlar">cihazlar</Link>
                    <Link to="/listeler">listeler</Link>
                    <Link to="/yenikayit">yeni kayıt</Link>
                    <Link to="/ayarlar">ayarlar</Link>
                </div>
            </div>


            <div id='content'>
                <Outlet />
            </div>
        </>
    )
};

export default Layout;