import React from 'react';
import './Vertu.css';
import vertu from '../../img/vertu.png';
import $ from "jquery";

export default function Potato() {
    

    $(document).ready(function() {
        $('#orderBtn').click(function() {
            $('body').append('<div id="orderContainer"><div id="orderDiv"><div id="closeBtn">x</div></div></div>');
            $("#orderContainer").css({width: '100%'}).css({height: '100vh'}).css({background: 'rgba(136, 227, 160, 0.6)'}).css({position: 'fixed'}).css({zIndex: '2021'}).css({top: '0'}).css({transition: '0.6s'}).css({display: 'flex'}).css({justifyContent: 'center'}).css({alignItems: 'center'});
        })
    });
    
    return (
        <div>
            <div id="imgTitlePriceDescr">
                <img src={vertu} />
                <div id="titlePriceDescr">
                    <p id="title">Vertu</p>
                    <p id="price">Mövcud deyil</p>
                    <p id="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum temporibus qui nesciunt doloribus officiis voluptas blanditiis atque ipsa alias exercitationem, odit, non consequatur. Cupiditate debitis animi officia itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat. Aut eum excepturi odit magni nisi vero rem enim itaque fugiat adipisci! Unde voluptas veritatis aut voluptatibus vitae omnis exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum temporibus qui nesciunt doloribus officiis voluptas blanditiis atque ipsa alias exercitationem, odit, non consequatur. Cupiditate debitis animi officia itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat. Aut eum excepturi odit magni nisi vero rem enim itaque fugiat adipisci! Unde voluptas veritatis aut voluptatibus vitae omnis exercitationemLorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum temporibus qui nesciunt doloribus officiis voluptas.</p>
                    
                </div>
            </div>
            <textarea placeholder="Komment yaz" id="comment"></textarea>
            <button id="sendComment">Gondər</button>
        </div>
    )
}
