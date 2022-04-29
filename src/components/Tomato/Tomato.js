import React from 'react';
import './Tomato.css';
import $ from "jquery";
import tomato from '../../img/tomato.png';

export default function Tomato() {
    $(document).ready(function() {
        $('#orderBtn').click(function() {
            $('#close').fadeIn();
            $('#orderContainer').fadeIn();
            $('#orderContainer').css({display: 'flex'});
        });
        $('#close').click(function() {
            $(this).fadeOut('slow');
            $('#orderContainer').fadeOut();
        });
        $('#count').change(function() {
            $('#price, #currentSumBtn').text($('#count').val() * 1.2 + '₼');
          });

    });

    return (
        <div>
            <button id="close">x</button>
            <div id="imgTitlePriceDescr">
                <img src={tomato} />
                <div id="titlePriceDescr">
                    <p id="title">Pomidor</p>
                    <p id="price">1.2₼</p>
                    <p id="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum temporibus qui nesciunt doloribus officiis voluptas blanditiis atque ipsa alias exercitationem, odit, non consequatur. Cupiditate debitis animi officia itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat. Aut eum excepturi odit magni nisi vero rem enim itaque fugiat adipisci! Unde voluptas veritatis aut voluptatibus vitae omnis exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum temporibus qui nesciunt doloribus officiis voluptas blanditiis atque ipsa alias exercitationem, odit, non consequatur. Cupiditate debitis animi officia itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat. Aut eum excepturi odit magni nisi vero rem enim itaque fugiat adipisci! Unde voluptas veritatis aut voluptatibus vitae omnis exercitationemLorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum temporibus qui nesciunt doloribus officiis voluptas.</p>
                    <button id="orderBtn">Sifariş et</button>
                </div>
            </div>
            <textarea placeholder="Komment yaz" id="comment"></textarea>
            <button id="sendComment">Gondər</button>
            <div id="orderContainer"><div id="orderDiv"><div id="cardAdressDiv"><div id="cardDiv"><input placeholder="Kart nömrəsi" id="cardNumber" type="number" /><div id="cardDate"><input id="cardMonth" type="number" placeholder="AA" /><span>/</span><input placeholder="İİ" type="number" id="cardYear" /></div><input placeholder="CVV" id="cvv" type="number" /></div><div id="adressDiv"><input placeholder="Ölkə" id="country" type="text" /><input placeholder="Şəhər" id="city" type="text" /><input placeholder="Adress" id="adress" type="text" /></div></div><textarea id="orderTextarea" placeholder="Əlavə şərh"></textarea><button id="confirmBtn">Təsdiq et</button></div></div>
        </div>
    )
}
