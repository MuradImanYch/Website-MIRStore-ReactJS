import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from "jquery";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// --------translate---------
let confirmText = "Təstiqləndi!";
let uncorrectCardNum = "Kartın nömrəsi səhvdir!";
let uncorrectCardMonth = "Kartın etibarlılıq vaxtı (AY) səhvdir!";
let uncorrectCardYear = "Kartın etibarlılıq vaxtı (İL) səhvdir!";
let uncorrectCardCvv = "Kartın CVV səhvdir!";
let emptyCountry = "Ölkəni qeyd etməmisiniz!";
let emptyCity = "Şəhəri qeyd etməmisiniz!";
let emptyAdress = "Adresinizi qeyd etməmisiniz!";

$('#comment').attr('placeholder', 'Rəy yaz');
$('#sendComment').text('Göndər');
for(let i = 0; i <= 37; i++) {
  $('.title').eq(i).attr('id', $('.title').eq(i).text());
  $('#title').eq(i).attr('id', $('#title').eq(i).text());
}
$('#titlePriceDescr p').eq(0).css({'fontSize': '1.7em'}).css({'textDecoration':'underline'});

$('#ruLang').click(function() {
  $('#contactsLink').text('Контакты');
  $('#number').text('Тел : +994 (50) 840 15 40');
  $('#technicalSupport').text('Техническая поддержка');
  $('#if').text('Если вы не нашли ответа на свой вопрос, свяжитесь с нами.');
  $('#onlineChatDiv').text('Занять очередь для онлайн чата');
  $('#nameFooter').text('Имя');
  $('#lastnameFooter').text('Фамилия');
  $('#submit').attr('value','Отправить');
  $('#slider1Text').html('Добро пожаловать в Mir store, <span>ПОКУПАЙ ДОМА ОСТАВАЙСЯ ДОВОЛЬНЫМ</span>, есть все виды продуктов');
  $('#slider2Text').text('Фрукты и овощи из красивых уголков Азербайджана');
  $('#slider3Text').text('Модная одежда мирового модного мира');
  $('#slider4Text').text('Все виды электроники');
  $('#foodTitle').text('Продукты питания');
  $('#electroTitle').text('Электроника');
  $('#clothersTitle').text('Одежда');
  $('#furnitureTitle').text('Мебель');
  $('#childrensworldTitle').text('Детский мир');
  $('#Kartof').text('Картошка');
  $('#Pomidor').text('Помидор');
  $('#Soğan').text('Лук');
  $('#Kələm').text('Капуста');
  $('#Kök').text('Морковь');
  $('#Brokkoli').text('Брокколи');
  $('#Alma').text('Яблоко');
  $('#Ərik').text('Персик');
  $('#Armud').text('Груша');
  $('#Ananas').text('Ананас');
  $('#Ayaqqabı').text('Обувь');
  $('#Cins').text('Джинсы');
  $('#Don').text('Платье');
  $('#Eynək').text('Очки');
  $('#Papaq').text('Кепка');
  $('#Hoody').text('Худи');
  $('#Şortlar').text('Шортики');
  $('#T-shirt').text('Футболка');
  $('#Oturacaq').text('Стул');
  $('#Masa').text('Стол');
  $('#Tarşer').text('Таршер');
  $('#Şkaf').text('Шкаф');
  $('#Kreslo').text('Кресло');
  $('#Divan').text('Диван');
  $('#Skuter').text('Самокат');
  $('#Elektromaşın').text('Электромашина');
  $('#Kubiklər').text('Кубики');
  $('#Araba').text('Коляска');
  $('#special').text('Специальное предложение');
  $('#orderBtn').text('Заказать');
  $('#comment').attr('placeholder', 'Напишите отзыв');
  $('#sendComment').text('Отправить');
  $('#cardNumber').attr('placeholder','Номер карты');
  $('#cardMonth').attr('placeholder','ММ');
  $('#cardYear').attr('placeholder','ГГ');
  $('#country').attr('placeholder','Страна');
  $('#city').attr('placeholder','Город');
  $('#adress').attr('placeholder','Адресс');
  $('#orderTextarea').attr('placeholder','Дополнительный комментарий');
  $('#dropdown1 li').text('Какие типы картов можно использовать?');
  $('#dropdown2 li').text('СКОЛЬКО ВРЕМЕНИ ЗАЙМЕТ ДОСТАВКА?');
  $('#dropdown3 li').text('МОГУ ЛИ Я сделать ВОЗВРАТ ИЛИ поменять ТОВАР?');
  $('#dropdown4 li').text('КАКАЯ СТОИМОСТЬ ДОСТАВКИ?');
  $('#dropdown5 li').text('ЧТО ДЕЛАТЬ, ЕСЛИ НА САЙТЕ ОШИБКА?');
  $('#dropdown1Descr').text('Вы можете использовать VISA и Maestro / Master Card на нашей торговой площадке. Вскоре мы разработаем новые способы оплаты.');
  $('#dropdown2Descr').text('Доставка занимает 1 час.');
  $('#dropdown3Descr').text('Вы можете вернуть или поменять товар в течении 14 дней.');
  $('#dropdown4Descr').text('Доставка по городу бесплатная, за город - 5 манат. Доставка в регионы почтой по цене 2-3 маната.');
  $('#dropdown5Descr').text('Обратитесь в службу технической поддержки');
  confirmText = "Подтверждено!";
  uncorrectCardNum = "Номер карты неправильный!";
  uncorrectCardMonth = "Неправильный срок действия карты (МЕСЯЦ)!";
  uncorrectCardYear = "Неправильный срок действия карты (ГОД)!";
  uncorrectCardCvv = "Неправильный CVV карты!";
  emptyCountry = "Вы не указали страну!";
  emptyCity = "Вы не указали город!";
  emptyAdress = "Вы не указали адрес!";
  $('#confirmBtn').html('<span id="currentSumBtn"></span> Подтвердить');
  $('#count').attr('placeholder', 'Количество');
  $('.totalBtn').html('<span className="totalSum"></span><span className="cartManatSymbol">₼</span> Подтвердить');
});

