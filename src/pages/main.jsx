import React from 'react';
import Dokumcard from './components/geneldokum/dokumcard';
import { FaHdd, FaLaptop, FaDesktop, FaPrint, FaEdit, FaCopy, FaMobile } from "react-icons/fa";

function Main() {
    return (
        <>
            <h2>Genel Döküm</h2>
            <div id="geneldokum">
                <Dokumcard icon={<FaHdd />} header="Bilgisayar" amount="1200" />
                <Dokumcard icon={<FaLaptop />} header="Laptop" amount="232" />
                <Dokumcard icon={<FaDesktop />} header="Monitör" amount="987" />
                <Dokumcard icon={<FaPrint />} header="Yazıcı" amount="566" />
                <Dokumcard icon={<FaEdit />} header="Fotokopi" amount="45" />
                <Dokumcard icon={<FaCopy />} header="Tarayıcı" amount="321" />
                <Dokumcard icon={<FaMobile />} header="Tablet" amount="220" />
            </div>
        </>
    );
}

export default Main;