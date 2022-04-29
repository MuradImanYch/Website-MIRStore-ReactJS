import React, { Component } from 'react';
import './Technicalsupport.css';
import $ from 'jquery';

export default class Technicalsupport extends Component {

    componentDidMount = () => {
        $('#dropdown1Descr, #dropdown2Descr, #dropdown3Descr, #dropdown4Descr, #dropdown5Descr').hide();
        $('#dropdown1 li').click(function() {
            $('#dropdown1Descr').slideToggle();
        });
        $('#dropdown2 li').click(function() {
            $('#dropdown2Descr').slideToggle();
        });
        $('#dropdown3 li').click(function() {
            $('#dropdown3Descr').slideToggle();
        });
        $('#dropdown4 li').click(function() {
            $('#dropdown4Descr').slideToggle();
        });
        $('#dropdown5 li').click(function() {
            $('#dropdown5Descr').slideToggle();
        });
    }

    render() {
        return (
            <div>
                <div id="top"></div>
                <div id="dropdownsService">
                    <div id="dropdown1">
                        <ul>
                            <li>Hansı kart növlərindən istifadə edə bilərəm?</li>
                        </ul>
                        <div id="dropdown1Descr">
                        Bizim marketplace-imizdə VİSA və Maestro / Master Card istifadə edə bilərsiniz. Tezliklə yeni ödəmə metodlarını da tərtib edəcəyik.
                        </div>
                    </div>
                    <div id="dropdown2">
                        <ul>
                            <li>Çatdırılma nə qədər vaxt aparır?</li>
                        </ul>
                        <div id="dropdown2Descr">
                        Çatdırılma 1 saat ərzində həyata keçirilir
                        </div>
                    </div>
                    <div id="dropdown3">
                        <ul>
                            <li>Məhsulu geri qaytarmaq və ya dəyişə bilərəm?</li>
                        </ul>
                        <div id="dropdown3Descr">
                        Malı 14 gün ərzində geri qaytarmaq və ya dəyişə edə bilərsiniz.
                        </div>
                    </div>
                    <div id="dropdown4">
                        <ul>
                            <li>Çatdırılma qiyməti nə qədərdir?</li>
                        </ul>
                        <div id="dropdown4Descr">
                        Şəhər daxilində çatdırılma pulsuzdur, şəhər xaricində 5 manat. Bölgələrə çatdırılma poçtla və 2-3 manatla həyata keçirilir.
                        </div>
                    </div>
                    <div id="dropdown5">
                        <ul>
                            <li>Saytda bir səhv varsa nə etməli?</li>
                        </ul>
                        <div id="dropdown5Descr">
                        Texniki dəstəklə əlaqə saxlayın
                        </div>
                    </div>
                </div>
                <p id="if">Əgər sizin sualınıza cavab tapilmadısa, onda biznən əlaqə saxlayın</p>
                <div id="onlineChatDiv">Onlayn çata növbə tutmaq</div>
            </div>
        )
    }
}
