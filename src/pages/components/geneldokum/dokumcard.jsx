import React from 'react';


export default function Dokumcard(props){
    return(
        <div class="dokumcard">
                <span class="dokumicon">{props.icon}</span>
                <span class="dokumheader">{props.header}</span>
                <span class="dokumamount">{props.amount}</span> 
            </div>
    );
}