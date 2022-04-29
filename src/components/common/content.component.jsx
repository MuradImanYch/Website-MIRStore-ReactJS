import React, { useEffect } from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import azeIco from "../../img/azeIco.jpg";
import rusIco from "../../img/rusIco.png";
import ukIco from "../../img/ukIco.jpg";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Contacts from "../Contacts/Contacts";
import TechnicalSupport from "../Technicalsupport/Technicalsupport";
import Error from "../Error/Error";
import $ from "jquery";
import {useAppContext} from "../../context/providers/app.provider";

import Potato from '../Potato/Potato';
import Tomato from '../Tomato/Tomato';
import Onion from '../Onion/Onion';
import Cabbage from '../Cabbage/Cabbage';
import Carrot from '../Carrot/Carrot';
import Broccoli from '../Broccoli/Broccoli';
import Apple from '../Apple/Apple';
import Peach from '../Peach/Peach';
import Pear from '../Pear/Pear';
import Pineapple from '../Pineapple/Pineapple';
import Galaxys21 from '../Galaxys21/Galaxys21';
import Iphone12 from '../Iphone12/Iphone12';
import Iphone12pro from '../Iphone12pro/Iphone12pro';
import Mi9 from '../Mi9/Mi9';
import Mi10 from '../Mi10/Mi10';
import Vertu from '../Vertu/Vertu';
import Lenovol340 from '../Lenovol340/Lenovol340';
import Acerswift5 from '../Acerswift5/Acerswift5';
import Hppavilionx360 from '../Hppavilionx360/Hppavilionx360';
import Shoes from '../Shoes/Shoes';
import Jeans from '../Jeans/Jeans';
import Dress from '../Dress/Dress';
import Glasses from '../Glasses/Glasses';
import Cap from '../Cap/Cap';
import Hoody from '../Hoody/Hoody';
import Shorts from '../Shorts/Shorts';
import Tshirt from '../Tshirt/Tshirt';
import Chair from '../Chair/Chair';
import Table from '../Table/Table';
import Floorlamp from '../Floorlamp/Floorlamp';
import Cupboard from '../Cupboard/Cupboard';
import Armchair from '../Armchair/Armchair';
import Sofa from '../Sofa/Sofa';
import Scooter from '../Scooter/Scooter';
import Segway from '../Segway/Segway';
import Electrocar from '../Electrocar/Electrocar';
import Cubes from '../Cubes/Cubes';
import Stroller from '../Stroller/Stroller';


