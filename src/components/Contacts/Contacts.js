import React, { Component } from 'react';
import './Contacts.css';
import $ from 'jquery';

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <div id="emailNumberFax">
                    <div id="email"><i class="fas fa-envelope-square"></i> E-mail: mir-store@gmail.com</div>
                    <div id="number"><i class="fas fa-phone-square"></i> Tel: +994 (50) 840 15 40</div>
                    <div id="fax"><i class="fab fa-facebook-square"></i> Facebook: <a href="#">link</a></div>
                </div>
            </div>
        )
    }
}
