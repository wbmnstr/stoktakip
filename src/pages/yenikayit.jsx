import {FaGifts, FaSave} from "react-icons/fa";

import React from 'react';

function Yenikayit(){
    return(
        <>
        <h2>Yeni Cihaz Kayıt Ekranı</h2>
        <form id="yenikayitform">
            <FaGifts class="yenikayiticon" />
                <span>Marka</span>
                <input type="text" name="marka" placeholder="Marka" autocomplete="off" />
                <span>Model</span>
                <input type="text" name="model" placeholder="Model" autocomplete="off" />
                <span>Seri Numarası</span>
                <input type="text" name="seri" placeholder="Seri Numarası" autocomplete="off" />
                <span>Temin Şekli</span>
                <input type="text" name="temin" placeholder="Temin Şekli" autocomplete="off" />
                <span>Temin tarihi</span>
                <input type="text" name="temintarihi" placeholder="Temin tarihi" autocomplete="off"/>
                <span>Garanti tarihi</span>
                <input type="text" name="garanti" placeholder="Garanti tarihi" autocomplete="off"/>
                <span>Garanti süresi</span>
                <input type="text" name="garantisuresi" placeholder="Garanti süresi" autocomplete="off"/>
            <button><FaSave /> Kaydet</button>
        </form>

        </>
    );
}

export default Yenikayit;