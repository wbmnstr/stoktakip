import React from 'react';
import Birimbutton from './components/birimler/birimbutton'

var merkezbirimler = [
    "Asayiş", "Bilgi Teknolojileri", "Güvenlik", "Olay Yeri",
    "Personel", "Özel Kalem", "Özel Güvenlik",
];

var ilcebirimler=[
    "Alaca", "Bayat", "Boğazkale", "Dodurga", "İskilip", 
    "Laçin", "Kargı", "Mecitözü", "Oğuzlar", "Ortaköy", 
    "Osmancık", "Sungurlu", "Uğurludağ",
];

var digerbirimler=[ "Depo", "Hek" ];

function Birimler() {
    return (
        <>
        <h2>Merkez Birimler</h2>
        {
            merkezbirimler.map(birim=>{
                return (<Birimbutton birim={birim} />)
            })
        }
        <h2>İlçe Birimleri</h2>
        {
            ilcebirimler.map(birim=>{
                return (<Birimbutton birim={birim} />)
            })
        }
        <h2>Diğer Birimler</h2>
        {
            digerbirimler.map(birim=>{
                return (<Birimbutton birim={birim} />)
            })
        }
        </>
    );
}

export default Birimler;