$('#azLang').click(function() {
  $('#contactsLink').text('Əlaqə');
  $('#number').text('Tel : +994 (50) 840 15 40');
  $('#technicalSupport').text('Texniki dəstək');
  $('#if').text('Əgər sizin sualınıza cavab tapilmadısa, onda biznən əlaqə saxlayın');
  $('#onlineChatDiv').text('Onlayn çata növbə tutmaq');
  $('#nameFooter').text('Ad');
  $('#lastnameFooter').text('Soyad');
  $('#submit').attr('value','Göndər');
  $('#slider1Text').html('Mir store - yə xoş gəlmisiniz <span id="earq">EVDƏN AL RAZI QAL</span> hər növ məsulları var');
  $('#slider2Text').text('Azərbaycanın gözəl güşələrindən meyvə və tərəvəzləri');
  $('#slider3Text').text('Dünya moda aləminin dəbli geimləri');
  $('#slider4Text').text('Hər növ elektonika avadanığlar');
  $('#foodTitle').text('Qida məhsulları');
  $('#electroTitle').text('Elektronika');
  $('#clothersTitle').text('Geyim');
  $('#furnitureTitle').text('Mebel');
  $('#childrensworldTitle').text('Uşaq aləmi');
  $('#Kartof').text('Kartof');
  $('#Pomidor').text('Pomidor');
  $('#Soğan').text('Soğan');
  $('#Kələm').text('Kələm');
  $('#Kök').text('Kök');
  $('#Brokkoli').text('Brokkoli');
  $('#Alma').text('Alma');
  $('#Ərik').text('Ərik');
  $('#Armud').text('Armud');
  $('#Ananas').text('Ananas');
  $('#Ayaqqabı').text('Ayaqqabı');
  $('#Cins').text('Cins');
  $('#Don').text('Don');
  $('#Eynək').text('Eynək');
  $('#Papaq').text('Papaq');
  $('#Hoody').text('Hoody');
  $('#Şortlar').text('Şortlar');
  $('#T-shirt').text('T-shirt');
  $('#Oturacaq').text('Oturacaq');
  $('#Masa').text('Masa');
  $('#Tarşer').text('Tarşer');
  $('#Şkaf').text('Şkaf');
  $('#Kreslo').text('Kreslo');
  $('#Divan').text('Divan');
  $('#Skuter').text('Skuter');
  $('#Elektromaşın').text('Elektromaşın');
  $('#Kubiklər').text('Kubiklər');
  $('#Araba').text('Araba');
  $('#special').text('Xüsusi təklif');
  $('#orderBtn').text('Sifariş et');
  $('#comment').attr('placeholder', 'Rəy yaz');
  $('#sendComment').text('Göndər');
  $('#cardNumber').attr('placeholder','Kartın nömrəsi');
  $('#cardMonth').attr('placeholder','AA');
  $('#cardYear').attr('placeholder','İİ');
  $('#country').attr('placeholder','Ölkə');
  $('#city').attr('placeholder','Şəhər');
  $('#adress').attr('placeholder','Adress');
  $('#orderTextarea').attr('placeholder','Əlavə şərh');
  $('#dropdown1 li').text('HANSI KART NÖVLƏRINDƏN ISTIFADƏ EDƏ BILƏRƏM?');
  $('#dropdown2 li').text('ÇATDIRILMA NƏ QƏDƏR VAXT APARIR?');
  $('#dropdown3 li').text('MƏHSULU GERI QAYTARMAQ VƏ YA DƏYIŞƏ BILƏRƏM?');
  $('#dropdown4 li').text('ÇATDIRILMA QIYMƏTI NƏ QƏDƏRDIR?');
  $('#dropdown5 li').text('SAYTDA BIR SƏHV VARSA NƏ ETMƏLI?');
  $('#dropdown1Descr').text('Bizim marketplace-imizdə VİSA və Maestro / Master Card istifadə edə bilərsiniz. Tezliklə yeni ödəmə metodlarını da tərtib edəcəyik.');
  $('#dropdown2Descr').text('Çatdırılma 1 saat ərzində həyata keçirilir');
  $('#dropdown3Descr').text('Malı 14 gün ərzində geri qaytarmaq və ya dəyişə edə bilərsiniz.');
  $('#dropdown4Descr').text('Şəhər daxilində çatdırılma pulsuzdur, şəhər xaricində 5 manat. Bölgələrə çatdırılma poçtla və 2-3 manatla həyata keçirilir.');
  $('#dropdown5Descr').text('Texniki dəstəklə əlaqə saxlayın');
  confirmText = "Təstiqləndi!";
  uncorrectCardNum = "Kartın nömrəsi səhvdir!";
  uncorrectCardMonth = "Kartın etibarlılıq vaxtı (AY) səhvdir!";
  uncorrectCardYear = "Kartın etibarlılıq vaxtı (İL) səhvdir!";
  uncorrectCardCvv = "Kartın CVV səhvdir!";
  emptyCountry = "Ölkəni qeyd etməmisiniz!";
  emptyCity = "Şəhəri qeyd etməmisiniz!";
  emptyAdress = "Adresinizi qeyd etməmisiniz!";
  $('#confirmBtn').html('<span id="currentSumBtn"></span> Təsdiq et');
  $('#count').attr('placeholder', 'Miqdar');
  $('.totalBtn').html('<span className="totalSum"></span><span className="cartManatSymbol">₼</span> Təstiq et');
});

