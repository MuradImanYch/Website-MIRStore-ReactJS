import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Home.css';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import $ from 'jquery';

import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';
import slide4 from '../../img/slide4.jpg';
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
import sale1 from '../../img/sale1.jpg';
import sale2 from '../../img/sale2.jpg';
import sale3 from '../../img/sale3.jpg';
import ItemComponent from "../item/item.component";


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            food: {
                goods: ['Kartof', 'Pomidor', 'Soğan', 'Kələm', 'Kök', 'Brokkoli', 'Alma', 'Ərik', 'Armud', 'Ananas'],
                price: [1.5, 1.2, 0.3, 0.7, 0.8, 0.65, 1, 0.8, 1, 1.8]
            },
            electronics: {
                goods: ['Galaxy S21', 'Iphone 12', 'Iphone 12 pro', 'Mi 9', 'Mi 10', 'Vertu', 'Lenovo L340', 'Acer Swift 5', 'HP Pavilion X360'],
                price: [2100, 2300, 3550, 950, 1250, '-', 1100, 1500, 1000]
            },
            clothers: {
                goods: ['Ayaqqabı', 'Cins', 'Don', 'Eynək', 'Papaq', 'Hoody', 'Şortlar', 'T-shirt'],
                price: [65, 45, 90, 12, 2, 20, 25, 10]
            },
            furniture: {
                goods: ['Oturacaq', 'Masa', 'Tarşer', 'Şkaf', 'Kreslo', 'Divan'],
                price: [20, 30, 30, 80, 90, 150]
            },
            forChildren: {
                goods: ['Skuter', 'Segway', 'Elektromaşın', 'Kubiklər', 'Araba'],
                price: [29, 120, 200, 5,  25]
            }
        }
    }


    componentDidMount = () => {
        $('.counter').hide();
      $('#sale1').mouseenter(function() {
        $('.counter').eq(0).fadeIn();
      });
      $('#sale1').mouseleave(function() {
        $('.counter').eq(0).fadeOut();
      });
      $('#sale2').mouseenter(function() {
        $('.counter').eq(1).fadeIn();
      });
      $('#sale2').mouseleave(function() {
        $('.counter').eq(1).fadeOut();
      });
      $('#sale3').mouseenter(function() {
        $('.counter').eq(2).fadeIn();
      });
      $('#sale3').mouseleave(function() {
        $('.counter').eq(2).fadeOut();
      });
      
    }

    render() {

        return (
            <div>
                <BrowserRouter>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true, dynamicBullets: true, }}
                    navigation
                    autoplay={{stopOnLastSlide: false, disableOnInteraction: false}}
                  >
                    <SwiperSlide>
                      <div className="imgDiv1">
                        <img width="100%" src={slide1} alt=""/>
                        <h2 id="slider1Text">Mir store - yə xoş gəlmisiniz <span id="earq">EVDƏN AL RAZI QAL</span> hər növ məsulları var</h2></div></SwiperSlide>
                    <SwiperSlide><div className="imgDiv1"><img width="100%" src={slide2} alt=""/><h2 id="slider2Text">Azərbaycanın gözəl güşələrindən meyvə və tərəvəzləri</h2></div></SwiperSlide>
                    <SwiperSlide><div className="imgDiv1"><img width="100%" src={slide3} alt=""/><h2 id="slider3Text">Dünya moda aləminin dəbli geimləri</h2></div></SwiperSlide>
                    <SwiperSlide><div className="imgDiv1"><img width="100%" src={slide4} alt=""/><h2 id="slider4Text">Hər növ elektonika avadanığlar</h2></div></SwiperSlide>
                </Swiper>

                <h3 id="foodTitle">Qida məhsulları</h3>
                <hr/>
                <Swiper className="goodsSlider"
                    spaceBetween={50}
                    slidesPerView={4.3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    >
                    <SwiperSlide><Link to="/potato" target="_blank">
                      <ItemComponent id={92} price={this.state.food.price[0]} title={this.state.food.goods[0]} src={potato} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/tomato" target="_blank">
                      <ItemComponent id={93} price={this.state.food.price[1]} title={this.state.food.goods[1]} src={tomato} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/onion" target="_blank">
                    <ItemComponent id={22} price={this.state.food.price[2]} title={this.state.food.goods[2]} src={onion} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/cabbage" target="_blank">
                      <ItemComponent id={42} price={this.state.food.price[3]} title={this.state.food.goods[3]} src={cabbage} />
                      </Link></SwiperSlide>
                    <SwiperSlide><Link to="/carrot" target="_blank">
                      <ItemComponent id={34} price={this.state.food.price[4]} title={this.state.food.goods[4]} src={carrot} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/broccoli" target="_blank">
                      <ItemComponent id={52} price={this.state.food.price[5]} title={this.state.food.goods[5]} src={broccoli} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/apple" target="_blank">
                      <ItemComponent id={100} price={this.state.food.price[6]} title={this.state.food.goods[6]} src={apple} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/peach" target="_blank">
                      <ItemComponent id={90} price={this.state.food.price[7]} title={this.state.food.goods[7]} src={peach} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/pear" target="_blank">
                      <ItemComponent id={45} price={this.state.food.price[8]} title={this.state.food.goods[8]} src={pear} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/pineapple" target="_blank">
                      <ItemComponent id={88} price={this.state.food.price[9]} title={this.state.food.goods[9]} src={pineapple} />
                    </Link></SwiperSlide>
                </Swiper>

                <h3 id="electroTitle">Elektronika</h3>
                <hr/>
                <Swiper className="goodsSlider"
                    spaceBetween={50}
                    slidesPerView={4.3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    >
                  <SwiperSlide>
                    <Link to="/galaxys21" target="_blank">
                      <ItemComponent id={89} price={this.state.electronics.price[0]} title={this.state.electronics.goods[0]} src={galaxys21} />
                    </Link>
                  </SwiperSlide>
                    <SwiperSlide><Link to="/iphone12" target="_blank">
                      <ItemComponent id={9} price={this.state.electronics.price[1]} title={this.state.electronics.goods[1]} src={iphone12} />
                    </Link>
                    </SwiperSlide>
                    <SwiperSlide><Link to="/iphone12pro" target="_blank">
                      <ItemComponent id={9} price={this.state.electronics.price[2]} title={this.state.electronics.goods[2]} src={iphone12pro} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/mi9" target="_blank">
                      <ItemComponent id={98} price={this.state.electronics.price[3]} title={this.state.electronics.goods[3]} src={mi9} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/mi10" target="_blank">
                      <ItemComponent id={12} price={this.state.electronics.price[4]} title={this.state.electronics.goods[4]} src={mi10} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/vertu" target="_blank">
                      <ItemComponent id={7} price={this.state.electronics.price[5]} title={this.state.electronics.goods[5]} src={vertu} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/lenovol340" target="_blank">
                      <ItemComponent id={55} price={this.state.electronics.price[6]} title={this.state.electronics.goods[6]} src={lenovol340} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/acerswift5" target="_blank">
                      <ItemComponent id={44} price={this.state.electronics.price[7]} title={this.state.electronics.goods[7]} src={acerswift5} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/hppavilionx360" target="_blank">
                    <ItemComponent id={91} price={this.state.electronics.price[8]} title={this.state.electronics.goods[8]} src={hppavilionx360} />
                    </Link></SwiperSlide>
                </Swiper>

                <h3 id="clothersTitle">Geyim</h3>
                <hr/>
                <Swiper className="goodsSlider"
                    spaceBetween={50}
                    slidesPerView={4.3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    >
                    <SwiperSlide><Link to="/shoes" target="_blank">
                      <ItemComponent id={60} price={this.state.clothers.price[0]} title={this.state.clothers.goods[0]} src={shoes} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/jeans" target="_blank">
                      <ItemComponent id={61} price={this.state.clothers.price[1]} title={this.state.clothers.goods[1]} src={jeans} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/dress" target="_blank">
                      <ItemComponent id={62} price={this.state.clothers.price[2]} title={this.state.clothers.goods[2]} src={dress} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/glasses" target="_blank">
                      <ItemComponent id={63} price={this.state.clothers.price[3]} title={this.state.clothers.goods[3]} src={glasses} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/cap" target="_blank">
                      <ItemComponent id={64} price={this.state.clothers.price[4]} title={this.state.clothers.goods[4]} src={cap} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/hoody" target="_blank">
                      <ItemComponent id={65} price={this.state.clothers.price[5]} title={this.state.clothers.goods[5]} src={hoody} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/shorts" target="_blank">
                      <ItemComponent id={66} price={this.state.clothers.price[6]} title={this.state.clothers.goods[6]} src={shorts} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/tshirt" target="_blank">
                      <ItemComponent id={67} price={this.state.clothers.price[7]} title={this.state.clothers.goods[7]} src={tshirt} />
                    </Link></SwiperSlide>
                </Swiper>

                <h3 id="furnitureTitle">Mebel</h3>
                <hr/>
                <Swiper className="goodsSlider"
                    spaceBetween={50}
                    slidesPerView={4.3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    >
                    <SwiperSlide><Link to="/chair" target="_blank">
                      <ItemComponent id={68} price={this.state.furniture.price[0]} title={this.state.furniture.goods[0]} src={chair} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/table" target="_blank">
                      <ItemComponent id={69} price={this.state.furniture.price[1]} title={this.state.furniture.goods[1]} src={table} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/floorlamp" target="_blank">
                      <ItemComponent id={70} price={this.state.furniture.price[2]} title={this.state.furniture.goods[2]} src={floorlamp} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/cupboard" target="_blank">
                      <ItemComponent id={71} price={this.state.furniture.price[3]} title={this.state.furniture.goods[3]} src={cupboard} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/armchair" target="_blank">
                      <ItemComponent id={72} price={this.state.furniture.price[4]} title={this.state.furniture.goods[4]} src={armchair} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/sofa" target="_blank">
                      <ItemComponent id={73} price={this.state.furniture.price[5]} title={this.state.furniture.goods[5]} src={sofa} />
                    </Link></SwiperSlide>
                </Swiper>

                <h3 id="childrensworldTitle">Uşaq aləmi</h3>
                <hr/>
                <Swiper className="goodsSlider"
                    spaceBetween={50}
                    slidesPerView={4.3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                    >
                    <SwiperSlide><Link to="/scooter" target="_blank">
                      <ItemComponent id={74} price={this.state.forChildren.price[0]} title={this.state.forChildren.goods[0]} src={scooter} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/segway" target="_blank">
                      <ItemComponent id={75} price={this.state.forChildren.price[1]} title={this.state.forChildren.goods[1]} src={segway} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/electrocar" target="_blank">
                      <ItemComponent id={76} price={this.state.forChildren.price[2]} title={this.state.forChildren.goods[2]} src={electrocar} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/cubes" target="_blank">
                      <ItemComponent id={77} price={this.state.forChildren.price[3]} title={this.state.forChildren.goods[3]} src={cubes} />
                    </Link></SwiperSlide>
                    <SwiperSlide><Link to="/stroller" target="_blank">
                      <ItemComponent id={78} price={this.state.forChildren.price[4]} title={this.state.forChildren.goods[4]} src={stroller} />
                    </Link></SwiperSlide>
                </Swiper>
                <div id="salesDiv">
                    <h4 id="special">Xüsusi təklif</h4>
                    <hr id="specialHr" />
                <div id="sale1">
                  <img width="100%" height="200%" src={sale1} alt=""/>
                  <div className="counter">00:00:00:00</div>
                </div>
                <div id="sale2">
                  <img width="100%" height="200%" src={sale2} alt=""/>
                  <div className="counter">00:00:00:00</div>
                </div>
                <div id="sale3">
                  <img width="100%" height="200%" src={sale3} alt=""/>
                  <div className="counter">00:00:00:00</div>
                </div>
              </div>
              
              </BrowserRouter>
            </div>
        )
    }
}