const ContentComponent = () => {

  const [appState] = useAppContext();
  const {cart, totalQty} = appState;

  useEffect(() => {
    $(document).ready(function() {
      function progressBar() {
        let windScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (windScroll / docHeight) * 100;
        document.getElementById("progressBar").style.width = scrolled + '%';
      }
      window.onscroll = function () {
        progressBar();
      }

      $('#arrow').click(function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      $('#arrow').hide();
      $(window).scroll(function () {
        if ($(window).scrollTop() > 450) {
          $('#arrow').fadeIn();
        }
        else {
          $('#arrow').fadeOut();
        }
      });
    });
  }, []);

  const linkClick = () => {
    window.scrollTo({
      top: 0,
    });
    document.getElementById("progressBar").style.width = "0%";
  }

  return(

    <div>
      <BrowserRouter>
        <div id="progressBar"></div>
        <header>
          <nav>
            <Link onClick={linkClick} to="/"><h1>MIR store</h1></Link>
            <Link onClick={linkClick} to="/cart">
              <i className="fas fa-shopping-cart"/>
              <span style={{backgroundColor: "red", color: "white", position: "absolute", top: "10px", borderRadius: "50%", padding: "2px", fontSize: "0.9em"}} >
                {totalQty}
              </span>
            </Link>
            <div className="language">
              <img id="azLang" width="35px" height="20px" src={azeIco} alt=""/>
              <img id="ruLang" width="35px" height="20px" src={rusIco} alt=""/>
              <img id="enLang" width="35px" height="20px" src={ukIco} alt=""/>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/technicalsupport">
                <TechnicalSupport />
              </Route>
              <Route path="/potato">
                <Potato />
              </Route>
              <Route path="/tomato">
                <Tomato />
              </Route>
              <Route path="/onion">
                <Onion />
              </Route>
              <Route path="/cabbage">
                <Cabbage />
              </Route>
              <Route path="/carrot">
                <Carrot />
              </Route>
              <Route path="/broccoli">
                <Broccoli />
              </Route>
              <Route path="/apple">
                <Apple />
              </Route>
              <Route path="/peach">
                <Peach />
              </Route>
              <Route path="/pear">
                <Pear />
              </Route>
              <Route path="/pineapple">
                <Pineapple />
              </Route>
              <Route path="/galaxys21">
                <Galaxys21 />
              </Route>
              <Route path="/iphone12">
                <Iphone12 />
              </Route>
              <Route path="/iphone12pro">
                <Iphone12pro />
              </Route>
              <Route path="/mi9">
                <Mi9 />
              </Route>
              <Route path="/mi10">
                <Mi10 />
              </Route>
              <Route path="/vertu">
                <Vertu />
              </Route>
              <Route path="/lenovol340">
                <Lenovol340 />
              </Route>
              <Route path="/acerswift5">
                <Acerswift5 />
              </Route>
              <Route path="/hppavilionx360">
                <Hppavilionx360 />
              </Route>
              <Route path="/shoes">
                <Shoes />
              </Route>
              <Route path="/jeans">
                <Jeans />
              </Route>
              <Route path="/dress">
                <Dress />
              </Route>
              <Route path="/glasses">
                <Glasses />
              </Route>
              <Route path="/cap">
                <Cap />
              </Route>
              <Route path="/shorts">
                <Shorts />
              </Route>
              <Route path="/hoody">
                <Hoody />
              </Route>
              <Route path="/tshirt">
                <Tshirt />
              </Route>
              <Route path="/chair">
                <Chair />
              </Route>
              <Route path="/table">
                <Table />
              </Route>
              <Route path="/floorlamp">
                <Floorlamp />
              </Route>
              <Route path="/cupboard">
                <Cupboard />
              </Route>
              <Route path="/armchair">
                <Armchair />
              </Route>
              <Route path="/sofa">
                <Sofa />
              </Route>
              <Route path="/scooter">
                <Scooter />
              </Route>
              <Route path="/segway">
                <Segway />
              </Route>
              <Route path="/electrocar">
                <Electrocar />
              </Route>
              <Route path="/cubes">
                <Cubes />
              </Route>
              <Route path="/stroller">
                <Stroller />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>

          </div>

        </main>
        <footer>
          <div id="footerH1Div"><Link onClick={linkClick} to="/"><h1>Mir store</h1></Link></div>
          <div id="webdevcvLinksForms">
            <a target="_blank" href="http://webdevcv.com/"><p>WEBDEV<span id="white">CV</span></p></a>
            <div id="footerLinks">
              <ul>
                <li><i className="fas fa-phone" /> <Link onClick={linkClick} to="/contacts" id="contactsLink">Əlaqə</Link></li>
                <li><i className="fas fa-comments" /> <Link onClick={linkClick} to="/technicalsupport" id="technicalSupport">Texniki dəstək</Link></li>
              </ul>
            </div>
            <div id="form">
              <label htmlFor="name" id="nameFooter">Ad</label>
              <input placeholder="John" id="name" type="text"/>
              <label htmlFor="surname" id="lastnameFooter">Soyad</label>
              <input placeholder="Doe" id="surname" type="text"/>
              <label htmlFor="email">E-mail</label>
              <input placeholder="john-doe@onlinestore.com" id="email" type="text"/>
              <input id="submit" value="Göndər" type="submit"/>
            </div>
          </div>
          <span id="copy">Copyright &copy; 2021 | Online Store | MIR</span>
        </footer>
      </BrowserRouter>
      <div id="arrow"><i className="far fa-caret-square-up" /></div>
    </div>
  )
}

export default ContentComponent;
