import React, { useState, useEffect } from 'react';
import './Cart.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {useAppContext} from "../../context/providers/app.provider";
import $, { type } from 'jquery';

import potato from '../../img/potato.png';
import tomato from '../../img/tomato.png';
import onion from '../../img/onion.png';
import cabbage from '../../img/cabbage.png';
import carrot from '../../img/carrot.png';
import broccoli from '../../img/broccoli.png';
import apple from '../../img/apple.png';
import peach from '../../img/peach.png';
import pear from '../../img/pear.png';
import pineapple from '../../img/pineapple.png';
import galaxys21 from '../../img/galaxys21.png';
import iphone12 from '../../img/iphone12.png';
import iphone12pro from '../../img/iphone12pro.png';
import mi9 from '../../img/mi9.png';
import mi10 from '../../img/mi10.png';
import vertu from '../../img/vertu.png';
import lenovol340 from '../../img/lenovol340.png';
import acerswift5 from '../../img/acerswift5.png';
import hppavilionx360 from '../../img/hppavilionx360.png';
import shoes from '../../img/shoes.png';
import jeans from '../../img/jeans.png';
import dress from '../../img/dress.png';
import glasses from '../../img/glasses.png';
import cap from '../../img/cap.png';
import hoody from '../../img/hoody.png';
import shorts from '../../img/shorts.png';
import tshirt from '../../img/tshirt.png';
import chair from '../../img/chair.png';
import table from '../../img/table.png';
import floorlamp from '../../img/floorlamp.png';
import cupboard from '../../img/cupboard.png';
import armchair from '../../img/armchair.png';
import sofa from '../../img/sofa.png';
import scooter from '../../img/scooter.png';
import segway from '../../img/segway.png';
import electrocar from '../../img/electrocar.png';
import cubes from '../../img/cubes.png';
import stroller from '../../img/stroller.png';

const Cart = () => {
  const [total, setTotal] = useState(0.00);
  const [appState, dispatch] = useAppContext();
  const { cart } = appState;
  
  useEffect(() => {
    setTotal(cart.map(i => total + i.price * i.quantity));
  }, []);
  $('#cart #currentSumBtn').text(cart.map(i => total + i.price * i.quantity));
  $('.totalBtn').click(function() {
    $('#close').fadeIn();
    $('#orderContainer').fadeIn();
    $('#orderContainer').css({display: 'flex'});
  });
  $('#close').click(function() {
      $(this).fadeOut('slow');
      $('#orderContainer').fadeOut();
  });
  $('#count').change(function() {
    $('#price, #currentSumBtn').text($('#count').val() * 1.5 + '₼');
  });
  $('#currentSumBtnCart').text(0);
    return (
        <div id="cart">
          <button id="close">x</button>
          <button className="totalBtn"><span className="totalSum">{total}</span><span className="cartManatSymbol">₼</span> Təstiq et</button>
          {cart.length && cart.map((item, i) => {
            const {id, price, src, title, quantity} = item;
           return <div className="cartContainer">
            <img src={src} alt=""/>
            <Link to="/potato" target="_blank"><p className="cartTitle">{title}</p></Link>
            <p className="cartPrice">{price}</p><span className="cartManatSymbol">₼</span>
            <p className="cartQuantity">x<span className="cartQuantitySpan">{quantity}</span></p>
          </div>
          })}
          <div id="orderContainer"><div id="orderDiv"><div id="cardAdressDiv"><div id="cardDiv"><input placeholder="Kart nömrəsi" id="cardNumber" type="number" /><div id="cardDate"><input id="cardMonth" type="number" placeholder="AA" /><span>/</span><input placeholder="İİ" type="number" id="cardYear" /></div><input placeholder="CVV" id="cvv" type="number" /></div><div id="adressDiv"><input placeholder="Ölkə" id="country" type="text" /><input placeholder="Şəhər" id="city" type="text" /><input placeholder="Adress" id="adress" type="text" /></div></div><textarea id="orderTextarea" placeholder="Əlavə şərh"></textarea><button id="confirmBtnCart"></button></div></div>
        </div>
    )
}

export default Cart;