$('#enLang').click(function() {
  $('#contactsLink').text('Contacts');
  $('#number').text('Tel : +994 (50) 840 15 40');
  $('#technicalSupport').text('Technical support');
  $('#if').text('If you have not found the answer to your question, please contact us');
  $('#onlineChatDiv').text('Catch queues to reach online');
  $('#nameFooter').text('Name');
  $('#lastnameFooter').text('Lastname');
  $('#submit').attr('value','Send');
  $('#slider1Text').html('Welcome to Mir store <span id = "earq"> BE SATISFIED AT HOME </span> There are all kinds of people in charge');
  $('#slider2Text').text('Fruits and vegetables from the beautiful corners of Azerbaijan');
  $('#slider3Text').text('Fashionable clothes of the world fashion world');
  $('#slider4Text').text('All kinds of electronics equipment');
  $('#foodTitle').text('Food');
  $('#electroTitle').text('Electronics');
  $('#clothersTitle').text('Clothers');
  $('#furnitureTitle').text('Furniture');
  $('#childrensworldTitle').text('Children\'s world');
  $('#Kartof').text('Potato');
  $('#Pomidor').text('Tomato');
  $('#Soğan').text('Onion');
  $('#Kələm').text('Cabbage');
  $('#Kök').text('Carrot');
  $('#Brokkoli').text('Broccoli');
  $('#Alma').text('Apple');
  $('#Ərik').text('Peach');
  $('#Armud').text('Pear');
  $('#Ananas').text('Pineapple');
  $('#Ayaqqabı').text('Shoe');
  $('#Cins').text('Jeans');
  $('#Don').text('Dress');
  $('#Eynək').text('Glasses');
  $('#Papaq').text('Cap');
  $('#Hoody').text('Hoody');
  $('#Şortlar').text('Shorts');
  $('#T-shirt').text('T-shirt');
  $('#Oturacaq').text('Chair');
  $('#Masa').text('Table');
  $('#Tarşer').text('Floorlamp');
  $('#Şkaf').text('Cupboard');
  $('#Kreslo').text('Armchair');
  $('#Divan').text('Sofa');
  $('#Skuter').text('Scooter');
  $('#Elektromaşın').text('Electrocar');
  $('#Kubiklər').text('Cubes');
  $('#Araba').text('Stroller');
  $('#special').text('Special offer');
  $('#orderBtn').text('Order now');
  $('#comment').attr('placeholder', 'Write a comment');
  $('#sendComment').text('Send');
  $('#cardNumber').attr('placeholder','Card number');
  $('#cardMonth').attr('placeholder','MM');
  $('#cardYear').attr('placeholder','YY');
  $('#country').attr('placeholder','Country');
  $('#city').attr('placeholder','City');
  $('#adress').attr('placeholder','Adress');
  $('#orderTextarea').attr('placeholder','Additional comment');
  $('#dropdown1 li').text('WHAT KINDS OF CARDS CAN I USE?');
  $('#dropdown2 li').text('HOW LONG DOES DELIVERY TAKE?');
  $('#dropdown3 li').text('CAN I RETURN OR CHANGE THE PRODUCT?');
  $('#dropdown4 li').text('WHAT IS THE DELIVERY PRICE?');
  $('#dropdown5 li').text('WHAT TO DO IF THERE IS AN ERROR ON THE SITE?');
  $('#dropdown1Descr').text('You can use VISA and Maestro / Master Card in our marketplace. We will soon develop new payment methods.');
  $('#dropdown2Descr').text('Delivery takes 1 hour');
  $('#dropdown3Descr').text('You can return or change the goods within 14 days.');
  $('#dropdown4Descr').text('Delivery within the city is free, outside the city 5 manat. Delivery to the regions is by mail and 2-3 manats.');
  $('#dropdown5Descr').text('Contact technical support');
  confirmText = "Confirmed!";
  uncorrectCardNum = "Uncorrect card number!";
  uncorrectCardMonth = "Uncorrect card validity (MONTH)!";
  uncorrectCardYear = "Uncorrect card validity (YEAR)!";
  uncorrectCardCvv = "Uncorrect card CVV!";
  emptyCountry = "You did not write the country!";
  emptyCity = "You did not write the city!";
  emptyAdress = "You did not write the adress!";
  $('#confirmBtn').html('<span id="currentSumBtn"></span> Confirm');
  $('#count').attr('placeholder', 'Quantity');
  $('.totalBtn').html('<span className="totalSum"></span><span className="cartManatSymbol">₼</span> Confirm');
});

