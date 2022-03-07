import React from 'react';
import Cihazbutton from './components/cihazlar/cihazbutton'

var cihazlar = [
    "Bilgisayar", 
    "Sunucu", 
    "Laptop", 
    "Monitör",
    "Yazıcı",
    "Fotokopi makinesi",
    "Tarayıcı",
    "Tablet",
    "Tablet Yazıcısı",
    "Harici HDD",
    "KWM Switch",
    "Usb Flash Bellek",
    "Barkod okuyucu",
    "Harici DVD Okuyucu",
];

function Cihazlar() {
    return (
        <>
            <h2>Cihazlar</h2>
            {
                cihazlar.map(cihaz=>{
                    return (<Cihazbutton cihaz={cihaz} />)
                })
            }
        </>
    );
}

export default Cihazlar;