$('#confirmBtn').click(function() {
  $('#orderContainer').fadeOut();
  $('#close').fadeOut();
  if($('#cardNumber').val().length < 16) {
    alert(uncorrectCardNum);
  }
  if($('#cardMonth').val().length == 0) {
    alert(uncorrectCardMonth);
  }
  if($('#cardYear').val().length == 0) {
    alert(uncorrectCardYear);
  }
  if($('#cvv').val().length < 3) {
    alert(uncorrectCardCvv);
  }
  if($('#country').val().length == 0) {
    alert(emptyCountry);
  }
  if($('#city').val().length == 0) {
    alert(emptyCity);
  }
  if($('#adress').val().length == 0) {
    alert(emptyAdress);
  }
  if($('#cardNumber').val().length >= 16 && $('#cardMonth').val().length > 0 && $('#cardYear').val().length > 0 && $('#cvv').val().length == 3 && $('#country').val().length > 0 && $('#city').val().length > 0 && $('#adress').val().length > 0) {
    alert(confirmText);
  }
});

$('#orderBtn').css({margin: '15px 0 0 0'});
$('#descr').after('<input id="count" min="1" type="number" placeholder="Miqdar" />');
$('#confirmBtn').html('<span id="currentSumBtn"></span> Təsdiq et');
$('#confirmBtnCart').html('<span id="currentSumBtnCart"></span> Təsdiq et');
$('#currentSumBtn').text($('#price').text());
