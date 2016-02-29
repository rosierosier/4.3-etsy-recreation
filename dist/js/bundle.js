(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var $ = require('jquery');
var handlebars = require('handlebars');
var results = require('./results.js');

var source = $('#images-template').html();
var template = handlebars.compile(source);
//
// var categories = ['Craft Supplies &amp; Tools', 'Link 2', 'Link 3'];
// categories.forEach(function(value){
//   var rendered = template({'link': value});
//   $('.side-nav2').append(rendered);
// });


// $.getJSON('https://www.etsy.com/search?q=yarn', function(response){
//   console.log(response);
// })


var url = "https://api.etsy.com/v2/listings/active.js?api_key=g7vkxx0qlvh3z8upgp4h8saf&keywords=yarn&includes=Images,Shop";
function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
function logData(data){
  var etsyImages = data.results;
  console.log(etsyImages)
  etsyImages.forEach(function(value, index, array){
    var context = {
      title: array[index].title,
      currencyCode: array[index].currency_code,
      price: array[index].price,
      manufacturer: array[index].Shop.shop_name,
      image: array[index].Images[0].url_fullxfull,
    };
    $('.tile').append(template(context));
    console.log(context);
  });
  console.log(data.results[0].Images);
  console.log(data.results[0].Images[0].url_fullxfull);
}
fetchJSONP(url, logData);

},{"./results.js":2,"handlebars":33,"jquery":45}],2:[function(require,module,exports){
"use strict";
/**/({"count":31033,"results":[{"listing_id":165749108,"state":"active","user_id":32660934,"category_id":68887494,"title":"Personalized Engraved Etched Scotch Whiskey Decanter Bottle Groomsmen, Man Cave, Just Married, Christmas Gift for Him (024559)","description":"This glass whiskey decanter makes the perfect gift for that classic gentlemen in your life. Designed to evoke 1920s charm, this 34 oz. bottle will be cherished for generations. Great groomsmen gift, best man gift, graduation gift, 21st birthday gift. \n\nWE CAN ENGRAVE ANYTHING ON THIS BOTTLE, NOT JUST INITIALS- NO ADDITIONAL CHARGE OR SETUP FEE REQUIRED. SEE OUR OTHER LISTINGS BELOW FOR IDEAS.\n\nSize: 3.5&quot; x 3.5&quot; x 9&quot; or 9 cm x 9 cm x 23 cm\nHolds: 1 Liter\n\nhttps:\/\/www.etsy.com\/listing\/165756195\/personalized-engraved-etched-whiskey?ref=shop_home_active\n\nhttps:\/\/www.etsy.com\/listing\/165748342\/personalized-engraved-etched-whiskey?ref=shop_home_active\n\nhttps:\/\/www.etsy.com\/listing\/165757411\/personalized-engraved-etched-whiskey?ref=shop_home_active\n\nhttps:\/\/www.etsy.com\/listing\/165749108\/personalized-engraved-etched-whiskey?ref=shop_home_active\n\nhttps:\/\/www.etsy.com\/listing\/165749210\/personalized-engraved-etched-whiskey?ref=shop_home_active","creation_tsz":1456340370,"ending_tsz":1466791170,"original_creation_tsz":1381766061,"last_modified_tsz":1456340370,"price":"29.99","currency_code":"USD","quantity":634,"tags":["whiskey decanter","gift for him","man cave","whiskey glass","groomsmen gift","father's day gift","personalized gift","wedding gift","gift for dad","men anniversary","best man gift","scotch decanter","scotch glass"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["glass"],"shop_section_id":13510077,"featured_rank":null,"state_tsz":1450499472,"url":"https:\/\/www.etsy.com\/listing\/165749108\/personalized-engraved-etched-scotch?utm_source=explorer&utm_medium=api&utm_campaign=api","views":66281,"num_favorers":3979,"shipping_template_id":null,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"men","occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":false,"taxonomy_id":1668,"taxonomy_path":["Weddings","Gifts & Mementos","Groomsmen Gifts"],"used_manufacturer":false,"Images":[{"listing_image_id":646028746,"hex_code":"674B49","red":103,"green":75,"blue":73,"hue":4,"saturation":29,"brightness":40,"is_black_and_white":false,"creation_tsz":1409231921,"listing_id":165749108,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/038\/1\/8057725\/il_75x75.646028746_c5nv.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/038\/1\/8057725\/il_170x135.646028746_c5nv.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/038\/1\/8057725\/il_570xN.646028746_c5nv.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/038\/1\/8057725\/il_fullxfull.646028746_c5nv.jpg","full_height":600,"full_width":600},{"listing_image_id":610244183,"hex_code":"6A5B5E","red":106,"green":91,"blue":94,"hue":348,"saturation":14,"brightness":41,"is_black_and_white":false,"creation_tsz":1401782342,"listing_id":165749108,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/036\/0\/8057725\/il_75x75.610244183_gtju.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/036\/0\/8057725\/il_170x135.610244183_gtju.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/036\/0\/8057725\/il_570xN.610244183_gtju.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/036\/0\/8057725\/il_fullxfull.610244183_gtju.jpg","full_height":600,"full_width":600},{"listing_image_id":610133430,"hex_code":"6B5757","red":107,"green":87,"blue":87,"hue":0,"saturation":18,"brightness":41,"is_black_and_white":false,"creation_tsz":1401782342,"listing_id":165749108,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/040\/0\/8057725\/il_75x75.610133430_fo5j.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/040\/0\/8057725\/il_170x135.610133430_fo5j.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/040\/0\/8057725\/il_570xN.610133430_fo5j.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/040\/0\/8057725\/il_fullxfull.610133430_fo5j.jpg","full_height":600,"full_width":600},{"listing_image_id":610133428,"hex_code":"6A595B","red":106,"green":89,"blue":91,"hue":353,"saturation":16,"brightness":41,"is_black_and_white":false,"creation_tsz":1401782342,"listing_id":165749108,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/039\/0\/8057725\/il_75x75.610133428_8y9a.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/039\/0\/8057725\/il_170x135.610133428_8y9a.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/039\/0\/8057725\/il_570xN.610133428_8y9a.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/039\/0\/8057725\/il_fullxfull.610133428_8y9a.jpg","full_height":600,"full_width":600},{"listing_image_id":610244185,"hex_code":"5E4B4A","red":94,"green":75,"blue":74,"hue":3,"saturation":21,"brightness":36,"is_black_and_white":false,"creation_tsz":1401782342,"listing_id":165749108,"rank":5,"url_75x75":"https:\/\/img1.etsystatic.com\/037\/0\/8057725\/il_75x75.610244185_qonn.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/037\/0\/8057725\/il_170x135.610244185_qonn.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/037\/0\/8057725\/il_570xN.610244185_qonn.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/037\/0\/8057725\/il_fullxfull.610244185_qonn.jpg","full_height":600,"full_width":600}],"Shop":{"shop_id":8057725,"shop_name":"TealsPrairie","user_id":32660934,"creation_tsz":1366241465,"title":"Teals Prairie & Co. | Specialty Gift Engravers ","announcement":"You see, all products are personalized with initials, graphics or anything you want. There is no setup or engraving fee. To personalize, at checkout in &quot;Notes to Seller&quot; type instructions and if you&#39;re including a graphic, provide an online link or e-mail it when we contact you. ","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Our current production time is 1 week in addition to the listed production time, excluding shipping time. We will return to our regular production schedule Feb. 14, 2016. Thank you!\r\n\r\nSTOP: support@tealsprairieco.zendesk.com\r\n\r\nSTOP: PLEASE CHECK YOUR SHIPPING ADDRESS, IF INCORRECT, PLEASE NOTIFY US IMMEDIATELY. PACKAGES SHIPPED TO  THE WRONG ADDRESS WILL NOT BE REPRODUCED. WE WILL RE-SHIP AT YOUR EXPENSE ONCE THE PACKAGE HAS RETURNED. WE ARE NOT RESPONSIBLE FOR PACKAGES SHIPPED TO THE WRONG ADDRESS.  \r\n\r\nSTOP: WE DO NOT GUARANTEE DELIVERIES BY ANY DEADLINE. ALL OF OUR PRODUCTS ARE MADE-TO-ORDER AND PERSONALIZED. SHIPPING TIME IS ESTIMATED ONLY. GENERALLY SPEAKING, WE NEED 2 WEEKS FROM ORDER TO DELIVERY. \r\n\r\nPlease email support@tealsprairieco.zendesk.com for after-sales support. Include order # in subject line. But first, here are our top 4 FAQs.\r\n\r\nQUESTION: WHERE IS MY ORDER?\r\n\r\nreply: you see, if you placed an orders and within 36 hours (excluding weekends) you did NOT hear from us by email with proofs to confirm or additional questions, this means we understood your customization request and put the order immediately into production. from order to delivery, we need 7 - 10 business days. tracking numbers are automatically emailed; however some email servers reject these emails, in which case, we apologize for the inconvenience, but kindly ask that you be patient until the 10 business days delivery time has expired before contacting us by email for an update. CHECK YOUR SPAM FOLDER \r\n\r\nNote: 95% of the time orders placed by Thursday are delivered by that following Friday. If this wasn&#39;t helpful, send us an email, as we are no longer doing after-sales support directly on Etsy. \r\n\r\n\r\nQUESTION: MY ORDER ARRIVED BROKE, ENGRAVED WRONG, ETC. WHAT&#39;S NEXT?\r\n\r\nreply: you see, we always and without question replace broken, incorrectly engraved items, free of charge, so please don&#39;t worry. just email us, let us know exactly what needs to be replaced along with a few supporting images (if convenient). typically speaking, lead-time for replacements are the same as the original order. If this wasn&#39;t helpful, send us an email, as we are no longer doing after-sales support directly on Etsy. \r\n\r\nQUESTION: I FORGOT TO LEAVE PERSONALIZATION DETAILS \r\n\r\nreply: you see, just send those details to the email address above with order # in subject line. we do not ship blank, non-personalized items. If this wasn&#39;t helpful, send us an email, as we are no longer doing after-sales support directly on Etsy. \r\n\r\nQUESTION: I NEED TO CHANGE MY SHIPPING ADDRESS \r\n\r\nreply: you see, as long as the order hasn&#39;t shipped, we can change the shipping address. simply email the shipping address with order # in subject line. If this wasn&#39;t helpful, send us an email, as we are no longer doing after-sales support directly on Etsy. \r\n\r\nWe appreciate your business. \r\n\r\nTeals Prairie & Co.\r\nsupport@tealsprairieco.zendesk.com","digital_sale_message":null,"last_updated_tsz":1456341183,"listing_active_count":2054,"digital_listing_count":0,"login_name":"TealsPrairie","accepts_custom_requests":false,"policy_welcome":"Keep it affordable. ","policy_payment":"Paypal only.\r\n\r\n","policy_shipping":"FOR INTERNATIONAL DELIVERIES, WE ARE NOT RESPONSIBLE FOR DUTIES AND TAXES COLLECTED BY YOUR COUNTRY&#39;S CUSTOM OFFICE. THESE ARE NOT INCLUDED IN YOUR SHIPPING COST. \r\n\r\nWE DO NOT GUARANTEE DELIVERIES BY ANY DEADLINE. ALL OF OUR PRODUCTS ARE MADE-TO-ORDER AND PERSONALIZED. SHIPPING TIME IS ESTIMATED ONLY. GENERALLY SPEAKING, WE NEED  7 BUSINESS DAYS. ","policy_refunds":"No refunds on customized items; however if you get the item damaged to a point that it cannot be used, we will redo and reship at our cost. If the item is damaged, e.g. scratched, but still can be used, we&#39;ll come up with a reasonable settlement.\r\n\r\n","policy_additional":"Owing to the sudden growth of our international business (thank you Etsy!), the brother in our team has opened a very, very little work shop in Hong Kong. This effort not only moves us closer to some of our suppliers, but also allows us to ship international orders to Australia, Singapore, Japan, etc. including much of Europe, South America... cheaper and faster. \r\n\r\nNorth American customers, mainly USA and Canada, will not be affected by this addition, for you good folks, it&#39;s business as usual: engraved and shipped from Houston, Texas. Yee Haw!\r\n\r\nThis concept looked good on paper, let&#39;s hope it pays off- wish us luck!\r\n\r\nLastly, for items with multiple colors, for example journals, since our suppliers cannot keep accurate stock levels, we may substitute your purchase with the same product in a different stocked color. \r\n  \r\nImportant Notes:\r\n\r\n*Expedited orders, large orders or orders with not stock in the USA will come from our Hong Kong shop. We reserve the right to ship from either shops. \r\n\r\n*Ordering samples before a large order is prudent; however owing to the nature of our business, we cannot guarantee a sample and the final production will look &quot;exactly&quot; alike as we have different machinist and many machines that all engrave \/ print slightly different. If getting &quot;exact&quot; is critical, please let us know at order so we can find the previous order documents and make sure we use the same machinist to engrave the order. We may request a visual photo of the sample for a final reference.   \r\n","policy_seller_info":"PO Box 1538\r\nFresno, TX 77545\r\n1-800-925-7044","policy_updated_tsz":1455255726,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/TealsPrairie?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/030\/0\/8057725\/iusb_760x100.14286491_ae7v.jpg","num_favorers":21378,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":257860506,"state":"active","user_id":67426023,"category_id":69150425,"title":"Mens Gift Whiskey Decanter Personalized Gifts for Men Father Gift Engraved Scotch Glasses Dad Gifts Grandfather Gift","description":"Ideal mens gift, for your groomsmen, your buddy or Christmas gifts for dad? What says more about your good taste than an engraved whiskey decanter set? Crafted from fine European glass it makes a big style statement in your own home, or a distinctive housewarming present.\n\nDecanter 9&quot; X 3.5&quot; X 3.5&quot;, 0.7Kg, lead-free glass.\nGlass 3&quot;, 0.3Kg\n\nHow to place a personalized order? \n-------------------------------------------------------\nRoll over to the 5th picture above, you see the demonstration of 4 basic designs for engraving. Pick your favorite design and select it from the drop-down menu.\n\nAt the check out page, specify the custom information in the note to seller section. (please also include a phone number for shipping)\n\nSame content will be engraved on both decanter & glasses & wood box unless specified.\n\nAll the designs are okay to make a change upon your idea like adding or removing a line, a title, a date or quote.\n\nFor Design #4, please write as aBc - B is the initial of Last name.\n1 or 2 initials is also doable.\n\nFont: We recommend dafont.com if you need to change the font.\n\nLength limit: for best fit please try not to use a name that exceeds 8 letters.\n\nYour own design? \nLogo, quote, new design? Just feel free to share your idea with us. \nProof will not be provided unless specified.\n\nHandling & Shipping\n----------------------------------------------------------\n3-5 business days for processing \n5-10 days for shipping\nTracking available once shipped.\n\nWe suggest you placing the order at least 15 days before the event. \nWhen not busy we can deliver the order in 10 days.","creation_tsz":1456340231,"ending_tsz":1466791031,"original_creation_tsz":1448419190,"last_modified_tsz":1456340231,"price":"35.00","currency_code":"USD","quantity":65,"tags":["mens gift","mens gift ideas","mens gift set","gift for men","gifts for him","father gift","grandfather gift","personalized mens","gifts for dad","dad gifts","whiskey decanter","scotch glass","whiskey glasses"],"category_path":["Housewares"],"category_path_ids":[69150425],"materials":["glass","wood"],"shop_section_id":17357275,"featured_rank":null,"state_tsz":1451448990,"url":"https:\/\/www.etsy.com\/listing\/257860506\/mens-gift-whiskey-decanter-personalized?utm_source=explorer&utm_medium=api&utm_campaign=api","views":22375,"num_favorers":1902,"shipping_template_id":null,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1862,"taxonomy_path":["Home & Living","Kitchen & Dining","Drink & Barware","Drinkware"],"used_manufacturer":false,"Images":[{"listing_image_id":875636968,"hex_code":"6D695E","red":109,"green":105,"blue":94,"hue":44,"saturation":13,"brightness":42,"is_black_and_white":false,"creation_tsz":1448419190,"listing_id":257860506,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/105\/0\/11221885\/il_75x75.875636968_ktyd.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/105\/0\/11221885\/il_170x135.875636968_ktyd.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/105\/0\/11221885\/il_570xN.875636968_ktyd.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/105\/0\/11221885\/il_fullxfull.875636968_ktyd.jpg","full_height":1000,"full_width":1333},{"listing_image_id":875636610,"hex_code":"989283","red":152,"green":146,"blue":131,"hue":43,"saturation":13,"brightness":59,"is_black_and_white":false,"creation_tsz":1448419190,"listing_id":257860506,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/126\/0\/11221885\/il_75x75.875636610_sh07.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/126\/0\/11221885\/il_170x135.875636610_sh07.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/126\/0\/11221885\/il_570xN.875636610_sh07.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/126\/0\/11221885\/il_fullxfull.875636610_sh07.jpg","full_height":1000,"full_width":1333},{"listing_image_id":875407419,"hex_code":"6E695F","red":110,"green":105,"blue":95,"hue":40,"saturation":13,"brightness":43,"is_black_and_white":false,"creation_tsz":1448419190,"listing_id":257860506,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/130\/0\/11221885\/il_75x75.875407419_74ig.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/130\/0\/11221885\/il_170x135.875407419_74ig.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/130\/0\/11221885\/il_570xN.875407419_74ig.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/130\/0\/11221885\/il_fullxfull.875407419_74ig.jpg","full_height":1000,"full_width":1333},{"listing_image_id":881286612,"hex_code":"3C3125","red":60,"green":49,"blue":37,"hue":31,"saturation":38,"brightness":23,"is_black_and_white":false,"creation_tsz":1449022020,"listing_id":257860506,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/127\/0\/11221885\/il_75x75.881286612_2oj4.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/127\/0\/11221885\/il_170x135.881286612_2oj4.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/127\/0\/11221885\/il_570xN.881286612_2oj4.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/127\/0\/11221885\/il_fullxfull.881286612_2oj4.jpg","full_height":1000,"full_width":1333},{"listing_image_id":875638858,"hex_code":"B7B7B7","red":183,"green":183,"blue":183,"hue":0,"saturation":0,"brightness":71,"is_black_and_white":null,"creation_tsz":1448419190,"listing_id":257860506,"rank":5,"url_75x75":"https:\/\/img0.etsystatic.com\/130\/0\/11221885\/il_75x75.875638858_ab6b.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/130\/0\/11221885\/il_170x135.875638858_ab6b.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/130\/0\/11221885\/il_570xN.875638858_ab6b.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/130\/0\/11221885\/il_fullxfull.875638858_ab6b.jpg","full_height":800,"full_width":1200}],"Shop":{"shop_id":11221885,"shop_name":"AnnaEngraving","user_id":67426023,"creation_tsz":1433513630,"title":"ANNA Engraving Gift","announcement":null,"currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"1. PLEASE USE NON-PO BOX ADDRESS \r\n2. PLEASE INCLUDE RECIPIENT&#39;S PHONE NUMBER FOR SHIPPING\r\n\r\nTHANKS!","digital_sale_message":null,"last_updated_tsz":1456340854,"listing_active_count":58,"digital_listing_count":0,"login_name":"AnnaEngraving","accepts_custom_requests":true,"policy_welcome":"We are dedicated to make decent gift for the proper event. We are passionate about materials and textures that we creating on. \r\n\r\nFeel free to share with us if you have any wonderful idea. We are ready to bring your dream into  reality.","policy_payment":"PayPal is the most secure and convenient way to shop online. \r\nAs an international seller from Singapore we only accept payment from PayPal.","policy_shipping":"Order processing:\r\n3-5 business days\r\n\r\nShipping:\r\nUSA\/CA\/AU\/UK (5-10 days)\r\nOther countries (10-15 days)\r\n\r\nWe suggest you placing the order at least 12 days before the event. \r\nWhen not busy we can deliver the order in 10 days.","policy_refunds":"100% satisfaction guaranteed.\r\n\r\nAny broken \/ faulty \/ wrong item will be replaced or refunded upon request.","policy_additional":"We are happy to personalize gift for any event. Feel free to contact us for custom \/ wholesale orders.","policy_seller_info":"We are located in Singapore as a family business. \r\nReach us via annamillerwork@gmail.com","policy_updated_tsz":1446909946,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/AnnaEngraving?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/073\/0\/11221885\/iusb_760x100.15752344_n0pm.jpg","num_favorers":652,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":264341749,"state":"active","user_id":73006935,"category_id":69150425,"title":"Personalized Mens Gift Whiskey Decanter Bottle Wood Box Valentine Gift Wedding Gift Groomsmen Best Man Gift","description":"Whiskey decanter, pretty patterns engraved, only for customization, is doomed to be a surprising gift for a wedding, Valentine Day, Anniversary, Men, Father.... any Men in general.\n\n6 design styles are available, see the last given image, please leaving a note in the order about the name or initials you need me to make. \n\nIf not clearly pointed out, the pattern made on the decanter, 2 glasses and wood box gonna be the same.\n\n\ndecanter size: about 8.8*8.8*23 (cm), holds 1000ml.\n\nglass size: diameter 7cm, height 9cm\n\n\n2 glasses and 1 decanter is included in the set\n\nMore choices of a gift:\nhttps:\/\/www.etsy.com\/shop\/AkabaTO?ref=l2-shopheader-name","creation_tsz":1456339100,"ending_tsz":1466789900,"original_creation_tsz":1453090765,"last_modified_tsz":1456339100,"price":"36.00","currency_code":"USD","quantity":128,"tags":["whiskey decanter","bottle","glass","whiskey glass","scotch decanter","man gift","gift for him","Valentine gift","groomsmen gift","best man gift","wedding gift","father gift","gift for dad"],"category_path":["Housewares"],"category_path_ids":[69150425],"materials":["glass"],"shop_section_id":17867902,"featured_rank":null,"state_tsz":1456338846,"url":"https:\/\/www.etsy.com\/listing\/264341749\/personalized-mens-gift-whiskey-decanter?utm_source=explorer&utm_medium=api&utm_campaign=api","views":4069,"num_favorers":371,"shipping_template_id":null,"processing_min":1,"processing_max":3,"who_made":"collective","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"men","occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1862,"taxonomy_path":["Home & Living","Kitchen & Dining","Drink & Barware","Drinkware"],"used_manufacturer":false,"Images":[{"listing_image_id":905608090,"hex_code":"5E5F63","red":94,"green":95,"blue":99,"hue":228,"saturation":5,"brightness":38,"is_black_and_white":false,"creation_tsz":1453090766,"listing_id":264341749,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/106\/1\/11714832\/il_75x75.905608090_8nmv.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/106\/1\/11714832\/il_170x135.905608090_8nmv.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/106\/1\/11714832\/il_570xN.905608090_8nmv.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/106\/1\/11714832\/il_fullxfull.905608090_8nmv.jpg","full_height":566,"full_width":850},{"listing_image_id":905608554,"hex_code":"88898B","red":136,"green":137,"blue":139,"hue":220,"saturation":2,"brightness":54,"is_black_and_white":false,"creation_tsz":1453090766,"listing_id":264341749,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/138\/0\/11714832\/il_75x75.905608554_jxd7.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/138\/0\/11714832\/il_170x135.905608554_jxd7.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/138\/0\/11714832\/il_570xN.905608554_jxd7.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/138\/0\/11714832\/il_fullxfull.905608554_jxd7.jpg","full_height":566,"full_width":850},{"listing_image_id":905367097,"hex_code":"727479","red":114,"green":116,"blue":121,"hue":223,"saturation":5,"brightness":47,"is_black_and_white":false,"creation_tsz":1453090766,"listing_id":264341749,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/129\/0\/11714832\/il_75x75.905367097_sp3c.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/129\/0\/11714832\/il_170x135.905367097_sp3c.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/129\/0\/11714832\/il_570xN.905367097_sp3c.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/129\/0\/11714832\/il_fullxfull.905367097_sp3c.jpg","full_height":566,"full_width":850},{"listing_image_id":905611518,"hex_code":"7E7F84","red":126,"green":127,"blue":132,"hue":230,"saturation":4,"brightness":51,"is_black_and_white":false,"creation_tsz":1453090766,"listing_id":264341749,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/140\/0\/11714832\/il_75x75.905611518_hmmz.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/140\/0\/11714832\/il_170x135.905611518_hmmz.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/140\/0\/11714832\/il_570xN.905611518_hmmz.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/140\/0\/11714832\/il_fullxfull.905611518_hmmz.jpg","full_height":566,"full_width":850},{"listing_image_id":905608796,"hex_code":"B8B6B6","red":184,"green":182,"blue":182,"hue":0,"saturation":1,"brightness":72,"is_black_and_white":false,"creation_tsz":1453090766,"listing_id":264341749,"rank":5,"url_75x75":"https:\/\/img0.etsystatic.com\/139\/0\/11714832\/il_75x75.905608796_453c.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/139\/0\/11714832\/il_170x135.905608796_453c.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/139\/0\/11714832\/il_570xN.905608796_453c.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/139\/0\/11714832\/il_fullxfull.905608796_453c.jpg","full_height":1500,"full_width":874}],"Shop":{"shop_id":11714832,"shop_name":"AkabaTO","user_id":73006935,"creation_tsz":1442972458,"title":"Personalized Whiskey Decanter, Glass, Watch Box, Mens Gift, Groomsmen Gift","announcement":"Personalized glass, whiskey decanter, watch box.\r\n\r\nHow to place the order(special for whiskey decanter):\r\n\r\n1. Choose the version: \r\n    a. 1 single decanter\r\n    b. 1 decanter and 2 glasses set\r\n    c. 1 decanter and 2 glasses and a wooden box set \r\n\r\n2. Choose the design style you are interested in, please see the photos in the listing, marked with 1, 2, 3.....\r\n\r\n3. Choose the quantity and put in your cart\r\n\r\n4. Leave a note in the order mentioning the names or initials you need to display on the decanter, glasses and wooden boxes.\r\n\r\nThank you !","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"","digital_sale_message":"","last_updated_tsz":1456339101,"listing_active_count":23,"digital_listing_count":0,"login_name":"AkabaTOO","accepts_custom_requests":false,"policy_welcome":"Welcome to my shop !","policy_payment":"Paypal only","policy_shipping":"airmail, insurance not contained.\r\n\r\nFAST EXPRESS SHIPPING to the country: USA, UK, Australia, Hong Kong, Singapore, South Koran.\r\n\r\nEconimical Express SHIPPING to other countries, regions.","policy_refunds":"full or parital refund including shipping when damaged, lost or over ETA(the seller has the right to explain the condition of shipping time) arrive. the buyer have the right to get a resend if those situations happens.\r\n\r\nPersonalized products, if no quality problem, return or refund can not be accepted. I appreciate the understanding.","policy_additional":"","policy_seller_info":"","policy_updated_tsz":1452963558,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/AkabaTO?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":null,"num_favorers":68,"languages":["ja","en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":256218758,"state":"active","user_id":74216061,"category_id":68887312,"title":"Whiskey Sign (Rustic)","description":"The perfect Whiskey sign for the Mancave.\n\nMade using 3 1\/2&quot; Cedar slat boards for a rustic and original look and feel. Our signs are hand crafted with a lot of elbow grease... planning, sanding, staining, etc.. The iconic design is applied using the best overlaid film available. Top notch materials and time tested craftsmanship.   Only the best for Whiskey lovers.\n\n\nSign Details...\nApprox.23&quot; x 23&quot; x 1\/2&quot; (low profile)\n3.5&quot; Cedar Slat Boards\nApprox. 3 lbs (Light and Strong)\nPlaned - Sanded - Stained\nOverlaid Vinyl Design\n\nEASY HANGING...\n - 3M Command Strips  (recommended) \n-  Picture Wire  (recommended)\n-  Saw-tooth Hanging Clips  (recommended)\n-  Screws   (Be sure to pre-drill your holes)\n\n\nSince all of our items our handmade there may be slight variations from the images shown.  Our signs are meant to be &quot;Rustic&quot; and are not made like a lot of manufactured cookie cutter products. Wood knots, small holes and slight imperfections or blemishes may be present due to working with a natural stock like wood.\n\nPlease feel free to contact me with any questions.  I am always happy to help!\n\n.","creation_tsz":1456336289,"ending_tsz":1466787089,"original_creation_tsz":1447501099,"last_modified_tsz":1456336290,"price":"34.95","currency_code":"USD","quantity":48,"tags":["Man Cave","Whiskey","Vintage Whiskey","Whiskey Sign","groomsmen gifts","christmas gift","Mancave","Beer","Beer Signs","Beer Sign","Whiskey gifts"],"category_path":["Art"],"category_path_ids":[68887312],"materials":[],"shop_section_id":18533950,"featured_rank":null,"state_tsz":1447501099,"url":"https:\/\/www.etsy.com\/listing\/256218758\/whiskey-sign-rustic?utm_source=explorer&utm_medium=api&utm_campaign=api","views":585,"num_favorers":99,"shipping_template_id":20862180082,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":"53","item_weight_units":null,"item_length":"24","item_width":"24","item_height":"2","item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":["Rustic"],"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":false,"taxonomy_id":66,"taxonomy_path":["Art & Collectibles"],"used_manufacturer":false,"Images":[{"listing_image_id":917885899,"hex_code":"8C6341","red":140,"green":99,"blue":65,"hue":27,"saturation":53,"brightness":54,"is_black_and_white":false,"creation_tsz":1454849005,"listing_id":256218758,"rank":1,"url_75x75":"https:\/\/img1.etsystatic.com\/130\/0\/11831041\/il_75x75.917885899_r9dx.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/130\/0\/11831041\/il_170x135.917885899_r9dx.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/130\/0\/11831041\/il_570xN.917885899_r9dx.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/130\/0\/11831041\/il_fullxfull.917885899_r9dx.jpg","full_height":764,"full_width":622},{"listing_image_id":918139994,"hex_code":"8E6644","red":142,"green":102,"blue":68,"hue":28,"saturation":52,"brightness":55,"is_black_and_white":false,"creation_tsz":1454849005,"listing_id":256218758,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/138\/0\/11831041\/il_75x75.918139994_b9hg.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/138\/0\/11831041\/il_170x135.918139994_b9hg.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/138\/0\/11831041\/il_570xN.918139994_b9hg.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/138\/0\/11831041\/il_fullxfull.918139994_b9hg.jpg","full_height":1157,"full_width":1236},{"listing_image_id":918139996,"hex_code":"7C664C","red":124,"green":102,"blue":76,"hue":32,"saturation":38,"brightness":48,"is_black_and_white":false,"creation_tsz":1454849005,"listing_id":256218758,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/139\/0\/11831041\/il_75x75.918139996_ocbn.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/139\/0\/11831041\/il_170x135.918139996_ocbn.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/139\/0\/11831041\/il_570xN.918139996_ocbn.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/139\/0\/11831041\/il_fullxfull.918139996_ocbn.jpg","full_height":1214,"full_width":1214}],"Shop":{"shop_id":11831041,"shop_name":"DesignKraftSigns","user_id":74216061,"creation_tsz":1444697589,"title":"Design Kraft Signs & Gifts","announcement":"Our BOGO promotion is back by popular demand!  It won;t last forever so grab your favorite team sign or man cave wall hanger today before it&#39;s too late.\r\n\r\nBuy any sign and choose one FREE.  Any Team. Any Sign. ","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you for your order.\r\n\r\nWe hope you enjoy your sign as much as we enjoy making it.  Please do not hesitate to contact us with any questions or request.  We are always happy to help!.\r\n\r\nThank You,\r\nThe Design Kraft Team\r\nSigns@DesignKraftSigns.com","digital_sale_message":null,"last_updated_tsz":1456336290,"listing_active_count":104,"digital_listing_count":0,"login_name":"dksigns","accepts_custom_requests":true,"policy_welcome":"Welcome to Design Kraft Signs!  Creative, affordable and quality are the pillars of our service.  Come as a customer, leave as a friend.","policy_payment":"We accept all payments via Etsy.","policy_shipping":"Most items will ship within 3 business days from date of purchase.. We are one of the fastest!\r\n\r\n*Normal Production Time*\r\nCurrent production time is approximately 3 days  from date of purchase. If you need a sign by a specific date, please send a separate convo from the actual order so I can confirm that date. Most of the time I can accommodate these requests but please check with us first.\r\n\r\nThank you for your order! I will notify you as soon as it ships and provide tracking info.\r\n\r\nIf you have any questions please feel free to contact me... We are always happy to help!\r\n\r\nWe ship from Wisconsin via USPS. Please specify your mailing address if it&#39;s different than your registered Etsy address. Our shipping rates include shipping, handling and packaging costs.","policy_refunds":"100% Satisfaction Guaranteed!\r\n\r\nIf you are not satisfied with our products for any reason - just contact us and we will make it right with you.  Whether it&#39;s a replacement item or your money back we will do whatever it takes to keep our customers happy.","policy_additional":"During our promotions and special sales we usually get very busy and may need more time to complete orders.  Please allow us extra leeway during these times.","policy_seller_info":null,"policy_updated_tsz":1456071385,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/DesignKraftSigns?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/111\/0\/11831041\/iusb_760x100.16781700_j4yk.jpg","num_favorers":164,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/139\/0\/11831041\/isla_fullxfull.16777437_8pvd4a3f.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":127443913,"state":"active","user_id":28590404,"category_id":68887494,"title":"Personalized Whiskey Barrel,  1 or 2 or 3 Liter Mini Oak Whiskey Barrel - Groomsmen Gift - Father&#39;s Day Gift - Engraved Whiskey Barrel","description":"This is the perfect gift for that favorite liquor or wine connoisseur in your life.  It makes a great Groomsman, Wedding Party, Father&#39;s Day and Birthday Gift.  \n\nThis whiskey barrel is fully functional and can be used to age or store any spirit.  \n\nThis is a steel banded Oak Barrel\/Cask and it comes with its own stand, spigot and bung which makes for convenient serving and filling.  Each barrel\/cask has enclosed directions.  \n\n1 Liter Barrel measures 6.5 &quot; x 4.5&quot; x 4.5&quot;\n2 Liter Barrel measures 7.5\u201d x 5\u201d x 5\u201d\n3 Liter Barrel measures 8.5\u201d x 5.5\u201d x 5.5\u201d\n\nPersonalize in the notes to seller with:\n\n1. Name, initials or words up to 2 lines and 12 characters per line.\n2. Font choice\n\n\nThis is for one barrel. If you need a different amount, please contact me and I&#39;ll make a listing for exactly what you need at a discounted rate.\n\nFor other great groomsmen and men gifts click here:\n\nhttp:\/\/www.etsy.com\/shop\/MyPersonalMemories?section_id=13236312\n\nThank you for looking,\n\nKristin","creation_tsz":1456335464,"ending_tsz":1466786264,"original_creation_tsz":1364176646,"last_modified_tsz":1456335464,"price":"48.99","currency_code":"USD","quantity":61,"tags":["personalized gifts","whiskey barrel","groomsmen gift","groomsmen gifts","wedding party gifts","best man gift","wedding gift","groomsman gift","barrel","fathers day","wine barrel","whiskey barrels","personalized whiskey"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["wood","oak","brass"],"shop_section_id":13236312,"featured_rank":3,"state_tsz":1454599043,"url":"https:\/\/www.etsy.com\/listing\/127443913\/personalized-whiskey-barrel-1-or-2-or-3?utm_source=explorer&utm_medium=api&utm_campaign=api","views":56919,"num_favorers":2956,"shipping_template_id":6205180194,"processing_min":1,"processing_max":2,"who_made":"collective","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1633,"taxonomy_path":["Weddings"],"used_manufacturer":false,"Images":[{"listing_image_id":471699854,"hex_code":"8F765F","red":143,"green":118,"blue":95,"hue":29,"saturation":33,"brightness":56,"is_black_and_white":false,"creation_tsz":1371782304,"listing_id":127443913,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/005\/0\/7905522\/il_75x75.471699854_6a7p.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/005\/0\/7905522\/il_170x135.471699854_6a7p.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/005\/0\/7905522\/il_570xN.471699854_6a7p.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/005\/0\/7905522\/il_fullxfull.471699854_6a7p.jpg","full_height":992,"full_width":964},{"listing_image_id":906277939,"hex_code":"B2A291","red":178,"green":162,"blue":145,"hue":31,"saturation":18,"brightness":69,"is_black_and_white":false,"creation_tsz":1453223742,"listing_id":127443913,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/110\/0\/7905522\/il_75x75.906277939_7e38.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/110\/0\/7905522\/il_170x135.906277939_7e38.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/110\/0\/7905522\/il_570xN.906277939_7e38.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/110\/0\/7905522\/il_fullxfull.906277939_7e38.jpg","full_height":1500,"full_width":1500},{"listing_image_id":481243001,"hex_code":"957E6C","red":149,"green":126,"blue":108,"hue":26,"saturation":27,"brightness":58,"is_black_and_white":false,"creation_tsz":1374189569,"listing_id":127443913,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/021\/0\/7905522\/il_75x75.481243001_lvze.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/021\/0\/7905522\/il_170x135.481243001_lvze.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/021\/0\/7905522\/il_570xN.481243001_lvze.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/021\/0\/7905522\/il_fullxfull.481243001_lvze.jpg","full_height":787,"full_width":1003},{"listing_image_id":481208790,"hex_code":"AE8F73","red":174,"green":143,"blue":115,"hue":28,"saturation":33,"brightness":68,"is_black_and_white":false,"creation_tsz":1374189569,"listing_id":127443913,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/020\/0\/7905522\/il_75x75.481208790_csxq.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/020\/0\/7905522\/il_170x135.481208790_csxq.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/020\/0\/7905522\/il_570xN.481208790_csxq.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/020\/0\/7905522\/il_fullxfull.481208790_csxq.jpg","full_height":990,"full_width":974},{"listing_image_id":648485828,"hex_code":"989698","red":152,"green":150,"blue":152,"hue":300,"saturation":1,"brightness":59,"is_black_and_white":false,"creation_tsz":1409701823,"listing_id":127443913,"rank":5,"url_75x75":"https:\/\/img0.etsystatic.com\/039\/0\/7905522\/il_75x75.648485828_5pks.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/039\/0\/7905522\/il_170x135.648485828_5pks.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/039\/0\/7905522\/il_570xN.648485828_5pks.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/039\/0\/7905522\/il_fullxfull.648485828_5pks.jpg","full_height":793,"full_width":1068}],"Shop":{"shop_id":7905522,"shop_name":"MyPersonalMemories","user_id":28590404,"creation_tsz":1362773839,"title":"My Personal Memories","announcement":"Thank you for stopping by my shop!  My items will ship in 1-3 business days. If you would like to order 4 or more of an item, please email me for the discounted price.  Please email me with any questions.  Happy Shopping!","currency_code":"USD","is_vacation":false,"vacation_message":"Hi Everyone!  Thank you for a wonderful holiday season! All orders that have already been placed will be shipped as soon as possible. I will be back from vacation on Dec 28. Have a great holiday and wishing you many more Personal Memories. See you soon!","sale_message":"It is my pleasure to be doing business with you.  Your purchase will be in the mail in 1-3 business days.  Please email me with any questions.\r\n\r\nPlease click the link below and like my Facebook page for great coupons and deals as well as share your special occasion pictures and stories!!\r\n\r\nhttps:\/\/www.facebook.com\/MyPersonalMemories\r\n\r\nand follow my Pinterest page and pin your favorite items!!\r\n\r\nhttp:\/\/www.pinterest.com\/mypersmemories\/\r\n\r\nHave a wonderful day! \r\nKristin ","digital_sale_message":null,"last_updated_tsz":1456340748,"listing_active_count":487,"digital_listing_count":0,"login_name":"MyPersonalMemories","accepts_custom_requests":true,"policy_welcome":"Welcome to My Personal Memories!  I am Kristin, the shop owner, and am totally addicted to Personalized Gifts!  The thought of putting smiles on people&#39;s faces was the strongest influence of creating this company.  Giving and receiving a personalized good is the most heartfelt of gifts.  My company is based around family, friends and happiness. I am pleased and honored to give 10% of all proceeds to different organizations that are closest to my heart.  Thanks for stopping by and please visit my shop again!","policy_payment":null,"policy_shipping":"I strive for fast and efficient delivery.  Personalized items are usually shipped within 1-3 business days of ordering products.  Once I have shipped your item\/s, I will send you a shipping notification along with a tracking number to easily track your package.","policy_refunds":"My Personal Memories takes great pride in each and every personalized product sold and strives to create everlasting memories for each and every customer.  My products are inspected thoroughly before packaged for shipment.  If a product is damaged or defective, please contact My Personal Memories for a no cost exchange.  Understandably, personalized goods cannot be returned, unless there is a defect to the product. ","policy_additional":"Please include Personalization in the notes to seller.","policy_seller_info":null,"policy_updated_tsz":1401322791,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/MyPersonalMemories?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/102\/0\/7905522\/iusb_760x100.18166163_g8hz.jpg","num_favorers":4748,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/101\/0\/7905522\/isla_fullxfull.16531449_14tn2jeg.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":208931344,"state":"active","user_id":53317163,"category_id":69150425,"title":"Groomsmen Gift \u2013 Personalized Whiskey Decanter \u2013 Engraved","description":"Groomsmen Gift, Personalized Whiskey Decanter. This engraved whiskey decanter is the perfect men\u2019s gift. Personalized with the name of your choice, this custom whiskey decanter will be displayed with pride for years to come. It\u2019s a great gift for groomsmen, boyfriends, husbands and fathers alike.\n\nThis personalized liquor decanter is topped with a square glass stopper. Unlike many lightweight glass decanters you\u2019ll find, this guy has a heavy, solid base and weighs in at almost 3lbs. It will also hold 28oz (850ml) of his finest malted beverage. \n\nEach decanter comes in a beautiful gift box.\n\nSize: 8.5\u201d x 3.5\u201d x 3.5\u201d\n\n**DURING CHECKOUT**\nPlease leave your personalization request (name and birth year where applicable by design style) and preferred style in the Notes to Seller when you checkout.\n\nProcessing takes 3-5 business days. Shipping time takes additional 2-9 business days.\n\n* &quot;Ship Next Business Day&quot; option will ship next business day, only for orders received before 5pm PST. Orders received after 5pm PST will ship the following business day. Orders placed after 5pm PST on Thursday or on Friday, Saturday, or Sunday (before 5pm) will ship the following Monday.\n\nPlease contact us with any questions.\n\nPlease Note: \n*Whiskey not included (we would if we could!)\n**For orders outside of the USA, it is down to the discretion of the customs agency in your territory whether customs will be charged on the import of this item. It&#39;s unusual, but can happen. Any fees incurred are the responsibility of the purchaser.","creation_tsz":1456332065,"ending_tsz":1466782865,"original_creation_tsz":1414558231,"last_modified_tsz":1456332065,"price":"44.99","currency_code":"USD","quantity":616,"tags":["Groomsmen gift","Groomsmens gift","Customized decanter","Boyfriend gift","Fathers gift","whiskey decanter","Best mans gift","Unique mens gift","liquor decanter","Custom decanter","personalized gift","mens gift","glass decanter"],"category_path":["Housewares"],"category_path_ids":[69150425],"materials":["Glass"],"shop_section_id":16339825,"featured_rank":1,"state_tsz":1455920123,"url":"https:\/\/www.etsy.com\/listing\/208931344\/groomsmen-gift-personalized-whiskey?utm_source=explorer&utm_medium=api&utm_campaign=api","views":32068,"num_favorers":2129,"shipping_template_id":6742413491,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":"62","item_weight_units":null,"item_length":"13","item_width":"7","item_height":"7","item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":false,"taxonomy_id":891,"taxonomy_path":["Home & Living"],"used_manufacturer":false,"Images":[{"listing_image_id":745560744,"hex_code":"694933","red":105,"green":73,"blue":51,"hue":24,"saturation":51,"brightness":41,"is_black_and_white":false,"creation_tsz":1426976712,"listing_id":208931344,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/057\/3\/9997414\/il_75x75.745560744_9880.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/057\/3\/9997414\/il_170x135.745560744_9880.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/057\/3\/9997414\/il_570xN.745560744_9880.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/057\/3\/9997414\/il_fullxfull.745560744_9880.jpg","full_height":1255,"full_width":1500},{"listing_image_id":745663580,"hex_code":"806C4D","red":128,"green":108,"blue":77,"hue":36,"saturation":39,"brightness":50,"is_black_and_white":false,"creation_tsz":1426993091,"listing_id":208931344,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/059\/0\/9997414\/il_75x75.745663580_55fa.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/059\/0\/9997414\/il_170x135.745663580_55fa.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/059\/0\/9997414\/il_570xN.745663580_55fa.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/059\/0\/9997414\/il_fullxfull.745663580_55fa.jpg","full_height":1261,"full_width":1500},{"listing_image_id":742494260,"hex_code":"9F5B41","red":159,"green":91,"blue":65,"hue":17,"saturation":59,"brightness":62,"is_black_and_white":false,"creation_tsz":1426466116,"listing_id":208931344,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/055\/0\/9997414\/il_75x75.742494260_7p94.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/055\/0\/9997414\/il_170x135.742494260_7p94.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/055\/0\/9997414\/il_570xN.742494260_7p94.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/055\/0\/9997414\/il_fullxfull.742494260_7p94.jpg","full_height":1417,"full_width":1500},{"listing_image_id":745560818,"hex_code":"663D23","red":102,"green":61,"blue":35,"hue":23,"saturation":65,"brightness":40,"is_black_and_white":false,"creation_tsz":1426976713,"listing_id":208931344,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/054\/0\/9997414\/il_75x75.745560818_7bur.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/054\/0\/9997414\/il_170x135.745560818_7bur.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/054\/0\/9997414\/il_570xN.745560818_7bur.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/054\/0\/9997414\/il_fullxfull.745560818_7bur.jpg","full_height":1125,"full_width":1500},{"listing_image_id":674054119,"hex_code":"C2C0C0","red":194,"green":192,"blue":192,"hue":0,"saturation":1,"brightness":76,"is_black_and_white":false,"creation_tsz":1414558232,"listing_id":208931344,"rank":5,"url_75x75":"https:\/\/img1.etsystatic.com\/048\/0\/9997414\/il_75x75.674054119_sf0s.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/048\/0\/9997414\/il_170x135.674054119_sf0s.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/048\/0\/9997414\/il_570xN.674054119_sf0s.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/048\/0\/9997414\/il_fullxfull.674054119_sf0s.jpg","full_height":540,"full_width":720}],"Shop":{"shop_id":9997414,"shop_name":"SwankyBadgerDesign","user_id":53317163,"creation_tsz":1414552657,"title":"Personalized Groomsmen Gifts and Men&#39;s Gifts","announcement":"Unique, customized gifts for men, that will be displayed with pride for years to come. At Swanky Badger Design we believe in high-quality design, careful craftsmanship and providing you with amazing gifts to create forever moments with your friends and family.","currency_code":"USD","is_vacation":false,"vacation_message":"HELLO! WE ARE CURRENTLY TAKING A SHORT BREAK TO CATCH UP ON EXISTING ORDERS. PLEASE CHECK BACK IN AGAIN SOON. \r\nFOR ANY ORDERS PLACED FROM THIS POINT ON, WE UNFORTUNATELY CANNOT GUARANTEE DELIVERY BY VALENTINE\u2019S DAY \u2639\r\n","sale_message":"Thank you for choosing Swanky Badger Design for your gift purchase. ","digital_sale_message":null,"last_updated_tsz":1456339362,"listing_active_count":64,"digital_listing_count":0,"login_name":"swankybadger","accepts_custom_requests":true,"policy_welcome":"Here at Swanky Badger Design we believe in creating unique, customized gifts for men, that they will display with pride for years to come. We strive pride ourselves on the finest quality in design, careful craftsmanship and providing our customers with amazing gifts to create forever moments with your friends and family.","policy_payment":"We accept all major debit and credit cards via paypal or direct checkout.","policy_shipping":"Processing takes 3-5 business days for all orders\r\n\r\n* &quot;Ship Next Business Day&quot; option (when available) will ship next business day, only for orders received before 5pm PST. Orders received after 5pm PST will ship the following business day. Orders placed after 5pm PST on Thursday or on Friday, Saturday, or Sunday (before 5pm) will ship the following Monday.","policy_refunds":"\u2028Due to the nature of items we sell, personalized items are final sale.\r\n \u2028\u2028\r\nDamaged Items:\u2028 Please inform us of any damage within 48 hours of receipt of your order. Claims can be emailed along with a picture of the damage to qualify for our free replacement guarantee. ","policy_additional":null,"policy_seller_info":null,"policy_updated_tsz":1452108019,"policy_has_private_receipt_info":false,"vacation_autoreply":"Thanks for your message. We are taking a short break to catch up on orders but will be open again later this weekend. If you are emailing about an existing order we&#39;ll get back to you shortly. If you are enquiring about Valentine&#39;s delivery, unfortunately we cannot guarantee delivery for Valentine&#39;s Day gifts ordered from now onwards.","url":"https:\/\/www.etsy.com\/shop\/SwankyBadgerDesign?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/055\/0\/9997414\/iusb_760x100.14679509_rc02.jpg","num_favorers":3467,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img0.etsystatic.com\/076\/0\/9997414\/isla_fullxfull.15945070_6lc75krx.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":251297372,"state":"active","user_id":44075861,"category_id":68887494,"title":"8 Personalized Wedding Whiskey Glasses, Groomsmen Gifts, Custom Wedding Favors, Gifts for Groomsmen, Personalized Glasses","description":"8 Personalized Wedding Whiskey Glasses, Groomsmen Gifts, Custom Wedding Favors, Gifts for Groomsmen, Personalized Glasses\n\nCapacity: 10,14oz.","creation_tsz":1456323856,"ending_tsz":1466774656,"original_creation_tsz":1444378451,"last_modified_tsz":1456323856,"price":"82.00","currency_code":"USD","quantity":8,"tags":["Groomsmen Gifts","groomsmen pilsner","pilsner glasses","engraved glasses","wedding party favors","personalized glasses","gifts for groomsmen","gift for groomsmen","groomsmen gift","Whiskey Glasses"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["glasses","glass"],"shop_section_id":15528846,"featured_rank":null,"state_tsz":1456258863,"url":"https:\/\/www.etsy.com\/listing\/251297372\/8-personalized-wedding-whiskey-glasses?utm_source=explorer&utm_medium=api&utm_campaign=api","views":475,"num_favorers":86,"shipping_template_id":null,"processing_min":1,"processing_max":3,"who_made":"collective","is_supply":"false","when_made":"2010_2016","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":false,"taxonomy_id":1671,"taxonomy_path":["Weddings","Gifts & Mementos","Wedding Favors"],"used_manufacturer":false,"Images":[{"listing_image_id":820008594,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1444378452,"listing_id":251297372,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/070\/0\/9138920\/il_75x75.820008594_2juk.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/070\/0\/9138920\/il_170x135.820008594_2juk.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/070\/0\/9138920\/il_570xN.820008594_2juk.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/070\/0\/9138920\/il_fullxfull.820008594_2juk.jpg","full_height":1462,"full_width":1500},{"listing_image_id":694806423,"hex_code":"A39C9B","red":163,"green":156,"blue":155,"hue":8,"saturation":4,"brightness":63,"is_black_and_white":false,"creation_tsz":1444378452,"listing_id":251297372,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/056\/0\/9138920\/il_75x75.694806423_ebi0.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/056\/0\/9138920\/il_170x135.694806423_ebi0.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/056\/0\/9138920\/il_570xN.694806423_ebi0.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/056\/0\/9138920\/il_fullxfull.694806423_ebi0.jpg","full_height":1155,"full_width":1500}],"Shop":{"shop_id":9138920,"shop_name":"BridesmaidGiftHanger","user_id":44075861,"creation_tsz":1391795278,"title":"BridesmaidGiftHanger","announcement":"Dear clients and customers of our store!\r\nDue to upcoming HOLIDAYS and the workload in the POST, we have to extend delivery  time of 14 to 30 days from the date of dispatch of the items.\r\n\r\nI do not take urgent orders at this time, so sorry!\r\n\r\nShipping Info:\r\nUS Orders: 14 - 30 days via USPS Priority Mail\r\nInternational orders *: 14 - 30 days via Priority air Mail","currency_code":"USD","is_vacation":false,"vacation_message":"Now our shop on vacation from May 12 to May 19.\r\nOur team takes a break, because we have a lot of orders. Items that have been purchased from 5 to 12 May will be shipped this week.\r\n\r\nRegards, Administration BridesmaidGiftHanger","sale_message":"","digital_sale_message":"","last_updated_tsz":1456329499,"listing_active_count":476,"digital_listing_count":0,"login_name":"studiozubko","accepts_custom_requests":true,"policy_welcome":"Welcome to Bridesmaid GiftHangershop!\r\nWe hope you enjoy shopping with us.","policy_payment":"We accept payment \r\n-Pay-Pal\r\nAll items must be paid for in full before work will be started. \r\nIf you have any questions or suggestions please contact me.","policy_shipping":"All items are shipped using Priority Air Mail .\r\nRaw terms for the deliveries:\r\n\r\n- USA: 14 - 20 days\r\n- Australia: 20-25 days\r\n- Europe: 14 - 20 days\r\n- Other countrys : 20 days\r\n\r\nWorldwide shipping on all items with Tracking ID\r\n\r\nIMPORTANT: When you place your order you may opt for registered shipping by requesting a tracking number in order notes, for which we won\u2019t extra charge you.\r\n\r\nAny question,please message us freely.\r\n\r\nThe buyer is responsible for all custom fees and taxes\r\n\r\nThanks","policy_refunds":"Our main goal with is your full satisfaction - we are happy only when you are with your purchase!\r\nPlease, feel free to contact us with any problems - we will do our best to fix it immadiately!\r\nThere should never be a reason to leave negative feedback as we will always do our very best to ensure you are happy! If there is ever anything wrong with your order, please give us the chance to make it right. \r\n\r\nIf you find that your order was done incorrectly, we would be very happy to either correct your order or completely refund it 100%. You must message us BEFORE leaving a review and within 7 days of receiving your purchase.\r\nShould you wish to return the purchased item please contact us directly.\r\nHowever, we do not accept returns of custom-made products.\r\n\r\nIf you decide you don&#39;t like your item or find it just doesn&#39;t work, please message us and we&#39;ll do our best to help. This is NOT a guarantee that we refund you, as handmade items are made custom just for you. \r\n\r\nIf you have problem wih delivery, tracking or PACKAGES is lost....\r\nIn the event that your package is LOST or doesn&#39;t arrive; please let us know as soon as it reaches its past due arrival date. Sometimes delays can happen, so it&#39;s not always the case that your package is missing. Very often, your package in the Post office and you must pick it up. Sometimes USPS have problem with tracking system.","policy_additional":"Wholesales orders are a top priority for BridesmaidGiftHanger, therefore all retailers interested in our products are more than welcomed to contact us at any time. Those interested in selling our products and becoming our partners will benefit from significant discounts based on the quantity of products.\r\n\r\n\r\nAll products are made in a smoke free environment.","policy_seller_info":"","policy_updated_tsz":1447274712,"policy_has_private_receipt_info":false,"vacation_autoreply":"","url":"https:\/\/www.etsy.com\/shop\/BridesmaidGiftHanger?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/076\/0\/9138920\/iusb_760x100.15801070_pacl.jpg","num_favorers":1964,"languages":["ru","de","en-US","es","fr","it"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img0.etsystatic.com\/122\/0\/9138920\/isla_fullxfull.17028282_gd7zvydc.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":231280613,"state":"active","user_id":56095326,"category_id":68887494,"title":"Hand Engraved Monogrammed Whiskey Rocks Glasses: Set of Two","description":"You and your friends will enjoy a fine whiskey or scotch in your very own hand engraved monogrammed rocks glasses. They are great quality lead-free crystal and make fantastic gifts for the groomsmen in your bridal party! \n\nGlasses are available in two sizes:\n14 ounces...4&quot; tall\n11 ounces...3 1\/2&quot; tall\n\nNeed a different quantity? Send us a convo and we&#39;d be more than happy to fulfill your request. \n\nPrice includes a date on the bottom and one name or set of initials on each glass in block font. Please keep in mind that the larger initial in the center is typically the initial of the last name. When sending your requests, please indicate which letter you would like in the center.\n\nCheck out our other listings for alternative style, font and monogramming options!\n\nTo ensure swift delivery, please send us your personalization requests via the &quot;notes to seller&quot; form at time of purchase with your order. Because the engraving is done by hand, both glasses can be identical or each glass can have a unique personalization on it if necessary. Just let us know! Thanks!\n\nGlasses are dishwasher safe.\n\nFollow us on Facebook to stay up to date on our newest listings and sales at:\nwww.facebook.com\/EtsyEngravedCrystal","creation_tsz":1456334377,"ending_tsz":1466785177,"original_creation_tsz":1430055799,"last_modified_tsz":1456334377,"price":"16.00","currency_code":"USD","quantity":11,"tags":["Customized Glasses","Monogrammed Glasses","Bridal Party Gifts","Double Old Fashioned","On The Rocks Glasses","Gifts for Men","Groomsmen Gifts","Rocks Glasses","Whiskey Glasses","EngravedCrystal","Personalized Glasses","Gifts for Drinkers","Christmas Gifts"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["Stone","Crystal","Glass","Wheel"],"shop_section_id":16571626,"featured_rank":null,"state_tsz":1454890262,"url":"https:\/\/www.etsy.com\/listing\/231280613\/hand-engraved-monogrammed-whiskey-rocks?utm_source=explorer&utm_medium=api&utm_campaign=api","views":2958,"num_favorers":186,"shipping_template_id":11661333728,"processing_min":3,"processing_max":5,"who_made":"collective","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1668,"taxonomy_path":["Weddings","Gifts & Mementos","Groomsmen Gifts"],"used_manufacturer":false,"Images":[{"listing_image_id":864789418,"hex_code":"554A41","red":85,"green":74,"blue":65,"hue":27,"saturation":23,"brightness":33,"is_black_and_white":false,"creation_tsz":1447000447,"listing_id":231280613,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/130\/0\/10258922\/il_75x75.864789418_leux.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/130\/0\/10258922\/il_170x135.864789418_leux.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/130\/0\/10258922\/il_570xN.864789418_leux.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/130\/0\/10258922\/il_fullxfull.864789418_leux.jpg","full_height":1500,"full_width":1500},{"listing_image_id":763160904,"hex_code":"6D675C","red":109,"green":103,"blue":92,"hue":39,"saturation":15,"brightness":42,"is_black_and_white":false,"creation_tsz":1430055799,"listing_id":231280613,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/057\/0\/10258922\/il_75x75.763160904_o9fa.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/057\/0\/10258922\/il_170x135.763160904_o9fa.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/057\/0\/10258922\/il_570xN.763160904_o9fa.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/057\/0\/10258922\/il_fullxfull.763160904_o9fa.jpg","full_height":1500,"full_width":1500},{"listing_image_id":763160888,"hex_code":"908477","red":144,"green":132,"blue":119,"hue":31,"saturation":17,"brightness":56,"is_black_and_white":false,"creation_tsz":1430055799,"listing_id":231280613,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/065\/0\/10258922\/il_75x75.763160888_5vpj.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/065\/0\/10258922\/il_170x135.763160888_5vpj.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/065\/0\/10258922\/il_570xN.763160888_5vpj.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/065\/0\/10258922\/il_fullxfull.763160888_5vpj.jpg","full_height":1500,"full_width":1500},{"listing_image_id":763160900,"hex_code":"67544A","red":103,"green":84,"blue":74,"hue":21,"saturation":28,"brightness":40,"is_black_and_white":false,"creation_tsz":1430055799,"listing_id":231280613,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/055\/0\/10258922\/il_75x75.763160900_2vnt.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/055\/0\/10258922\/il_170x135.763160900_2vnt.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/055\/0\/10258922\/il_570xN.763160900_2vnt.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/055\/0\/10258922\/il_fullxfull.763160900_2vnt.jpg","full_height":1500,"full_width":1500},{"listing_image_id":864553655,"hex_code":"56514B","red":86,"green":81,"blue":75,"hue":33,"saturation":12,"brightness":33,"is_black_and_white":false,"creation_tsz":1447000447,"listing_id":231280613,"rank":5,"url_75x75":"https:\/\/img1.etsystatic.com\/128\/0\/10258922\/il_75x75.864553655_6j0w.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/128\/0\/10258922\/il_170x135.864553655_6j0w.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/128\/0\/10258922\/il_570xN.864553655_6j0w.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/128\/0\/10258922\/il_fullxfull.864553655_6j0w.jpg","full_height":1500,"full_width":1500}],"Shop":{"shop_id":10258922,"shop_name":"EngravedCrystal","user_id":56095326,"creation_tsz":1416191793,"title":"Hand Engraved Crystal Artwork & Personalized Gifts","announcement":"***Welcome! Be sure to get your Valentine&#39;s Day orders in before February 8th to ensure on-time delivery!***\r\n","currency_code":"USD","is_vacation":false,"vacation_message":"We&#39;re currently celebrating the holidays with our family! We&#39;ll be re-opening Monday, December 28th. \r\n\r\nWe wish you the happiest of holidays!!!\r\n\r\n~EngravedCrystal~","sale_message":"Thank you so much for your order. We really appreciate your business!\r\n\r\nLike us on Facebook for quick shop updates, coupon codes and new listings at:\r\nwww.facebook.com\/EtsyEngravedCrystal\r\n\r\nHappy Etsying! :)\r\n","digital_sale_message":null,"last_updated_tsz":1456334377,"listing_active_count":66,"digital_listing_count":0,"login_name":"Trina0688","accepts_custom_requests":true,"policy_welcome":"Welcome! Feel free to browse around EngravedCrystal where you will find distinctive crystal creations done by glass engraver, David Micglire. Diamond, stone and copper wheels are used along with the artist&#39;s imaginative visions to create these exquisite pieces.\r\n\r\nWe take great pride in our work and love satisfying our customers. Should you have any questions or special requests, please don&#39;t hesitate to reach out and contact us.\r\n\r\nThanks for stopping by!","policy_payment":"EngravedCrystal accepts payments from Visa, Mastercard, American Express and Discover. We also accept Etsy gift cards.","policy_shipping":"Based out of Central Florida, we ship to the United States only using either USPS Priority Mail or UPS. We will provide you with a tracking number as soon as your item is shipped. We do our best to fulfill orders as soon as possible. However, if you are under a time constraint and need an order rushed, please let us know and we will do our best to expedite your order.\n\nThanks!","policy_refunds":"We pack each of our items with great care. However, if you receive an item that is damaged, please notify us right away and we will do our best to either replace the item or refund your purchase. If possible, please include a photograph with your notification. \n\nIn addition, if you receive an item and the personalization differs from what you requested, please make us aware by providing a photo and a brief description of the error and we will do our best to correct it as quickly as possible.\n\nThanks!","policy_additional":null,"policy_seller_info":null,"policy_updated_tsz":1454122930,"policy_has_private_receipt_info":false,"vacation_autoreply":"We&#39;re currently celebrating the holidays with our family! We&#39;ll be re-opening Monday, December 28th. \r\n\r\nIf you need to get in contact with us for something urgent, I can be reached via email at Trina0688@comcast.net.\r\n\r\nWe wish you the happiest of holidays!!!\r\n\r\n~EngravedCrystal~\r\n\r\n","url":"https:\/\/www.etsy.com\/shop\/EngravedCrystal?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/046\/0\/10258922\/iusb_760x100.14744770_fppu.jpg","num_favorers":162,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/116\/0\/10258922\/isla_fullxfull.17099871_mz0qvp6a.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":193808539,"state":"active","user_id":43168721,"category_id":68887494,"title":"Whiskey Barrel - 2 Liter Personalized Mini Oak Whiskey Barrel - Groomsmen Gift - Wedding Party Gift - Handcrafted Toasted American White Oak","description":"Personalized Engraved Whiskey Barrel \/ Whiskey Keg Handcrafted from American White Oak and Personalized just for YOU. \n\nGive a special gift to your groomsmen or bridesmaids that is both personalized and fun!\n\nAdd the special name of the recipient and his or her monogram on each Personalized Whiskey Barrel . Each Personalized Whiskey Barrel is a fun way to express your gratitude and last as a reminder of your special day. It&#39;s a great gift that they&#39;ll use for years. \n\nWIth your choice of BLACK, GALVANIZED steel, or BRASS hoops,  our  toasted Whiskey Barrels are perfect for aging spirits in small 2 liter batches.  Discover oak barrel-aged  Wine, Beer, Tequila, Brandy, Whiskey, Scotch, Bourbon, Rum, Cognac or any spirit. \n\nPair each personalized Personalized Whiskey Barrel with our rocks glass set or our  personalized coaster set\n\nwww.etsy.com\/listing\/221717083\/rocks-glass-set-monogram-glass-set\nwww.etsy.com\/listing\/200957916\/glass-coaster-set-of-4-personalized\n\n\n~~~~~~~~~~~~~\nAt checkout, please include the following for the personalization for your barrel:\nWhiskey name (Forty-Something is shown)\nDistillery name (last name of recipient)\nDistillery location (hometown of recipient)\nEstablished Year\n\n~~~~~~~~~~~~~\n\n2 Liter  (2.11 quarts) \nHeight 7 1\/2 \u201c\nDiameter of Head  5 1\/4 \u201c \nDiameter of Bilge\/Belly 6 1\/4 \u201c \n\nWe have a 3 Liter Mini Whiskey Barrel too:\nhttps:\/\/www.etsy.com\/listing\/257431374\/whiskey-barrel-3-liter-personalized-mini\n\n\nEach Personalized Whiskey Barrel comes complete with its own stand, bung and spigot.\n\nOur laser engraved Personalized Whiskey Barrel are the perfect gift and make a fun wedding favor and keepsake. Also a great gift for a birthday, Anniversary, Retirement, Achievement, Father&#39;s Day, Thank You, and more. \t\n\n\nWeddings personalized gifts whiskey barrel groomsmen gift groomsmen gifts fathers day gift wedding party giftwedding party gifts best man gifts best man gift custom best man gift wedding gift groomsman gift barrel","creation_tsz":1456337349,"ending_tsz":1466788149,"original_creation_tsz":1403371150,"last_modified_tsz":1456337349,"price":"59.95","currency_code":"USD","quantity":6,"tags":["whiskey barrel","personalized barrel","groomsmen gift","groomsman gift","wedding party gift","wedding party","best man gift","engraved beer barrel","home brew","oak barrel","laser engraved","custom barrel","engraved barrel"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["oak","steel","wood"],"shop_section_id":14876575,"featured_rank":2,"state_tsz":1456334203,"url":"https:\/\/www.etsy.com\/listing\/193808539\/whiskey-barrel-2-liter-personalized-mini?utm_source=explorer&utm_medium=api&utm_campaign=api","views":19886,"num_favorers":626,"shipping_template_id":7700499418,"processing_min":null,"processing_max":null,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1668,"taxonomy_path":["Weddings","Gifts & Mementos","Groomsmen Gifts"],"used_manufacturer":false,"Images":[{"listing_image_id":617582620,"hex_code":"897961","red":137,"green":121,"blue":97,"hue":36,"saturation":29,"brightness":53,"is_black_and_white":false,"creation_tsz":1403371150,"listing_id":193808539,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/035\/1\/9052662\/il_75x75.617582620_rhxk.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/035\/1\/9052662\/il_170x135.617582620_rhxk.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/035\/1\/9052662\/il_570xN.617582620_rhxk.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/035\/1\/9052662\/il_fullxfull.617582620_rhxk.jpg","full_height":537,"full_width":700},{"listing_image_id":617703843,"hex_code":"A18C75","red":161,"green":140,"blue":117,"hue":31,"saturation":27,"brightness":63,"is_black_and_white":false,"creation_tsz":1403371150,"listing_id":193808539,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/026\/0\/9052662\/il_75x75.617703843_iuyg.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/026\/0\/9052662\/il_170x135.617703843_iuyg.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/026\/0\/9052662\/il_570xN.617703843_iuyg.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/026\/0\/9052662\/il_fullxfull.617703843_iuyg.jpg","full_height":525,"full_width":700},{"listing_image_id":629052314,"hex_code":"808077","red":128,"green":128,"blue":119,"hue":60,"saturation":7,"brightness":50,"is_black_and_white":false,"creation_tsz":1405722060,"listing_id":193808539,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/042\/0\/9052662\/il_75x75.629052314_6s8x.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/042\/0\/9052662\/il_170x135.629052314_6s8x.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/042\/0\/9052662\/il_570xN.629052314_6s8x.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/042\/0\/9052662\/il_fullxfull.629052314_6s8x.jpg","full_height":525,"full_width":700},{"listing_image_id":906307137,"hex_code":"938370","red":147,"green":131,"blue":112,"hue":33,"saturation":23,"brightness":57,"is_black_and_white":false,"creation_tsz":1453226620,"listing_id":193808539,"rank":4,"url_75x75":"https:\/\/img1.etsystatic.com\/109\/0\/9052662\/il_75x75.906307137_tm2e.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/109\/0\/9052662\/il_170x135.906307137_tm2e.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/109\/0\/9052662\/il_570xN.906307137_tm2e.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/109\/0\/9052662\/il_fullxfull.906307137_tm2e.jpg","full_height":750,"full_width":1000},{"listing_image_id":896246785,"hex_code":"8C8E87","red":140,"green":142,"blue":135,"hue":77,"saturation":4,"brightness":55,"is_black_and_white":false,"creation_tsz":1451744026,"listing_id":193808539,"rank":5,"url_75x75":"https:\/\/img1.etsystatic.com\/133\/1\/9052662\/il_75x75.896246785_aszw.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/133\/1\/9052662\/il_170x135.896246785_aszw.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/133\/1\/9052662\/il_570xN.896246785_aszw.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/133\/1\/9052662\/il_fullxfull.896246785_aszw.jpg","full_height":468,"full_width":468}],"Shop":{"shop_id":9052662,"shop_name":"SummitEngravingLtd","user_id":43168721,"creation_tsz":1390257346,"title":"Engraved gifts to celebrate every special occasion!","announcement":"We are currently shipping in 2-3 days.  Priority shipping upgrades are available. Thank you for shopping with us.   Summit Engraving Ltd features personalized engraved gifts and favors for every occasion.\r\n\r\nWedding, Groomsman, Bridesmaid,  Birthday, Anniversary, Graduation, House Warming, Bon Voyage, Favors\r\n\r\nWe Specialize in: Personalized Wedding Gifts, Personalized Groomsmen Gifts, Personalized Bridesmaids Gifts, Personalized Luggage Tags, and more\r\n\r\n\u2606\u00b8\u00b8.\u2606\u00b8\u00b8.\u2606 Thank you for shopping with us! \u2606\u00b8\u00b8.\u2606\u00b8\u00b8.\u2606","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you for your order.  \r\n\r\nPLEASE NOTE that we are not able to use email to communicate from Etsy, due to the high number of hacked customer email accounts we have experienced.  We only use Etsy Convo, which keeps things streamlined for all of us.\r\n\r\nIF YOU HAVE ORDERED A PERSONALIZED ITEM please make sure that you have provided the  information exactly in the order it should appear.  We will engrave your item exactly as you supply the information.   As a reminder for monogrammed items, traditional monograms use the following lettering: for the name John Fitzgerald Kennedy, the traditional monogram order would be j-K-f.\r\n\r\nBREAKAGE POLICY\r\n\r\nWe go to great lengths to be sure your purchase and products arrive safe and sound.  As shipping is completely out of our control, breakage does sometimes occur.\r\n\r\nALL DAMAGE CLAIMS MUST BE MADE WITH 48 HOURS OF DELIVERY SHOWN ON TRACKING NUMBER (usually USPS).\r\n\r\nWe will file a shipping claim on your behalf and work to get you a replacement as soon as possible.  PLEASE NOTE that ALL CARRIERS REQUIRE photographs of the packing material AND the damage items, SHOWING PERSONALIZATION, where applicable.  Work or replacement items cannot begin until we have required photographs.\r\n\r\nThank you for shopping at Summit Engraving.  We invite you to share your experience with the Etsy community by leaving your feedback.  We can help you make just about any idea a reality when it comes to custom engraved gifts and accessories.  \r\n\r\nSummitEngravingLtd.Etsy.com","digital_sale_message":null,"last_updated_tsz":1456340089,"listing_active_count":260,"digital_listing_count":0,"login_name":"SummitEngravingLtd","accepts_custom_requests":false,"policy_welcome":"Thank you for shopping with us. Summit Engraving Ltd features personalized engraved gifts and favors for every occasion.\r\n\r\nWedding, Birthday, Anniversary, Graduation, House Warming, Bon Voyage, Favors\r\n\r\nWe Specialize in: Personalized Wedding Gifts, Personalized Groomsmen Gifts, Personalized Bridesmaids Gifts, Personalized gifts for the Bride and Groom, Personalized Picture Frames, and more\r\n\r\n\u2606\u00b8\u00b8.\u2606\u00b8\u00b8.\u2606 Thank you for shopping with us! \u2606\u00b8\u00b8.\u2606\u00b8\u00b8.\u2606\r\n\r\n~Amy","policy_payment":"Summit Engraving Ltd accepts  payment via direct checkout or PayPal. If you are paying by PayPal eCheck, we do reserve the right to hold shipping until payment has cleared.\r\n\r\nThanks for shopping with us, we truly appreciate your business, and your satisfaction is why we do what we do.","policy_shipping":"We typically ship via USPS First Class Mail or USPS Priority Mail unless otherwise noted. \r\n\r\nPlease note that we cannot guarantee specific delivery dates and\/or times as USPS offers only delivery estimates and that delivery is out of our control once received by the post office.  For this reason, please allow ample time for us to personalize your item and ship it to you so that you receive it with time to spare. \r\n","policy_refunds":"All of our products are custom made to order. This being the case, we consider all of our products to be custom products, and we do not have the ability to exchange a product once it is produced. \r\n\r\nTo that end we are committed to making sure you receive exactly what you ordered. If there is any mistake made on our part, or any issue with defects in materials and\/or workmanship, we will stand behind our products 100%. In such rare circumstance we will gladly and speedily replace said item, or provide a refund, as you prefer.","policy_additional":"BREAKAGE POLICY\r\n\r\nWe go to great lengths to be sure your purchase and products arrive safe and sound.  As shipping is completely out of our control, breakage does sometimes occur.\r\n\r\nALL DAMAGE CLAIMS MUST BE MADE WITH 48 HOURS OF DELIVERY SHOWN ON TRACKING NUMBER (usually USPS).\r\n\r\nWe will file a shipping claim on your behalf and work to get you a replacement as soon as possible.  PLEASE NOTE that ALL CARRIERS REQUIRE photographs of the packing material AND the damage items, SHOWING PERSONALIZATION, where applicable.  Work or replacement items cannot begin until we have required photographs.\r\n\r\nOAK BARREL INFO:\r\n\r\nThere are lots of oak barrel makers out there (with lots of different theories and practices) and there is lots of info on the Web. We suggest learning more if you have specific questions. Here are some helpful tips we found online (this is just a general summary of information and not meant to be complete):\r\n\r\n\u2022 As the barrels are a wood product, they are subject to the wood drying and shrinking.\r\n\u2022 In order for the spigot to flow freely, please remember to remove the bung\/cork before you open the spigot ... pour from the spigot ... then close the spigot and finally ... replace the bung\/cork. \r\n\u2022 To keep your barrels performing and looking their best, please keep them stored in a protected area away from the elements and optimally in a cool and relatively humid area. \r\n\u2022 Barrels with painted black steel hoops are particularly susceptible to moisture. A little care goes a long way. Prevent excessive staining and rust by keeping the exterior of the barrel dry.\r\n\u2022 Avoid water stains by using a funnel to carefully fill your new barrel. \r\n\u2022 Sandpaper will generally remove any stains or marks on the barrel. \r\n\u2022 As the barrels are handcrafted, liquid volume is approximate. \r\n\u2022 You should be able to reuse your barrel from 3-5 times ... remember that each aging will take longer than the previous one. \r\n\u2022 Please do not nail or put screws into the hoops or staves as doing so will compromise the oak and might cause damage. \r\n\u2022 If you want to age a different type of spirit then was initially aged in it, we recommend you use a new barrel. \r\n\u2022 For your safety, if using chemicals to clean\/sanitize your barrels, please follow the manufacturer\u2019s instructions for proper use.\r\n\u2022 The spirit can age anywhere from one week to one-year, but it&#39;s recommended that you take a small taste test every two weeks.  Remember to only take a small taste to ensure the top of the barrel does not get dry to avoid leaking and losing your spirit to the &#39;Angel&#39;s Share.&#39;  Once the spirit reaches your perfect taste, empty the spirit into a decanter and restart the process!\r\n\r\nAngel\u2019s Share.\r\nAngel\u2019s Share is a fancy name for evaporation. Since mini-barrel staves are thinner than normal distillery size 53-gallon barrel staves, there is a higher \u201cangel\u2019s share\u201d, thus higher evaporation. To avoid this evaporation, make sure you follow the instructions and 1) fill the barrel to the very top when first filling the barrel with your spirit; and 2) keep the top of the barrel moist after using the barrel by rolling the liquid around every couple of days. As previously mentioned, we recommend taking very small taste-tests every two weeks to ensure much of the top of the barrel does not become dry.&quot;\r\n\r\nStoring your Empty Barrel After Initial Use \r\nIdeally, your barrel would always be filled. Used barrels require no special preparation beyond a simple water rinse, if desired, when transferring out and in immediately. If used barrels are to be stored empty, rinse them several times with clean water, and drain thoroughly. Remove the spigot and bung to promote air flow and store out of sunlight and in a cool (55\u00b0 \u2013 60\u00b0) and optimally humid (65% - 75%) area. \r\n\r\nAn alternative is to fill and store barrels with a sulfur-citric holding solution (recipes are online). This holding solution promotes sanitation and keeps the barrels swelled and smelling sweet however ... it will strip some of the oaks flavors. For your safety and the safety of your family, always follow manufacturers\u2019 guidelines and instructions for the proper use of chemicals. \r\n\r\n","policy_seller_info":"Amy Werninger\r\n9 Stone Pound Lane\r\nAtkinson, NH 03811\r\nSummitEngraving@gmail.com","policy_updated_tsz":1446905693,"policy_has_private_receipt_info":true,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/SummitEngravingLtd?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/033\/0\/9052662\/iusb_760x100.14372376_mdth.jpg","num_favorers":794,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":241617145,"state":"active","user_id":63414714,"category_id":68887494,"title":"Personalized Groomsmen gift set Engraved Glass Whiskey decanter 17 oz & 2 glasses Groom set Groomsman gift set Best men gift Groom gift","description":"This set includes 1 whiskey decanters & 2 glasses.\n\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\nBUYING SET OF 5 OR MORE YOU GET A DISCOUNT AND SAVE ON SHIPPING\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n\nSet of 5: https:\/\/www.etsy.com\/ru\/listing\/244276757\/5-sets-personalized-groom-gift-glass?ref=shop_home_active_20\n\nSet of 6: https:\/\/www.etsy.com\/ru\/listing\/241906638\/6-sets-personalized-glass-whiskey?ref=shop_home_active_10\n\nSet of 7: https:\/\/www.etsy.com\/ru\/listing\/241906964\/7-sets-personalized-glass-whiskey?ref=shop_home_active_2\n\nSet of 8: https:\/\/www.etsy.com\/ru\/listing\/241802551\/8-sets-personalized-glass-whiskey?ref=shop_home_active_4\n\nSet of 9: https:\/\/www.etsy.com\/ru\/listing\/241802797\/9-sets-personalized-glass-whiskey?ref=shop_home_active_7\n\nSet of 10: https:\/\/www.etsy.com\/ru\/listing\/241802905\/10-sets-personalized-glass-whiskey?ref=shop_home_active_6\n\nSet of 11: https:\/\/www.etsy.com\/ru\/listing\/244236841\/11-sets-personalized-glass-whiskey?ref=shop_home_active_17\n\nSet of 12: https:\/\/www.etsy.com\/ru\/listing\/244339564\/12-sets-personalized-glass-whiskey?ref=shop_home_active_16\n\n\nDecanter Specifications:\n\n- MELTING OF THE GLASS AND FORMING THE CARAFE IS MADE ON THE EQUIPMENT OF LEADING ITALIAN AND GERMAN MANUFACTURERS. HIGH DEGREE OF AUTOMATION OF PRODUCTION, THE MINIMUM PROPORTION OF MANUAL LABOR GUARANTEES HIGH QUALITY OF MANUFACTURED PRODUCTS.\n\nFinished products undergo strict control in a certified laboratory, and is accompanied by a CERTIFICATE OF QUALITY.\n\n- HIGH-QUALITY GLASS LEAD-FREE\n- Decanter holds 17 oz. (0.5 liter)\n- Dimensions: 8,3&quot;H x 3-1\/2&quot;W (21 cm x 9 cm)\n\nGlasses:\n- 6 3\/4 oz. (205 ml)\n\nThe perfect gift! Custom Engraved decanter!\n\nBachelor&#39;s Party Gift\n    GENTLEMEN! Don&#39;t arrive to your best friend&#39;s bachelor&#39;s party with just a bottle of whisky or vodka! Bring along these custom engraved tumblers so you can all share in the celebration! We will engrave names, or any other words you choose, so the soon-to-be-groom will not only have a set of useful tumblers he can use every day, but they will also give him a great memory of his last days of bachelor freedom.\n\nEngraved Decanter will make a perfect gift for yourself and\/or another who likes to class it up with their own personalized barware collection!\n\nDecanter make a unique and touching gift for man or special memory. Perfect for wedding gift, anniversary gift, housewarming gift, Valentines Day gift, Father&#39;s Day gift, kitchen decor or special occasion mementos. Decanter can even be given out as personalized wedding favors groomsmen, couples, and parents.\n\nWhat says more about your good taste than an engraved decanter? Crafted from HIGH-QUALITY GLASS LEAD-FREE!\nit makes a classic style statement in your own home, or a distinctive present for groomsmen or just him.\n\n\n----------------HOW TO PLACE YOUR ORDER:-------------------\n\n1. Select the quantity and Style from the Drop Down Menu on this listing. Add to your cart.\n\n2. When you check out, please make sure the shipping address is correct. If you want to ship it directly to the recipient, please change the shipping address at this time.\nMULTIPLE ADDRESSES CANNOT BE ADDED TO ONE ORDER. IF YOU ARE BUYING MANY ITEMS AND WANT EACH OF THEM TO GO TO A DIFFERENT ADDRESS, THEY MUST BE DONE AS SEPARATE ORDERS! \n\n3. ADDING THE PERSONALIZATION TO YOUR ORDER: As you check out you will see a \u201cNotes to Seller\u201d section. This is where you will put the personalization details of your order. What is personalized on the decanter and glasses in the listing (letter, last name, first names, etc...), will be replaced with the details that you provide here.\n\n\n-----------------------LAYOUT DESIGN--------------------------\n\n\u2022 If you would like a proof please let us know in the &quot;note to seller&quot; box during check-out and we will send your proof via Etsy conversations within 2 business days after the order has been received. Otherwise, we will use your text that you provide during check-out.\nALL COMMUNICATION IS TO BE THROUGH THE ETSY CONVERSATION SYSTEM.\n\n\u2022 If you requested a proof, please respond to us with your approval or request for edits within 2 days. If the approval is not received before the end of the 2 day period we will then we will proceed with manufacturing as per your notes to seller.\n\n\n------------SHIPPING INFORMATION:--------------------\n- Shipping worldwide from Ukraine\n- We guarantee shipping within 3-5 working days after payment\n- The delivery time from Ukraine: 10-25 days\n- Item will be quality packed with tracking numbers","creation_tsz":1456332608,"ending_tsz":1466783408,"original_creation_tsz":1437776231,"last_modified_tsz":1456332608,"price":"42.95","currency_code":"USD","quantity":99,"tags":["whiskey decanter","whiskey glass","scotch decanter","engraved scotch","groomsmen gift","personalized gift","groomsmen","whiskey glasses","bachelor party","groomsmen gift set","groomsman gift","Best mans gift","groom gift"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["European glass","glass"],"shop_section_id":17673701,"featured_rank":1,"state_tsz":1437776231,"url":"https:\/\/www.etsy.com\/listing\/241617145\/personalized-groomsmen-gift-set-engraved?utm_source=explorer&utm_medium=api&utm_campaign=api","views":2187,"num_favorers":155,"shipping_template_id":null,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1668,"taxonomy_path":["Weddings","Gifts & Mementos","Groomsmen Gifts"],"used_manufacturer":false,"Images":[{"listing_image_id":910182292,"hex_code":"95814E","red":149,"green":129,"blue":78,"hue":43,"saturation":47,"brightness":58,"is_black_and_white":false,"creation_tsz":1453739217,"listing_id":241617145,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/127\/0\/11439008\/il_75x75.910182292_638m.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/127\/0\/11439008\/il_170x135.910182292_638m.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/127\/0\/11439008\/il_570xN.910182292_638m.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/127\/0\/11439008\/il_fullxfull.910182292_638m.jpg","full_height":1002,"full_width":1500},{"listing_image_id":926976616,"hex_code":"89713C","red":137,"green":113,"blue":60,"hue":41,"saturation":56,"brightness":53,"is_black_and_white":false,"creation_tsz":1456134611,"listing_id":241617145,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/129\/0\/11439008\/il_75x75.926976616_rzko.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/129\/0\/11439008\/il_170x135.926976616_rzko.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/129\/0\/11439008\/il_570xN.926976616_rzko.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/129\/0\/11439008\/il_fullxfull.926976616_rzko.jpg","full_height":1002,"full_width":1500},{"listing_image_id":926721547,"hex_code":"8D7541","red":141,"green":117,"blue":65,"hue":41,"saturation":53,"brightness":55,"is_black_and_white":false,"creation_tsz":1456134611,"listing_id":241617145,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/114\/0\/11439008\/il_75x75.926721547_pl2s.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/114\/0\/11439008\/il_170x135.926721547_pl2s.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/114\/0\/11439008\/il_570xN.926721547_pl2s.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/114\/0\/11439008\/il_fullxfull.926721547_pl2s.jpg","full_height":1002,"full_width":1500},{"listing_image_id":910182284,"hex_code":"827652","red":130,"green":118,"blue":82,"hue":45,"saturation":36,"brightness":50,"is_black_and_white":false,"creation_tsz":1453739217,"listing_id":241617145,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/123\/0\/11439008\/il_75x75.910182284_fbvh.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/123\/0\/11439008\/il_170x135.910182284_fbvh.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/123\/0\/11439008\/il_570xN.910182284_fbvh.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/123\/0\/11439008\/il_fullxfull.910182284_fbvh.jpg","full_height":1000,"full_width":1500},{"listing_image_id":914383292,"hex_code":"B7B4B4","red":183,"green":180,"blue":180,"hue":0,"saturation":1,"brightness":71,"is_black_and_white":false,"creation_tsz":1454317138,"listing_id":241617145,"rank":5,"url_75x75":"https:\/\/img0.etsystatic.com\/107\/0\/11439008\/il_75x75.914383292_rmmr.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/107\/0\/11439008\/il_170x135.914383292_rmmr.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/107\/0\/11439008\/il_570xN.914383292_rmmr.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/107\/0\/11439008\/il_fullxfull.914383292_rmmr.jpg","full_height":900,"full_width":1500}],"Shop":{"shop_id":11439008,"shop_name":"KBKGift","user_id":63414714,"creation_tsz":1437774295,"title":null,"announcement":null,"currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you for your order. \r\nYour order will be sending within 5 business days. This is an international delivery. Delivery time 10-25 working days. Please check your mail for a delivery note. You will have to sign to confirm that you have received the package.","digital_sale_message":null,"last_updated_tsz":1456332626,"listing_active_count":40,"digital_listing_count":0,"login_name":"petrkirilov","accepts_custom_requests":false,"policy_welcome":null,"policy_payment":"We prefer using PayPal as our payment method. If you wish to use a credit card, PayPal provides that service for you.","policy_shipping":"SHIPPING ADDRESS\r\nPlease ensure that the address you entered when ordering on Etsy right!\r\nI ship the items to the shipping address you specified at the time of the checkout. If you are shipping the board as a gift, be sure to enter the gift recipient&#39;s address as the shipping address in your order.\r\n\r\nShipping information:\r\n- Worldwide shipping from Ukraine via airmail\r\n- We guarantee shipping within 3-5working days after payment\r\n- The delivery time from Ukraine: 10-25 day.\r\nPlease note, transit time may vary depending on your location and customs processing, so I can\u2019t guarantee exact arrival time.\r\n- Item will be quality packed with tracking numbers.\r\nPlease note: some local postal services do not provide on-line tracking for international registered airmail. Such as: Germany, UK, France, Italy and Australian post. So I can track your package only while it&#39;s in Ukraine. \r\n- Checking of delivery\r\nPlease note that parcels should sometimes take from the post by own. If the parcel was delivered to the post office and to some reasons is not received during 15 days, it would be sent back to me. In this case - I can send it back, but buyer pays shipping.\r\n- A refund for the goods returned as unclaimed only possible with the less cost of delivery.\r\n-You can track your parcel on site of Ukrainian post:\r\nhttp:\/\/www.ukrposhta.com\/www\/upost_en.nsf\/search_post?openpage\r\nit shows the last place in Ukraine where your parcel was registered.\r\n\r\n-You will be responsible for any taxes and fees your state\/country imposes on you regarding your purchase. ","policy_refunds":"If you have any problems with your order or have questions, don&#39;t hesitate to contact me. I will gladly reply and help you. I want you to be satisfied with the quality of my products and quality service!!!","policy_additional":"I guarantee high quality and fa guarantee high quality and fast delivery airmail. All parcels are sent marked as a gift. Nowhere indicated the price of the product and what is inside the parcel. If in your country there are no special rules, you will not be charged any customs fees.st delivery air mail.","policy_seller_info":null,"policy_updated_tsz":1453389356,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/KBKGift?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/131\/0\/11439008\/iusb_760x100.16924861_2lut.jpg","num_favorers":57,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/127\/0\/11439008\/isla_fullxfull.16924853_hyjtc4fl.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":246418670,"state":"active","user_id":48461931,"category_id":69150425,"title":"Decanter - Groomsmen Gift, Whiskey Decanter, Personalized Decanter, Father of the Bride Gift, Father of the Groom Gift, Engraved Decanter","description":"Decanter - Groomsmen Gift, Whiskey Decanter, Personalized Decanter, Father of the Bride Gift, Father of the Groom Gift, Engraved Decanter\n\n\n\n\nEnjoy your favorite whiskey the way it is meant to be savored with our custom engraved 27oz decanter. This glass decanter makes the perfect housewarming gift, anniversary gift for men, groomsmen gift, retirement gift, birthday gift, and more! Engrave this glass decanter with any text, up to 4 lines, or use one of our set designs.\n\nThis listing is for ANY quantity, starting with 1 glass decanter - engraving is included\n\nItem Details:\n\nHolds 27oz or 800ML\n7.25&quot; tall\n3.5&quot; wide\nComes in a white gift box\nFree Engraving\n\nTo order:\n\nPlease select your quantity and add this listing to your cart. Upon checkout, please include personalization in the note to seller section that is provided.\n\nNeed your item faster?  Purchase our rush processing and your item will ship in 1-2 business days:\n\nhttps:\/\/www.etsy.com\/listing\/192967617\/rush-my-order","creation_tsz":1456323938,"ending_tsz":1466774738,"original_creation_tsz":1441131843,"last_modified_tsz":1456323938,"price":"29.99","currency_code":"USD","quantity":159,"tags":["Whiskey Decanter","Engraved Decanter","Decanter","Groomsmen Gift","Personalized","Father of","the Bride Gift","the Groom Gift","Liquor Decanter","Decanter Set","Whiskey Glasses","Whiskey Set","Christmas Gift"],"category_path":["Housewares"],"category_path_ids":[69150425],"materials":["Glass","Gift Box","Laser Engraved"],"shop_section_id":15761639,"featured_rank":null,"state_tsz":1441131843,"url":"https:\/\/www.etsy.com\/listing\/246418670\/decanter-groomsmen-gift-whiskey-decanter?utm_source=explorer&utm_medium=api&utm_campaign=api","views":4500,"num_favorers":331,"shipping_template_id":null,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"men","occasion":"wedding","style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1064,"taxonomy_path":["Home & Living","Kitchen & Dining","Drink & Barware","Barware","Decanters"],"used_manufacturer":false,"Images":[{"listing_image_id":814074824,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1441131844,"listing_id":246418670,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/073\/1\/9523834\/il_75x75.814074824_duw7.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/073\/1\/9523834\/il_170x135.814074824_duw7.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/073\/1\/9523834\/il_570xN.814074824_duw7.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/073\/1\/9523834\/il_fullxfull.814074824_duw7.jpg","full_height":943,"full_width":1500},{"listing_image_id":826449670,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1441131844,"listing_id":246418670,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/072\/1\/9523834\/il_75x75.826449670_iwzz.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/072\/1\/9523834\/il_170x135.826449670_iwzz.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/072\/1\/9523834\/il_570xN.826449670_iwzz.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/072\/1\/9523834\/il_fullxfull.826449670_iwzz.jpg","full_height":1000,"full_width":1500},{"listing_image_id":826207443,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1441131844,"listing_id":246418670,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/070\/0\/9523834\/il_75x75.826207443_ip7x.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/070\/0\/9523834\/il_170x135.826207443_ip7x.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/070\/0\/9523834\/il_570xN.826207443_ip7x.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/070\/0\/9523834\/il_fullxfull.826207443_ip7x.jpg","full_height":1000,"full_width":1500},{"listing_image_id":826431628,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1441131844,"listing_id":246418670,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/075\/1\/9523834\/il_75x75.826431628_3ziu.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/075\/1\/9523834\/il_170x135.826431628_3ziu.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/075\/1\/9523834\/il_570xN.826431628_3ziu.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/075\/1\/9523834\/il_fullxfull.826431628_3ziu.jpg","full_height":1000,"full_width":1500}],"Shop":{"shop_id":9523834,"shop_name":"EngravingsOnDemand","user_id":48461931,"creation_tsz":1402710076,"title":"Engraved Knives, Custom Flasks, Personalized Glasses","announcement":"Personalized Groomsmen Gifts, Bridesmaid Gifts, Engraved Flasks, Engraved Mason Jars, Etched Beer Glasses, Folding Pocket Knife, Wedding Favors, Custom Engraved Knife, Personalized Knives, Hunting Knife, Groomsman Gift, Hip Flask, Personalized Flask, Groomsmen Knives, Groomsman Knife, Wedding Gift, Wedding Favors, Wedding Present, Wooden Knife, Custom Wood Cutting Boards, Engraved Flask, Mens Wallet, Mens custom leather wallet, Custom Wallets, Engraved Leather Wallet, Personalized Cutting Board, Mason Jars Bulk, Bridesmaid Flask, Leather Flask, Flask Gift Sets, Bridesmaid Frame, Mason Jar Mug, Mason Jar with Handle, Survival Knife, Personalized Picture Frame, Gifts for Groomsmen, Bachelorette Party Gifts, Bachelorette Party Favors, Mother of the Groom Gift, Mother of the Bride Gifts, Father of the Bride Gifts, Father of the Groom Gift, Father&#39;s Day Gifts, Gifts for Dad, Mother&#39;s Day Gift, Personalized Gifts, Monogramed Gifts, Monogram Knife, Asking Groomsmen Gift, Wedding Picture Frame, Will You Be My Groomsman, Wine Opener, Maid of Honor Gift, Matron of Honor Gift, Personalized Wine Opener, Corkscrew, Bottle Opener, and More!","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank You for Your Purchase!  It Was a Pleasure Doing Business with You.  Your Order Will Ship in 5 Business Days.  If You Need Your Items Sooner, Please Purchase Our Rush Processing Link Below and Reference Your Previous Order Number and Include the Date You Needed Your Order By:\r\n\r\nhttps:\/\/www.etsy.com\/listing\/192967617\/rush-my-order\r\n\r\nDue to the Nature of Our Business, All Sales are Final.  Orders Begin Processing Right Away After Purchase Therefore Orders Cannot be Cancelled Once Placed.\r\n\r\nPlease Contact us First Prior to Leaving a Review if There is Any Kind of Issue with Your Order.\r\n\r\nPlease Email Through Etsy, not the Personal Email on File\r\n\r\nWhen Your Order is Shipped You Will Receiving Shipping Confirmation Along with Tracking Information Via Etsy.\r\n\r\nHave a Wonderful Day!","digital_sale_message":null,"last_updated_tsz":1456336429,"listing_active_count":113,"digital_listing_count":0,"login_name":"cgronko","accepts_custom_requests":true,"policy_welcome":"Welcome to EngravingsOnDemand!  Please Feel Free to Browse Through Our Shop to See Our Beautiful Gifts!    We Offer a Wide Variety of Items for Weddings, Birthdays, Anniversaries, Holidays, and More!","policy_payment":"We Accept All Credit and Debit Card Transactions Through Direct Checkout Via Etsy or PayPal. \r\n\r\nOrders Begin Processing Very Quickly Upon Purchase Therefore, Once an Order Has Been Placed we Cannot Refund Your Purchase. Due to the Nature of Our Business, all Sales Are Final.\r\n\r\nTexas Residents Will be Charged State Sales Tax in the Amount of 8.25% Upon Checkout","policy_shipping":"Once Your Order is Complete You Will Receive a Confirmation Email Along with Tracking from one of our two Shipping Service Providers: USPS or UPS. Insurance is Included with our Shipping and Handling Rates. Shipping Generally Takes 2-5 Business Days. Our Current Processing Time is 5 Business Days. Rush Processing is Available Through our Shop for an Additional Flat Fee - Please Email us for More Information. Please Make Sure Your Address is Correct. If the Package Gets Returned Due to an Incorrect Address, you Will be Responsible for the Shipping Charges to Reship the Package to You.\r\n\r\nBy Making a Purchase with our company, Buyer Agrees to all Terms and Conditions.\r\n\r\nPlease Make Note: Shipping Price for all International Orders Does not Include any Custom Duty or Tax Your Country may Impose.\r\n\r\n*** PLEASE SEND ALL EMAIL INQUIRIES THROUGH ETSY, NOT THE PERSONAL EMAIL ADDRESS SHOWN ***","policy_refunds":"Due to the Nature of Our Business, All Sales are Final. Please be Sure to Double Check that Your Engraving Information is Correct Prior to Submitting Your Order. Proofs Available Upon Request Only.\r\n\r\nOrders Cannot be Cancelled Once Placed - We Begin Production Right Away in Order to Meet Our Processing Timeline.\r\n\r\nIn the Event You Receive a Damaged Item, Please Inform Us within 48 Hours of Delivery. Please Email a Photo of the Damaged Item Along with a Description of the Damage to be Eligible for a Free Replacement.\r\n\r\nIn the Event You Receive an Item that Was Made in Error, Please Send a Photograph Along with a Description of the Item that was Made Incorrectly and We Will Mail You a Replacement Within 48 Hours.\r\n\r\nDue to our High Production Rate, we do not Provide Proofs Before Engraving. If you Require a Proof, Please Purchase the Listing Below ($5 Fee):\r\n\r\n&lt;proof listing&gt;\r\n\r\nIf you Request a Proof in the Notes Section After Your Purchase, This Request will not be Acknowledged and Your Order will be Fulfilled with Provided Information Given at the Time of Sale.\r\n\r\nAny Request to Change the Engraving After the Item has Been Engraved will Incure a Replacement Fee.\r\n\r\n*** PLEASE SEND ALL EMAIL INQUIRIES THROUGH ETSY, NOT THE PERSONAL EMAIL ADDRESS SHOWN ***\r\n","policy_additional":"We Love Custom Orders! Please be Sure to Visit Our Other Custom Shops!\r\n\r\nDecoratedBliss - Specializing in Knives\r\nEverythingDecorated - Huge Selection of Personalized Gifts\r\n\r\nDisclaimer:\r\n\r\nBy purchasing any item sold by Engravings On Demand,  LLC the buyer expressly warrants that he\/she is in compliance with all applicable Federal, State, and Local laws and regulations regarding the purchase, ownership, and use of the item. It shall be the buyer&#39;s responsibility to comply with all Federal, State and Local laws governing the sale of any items listed, illustrated or sold. The buyer expressly agrees to indemnify and hold harmless EverythingDecorated and Engravings On Demand for all claims resulting directly or indirectly from the purchase, ownership, or use of the item in violation of applicable Federal, State, and Local laws or regulations. Buyer further warrants that he\/she is 18 years of age or older, and understands that some items sold by EverythingDecorated and Engravings On Demand are dangerous if misused. Buyer expressly agrees to indemnify and hold harmless EverythingDecorated, DecoratedBliss, and Engravings on Demand for injuries which may result from use of products sold by us.\r\n","policy_seller_info":null,"policy_updated_tsz":1441065779,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/EngravingsOnDemand?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/102\/0\/9523834\/iusb_760x100.17764723_5t0c.jpg","num_favorers":1379,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/076\/0\/9523834\/isla_fullxfull.15956671_fmekxs7k.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":252296356,"state":"active","user_id":62338985,"category_id":69150425,"title":"One Personalized Whiskey Glass - Tumblers - Personalized Glasses - Groomsmen Gift","description":"This listing is for ONE Whiskey Glass. Personalized Whiskey Glasses with Flask, Engraved, Tumblers, Monogram, Groomsmen Gift, Groomsman, Best man, Gifts for Men, Grandfather gift, Gifts for dad, wedding, highball.\n\nEnjoy good times with family and friends with this set of two personalized 10.25 oz high ball whiskey glasses with 250ml glass flask. The text is laser engraved into the glass. The text will not wear or rub off and will last forever. The tumblers are dishwasher safe.\n\nPlease leave text to be engraved in the Notes to seller box during checkout.","creation_tsz":1456330982,"ending_tsz":1466781782,"original_creation_tsz":1445027386,"last_modified_tsz":1456330982,"price":"10.50","currency_code":"USD","quantity":953,"tags":["groomsmen","groomsman","gift","gifts for men","father gift","whiskey glass","tumbler","personalized","engraved","glasses","high ball glass"],"category_path":["Housewares"],"category_path_ids":[69150425],"materials":["Glass"],"shop_section_id":16918327,"featured_rank":null,"state_tsz":1445027386,"url":"https:\/\/www.etsy.com\/listing\/252296356\/one-personalized-whiskey-glass-tumblers?utm_source=explorer&utm_medium=api&utm_campaign=api","views":833,"num_favorers":70,"shipping_template_id":null,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":false,"taxonomy_id":1862,"taxonomy_path":["Home & Living","Kitchen & Dining","Drink & Barware","Drinkware"],"used_manufacturer":false,"Images":[{"listing_image_id":866074837,"hex_code":"907764","red":144,"green":119,"blue":100,"hue":26,"saturation":30,"brightness":56,"is_black_and_white":false,"creation_tsz":1447192004,"listing_id":252296356,"rank":1,"url_75x75":"https:\/\/img1.etsystatic.com\/119\/1\/10773861\/il_75x75.866074837_g3yr.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/119\/1\/10773861\/il_170x135.866074837_g3yr.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/119\/1\/10773861\/il_570xN.866074837_g3yr.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/119\/1\/10773861\/il_fullxfull.866074837_g3yr.jpg","full_height":1500,"full_width":1500},{"listing_image_id":851452271,"hex_code":"817868","red":129,"green":120,"blue":104,"hue":38,"saturation":19,"brightness":50,"is_black_and_white":false,"creation_tsz":1445027386,"listing_id":252296356,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/116\/1\/10773861\/il_75x75.851452271_bc4d.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/116\/1\/10773861\/il_170x135.851452271_bc4d.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/116\/1\/10773861\/il_570xN.851452271_bc4d.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/116\/1\/10773861\/il_fullxfull.851452271_bc4d.jpg","full_height":1500,"full_width":1500},{"listing_image_id":866074751,"hex_code":"9C816C","red":156,"green":129,"blue":108,"hue":26,"saturation":30,"brightness":61,"is_black_and_white":false,"creation_tsz":1447192005,"listing_id":252296356,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/116\/0\/10773861\/il_75x75.866074751_95a1.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/116\/0\/10773861\/il_170x135.866074751_95a1.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/116\/0\/10773861\/il_570xN.866074751_95a1.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/116\/0\/10773861\/il_fullxfull.866074751_95a1.jpg","full_height":1500,"full_width":1500}],"Shop":{"shop_id":10773861,"shop_name":"donebetter","user_id":62338985,"creation_tsz":1425082439,"title":"donebetter Personalized Gifts","announcement":"Personalized Watches, flasks, cutting boards, iPhone cases, pocket knives, beer glasses, wallets, cigar cases for weddings, groomsmen gifts, groomsman,  best man, family and anniversaries. Please feel free to message me with your own unique designs. I also offer multiple unit discounts on orders of 5 or more items, just ask. Turn around time is typically 1-3 business days. I hope you enjoy shopping here.","currency_code":"USD","is_vacation":false,"vacation_message":"Hi, Thank you for visiting. I am presently away and will be returning on Monday March 9.\r\nThank you,\r\nTim","sale_message":"Hi, Thank you for your order! I will get working on your order asap and expect it to go out in 3-5 days. If you are happy with your items and experience, please don&#39;t forget to leave a positive feedback.\r\nBest wishes,\r\nTim ","digital_sale_message":null,"last_updated_tsz":1456335957,"listing_active_count":104,"digital_listing_count":0,"login_name":"donebetter","accepts_custom_requests":false,"policy_welcome":"Thank you for shopping here at donebetter. I hope you have an enjoyable experience. I am always here to help, so please feel free to ask questions any time.","policy_payment":"All prices are in U.S. dollars and can be made through PayPal or all other major credit cards.","policy_shipping":"All shipping options are based upon EXPECTED business days and can vary depending on the postal service domestically and internationally. donebetter is not responsible for late arriving packages. \r\n\r\nAll International orders are treated with the same care, consideration, attention to detail and shipping order as domestic. However, Due to the Customs policies and capabilities of each different Nation, Please expect that the delivery of your item can range anywhere from 1-5 weeks from date of shipment.\r\n\r\nMany countries charge Customs duties and taxes for bringing merchandise into the country. It is the responsibility of the buyer to pay and understand the duties and taxes of his\/her own country. \r\n\r\nYou can either check with your local Postal service or do a Google search of &quot;Customs Duties&quot; for your own particular country.","policy_refunds":"Non Personalized items may be returned within 30 days for a full refund.  Personalized\/Customized items and Earrings are Non Refundable. If the item is damaged or not working properly, I will repair or replace the item for no cost.","policy_additional":null,"policy_seller_info":null,"policy_updated_tsz":1427820809,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/donebetter?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/053\/0\/10773861\/iusb_760x100.15155441_qq5g.jpg","num_favorers":1532,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":203593826,"state":"active","user_id":14297397,"category_id":69152047,"title":"Whiskey Barrel Ring with Carbon Fiber","description":"This ring is made using a piece of oak from a whiskey barrel once used by the Jack Daniel&#39;s Distillery \u00ae. The oak has been infused with resin to add to its durability and inlaid into a carbon fiber ring which adds great strength and beautiful contrast. The oak has not been broken or cracked in order to do the inlay. It remains totally intact and is held securely in place by the carbon fiber. \n\nJack Daniel&#39;s \u00ae is a registered trademark and is not involved in or affiliated with the production or distribution of this product. \n\n**Please note that wood is a highly variable material. I can not guarantee it will have a certain look or colouration. I can only guarantee I make the ring using a piece of oak from a Jack Daniels barrel. I leave the rest in nature&#39;s hands. That being said, Oak is pretty consistent in its colour and grain.**\n-------------------------------------------------------------------------------------------------\nThis ring is available from size 3 - 15. PLEASE ENSURE YOUR RING SIZE HAS BEEN PROPERLY MEASURED BEFORE PLACING AN ORDER. A professional sizing can be done at most jewellery stores. If you have any requests regarding a custom width for your ring, or another modification please let me know in the \u201cnote to seller\u201d section during checkout or ask in advance. Typically rings can be made as narrow as 6mm but this depends on the specific design of each ring. Please inquire in this regard if uncertain. \n\nPlease read through my shop policies page before making a purchase. It contains detailed information on ring care, FAQ\u2019s, as well as other important information.\n\nhttp:\/\/www.etsy.com\/shop\/Endeavours\/policy?ref=shopinfo_policies_leftnav\n-----------------------------------------------------------------------------------------\n**Expect your ring to differ slightly from the ring pictured as each piece of carbon fiber is unique.**\n-----------------------------------------------------------------------------------------\n**For current production times please see the top of my shop page**\nhttp:\/\/www.etsy.com\/shop\/Endeavours\n\nExpect an estimated 5 - 10 business days shipping time in addition to the manufacturing time outlined on my shop front page. Tracking will be provided upon shipment. Express shipping is available for an extra fee upon request and comes with a tracking number. Also, I offer rush manufacturing for $30 to accelerate the production time of your ring. See links below regarding these options. \n\n**PLEASE NOTE - My standard shipping takes about 7 business days to the US and comes with a tracking number and $100 insurance. If you would like either of these options upgraded, or have a specific date you need your piece by, you may want to consider my express shipping options linked below. Please read their descriptions for more details. ORDERS OUTSIDE OF CANADA AND THE USA DO NOT COME STANDARD WITH TRACKING OR INSURANCE. See the global upgrade below if you&#39;d like to add it.**\n\nU.S.A Express Shipping Upgrade:\nhttps:\/\/www.etsy.com\/ca\/listing\/150113540\/usa-express-shipping-upgrade?\n\nU.S.A. Expedited Shipping upgrade:\nhttps:\/\/www.etsy.com\/listing\/116685488\/usa-expedited-shipping-upgrade\n\nGlobal Shipping Upgrade:\nhttps:\/\/www.etsy.com\/listing\/116675447\/global-expedited-shipping-upgrade\n\n**Carbon Fiber is extremely strong and waterproof. It provides a great strength to this ring. The wood is resin infused and coated in Danish Oil. It is water resistant, but heavy exposure to soaps or water is not advised. Also it can get scratched so do be conscious of when and how you wear it. **","creation_tsz":1456337879,"ending_tsz":1466788679,"original_creation_tsz":1410800624,"last_modified_tsz":1456337879,"price":"180.00","currency_code":"USD","quantity":8,"tags":["jack daniels ring","whiskey barrel ring","wood ring","oak ring","wooden ring","wood and carbon ring","carbon fiber ring","black ring","jack daniels","jack daniels wood","whiskey barrel wood","recycled wood ring","upcycled ring"],"category_path":["Jewelry","Ring"],"category_path_ids":[68887482,69152047],"materials":["Jack Daniels barrel oak","carbon fiber","danish oil","resin"],"shop_section_id":15973997,"featured_rank":null,"state_tsz":1445569902,"url":"https:\/\/www.etsy.com\/listing\/203593826\/whiskey-barrel-ring-with-carbon-fiber?utm_source=explorer&utm_medium=api&utm_campaign=api","views":9875,"num_favorers":504,"shipping_template_id":3611199,"processing_min":null,"processing_max":null,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1232,"taxonomy_path":["Jewelry","Rings","Bands"],"used_manufacturer":false,"Images":[{"listing_image_id":686424564,"hex_code":"767062","red":118,"green":112,"blue":98,"hue":42,"saturation":16,"brightness":46,"is_black_and_white":false,"creation_tsz":1416616514,"listing_id":203593826,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/055\/1\/6280832\/il_75x75.686424564_8nne.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/055\/1\/6280832\/il_170x135.686424564_8nne.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/055\/1\/6280832\/il_570xN.686424564_8nne.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/055\/1\/6280832\/il_fullxfull.686424564_8nne.jpg","full_height":844,"full_width":950},{"listing_image_id":686424558,"hex_code":"747266","red":116,"green":114,"blue":102,"hue":51,"saturation":12,"brightness":45,"is_black_and_white":false,"creation_tsz":1416616514,"listing_id":203593826,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/052\/0\/6280832\/il_75x75.686424558_nmi8.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/052\/0\/6280832\/il_170x135.686424558_nmi8.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/052\/0\/6280832\/il_570xN.686424558_nmi8.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/052\/0\/6280832\/il_fullxfull.686424558_nmi8.jpg","full_height":779,"full_width":850},{"listing_image_id":686424522,"hex_code":"888374","red":136,"green":131,"blue":116,"hue":45,"saturation":14,"brightness":53,"is_black_and_white":false,"creation_tsz":1416616514,"listing_id":203593826,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/050\/0\/6280832\/il_75x75.686424522_jx0k.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/050\/0\/6280832\/il_170x135.686424522_jx0k.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/050\/0\/6280832\/il_570xN.686424522_jx0k.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/050\/0\/6280832\/il_fullxfull.686424522_jx0k.jpg","full_height":869,"full_width":850},{"listing_image_id":654035825,"hex_code":"72604B","red":114,"green":96,"blue":75,"hue":32,"saturation":34,"brightness":44,"is_black_and_white":false,"creation_tsz":1410800624,"listing_id":203593826,"rank":4,"url_75x75":"https:\/\/img1.etsystatic.com\/037\/1\/6280832\/il_75x75.654035825_1dky.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/037\/1\/6280832\/il_170x135.654035825_1dky.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/037\/1\/6280832\/il_570xN.654035825_1dky.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/037\/1\/6280832\/il_fullxfull.654035825_1dky.jpg","full_height":783,"full_width":800},{"listing_image_id":653917604,"hex_code":"5F4F41","red":95,"green":79,"blue":65,"hue":28,"saturation":31,"brightness":37,"is_black_and_white":false,"creation_tsz":1410800624,"listing_id":203593826,"rank":5,"url_75x75":"https:\/\/img0.etsystatic.com\/027\/0\/6280832\/il_75x75.653917604_huxz.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/027\/0\/6280832\/il_170x135.653917604_huxz.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/027\/0\/6280832\/il_570xN.653917604_huxz.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/027\/0\/6280832\/il_fullxfull.653917604_huxz.jpg","full_height":823,"full_width":800}],"Shop":{"shop_id":6280832,"shop_name":"OriginHG","user_id":14297397,"creation_tsz":1301643453,"title":"Origin Handcrafted Goods","announcement":"Current production time (as of Feb. 16th) is about 5 weeks from the date of purchase, with an absolute maximum of 8 weeks (This is very rare but covers any unforeseen delays). \r\n\r\n***To get a previous production time on an order already placed please check your order confirmation page***\r\n\r\nPlease note that these times do not apply to the silver lined rings. Rush orders are available for extra cost and will get your ring done in 16 days or less (Rush orders are not applicable to rings which feature metal). If you have any questions or concerns about completion and shipping times please contact me.\r\n\r\nMy rings are made using a variety of exotic hardwoods from all over the world as well as Deer, Moose and Caribou antler. None of the antler I use for online orders has been unethically obtained. It has all been naturally shed by the animal and gathered later by people. I have chosen woods from all over the world based on their beauty as well as their density and durability. These two natural materials pair perfectly together. \r\n\r\nI also use Carbon Fiber in many of my rings now. It is a strong, simple and beautiful material that lends great durability and contrast to any piece. The rings that feature stainless steel are done in collaboration with my brother Joel, a local metal fabricator. \r\n\r\nI remain passionate in my work and take pride in my creations. My goal is to ensure that my customers are met with the respect and kindness that they deserve and ultimately get the product that they paid for. Please browse my gallery often, as it is being updated regularly with new original work. Enjoy!","currency_code":"USD","is_vacation":false,"vacation_message":"I am off on a road trip with my lovely wife and dog until mid June. We will be touring the American West. Unfortunately this means my shop is closed until we return. \r\n\r\nI have completed and shipped all open orders as of May 3rd and tracking numbers (if you live in Canada or the USA) have been emailed to you. \r\n\r\nIf you have a question for me I will not be able to answer it until I return in mid June. Please feel free to email me through Etsy and I will respond as soon as I return home. ","sale_message":"Thank you for making a purchase from Origin Handcrafted Goods. I truly hope you enjoy this item as much as I will enjoy making it! I am genuinely thrilled you spent the time & money to support a small-time artist on the Prairies of Canada.\r\n\r\nIf you&#39;ve purchased the rush order package disregard the following message:\r\nMy current production time right now (Feb. 16th) is about 5 - 8 weeks from the date of purchase plus shipping time. (8 weeks is very rare but covers any unforeseen delays).  If this timeframe is an issue for you please contact me immediately. \r\n\r\nIt is my goal to ensure that this transaction is smooth and met with utmost satisfaction. Please do not hesitate to contact me with any further questions or comments at anytime during or after this shipment. I will do my best to answer any question you might have. Thank you so much for your business. I look forward to hearing from you again soon!\r\n\r\nPlease be sure to visit my store policies page for info. on ring care and expected shipping times:\r\n\r\nhttps:\/\/www.etsy.com\/ca\/shop\/OriginHG\/policy?ref=shopinfo_policies_leftnav\r\n\r\nMarc Liss\r\nOrigin Handcrafted Goods,\r\n\r\nWinnipeg, Canada","digital_sale_message":null,"last_updated_tsz":1456337879,"listing_active_count":48,"digital_listing_count":0,"login_name":"Endeavours","accepts_custom_requests":true,"policy_welcome":"Welcome! Thanks for stopping by my shop! \r\n\r\nMy rings have rapidly evolved over the past five years, and so have my processes. As an artist I remain passionate in my work and I do my best to demonstrate that in each piece that I create. \r\n\r\nIf you have any questions about my products don&#39;t hesitate to contact me. I am in the shop\/office Monday to Friday and will get back to you right away!\r\n\r\nAlso, check out my policies page for some quick answers to potential questions:\r\n\r\nhttps:\/\/www.etsy.com\/ca\/shop\/OriginHG\/policy?ref=shopinfo_policies_leftnav\r\n","policy_payment":"I accept payments via paypal, etsy gift cards and credit cards. \r\n\r\nIf you need to cancel an order please let me know right away. A full refund will be given if I have not already started making the ring. However, if I have begun work on your order then a full refund will not be possible. If I have already completed the ring, no refund will be given. ","policy_shipping":"WITHIN CANADA: I ship using Canada Post&#39;s Xpresspost method. This comes with tracking, $100 insurance and a guaranteed 2 business days delivery time. (note: If delivery time is not met this must be taken up with Canada Post, not with me, although I would be happy to help sort things out if they need info from me.)\r\n\r\nUSA: I ship using Canada Post&#39;s Tracked Packet Method. This comes with a tracking number (to the border) and $100 insurance. It will arrive in an estimated 7 business days. (If there is a delay in delivery this must be taken up with Canada Post. I am not responsible for shipping times.)\r\n\r\nINTERNATIONAL: Unless you pay additionally for a shipping upgrade international orders are sent as standard letter mail to keep costs down. These do not come with tracking or insurance and can take more than 15 business days to arrive. I offer a global expedited shipping upgrade for $59 which comes with tracking and insurance. Please inquire for details or find it in the link below. \r\n\r\n***IMPORTANT - I can not be held accountable if your order is delayed, lost or stolen while in transit. Shipping is done through Canada Post, and I have no influence on the speed of shipment after it leaves my hands. Items shipped within Canada and the USA do come with $100 insurance however it is your responsibility to make a claim with them if an issue arises. If your item was worth more than the $100 insurance I will replace the item or items for $100. \r\n\r\nIf you opt for an Express shipping upgrade, these come with a 5 business day guarantee, but it is important to note that the guarantee is provided by Canada Post, and so I am not liable for shipments that do not meet this guaranteed speed, although I will be happy to help you sort things out if you&#39;d like to file a claim with Canada Post. However, it is very rare that Canada Post does not meet a guaranteed time. \r\n\r\nRush Shipping Options:\r\n\r\n1) USA Expedited \r\nhttps:\/\/www.etsy.com\/ca\/listing\/116685488\/usa-expedited-shipping-upgrade?\r\n\r\n2) USA Express\r\nhttps:\/\/www.etsy.com\/ca\/listing\/150113540\/usa-express-shipping-upgrade?\r\n\r\n3) Global Express\r\nhttps:\/\/www.etsy.com\/ca\/listing\/116675447\/global-expedited-shipping-upgrade?ref=related-2","policy_refunds":"**Please do not make a purchase from my shop unless you agree to the policies noted below.**\r\n\r\nSIZE ISSUES:\r\n\r\nGetting a proper ring sizing is the responsibility of the customer. I will make the ring size you asked for, and accept no responsibility to offer an exchange or return if the customer orders the incorrect size. \r\n\r\nIf the wood, antler ring or carbon fiber you ordered ends up being slightly too small I can usually enlarge up to about a half size. Steel and silver rings can not be resized at all. \r\n\r\nMy goal is to ensure that your order is made exactly to your size specifications. Prior to placing your order please ensure that you have obtained the correct ring size. It is my expectation that you will order the size of ring that you need. I will make the size asked for but the responsibility is yours to get a proper sizing. I highly recommend getting sized at a jewellery store. \r\n\r\n***If the size you order ends up being too large or too small no refunds or exchanges will be offered. It is your responsibility to ensure you order the right size. However, if I make a sizing error I will re-do or re-size the ring for no cost.*** \r\n\r\nPlease keep in mind each order is custom made by hand, and it takes just as much material and time to create another ring. However, if your ring ends up being only slightly too small I am able to enlarge it a little for a small fee (unless it has a stainless steel or silver lining). However, if the ring is much too small then I avoid resizing as it may compromise the integrity of the ring.\r\n\r\n***Stainless steel and silver lined rings can not be resized.***\r\n\r\nISSUES WITH APPEARANCE:\r\n\r\nBefore purchasing a ring please be advised that your ring will not look exactly the same as the one in the picture. Wood and Antler are natural materials and so each piece possesses its own unique grains and colours. Also Carbon Fiber is wrapped differently every time which can give it a slightly different pattern. However, this ensures your ring is absolutely unique, but it also makes it impossible for me to make the exact same ring twice. All I can do is make the ring you order with the exact same species of wood or antler used in the pictures. The resulting appearance of the wood or antler is beyond my control and no refund will be given in this regard. Thank you for your understanding in this. \r\n\r\n\r\n\r\nDAMAGE:\r\n\r\nCARBON FIBER RINGS -  These rings are highly durable. They are resistant to scratches and scuffs, are waterproof and can sustain heavy impacts. However, they are not indestructible so treat them fairly. Some of my carbon fiber rings also feature a layer of wood. The carbon fiber holds the wood firmly in place and keeps the water away from its edges. This reduces the risk of potential water damage greatly. However, the face of the wood is still exposed so some care should be take to minimize exposure to water and soaps\/sanitizers.\r\n\r\nWOOD AND ANTLER RINGS - The biggest determining factor regarding the longevity of your ring is you. Each ring is coated with a highly durable, water resistant finish known as cyanoacrylate (unless it is a silver lined ring, see info below). This is the same finish that is applied to wooden pens and other small wooden implements and is regarded as one of the best wooden finishes on the market. However, as with all wood finishes, it is subject to wear. Scratches on the surface or the loss of the glossy finish will not be covered by refunds or exchanges. See our FAQ section for tips on how to maintain your rings finish. \r\n\r\nSILVER LINED ANTLER RINGS -  These rings are left unfinished as antler is fairly resistant to water on its own, and there are no glued seems to worry about. This gives them a more natural feel. However, do not expose them to excessive moisture or soaps. Take them off if before doing dishes, showering, etc. \r\n\r\n\r\n\r\nOVERDUE ORDERS:\r\n\r\nI provide an up-to-date manufacturing time on my shop front page which varies based on the season. This time outlines the latest I will have your order shipped out from the date of purchase.\r\n\r\nThese timeframes can not account for any unforeseen delays like extreme illness or broken bones. It hasn&#39;t happened yet, but I do work with my hands for a living, so if I break a finger it may push ring production back a little. In the event that a situation like this arises please have patience. I will do my best to sort out these situations to suite both of our needs. \r\n\r\nCOVERAGE:\r\n\r\nMy rings are covered against breaks due to craftsmanship errors for up to 5 months. Accidental breaks caused by owner negligence are not covered. There are certain situations that wooden rings can not be expected to endure. See or FAQ section for some helpful tips regarding these. \r\n\r\n","policy_additional":"FAQ Section:\r\n\r\nQ: &quot;How long will it take for me to receive my ring?&quot;\r\n\r\nA: This is the most common question I get and the answer varies based on the time of year. I always have up-to-date info about my production time at the top of my shop front page, found here:  https:\/\/www.etsy.com\/ca\/shop\/Endeavours\r\n\r\n***Please note: Rings that feature metal are made in collaboration with my brother and so are dependent on his schedule as well. I can only make guarantees about production time for rings that don&#39;t involve metal because certain elements are out of my control. If some of his machinery breaks, or his electricity goes out for a couple days, this is out of my control and may delay the production times of the rings with metal in them. ***\r\n\r\nProduction time does not take into account shipping time. \r\n\r\nWITHIN CANADA: I ship using Canada Post&#39;s Xpresspost method. This comes with tracking, $100 insurance and a guaranteed 2 business days delivery time. (note: If delivery time is not met this must be taken up with Canada Post, not with me)\r\n\r\nUSA: I ship using Canada Post&#39;s Tracked Packet Method. This comes with a tracking number (to the border) and $100 insurance. It will arrive in an estimated 7 business days. (If there is a delay in delivery this must be taken up with Canada Post. I am not responsible for shipping times.)\r\n\r\nINTERNATIONAL: Unless you pay additionally for a shipping upgrade international orders are sent as standard letter mail to keep costs down. These do not come with tracking or insurance and can take more than 15 business days to arrive. \r\n**If you need your ring to arrive sooner, I do have express shipping and manufacturing options available in my shop**\r\n\r\n***RINGS WITH SILVER LINING***\r\nMy rings that include the silver lining take longer than any other item in my workshop. These rings are the result of a collaboration between two workshops, as the metal inlay is done by another artist here in our city. Estimated completion time is about 6 weeks, but this cannot be guaranteed, as both workshop&#39;s schedules fluctuate depending on the business season. For up-to-date completion estimates please see product specific times in the silver lined rings item description. Please feel free to contact me further if you have a specific date in mind. \r\n\r\n\r\nQ: What is Carbon Fiber?\r\n\r\nA: Carbon Fiber is a marvel of the modern world. It essentially is composed of thousands and thousands of tiny strands which are much thinner than the hair on your head. When mixed with the proper solution these strands becomes inflexible and unbelievably strong, yet they remain extremely light. Carbon Fiber is frequently used in the automotive and aerospace industries and it makes for some amazing rings. \r\n\r\nQ: &quot;Why do you use wood and bone?&quot;\r\n\r\nA: The materials I use reflect my passion, fascination, and curiosity with nature. Wood and bone are two of the most versatile materials on Earth. They have been utilized for thousands of years by humankind. The process of working with these materials with my hands provides a primal joy unlike any other. Likewise, the end result is worn on our hands, providing a constant reminder of our intricate connection to this planet. \r\n\r\nI like to say that nature does most of the work for me; I simply bring out a beauty that was there all along. \r\n\r\n\r\n\r\nQ: &quot;How do you take care of your rings?&quot;\r\n\r\nA: CARBON FIBER AND STEEL - These rings are waterproof and very strong. They can be worn in all situations. They resist scratching, but can become scuffed or scaped if metal rubs against them or other hard materials. Usually these scuffs can just be polished up with some 1000 grit sand paper. I can also re-polish them if there is a major scratch. \r\n\r\nWOOD AND ANTLER - The most important thing to remember is that these rings are not made of metal. However, if you are conscious of when and how you wear them there is no reason they can&#39;t last a lifetime. Here are a few tips for taking care of your ring:\r\n\r\n- Avoid harsh chemicals (including hand sanitizer!)\r\n- Minimize contact with any soap as it is difficult to predict how some of the chemicals may react with the finish. \r\n- Take off your ring before any heavy lifting or construction activity.\r\n- Avoid prolonged or continuous exposure to water. This means taking off your ring before showering, or soaking in water is recommended.\r\n- Avoid sharp impacts. \r\n\r\nYou may notice that the water resistant finish chips away from the antler sections of your ring more quickly than it does on the wood. This is due to material differences and fortunately is not a major concern. Antler does not require the same level of moisture protection that wood does and by continuing to follow our care instructions there should not be an issue with its integrity. \r\n\r\n\r\n\r\n\r\nQ: &quot;Are the rings with silver linings finished the same way?&quot;\r\n\r\nA: No they are not. Due to the steps involved in finishing a wood ring, I do not apply the cyanoacrylate finish to silver lined rings. Instead I infuse the antler or wood with resin using a special vacuum system. However, it does require special attention be paid to avoid excessive moisture contact. Take them off if your hands are going to be exposed to water. \r\n\r\n\r\n\r\n\r\nQ: &quot;Can my ring be refinished after I have worn it for a while?&quot;\r\n\r\nA: Yes. I can re-apply the finish for you at any time for $30. This covers re-finishing as well as return shipping.\r\n\r\nYou may notice that the water resistant finish chips away from the antler sections of your ring more quickly than it does on the wood. This is due to material differences and fortunately is not a major concern. Antler does not require the same level of moisture protection that wood does and by continuing to follow our care instructions there should not be an issue with its integrity. \r\n\r\n\r\n","policy_seller_info":"Origin is a one man operation located in the heart of the Canadian prairies in Winnipeg, Manitoba. ","policy_updated_tsz":1441114063,"policy_has_private_receipt_info":false,"vacation_autoreply":"Hello and thanks for the email!\r\n\r\nI am out of the office (my living room) until mid June. This means I will not be responding to emails or taking orders for rings until I return. \r\n\r\nI am off on a road trip with my lovely wife and dog until mid June. We will be touring the American West. Unfortunately this means my shop is closed until we return. \r\n\r\nI have completed and shipped all open orders as of May 3rd and tracking numbers (if you live in Canada or the USA) have been emailed to you. \r\n\r\nIf you have a question for me I will not be able to answer it until I return in mid June. Please feel free to email me through Etsy and I will respond as soon as I return home. \r\n\r\nThanks for your patience, \r\n\r\nMarc\r\n\r\n","url":"https:\/\/www.etsy.com\/shop\/OriginHG?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/064\/0\/6280832\/iusb_760x100.15294614_q8oy.jpg","num_favorers":3649,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img0.etsystatic.com\/122\/0\/6280832\/isla_fullxfull.16962602_cdvguplf.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":221766828,"state":"active","user_id":29033285,"category_id":68891062,"title":"3 Large Whiskey Rocks \/ Whiskey Stones - Laser engraved and personalized. Any text, any font.","description":"Added Bonus - No Tax For U.S Residents. \n\nWelcome to Memories Made where we work with you to create one of a kind laser engraved items of the finest quality. All engraving is done on site using our state of the art Laser Engraver which ensures the utmost in quality and precision. Our designs are all original creations and while other sellers may copy us, they can never replicate our quality or commitment to customer service. We are an established ETSY seller with a stellar sales history and record of customer satisfaction. \n\nYou are viewing the following item(s):\n\n3 Large Laser Engraved and Personalized Large Whiskey Rocks measuring approximately 1.25 cubed. Each Set of 3 Rocks ships with a Velvet Pouch for storage. Whiskey glass not included. Engraved whiskey glass can be purchased here: \n\nhttps:\/\/www.etsy.com\/ca\/shop\/MemoriesMadeToronto\/search?search_query=whiskey+glass&order=date_desc&view_type=gallery&ref=shop_search\n\nOur Laser Engraved Whiskey Rocks give a new meaning to \u201con the rocks.\u201d Serve top-shelf liquor in way that gives guests a chill. Made from recycled soapstone, this modern-day version of the ice cube cools any drink without the melted water. Simply freeze and pop them into whiskey, scotch, liquor and even wine. These sophisticated rocks chill the drink without diluting the taste. A great gift made even better by Laser Engraved Personalization. \n\nCoffee or tea losing it&#39;s heat too quickly? Pop one or two rocks into the microwave, drop them in your mug, and enjoy your heated drink for longer.\n\nOur rocks won&#39;t scratch your barware either - our cubes have no sharp edges.\nThese large stones chill your drink about 25 degrees (using 2 stones). Results vary depending on volume and starting room temperature.\n\nOur Whiskey Rocks are made in the USA in Colorado. These handy little rock cubes are eco-friendly, not only because they are reusable, but because they are manufactured with soapstone from factory excess. Soapstone is the only non-porous, odorless, tasteless, and a natural food-safe stone used in the home. Due to the high density of the material, soapstone retains temperature better than stones like granite or marble, so you can expect a sustained chill or heat.\n\nSoapstone is non-reactive to most common household cleaners and is dishwasher safe.\n\nHow to order:\n\nSimply Click the &quot;Add to Cart&quot; button at the top of the page. You will then see a Notes to Memories Made box where you can include the engraving instructions for each item.\nPlease be as clear as possible and include:\n\n\u2022\tText\/Initials for each item\n\u2022\tSpecial instructions if applicable\n\u2022\tFont choice. You can choose your font from www.dafont.com. If no font preference is given the font from the listing picture will be used. \n\nIf there are any questions about your order we will message you back to ensure we have everything correct before engraving.\nOnce all information has been recorded you can then hit the \u201cproceed to checkout\u201d button. \n\nSHIPPING\nNorth America\nShipping - All shipping be via USPS or Canada post and most products will ship in approx. 4-6 business days from date of purchase. Shipping times will vary but on average it takes 2-7 business days for items shipped with-in North America. If you are in a rush please let me know we will try and speed up the process. All of our items are custom made which take time to create but we will do our best. If express shipping is required there will be additional fees which will be disclosed at time of order. \nOutside North America\nFor most of my products I only offer shipping to North America however I do ship worldwide on request. Shipping outside of North America will only be done with tracked packages. If you are interested in an item and would like a quote on shipping please message me. If the shipping costs are agreeable I will send you a custom listing that includes shipping to your country.","creation_tsz":1456325022,"ending_tsz":1466775822,"original_creation_tsz":1423348631,"last_modified_tsz":1456325022,"price":"18.00","currency_code":"USD","quantity":1,"tags":["wedding gift","groomsmen gift","best man gift","engraved wedding","personal best man","personalized","whiskey stone","whiskey rock","wine","whiskey","laser engraved","custom","barware"],"category_path":["Housewares","Kitchen"],"category_path_ids":[69150425,68891062],"materials":["soapstone","whiskey rock","whiskey stone"],"shop_section_id":null,"featured_rank":null,"state_tsz":1453662296,"url":"https:\/\/www.etsy.com\/listing\/221766828\/3-large-whiskey-rocks-whiskey-stones?utm_source=explorer&utm_medium=api&utm_campaign=api","views":2331,"num_favorers":183,"shipping_template_id":5029297980,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":null,"is_private":false,"recipient":"men","occasion":null,"style":["Rustic"],"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"suggested_taxonomy_id":1031,"taxonomy_path":["Home & Living","Kitchen & Dining"],"used_manufacturer":false,"Images":[{"listing_image_id":724244175,"hex_code":"3E4749","red":62,"green":71,"blue":73,"hue":191,"saturation":15,"brightness":28,"is_black_and_white":false,"creation_tsz":1423348631,"listing_id":221766828,"rank":1,"url_75x75":"https:\/\/img1.etsystatic.com\/052\/0\/7676661\/il_75x75.724244175_ajwt.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/052\/0\/7676661\/il_170x135.724244175_ajwt.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/052\/0\/7676661\/il_570xN.724244175_ajwt.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/052\/0\/7676661\/il_fullxfull.724244175_ajwt.jpg","full_height":1128,"full_width":1500},{"listing_image_id":724114114,"hex_code":"3C5253","red":60,"green":82,"blue":83,"hue":183,"saturation":27,"brightness":32,"is_black_and_white":false,"creation_tsz":1423348631,"listing_id":221766828,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/046\/0\/7676661\/il_75x75.724114114_cnok.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/046\/0\/7676661\/il_170x135.724114114_cnok.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/046\/0\/7676661\/il_570xN.724114114_cnok.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/046\/0\/7676661\/il_fullxfull.724114114_cnok.jpg","full_height":1236,"full_width":1500},{"listing_image_id":724244323,"hex_code":"635E5C","red":99,"green":94,"blue":92,"hue":17,"saturation":7,"brightness":38,"is_black_and_white":false,"creation_tsz":1423348631,"listing_id":221766828,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/046\/0\/7676661\/il_75x75.724244323_miqy.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/046\/0\/7676661\/il_170x135.724244323_miqy.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/046\/0\/7676661\/il_570xN.724244323_miqy.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/046\/0\/7676661\/il_fullxfull.724244323_miqy.jpg","full_height":821,"full_width":1500},{"listing_image_id":724114124,"hex_code":"344753","red":52,"green":71,"blue":83,"hue":203,"saturation":37,"brightness":32,"is_black_and_white":false,"creation_tsz":1423348632,"listing_id":221766828,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/051\/0\/7676661\/il_75x75.724114124_i0d6.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/051\/0\/7676661\/il_170x135.724114124_i0d6.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/051\/0\/7676661\/il_570xN.724114124_i0d6.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/051\/0\/7676661\/il_fullxfull.724114124_i0d6.jpg","full_height":547,"full_width":1500},{"listing_image_id":724244379,"hex_code":"5D5A58","red":93,"green":90,"blue":88,"hue":24,"saturation":5,"brightness":36,"is_black_and_white":false,"creation_tsz":1423348632,"listing_id":221766828,"rank":5,"url_75x75":"https:\/\/img1.etsystatic.com\/058\/0\/7676661\/il_75x75.724244379_1jdf.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/058\/0\/7676661\/il_170x135.724244379_1jdf.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/058\/0\/7676661\/il_570xN.724244379_1jdf.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/058\/0\/7676661\/il_fullxfull.724244379_1jdf.jpg","full_height":1082,"full_width":1500}],"Shop":{"shop_id":7676661,"shop_name":"MemoriesMadeCustom","user_id":29033285,"creation_tsz":1357348577,"title":"Custom Laser Engraving and Personalization.","announcement":"\r\n*****NO TAX ON ORDERS FOR RESIDENTS OUTSIDE OF CANADA*****\r\n\r\nWelcome to Memories Made where we work with you to create one of a kind laser engraved items of the finest quality. All engraving is done on site using our state of the art Laser Engraver which ensures the utmost in quality and precision. Our designs are all original creations and while other sellers may copy us, they can never replicate our quality or commitment to customer service.\r\nWe are an established ETSY seller with a stellar sales history and 5 Star record of customer satisfaction. \r\n","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Welcome to Memories Made where we work with you to create one of a kind laser engraved items of the finest quality. All engraving is done on site using our state of the art Laser Engraver which ensures the utmost in quality and precision. Our designs are all original creations and while other sellers may copy us, they can never replicate our quality or commitment to customer service. We are an established ETSY seller with a stellar sales history and record of customer satisfaction.","digital_sale_message":null,"last_updated_tsz":1456340633,"listing_active_count":2317,"digital_listing_count":0,"login_name":"memoriesmadetoronto","accepts_custom_requests":true,"policy_welcome":"You found us! Welcome to Memories Made. Have a look around at our very cool personalized Bridesmaid\/Groomsmen Gifts and Wedding Party Favors.\r\n\r\nWe create custom engraved items including Flasks, Cigar Boxes, various Glassware and many other unique items for your wedding and\/or special occasion. We are dedicated to creating high quality keepsakes for you and your guests to enjoy for years to come. ","policy_payment":"We accept credit card and debit payments through Paypal and Direct Checkout. There are no taxes charged for international orders (orders placed outside of Canada). For orders placed within Canada applicable taxes will apply. \r\n","policy_shipping":"IMPORTANT  I cannot guarantee the delivery time for shipping. Once the item has been shipped it is out of my control. Shipping to the U.S typically takes between 4 and 10 days with the average falling around 4 or 5. For an additional fee I can ship items express which will get them to you sooner but there is no guarantee. If you need an item by a specific date please order well in advance to ensure that there is enough time for it to arrive in time. I cannot consider a shipment lost until 3 weeks have passed. \r\n\r\nUsually, orders are shipped within 3-5 business days of payment, or sooner when possible, unless my shop announcement indicates differently. \r\n\r\nIf it is a rush order please let me know when you place your order. I will do my best to ship ASAP and can ship overnight by courier if required. \r\n\r\nAll items are shipped through Canada post unless another method is requested.\r\n\r\nYou may also need to pay customs, duties or taxes on your purchase in your jurisdiction. These charges are not included in the cost of shipping and are the responsibility of the buyer. \r\n\r\nLegally, I cannot declare any items you purchase as a gift. \r\n\r\nIf you live in or around Toronto I will waive shipping if you want to pick up your purchase. Please contact me about this option before paying, so I can send you a revised listing without shipping costs. ","policy_refunds":"As all of my items are custom made and personalized and are considered final sale. Returns or refunds will be accepted if a mistake was made by Memories Made. If I make a mistake on your order I will replace it free of charge. You have 48 hours upon receipt of your order to report errors. Photos will be required. \r\n","policy_additional":"Custom orders welcome! Please send me your custom requests as I love to create unique and one of a kind items!","policy_seller_info":"Memoriesmade@rogers.com\r\nwww.memoriesmade.ca\r\n416 268 2281","policy_updated_tsz":1408645862,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/MemoriesMadeCustom?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/115\/0\/7676661\/iusb_760x100.18059388_5l94.jpg","num_favorers":2216,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img0.etsystatic.com\/140\/0\/7676661\/isla_fullxfull.17857518_n5rlwmry.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":229956758,"state":"active","user_id":63224207,"category_id":69201265,"title":"Whiskey Bent and Hellbound Tri-blend Tank Shirt *","description":"Our most popular shirt is now available in a tri-blend racerback  tank! \n\nThis Whiskey Bent and Hellbound tank is your go to concert shirt!\n\n\nRock one of our hottest styles, the tri-blend racerback tank, and get ready for the supreme softness - and attention - that comes with it.\n\nTri-blend tank color is heather gray with Black lettering. \n\n50% polyester\/25% ring-spun combed cotton\/25% rayon \u2022 4.3-oz. \u2022 32 singles for extreme softness \u2022 satin label \u2022 \n\nSizes Available: S-XL \n\nThank you so much for visiting Jesus and Gypsy Soul!","creation_tsz":1456326073,"ending_tsz":1466776873,"original_creation_tsz":1429068889,"last_modified_tsz":1456326073,"price":"24.00","currency_code":"USD","quantity":3,"tags":["Concert","summer","nashville","country music","Whiskey bent","hellbound","tank","COUNTRY CONCERT","CONCERT OUTFIT","WHISKEY BENT SHIRT","COUNTRY MUSIC SHIRT","MIRANDA LAMBERT","country concert tank"],"category_path":["Clothing","Women","Tank"],"category_path_ids":[69150353,69152559,69201265],"materials":[],"shop_section_id":17120183,"featured_rank":null,"state_tsz":1455052829,"url":"https:\/\/www.etsy.com\/listing\/229956758\/whiskey-bent-and-hellbound-tri-blend?utm_source=explorer&utm_medium=api&utm_campaign=api","views":7098,"num_favorers":1072,"shipping_template_id":11266363059,"processing_min":5,"processing_max":7,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"women","occasion":null,"style":null,"non_taxable":true,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":558,"taxonomy_path":["Clothing","Women's Clothing","Tops & Tees","Tanks"],"used_manufacturer":false,"Images":[{"listing_image_id":757646223,"hex_code":"756F64","red":117,"green":111,"blue":100,"hue":39,"saturation":14,"brightness":45,"is_black_and_white":false,"creation_tsz":1429068889,"listing_id":229956758,"rank":1,"url_75x75":"https:\/\/img1.etsystatic.com\/060\/1\/10854350\/il_75x75.757646223_sacs.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/060\/1\/10854350\/il_170x135.757646223_sacs.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/060\/1\/10854350\/il_570xN.757646223_sacs.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/060\/1\/10854350\/il_fullxfull.757646223_sacs.jpg","full_height":1500,"full_width":1332},{"listing_image_id":757646135,"hex_code":"868068","red":134,"green":128,"blue":104,"hue":48,"saturation":22,"brightness":52,"is_black_and_white":false,"creation_tsz":1429068889,"listing_id":229956758,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/064\/0\/10854350\/il_75x75.757646135_irl5.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/064\/0\/10854350\/il_170x135.757646135_irl5.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/064\/0\/10854350\/il_570xN.757646135_irl5.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/064\/0\/10854350\/il_fullxfull.757646135_irl5.jpg","full_height":1500,"full_width":1067},{"listing_image_id":771777198,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1431576483,"listing_id":229956758,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/060\/0\/10854350\/il_75x75.771777198_ko3j.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/060\/0\/10854350\/il_170x135.771777198_ko3j.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/060\/0\/10854350\/il_570xN.771777198_ko3j.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/060\/0\/10854350\/il_fullxfull.771777198_ko3j.jpg","full_height":1189,"full_width":1440}],"Shop":{"shop_id":10854350,"shop_name":"JesusandGypsySoul","user_id":63224207,"creation_tsz":1427850912,"title":"Custom apparel for the wild, ramblin&#39;, gypsy soul ","announcement":"Thank you so much for visiting my shop! \r\n\r\nI make custom shirts and tanks for the wild, ramblin&#39;, gypsy soul! \r\n\r\n I work very hard to get orders out ASAP! But, please allow 5- 7 business days turn around time because each shirt is custom made when it is ordered. If you need a rush order, send me a message and I will do my very best to make it happen!\r\n\r\nIf you would like a custom order, send me a message! I would love to work with you and any ideas you may have! \r\n\r\nRefunds:\r\nBecause all items are made to order, I simply can not offer any refunds. I apologize but thank you for understanding. \r\n\r\nExchanges:\r\nPlease go over the size charts for the most accurate size descriptions. Send me a message if you would like a size chart. If something doesn&#39;t fit, I will exchange for another size once within 5 days of delivery. But please keep in mind that you are responsible for all return shipping. You shipping the item back to me, and me shipping back to you. \r\n \r\n\r\nThank you again for visiting my shop. It&#39;s because of yall, that I am able to do what I love! And, I appreciate  it from the bottom of my heart, and please know that each shirt I make is made with love! \ud83d\udc99","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you so much for your purchase! \r\n\r\nI work hard to ship all orders ASAP.  However, because all items are made to order, please allow 5-7 busniess days for shipment. \r\n\r\nBe sure to tag us in your photos on Instagram to be featured on our page! @jesusgypsysoul #jesusandgypsysoul","digital_sale_message":null,"last_updated_tsz":1456341556,"listing_active_count":111,"digital_listing_count":0,"login_name":"Dixiegirlanf","accepts_custom_requests":true,"policy_welcome":"Thank you for visiting Jesus and Gypsy Soul! \r\n\r\nWe offer custom made shirts for the wild, ramblin&#39; soul.","policy_payment":"I accept PayPal as my primary method of payment or credit cards through Etsy&#39;s payment processing.","policy_shipping":"I ship to the address provided by Etsy.\r\nI usually ship within 24-48 hours of ordering if at all possible. But, there are circumstances where I am not able to ship that fast,  so for that reason my turn around time is currently 5-7 business days for your order to be ready to ship.  I ship via USPS to offer you the most economical shipping method possible. If you need an order fast,  please choose priority shipping. \r\n\r\nPLEASE NOTE: { I am NOT responsible for lost, stolen or undelivered packages } If you want to purchase insurance you may do so by contacting me prior to ordering. ALL LOST, STOLEN OR RETURNED packages paid without insurance are the responsibility of the buyer. USPS failures are not my fault or a reflection on my level of dedication to my customers.","policy_refunds":"Refunds and Exchanges:\r\n\r\nIf something doesn&#39;t fit, contact me and we will work together to exchange for the correct size. However, please keep in mind that you will be responsible for all shipping associated with the exchange. Shipping back to me, and me shipping the new size back to you. And, please note that I will only do this once. This does not apply to anything custom. It has to be an exact item I have listed, color, type of shirt, design etc. Anything that makes it different cannot be returned.\r\n\r\nBecause all items are made to order, I unfortunately  can not offer any refunds. So please go over the size charts for the most accurate size descriptions. Send me a message if you would like a size chart and don&#39;t see one.\r\n\r\n I apologize but thank you for understanding! \r\n\r\n \r\nIf you have a problem with your order after receiving it,  please contact me and I will do my best to make it right. I want to make sure you are happy!\r\n  \r\nMy reviews on my shop are part of my livelihood and I depend on them to make my business grow. So, please work with me before leaving an unsatisfactory review. I pour my heart and soul into my shop, my items and my customers. I value you all and only want you happy! I will do my best to make that happen. \r\n\r\n For custom orders, please check spelling before submitting  to me.\r\nm with your order after receiving it,  please contact me and I will do my best to make it right. I want to make sure you are happy!","policy_additional":"***There&#39;s still time to get your order in for Christmas!!***\r\n\r\nIf you would like a custom order, send me a message and let me know what you would like. I love hearing new ideas, so send them my way! \r\n\r\nI usually ship orders within 24 hours. But, please allow 5-7 days processing time as all items are made to order. If you need a rush order, let me know and I will do my best to make it happen.\r\n\r\nBecause all items are made to order, I unfortunately can&#39;t offer refunds or exchanges.","policy_seller_info":"Still have questions? Please contact me. \r\n","policy_updated_tsz":1456202669,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/JesusandGypsySoul?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/054\/0\/10854350\/iusb_760x100.15283362_2olr.jpg","num_favorers":2113,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":215126845,"state":"active","user_id":102845,"category_id":69152047,"title":"Titanium Ring -  Charred Oak Whiskey Barrel Inlay Ring - Wood Ring -  Custom Made Ring - Wood Inlay Ring - Wedding Ring - Mens Ring","description":"This listing is for a custom made titanium ring inlaid with charred oak from an antique whiskey barrel. We were so lucky to find the wood we&#39;ve used to inlay into this band! The antique whiskey barrels were stored away in a local barn and we are so thankful we were able to salvage them. They were each marked &quot;Bourbon Whiskey - Illinois - 1971&quot; so the barrels are at least 40 years old. This charred oak whiskey barrel wood looks amazing inlaid into titanium! Perfect for either a man or a woman, this ring would make a really unique wedding ring or statement ring.\n\nAs always, this set is handcrafted by us in our home studio. We still make our rings one at a time, for the person ordering. We were one of the first to offer personalized and custom made titanium rings on Etsy and we still offer the same personalized service we always have.\n\nSizes Available: US 3- US 16 including half and quarter sizes\nWidths Available: 3\/16&quot;, 1\/4&quot;, 5\/16&quot;, 3\/8&quot;\nEngraving: Up to 20 characters per band\n\nPlease let us know your size, width, and engraving preferences for each band in the notes to seller box at checkout. If you are unsure of your size, we&#39;re glad to mail out a ring sizer free of charge with your paid order to help with fit. Just request a sizer in the notes to seller box at checkout. \n\nThis custom made titanium wedding band is perfect for a wedding, engagement, anniversary, commitment, handfasting, and more.\n\n--\n\nThis ring ships via Priority Mail with Delivery Confirmation, and will arrive in a handcrafted tiny oak ring box suitable for gift giving. (Delivery Confirmation is not available for international orders.)\n\nPlease note that we don&#39;t keep our titanium wedding rings in stock but custom make each band to order. You can expect this process to take 3-4 weeks. Titanium rings are not resizable so please request a sizer if you&#39;re unsure of the best ring size. Also, please take a moment to familiarize yourself with our policies by clicking the blue &quot;Policies&quot; link above- they&#39;re informative and helpful!","creation_tsz":1456328839,"ending_tsz":1466779639,"original_creation_tsz":1418436153,"last_modified_tsz":1456328839,"price":"150.00","currency_code":"USD","quantity":1,"tags":["titanium ring","whiskey barrel ring","wedding ring","wood ring","wood inlay ring","wedding band","charred oak ring","wedding ring set","mens ring","womens ring","unique ring","engagement ring","Custom made ring"],"category_path":["Jewelry","Ring"],"category_path_ids":[68887482,69152047],"materials":[],"shop_section_id":null,"featured_rank":null,"state_tsz":1456278507,"url":"https:\/\/www.etsy.com\/listing\/215126845\/titanium-ring-charred-oak-whiskey-barrel?utm_source=explorer&utm_medium=api&utm_campaign=api","views":10800,"num_favorers":850,"shipping_template_id":15682540,"processing_min":15,"processing_max":20,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"unisex_adults","occasion":null,"style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1231,"taxonomy_path":["Jewelry","Rings"],"used_manufacturer":false,"Images":[{"listing_image_id":698684781,"hex_code":"6D6C65","red":109,"green":108,"blue":101,"hue":52,"saturation":7,"brightness":42,"is_black_and_white":false,"creation_tsz":1418437813,"listing_id":215126845,"rank":1,"url_75x75":"https:\/\/img1.etsystatic.com\/051\/2\/5140519\/il_75x75.698684781_1gx4.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/051\/2\/5140519\/il_170x135.698684781_1gx4.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/051\/2\/5140519\/il_570xN.698684781_1gx4.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/051\/2\/5140519\/il_fullxfull.698684781_1gx4.jpg","full_height":1366,"full_width":1500},{"listing_image_id":698684885,"hex_code":"565550","red":86,"green":85,"blue":80,"hue":50,"saturation":6,"brightness":33,"is_black_and_white":false,"creation_tsz":1418437813,"listing_id":215126845,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/055\/0\/5140519\/il_75x75.698684885_r9ms.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/055\/0\/5140519\/il_170x135.698684885_r9ms.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/055\/0\/5140519\/il_570xN.698684885_r9ms.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/055\/0\/5140519\/il_fullxfull.698684885_r9ms.jpg","full_height":1375,"full_width":1500},{"listing_image_id":698685261,"hex_code":"7F807B","red":127,"green":128,"blue":123,"hue":72,"saturation":3,"brightness":50,"is_black_and_white":false,"creation_tsz":1418437813,"listing_id":215126845,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/051\/0\/5140519\/il_75x75.698685261_p8ld.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/051\/0\/5140519\/il_170x135.698685261_p8ld.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/051\/0\/5140519\/il_570xN.698685261_p8ld.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/051\/0\/5140519\/il_fullxfull.698685261_p8ld.jpg","full_height":1479,"full_width":1500},{"listing_image_id":698565156,"hex_code":"6D6C65","red":109,"green":108,"blue":101,"hue":52,"saturation":7,"brightness":42,"is_black_and_white":false,"creation_tsz":1418437813,"listing_id":215126845,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/047\/0\/5140519\/il_75x75.698565156_qq5m.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/047\/0\/5140519\/il_170x135.698565156_qq5m.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/047\/0\/5140519\/il_570xN.698565156_qq5m.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/047\/0\/5140519\/il_fullxfull.698565156_qq5m.jpg","full_height":1366,"full_width":1500},{"listing_image_id":698565558,"hex_code":"6F6F69","red":111,"green":111,"blue":105,"hue":60,"saturation":5,"brightness":43,"is_black_and_white":false,"creation_tsz":1418437813,"listing_id":215126845,"rank":5,"url_75x75":"https:\/\/img0.etsystatic.com\/056\/0\/5140519\/il_75x75.698565558_fgq5.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/056\/0\/5140519\/il_170x135.698565558_fgq5.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/056\/0\/5140519\/il_570xN.698565558_fgq5.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/056\/0\/5140519\/il_fullxfull.698565558_fgq5.jpg","full_height":1314,"full_width":1500}],"Shop":{"shop_id":5140519,"shop_name":"RobandLean","user_id":102845,"creation_tsz":1161530825,"title":"Titanium Rings, Wood Rings, Wedding Rings, and more!","announcement":"Thanks so much for visiting our Etsy store where we offer titanium wedding bands, silver wedding bands, gold wedding bands, wooden rings, stone rings, tension set rings, and more.  New, unique wedding rings are added regularly, so please check back often as we add new designs. Rings by Rob and Lean still handcrafts each ring to order! Enjoy your visit, and if there is anything we can do for you, send us a convo!\r\n\r\nLike us on Facebook for special offers, coupon codes, and ring giveaways!","currency_code":"USD","is_vacation":false,"vacation_message":"As announced here in our shop announcement back in early June, we are taking a vacation from August 18-31st. Orders will be delayed unless you discussed a delivery date with us ahead of time. We apologize for any inconvenience this may cause, and appreciate everyone&#39;s patience while we take a much needed break =0). ","sale_message":"Thanks so much for your order! Don&#39;t forget to let us know what size you need (along with any special requests you might have) if you&#39;ve purchased a ring, and please be read our shop policies to be sure that you understand our shop procedures.  (View our policies by clicking this link:  http:\/\/www.etsy.com\/shop\/robandlean\/policy .) Please note that all of our items are made to order, and expect this to take from 3-4 weeks depending on the type of band you&#39;ve ordered and our current work load. This is a confirmation of your order with us- if you need anything else at all or if you have any questions, please let us know and we&#39;ll get right back with you. Have a wonderful day!!\r\n\r\nIF YOU ARE HAVING YOUR ORDER SHIPPED OUTSIDE THE US PLEASE READ:\r\nWe are not responsible for any duties or fees incurred when shipping outside the US. The buyer is responsible for those charges. If you&#39;re unsure if you&#39;ll be charged, please use this link: www.dutycalculator.com\/new-import-duty-and-tax-calculation\/\r\nIf you&#39;re unable or unwilling to pay your duties or fees, let us know within 3 days of placing your order. We can cancel your sale and refund your purchase price. Thanks for understanding.\r\n\r\nLike us on Facebook: http:\/\/www.facebook.com\/pages\/Rings-by-Rob-and-Lean\/187616957930395 and follow us on Twitter: @robandlean for special offers, coupon codes, and ring giveaways.","digital_sale_message":null,"last_updated_tsz":1456153663,"listing_active_count":141,"digital_listing_count":0,"login_name":"robandlean","accepts_custom_requests":true,"policy_welcome":"Hi there! We&#39;re Rob and Leighanne Thompson. We&#39;ve been making and selling our rings here on Etsy for nearly six years now, and we&#39;re looking forward to more great years here. We&#39;ve been married for 19 years and have seven children ages 8-17. We live on a small hobby farm in west Tennesse with our cocker spaniels and a small herd of dairy goats.  We strive to live a simple life (not always easy!) and enjoy gardening, renovating our 1940&#39;s farmhouse, and spending time with our kids.\r\n\r\nAll of our rings are made by us here, on our farm, in our studio. Our rings are still made the same way they were when we started out, one at a time, just for the person ordering. Whenever possible we use stabilized wood and add a water resistant coating for water resistance and durability, and do not charge extra for this. Our desire is to create beautiful, quality pieces at affordable prices. We are not a large company; our work force consists solely of the two of us.\r\n\r\nIf you send us a convo and we don&#39;t get right back to you, please send us another message!  We are mom and dad to seven and our household can get hectic at times =0).  We get so many messages that they can get buried fast, so if we don&#39;t get back with you, just contact us again.  Also, if you message us over the weekend, please be patient with us- if you don&#39;t hear from us on Saturday or Sunday, rest assured that we will reply to your messages on Monday morning. \r\n\r\n*Please Note* that we don&#39;t keep rings in stock.  Every band we make is crafted specifically for the person ordering it.  No two bands will be exactly alike because of our rings&#39; handmade nature.  There are times when we receive more orders than we can keep up with; when this happens, we will not hesitate to close down our shop so that we don&#39;t fall behind with our orders.\r\n\r\nAlso, (and we hate to have to even include this), but please, don&#39;t send us images of someone else&#39;s rings and ask us to make a design that isn&#39;t ours. While we are glad to take custom orders, we won&#39;t make someone else&#39;s design. We will not take on custom work when &quot;copies&quot; of other people&#39;s work are requested, no exceptions.","policy_payment":"We accept PayPal, credit card payments through PayPal, money orders,  personal checks, and cashiers&#39; checks.  Please pay promptly or convo us if you need help with payment.  If you are paying with an e check or personal check, we won&#39;t begin production of your band until payment clears. Also, if you mail in payment, please be sure to include shipping costs in your payment. If you need to cancel an order, please let us know within three days of placing your order as all of our work is custom and by hand.","policy_shipping":"Our wooden and corian bands ship domestically and internationally via First Class Mail. Domestic packages will ship with Delivery Confirmation.  Wooden bands will arrive in a recycled kraft paper box with ribbon.\r\n\r\nAll other bands (titanium, sterling, gold, stainless, and aluminum) ship domestically and internationally via Priority Mail. Domestic packages ship with Delivery Confirmation. These bands arrive in a recycled kraft gift box with ribbon.\r\n\r\nWe are happy to use quicker shipping methods like Priority Mail and Express Mail for exact cost- convo us if you&#39;d like this option. We normally charge for expedited shipping when the ring goes out (so that we are sure to charge you what the USPS charges us, and don&#39;t over or undercharge for this service.) We are also glad to insure your package for exact cost; just let us know if this is something you would like.\r\n\r\nInternational packages do NOT include tracking or Delivery Confirmation.International buyers are responsible for any duties or fees incurred when receiving their packages. Use this link to calculate any duties fees:\r\nwww.dutycalculator.com\/new-import-duty-and-tax-calculation\/","policy_refunds":"The nature of the materials we use most  are such that we can&#39;t resize our bands.  Sometimes we can make them just a bit bigger, but we can&#39;t make existing bands a lot bigger and we can never make them smaller.  Most of the time we have to start over with new rings.  Since a resize is actually a totally new ring, it takes just as much material, work, and time as the original. Therefore, if a band needs to be remade, we  ask for return of the original ring and 50% of the original cost just to cover our materials and part of our time.  Please note also that because resizing or exchanging involves making a new band from scratch that it will take our normal production time to get done.  If you&#39;re unsure of the size you need, please don&#39;t guess at it- let us know that you need some help and we can get some sizers sent out to you.  It is so much easier and better in the long run to take the time in the beginning and get the correct size made the first time around.  Note that we are glad to send sizers free of charge, but we ask that you place your order before we mail the sizer out to you. \r\n\r\nPlease note that our sizes are very presice and they do conform to international sizing specifications. \r\n\r\nIf we are able to make your ring larger, we are glad to do it. \r\n\r\nResizing or remaking a band will take time- at least a few days if we need to make an existing band a bit larger, and regular production time for a remake. \r\n\r\nWe will be happy to help if there are issues with your ring.  We will not refund the cost of the band because the band doesn&#39;t fit properly (unless the mis size is our fault) or if the buyer just changes their mind. We will also not refund the purchase price of a ring because the wood is not exactly as shown in the listing, etc. Wood is a natural material and we can never match color or grain exactly.","policy_additional":"FAQ\r\n\r\n-HOW DO I LET YOU KNOW MY SIZE, ETC? Let us know the size you need, any special requests (like engraving), and anything else you feel is important about your ring by using the drop down menu, and also in the notes to seller box of checkout. You should put everything you want us to know about your ring here. Convos after the fact are confusing for us and can make the production time of your ring longer. If you add information later on after purchase, we will do our best to make what you need but won&#39;t guarantee the changes. If you do not specify a size when you check out, we&#39;ll make you a standard size 8.\r\n\r\n-WHAT IS YOUR PRODUCTION TIME? Once we have all of the necessary information, expect your ring to take up to four weeks to make. Then please allow us time to package and ship your ring. A few things can delay or prolong your ring&#39;s production:\r\n-not paying promptly\r\n-not giving us a size \r\n-changing your size after we&#39;ve begun a different sized ring\r\n-changing the specifics of your ring after we&#39;ve begun it\r\n-extremely changing or customizing a ring&#39;s design\r\n-requesting materials for your ring that we don&#39;t keep in stock\r\n-not giving us all of the specifics about your ring in the notes to seller box of checkout\r\nWhile we are glad to give an estimated completion time for custom orders, we ask that you take our estimate as just that- an estimate. When we are making something totally custom, it can take longer than expected.\r\nAlso, if you contact us and ask us if we can complete a ring by a certain date, we will let you know if we can do it or not. If you wait a week or more after checking with us, we may or may not be able to complete your ring by the original deadline stated. If you have a deadline, please check with us before you order and remind us of it in the notes to seller box.\r\n\r\n-DO YOU OFFER ANY GUARANTEES ON YOUR RINGS? Yes, we do.  We will repair any damage to rings we make within 3 months of receiving the ring for no charge.  After this time, repair of wood inlays will cost $10.  Also, gemstone placement is guaranteed for three months as well.  Customer designed rings (ring styles that we don&#39;t normally offer in our shop but are made by special request) are not guaranteed at all.\r\n\r\n-CAN I SWIM\/BATHE\/SHOWER\/WASH MY HANDS WHILE WEARING A  WOOD RING? Our wood and wood inlay rings are quite durable and long lasting. Most of the varieties of wood we use are stabilized for water resistance, and all are given a  water resistant coating. We do not charge extra for this but do it as a matter of course, because we want everyone&#39;s band to be long lasting and durable. While this affords a huge amount of protection against water, over time the finish can be damaged. Therefore we suggest caution with water: dry your band well after getting it wet, and don&#39;t allow it to soak for long periods. Certain chemicals and solvents can be very hard on the finish as well. And as always, if your inlay is ever damaged, we can replace it for only $10 for as long as you own your ring. \r\n\r\n-I DON&#39;T KNOW WHAT SIZE RING I WEAR... CAN YOU HELP ME?  Sure.  If you don&#39;t know what size ring you  need, we will be glad to mail you a ring sizer free of charge, after you purchase the style ring you would like. \r\n\r\n **If you get sized at a department store jewelry counter or another jeweler, we will not be responsible for mis sizes.  Unfortunately not all sizers and mandrels are created equally.  The best way to figure size if you really don&#39;t know is to get the sizers sent =0).**\r\n\r\n-CAN YOU DO HALF AND QUARTER SIZES?  Yes, we can do half and quarter sizes. \r\n\r\n-CAN YOU CUSTOMIZE A RING FOR ME? OR USE A DIFFERENT STONE\/WOOD\/METAL?  Yes, in most cases.  We&#39;ll definitely do what we can to make just what you&#39;re looking for.  Just convo us with what you&#39;d like us to make and we&#39;ll let you know if it&#39;s something we can do. Also, once you&#39;ve discussed a custom band with us and you order, please remember to put any special requests and changes in the notes to seller section of checkout- it helps us tremendously to have all of the information we need in one place.  We reserve the right to photograph and use custom designs for future sales and listings.\r\n\r\n-CAN YOU ENGRAVE YOUR RINGS? Yes, we can.  Engraving costs $10 and there are seperate listings for it in our shop. The character limit, including spaces, is 20 characters. You must purchase a listing for engraving and let us know the engraving you need in the notes to seller box when you check out. We can no longer offer this service for free, but we&#39;re working to keep it as affordable as possible.\r\n\r\n-HOW DO I CONTACT YOU?  Through Etsy conversations only, please.  This is the best way to make sure that we see your message in a timely manner.\r\n\r\n-I ORDERED A RING AND IT&#39;S GREAT, BUT I ORDERED THE WRONG SIZE... CAN YOU RESIZE IT?   The nature of the materials we use most  are such that we can&#39;t resize our bands.  Sometimes we can make them just a bit bigger, but we can&#39;t make existing bands a lot bigger and we can never make them smaller.  Most of the time we have to start over with new rings.  Since a resize is actually a totally new ring, it takes just as much material, work, and time as the original. Therefore, if a band needs to be remade, we  ask for return of the original ring and 50% of the original cost just to cover our materials and part of our time.  Please note also that because resizing or exchanging involves making a new band from scratch that it will take our normal production time to get done.  If you&#39;re unsure of the size you need, please don&#39;t guess at it- let us know that you need some help and we can get some sizers sent out to you.  It is so much easier and better in the long run to take the time in the beginning and get the correct size made the first time around.  Note that we are glad to send sizers free of charge, but please only request them if you intend, seriously, to purchase a band from our shop (so that we can keep these sizers free for those who need them =0).)\r\n\r\n-MY RING DOESN&#39;T LOOK LIKE THE ONE IN THE LISTING.  WHAT DID YOU DO WRONG AND HOW CAN YOU FIX IT?  Wood is organic and there is no way we can duplicate an exact grain pattern or color from ring to ring- it can vary quite a bit in even the same small piece of wood.  Understand that, like snowflakes, no two pieces of wood are exactly alike (the same is true of our random mokume pattern- we just can&#39;t recreate the pattern in the picture exactly.) Also, every ring we make is handmade- we don&#39;t have any sort of assembly line set up and there are going to be tiny differences from ring to ring just because we *can&#39;t* make rings exactly alike with our current production methods. Embrace this and be happy to know that no one else in the whole world has a ring just like yours =0).\r\n\r\n-CAN WE MEET YOU IN PERSON TO DISCUSS COMMISSIONING A RING?  Yes, although we will still work the sale through Etsy.  We have met a lot of wonderful Etsy folks from all over the country, and we&#39;re always glad to make time for this.  Just let us know when you need to meet so that we can plan accordingly.  \r\n\r\n-CAN WE TOUR YOUR STUDIO?  Yes, if you will give us time to plan accordingly =0). We do have seven kids and they tend to get a little messy- we need time to control the chaos before visitors arrive, so just let us know so that we can plan (and clean like mad, lol.)\r\n\r\n-CAN TITANIUM BE CUT OFF IN CASE OF AN EMERGENCY?  In most cases, yes.  It&#39;s a myth that titanium is so hard that it can&#39;t be cut off in emergency room situations (although some grades are actually too hard to cut, the ones we use aren&#39;t and we cut both commercially pure and aerospace titanium daily with the simplest of tools and no problems)... however, we can&#39;t be held responsible if the unthinkable happens and for misinformed ER workers.","policy_seller_info":null,"policy_updated_tsz":1448982521,"policy_has_private_receipt_info":false,"vacation_autoreply":"Rings by Rob and Lean is on vacation! As announced in our shop announcement back in early June, we are taking a vacation from August 18-31st. Orders will be delayed unless you discussed a delivery date with us ahead of time. We apologize for any inconvenience this may cause, and appreciate everyone&#39;s patience while we take a much needed break =0). We will be back on the 1st of September! \r\nThanks so much!","url":"https:\/\/www.etsy.com\/shop\/RobandLean?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/019\/0\/5140519\/iusb_760x100.12134868_781k.jpg","num_favorers":13542,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/070\/0\/5140519\/isla_fullxfull.15830419_8fbqm6nb.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":217006470,"state":"active","user_id":12350222,"category_id":69150425,"title":"Coffee Mug, This Probably Is Whiskey Mug, Ceramic Mug, Quote Mug, Married in May, Unique Coffee Mug Gift Coffee, Gift Idea for Him","description":"Introducing your new favorite Monday mug! Pour your morning coffee into this gorgeous graphic design. &#39;This Probably Is Whiskey&#39; cup will wake the office up with a good laugh. This beautiful sassy statement mug is the perfect gift for friends, family, or that special someone (including yourself) who needs a cup of joe to get their day started.\n\nEach mug is an 11-oz white ceramic coffee mug with black text. Mug is professionally printed on both sides...perfect for lefties...and for showing off your cute mug at every angle! Dishwasher and microwave safe.\n\nCoffee Mug Quote:\n&#39;This Probably Is Whiskey&#39;\n\n&gt;&gt;&gt; Need More Than One? &lt;&lt;&lt;\nBuy 2 Mugs, Get 1 Free! Add 3 mugs to your shopping cart, then use coupon code &quot;3RDMUGFREE&quot; at checkout!\n\n&gt;&gt;&gt; Check Out MORE Mugs &lt;&lt;&lt;\nWith lots of designs to choose from, you&#39;re sure to find something you love!\nhttps:\/\/www.etsy.com\/shop\/MarriedInMayDesigns?section_id=16509138&ref=shopsection\n\n&gt;&gt;&gt; MORE from the SHOP &lt;&lt;&lt;\nhttps:\/\/www.etsy.com\/shop\/MarriedInMayDesigns\n\nShips within 10 business days after payment as been made.\n\nSign-up here to receive exclusive new products releases, private sales, gift ideas, styling tips and more! ---&gt; http:\/\/eepurl.com\/bcdbh1\n\n*** Thank you for visiting Married in May Designs ***","creation_tsz":1456288422,"ending_tsz":1466739222,"original_creation_tsz":1420260194,"last_modified_tsz":1456288422,"price":"16.00","currency_code":"USD","quantity":28,"tags":["cup","mug","coffee","coffee cup","coffee mug","funny coffee mug","gift","quote mug","ceramics and pottery","whiskey","whiskey cup","gift for him","unique coffee mug"],"category_path":["Housewares"],"category_path_ids":[69150425],"materials":["ceramic","dishwasher safe","microwave safe"],"shop_section_id":16509138,"featured_rank":null,"state_tsz":1454889811,"url":"https:\/\/www.etsy.com\/listing\/217006470\/coffee-mug-this-probably-is-whiskey-mug?utm_source=explorer&utm_medium=api&utm_campaign=api","views":6045,"num_favorers":1659,"shipping_template_id":14381945482,"processing_min":5,"processing_max":10,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":"21","item_weight_units":null,"item_length":"7","item_width":"7","item_height":"6","item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":false,"taxonomy_id":1062,"taxonomy_path":["Home & Living","Kitchen & Dining","Drink & Barware","Drinkware","Mugs"],"used_manufacturer":false,"Images":[{"listing_image_id":706006890,"hex_code":"B1A8A4","red":177,"green":168,"blue":164,"hue":18,"saturation":7,"brightness":69,"is_black_and_white":false,"creation_tsz":1420260195,"listing_id":217006470,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/050\/0\/7713012\/il_75x75.706006890_4qnh.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/050\/0\/7713012\/il_170x135.706006890_4qnh.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/050\/0\/7713012\/il_570xN.706006890_4qnh.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/050\/0\/7713012\/il_fullxfull.706006890_4qnh.jpg","full_height":445,"full_width":565},{"listing_image_id":911029903,"hex_code":"B8A38C","red":184,"green":163,"blue":140,"hue":31,"saturation":23,"brightness":72,"is_black_and_white":false,"creation_tsz":1453866469,"listing_id":217006470,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/132\/0\/7713012\/il_75x75.911029903_mkx3.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/132\/0\/7713012\/il_170x135.911029903_mkx3.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/132\/0\/7713012\/il_570xN.911029903_mkx3.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/132\/0\/7713012\/il_fullxfull.911029903_mkx3.jpg","full_height":1500,"full_width":1500}],"Shop":{"shop_id":7713012,"shop_name":"MarriedInMayDesigns","user_id":12350222,"creation_tsz":1358562737,"title":"Coffee Mugs & Digital Wall Art Printables","announcement":"Married in May Designs offers fresh graphic design and typography in prints, printables and coffee mugs.  Perfect for home and gifts.  Buy 2 cups, get one free!  \r\n\r\nBUY 2 MUGS, GET 1 FREE - use coupon code &quot;3RDMUGFREE&quot; at checkout.\r\n\r\nNEW Coffee Mugs designs available!  Make sure to check out our Art Printables...perfect for framing, giving as a gift, or decorating your special space!\r\nLCheck out my blog fro great DIY projects, behind the scenes looks, & more!  www.marriedinmaydesigns.com\r\n\r\nShop Hours: Monday thru Friday","currency_code":"USD","is_vacation":false,"vacation_message":"Welcome to Married in May Designs! The shop will be closed beginning May 8th.  Sorry for any inconvenience this may cause.\r\n\r\nAll orders prior to May 8th will be shipped within the promised time frame of the purchase date. Please convo me about any future inquires. I&#39;ll be glad to work with you as best as I can during the next few weeks.\r\n\r\nWhile you wait, make sure to check out the blog! www.marriedinmaydesigns.com","sale_message":"Thank you for your purchase!  I hope you adore your order as much as I enjoyed creating it for you.  I&#39;d love to see you again!  Next time you come by the Etsy Shop, use coupon code &quot;HELLOAGAIN&quot; at checkout to save 10%.\r\n\r\nOn Instagram?  Tag a pic with your purchase using hashtag #MARRIEDINMAY.\r\n\r\nThanks Again & Enjoy!\r\n\r\n-Rachel Thompson, Owner of Married in May Designs\r\n\r\nStay Connected for Steal, Deals, Freebies, & Coupon Codes!\r\n&quot;Like&quot; us on Facebook - www.facebook.com\/marriedinmaydesigns\r\nRead - www.marriedinmaydesigns.com\r\nWrite - mimdesigns@yahoo.com\r\nShop - www.marriedinmaydesigns.etsy.com","digital_sale_message":"Thank you for your order! I hope you love your purchase. Your business is truly appreciated! You can access your files instantly by using the link at the top right of the transaction page. Plus, you can download your digital file(s) at any time from https:\/\/www.etsy.com\/your\/purchases. \u2028\u2028\r\n\r\n\u2028\u2028***PLEASE BE AWARE THAT NO PHYSICAL ITEM WILL BE MAILED TO YOU, ALL ITEMS ARE DIGITAL FILES ONLY***\r\n\r\nI hope you adore your order as much as I enjoyed creating it for you.  I&#39;d love to see you again!  Next time you come by the Etsy Shop, use coupon code &quot;HELLOAGAIN&quot; at checkout to save 10%.\r\n\r\nOn Instagram?  Tag a pic with your purchase using hashtag #MARRIEDINMAY.\r\n\r\nIf you have any comments\/questions, please contact me at mimdesigns@yahoo.com. I&#39;m happy to work with you to resolve any issues, and would also love to hear any comments and suggestions. \r\n\r\nThanks again & Enjoy!\r\n\r\nRachel Thompson, Owner of Married In May Designs\r\n\r\nStay Connected for Steal, Deals, Freebies, & Coupon Codes!\r\n&quot;Like&quot; us on Facebook - www.facebook.com\/marriedinmaydesigns\r\nRead - www.marriedinmaydesigns.com\r\nWrite - mimdesigns@yahoo.com\r\nShop - www.marriedinmaydesigns.etsy.com","last_updated_tsz":1456333512,"listing_active_count":149,"digital_listing_count":122,"login_name":"rdavis2004","accepts_custom_requests":false,"policy_welcome":"Hello there!  Welcome to my digital printables shop!  I hope you like the items in our shop!  Have a look around at my current listings and please message me if you have any questions!\r\n\r\nI do my best to offer great customer service & support.  If you feel like you are not receiving that, please let me know!  I strive for 100% customer satisfaction!\r\n\r\nCheck out our store policies for additonal information.\r\n\r\nNote: Married in May Designs operates on business days (Monday through Friday). Instant downloads will still be sent immediately after payment is made on weekends, however.\r\n","policy_payment":"I accept Paypal, Credit Cards, and Etsy Gift Cards.  Payment is due in at time of purchase and must be paid in full to be shipped.","policy_shipping":"::::::::::::: When will my digital order arrive? :::::::::::::\r\n*Instant downloads: Available immediately after payment processing, find instructions at this link - https:\/\/www.etsy.com\/help\/article\/3949\r\n\r\n\r\n::::::::::::: Coffee Mug Designs :::::::::::::\r\nAll orders are shipped USPS Priority Mail (US only) & USPS Priority International Mail (non-US only).  Processing time will be 1-5 business days and shipping can take 1-3 days US, and 4-18 days Internationally.  Please note I am not responsible for extra duties or tax with international shipping.  Mugs are carefully created, inspected, & packaged, & shipped in a USPS Priority Box.  Mugs are packaged with care using high quality shipping materials.","policy_refunds":"Digital Printables:\r\nSince these products are digital printable files and as such it is impossible to tell if they have been printed or not, no refunds will be given. However, I will do everything possible to ensure that you are 100% thrilled with your printable purchase! \r\n\r\n\r\nShipped items:\r\nIf there is an error on your order or a problem with your purchase, please let me know so I can rectify the situation!  Coffee Mugs are not eligible for return unless there is an error made with the item or it is damaged in transit.   Married in May Designs is not responsible for lost packages.  The shipping company is responsibly for lost packages.  Buyer is responsible for placing the complaint with the shipping company.  \r\n\r\nPlease double check shipping addresses at checkout.","policy_additional":"Printable Files, Terms of Use:\r\n:::::::::::::::::::::::::::::::::::::::::::::::::::::\r\nYou CAN:\r\n1. Print printable files for personal use.\r\n2. Give away a print out as a gift (please no more than 3 times per printable, if you need to print more than 3 for a gift, please make another purchase!).\r\n\r\nYou CANNOT:\r\n1. Share the file with anyone via email, USB, or any other means.\r\n3. Sell the printable file to anyone else.\r\n3. Sell print outs of the printable file to anyone.\r\n4. Use the printable files or print outs in giveaways without permission.\r\n5. Edit, manipulate, or use the printable file on products for sale.\r\n6. Use printable files for ANY commercial use.\r\n\r\nPurchase does not transfer rights. Copyright of designs remains with the artist. By purchasing this item, you have agreed to the full terms of use listed above.\r\n\r\n\r\nDiscounts & Wholesale\r\n:::::::::::::::::::::::::::::::::::::::::::::::::::::\r\nPlease message me for details. I do offer wholesale accounts and would be happy to speak with you in more detail!","policy_seller_info":"Rachel Thompson, Owner of Married in May Designs\r\n\r\nRead - www.marriedinmaydesigns.com\r\nWrite - mimdesigns@yahoo.com\r\nShop - www.marriedinmaydesigns.etsy.com","policy_updated_tsz":1440473381,"policy_has_private_receipt_info":false,"vacation_autoreply":"Welcome to Married in May Designs! The shop will be closed beginning May 8th.  Sorry for any inconvenience this may cause.\r\n\r\nAll orders prior to May 8th will still be shipped within the promised time frame of the purchase date. Please convo me about any future inquires. I&#39;ll be glad to work with you as best as I can during the next few weeks.\r\n\r\nWhile you wait, make sure to check out the blog! www..marriedinmaydesigns.com","url":"https:\/\/www.etsy.com\/shop\/MarriedInMayDesigns?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/009\/0\/7713012\/iusb_760x100.11106688_fq3e.jpg","num_favorers":1502,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/076\/0\/7713012\/isla_fullxfull.15973775_t4k0ct9a.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":229908885,"state":"active","user_id":58773729,"category_id":69150425,"title":"Last Name with Single Initial Glass Whiskey Decanter and 4 Rock Glasses Set - (g101-1210-2) - Free Personalization","description":"Product Details:\n\nThis engravable decanter set is an absolute must-have for any gentleman who loves whiskey or any other well made spirit. Perfect for the after work drink to wind down and even the small occasional dinner party. Made of 100% glass, the decanter holds 34oz of your favorite beverage and can be personalized with your initial. The rock glasses are uniquely square-like shaped to provide a more enjoyable drinking experience and are personalized with your initial as well. \n\nSet Includes 1 Decanter and 4 Rock Glasses\n\nAll 5 pieces come engraved with a single initial of your choosing. \n\nDecanter Size: 9&quot; (H) x 3-1\/2&quot; (W); holds 34 oz.\n\nRock Glass Size:  3-1\/2&quot; tall; holds 9-1\/4 oz.\n\nFeatures: Beveled stopper\n\nMaterials: Clear glass\n\nPlease Note: With machine-crafted blown glass, expect minor bubbles and swirls that are inherent to the glass. Variations will occur on styles due to their machine-crafted nature.\n\n\nPersonalization:\n\nLet us make your special item even more memorable with FREE custom personalization. Personalization options for Decanter and Rock Glass Set are available in Last Name with Single Initial on the decanter and Single initial on each of the four rock glasses in the font style shown in image. \n\nPlease provide  Last Name with Single Initial to be engraved on Decanter as well as Single Initial to be engraved on the Rock Glasses  in the &quot;Notes to Seller&quot; section, if applicable. \n\n\nShipping: \n\nAt this time we do not ship Internationally.  \n\nHawaii and Alaska customers please contact us to place order. \n\nOrders typically arrive within 3 to 5 business days once they leave our store via FedEx. Some items are eligible for upgraded shipping and will be specified in the listing. Shipping times do not include the time it takes to make and prepare the order for shipping. Order preparation\/handling varies by item. Please see details under Shipping and Policies tab. \n\n\nGuarantee:\n\nWith our \u201cNo Worries\u201d 100% Satisfaction Guarantee , we offer complete peace of mind. Discover an extraordinary selection of personalized gifts, distinctive accessories, the newest ideas, and everything you need to make your purchase uniquely special.\n\n\nReturns:\n\nIt is my goal to make sure that you are satisfied with your purchase. If for any reason you are not happy with your order please let me know and I will do everything to make things right. If we are unable to come to an equally beneficial solution I am more than happy to issue a complete refund for your entire order.","creation_tsz":1456257991,"ending_tsz":1466708791,"original_creation_tsz":1429044793,"last_modified_tsz":1456257991,"price":"48.95","currency_code":"USD","quantity":95,"tags":["groomsmen gift","personalized","men","personalized gift","glass decanter","decanter","whiskey decanter","liquor decanter","barware","rock glasses","whiskey glasses","decanter set","personalized decante"],"category_path":["Housewares"],"category_path_ids":[69150425],"materials":[],"shop_section_id":null,"featured_rank":9,"state_tsz":1456257790,"url":"https:\/\/www.etsy.com\/listing\/229908885\/last-name-with-single-initial-glass?utm_source=explorer&utm_medium=api&utm_campaign=api","views":13893,"num_favorers":1605,"shipping_template_id":10258173730,"processing_min":3,"processing_max":5,"who_made":"collective","is_supply":"false","when_made":"2010_2016","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":false,"taxonomy_id":1064,"taxonomy_path":["Home & Living","Kitchen & Dining","Drink & Barware","Barware","Decanters"],"used_manufacturer":false,"Images":[{"listing_image_id":757475485,"hex_code":"8C5F48","red":140,"green":95,"blue":72,"hue":20,"saturation":48,"brightness":54,"is_black_and_white":false,"creation_tsz":1429044794,"listing_id":229908885,"rank":1,"url_75x75":"https:\/\/img1.etsystatic.com\/067\/0\/10424705\/il_75x75.757475485_b1ig.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/067\/0\/10424705\/il_170x135.757475485_b1ig.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/067\/0\/10424705\/il_570xN.757475485_b1ig.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/067\/0\/10424705\/il_fullxfull.757475485_b1ig.jpg","full_height":1500,"full_width":1500}],"Shop":{"shop_id":10424705,"shop_name":"GeneralGreenesGifts","user_id":58773729,"creation_tsz":1418849347,"title":null,"announcement":null,"currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":null,"digital_sale_message":null,"last_updated_tsz":1456338732,"listing_active_count":97,"digital_listing_count":0,"login_name":"generalgreene","accepts_custom_requests":false,"policy_welcome":null,"policy_payment":"We accept credit card and other forms of payment through PayPal. If you do not have a PayPal account please checkout as a guest. ","policy_shipping":"At this time we do not ship Internationally. \r\n\r\nHawaii and Alaska customers please contact us to place order. \r\n\r\nOrders typically ship arrive within 3 to 5 business days once they leave our store via FedEx. Some items are eligible for upgraded shipping and will be specified in the listing. Shipping times do not include the time it takes to make and prepare the order for shipping. Order preparation\/handling varies by item. \r\n\r\nAll orders must be received by December 16th to ensure receipt by Christmas. All Orders received after this date will require upgraded shipping\/processing. Please contact customer service for upgraded service and shipping concerns. ","policy_refunds":"It is my goal to make sure that you are satisfied with your purchase. If for any reason you are not happy with your order please let me know and I will do everything to make things right. If we are unable to come to an equally beneficial solution I am more than happy to issue a complete refund for your entire order. ","policy_additional":null,"policy_seller_info":null,"policy_updated_tsz":1450269533,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/GeneralGreenesGifts?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/048\/0\/10424705\/iusb_760x100.14751750_9uop.jpg","num_favorers":657,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":169223476,"state":"active","user_id":36444245,"category_id":68887494,"title":"2 Liter - Personalized Oak Whiskey Barrel - Mini Whiskey Barrel - Groomsmen Gift - GC1028","description":"This Personalized Oak Whiskey Barrel makes a fantastic addition to the man cave or home bar.  Barrel measures 7 \u00bd\u201d x 5\u201d x 5\u201d and holds approximately 2 liters of whiskey. It will hold and age your whiskey until you decide to drink up!  Makes a great Groomsmen Gift.\n\nRUSTIC FINISH, AUTHENTIC WEATHERED FEEL\n\n- Send personalization in the message box upon checkout\n- Can be personalized with 1 line up to 10 characters. \n- Our gifts ship within 2-3 business days\n- Questions welcome!  Let us know if you have questions or need additional quantities, we can help!\n-Please note, once submitted , orders cannot be cancelled. I will begin working on your order immediately and my personalization techniques are permanent and therefore orders cannot be returned to inventory.","creation_tsz":1456266705,"ending_tsz":1466717505,"original_creation_tsz":1384441277,"last_modified_tsz":1456266705,"price":"45.99","currency_code":"USD","quantity":65,"tags":["Barware","Groomsmen Gifts","Personalized Barrel","Whiskey Barrel","Personalized Gifts","Whiskey Cask","Barware Gifts","Oak Barrel","Mini Whiskey Barrel","Gifts for Him","Husband Gifts"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["oak wood","wood","metal"],"shop_section_id":14972342,"featured_rank":null,"state_tsz":1450121273,"url":"https:\/\/www.etsy.com\/listing\/169223476\/2-liter-personalized-oak-whiskey-barrel?utm_source=explorer&utm_medium=api&utm_campaign=api","views":23602,"num_favorers":1283,"shipping_template_id":685045764,"processing_min":1,"processing_max":3,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"men","occasion":"wedding","style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1668,"taxonomy_path":["Weddings","Gifts & Mementos","Groomsmen Gifts"],"used_manufacturer":false,"Images":[{"listing_image_id":490024782,"hex_code":"A88C6A","red":168,"green":140,"blue":106,"hue":33,"saturation":36,"brightness":65,"is_black_and_white":false,"creation_tsz":1384441277,"listing_id":169223476,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/024\/0\/8456494\/il_75x75.490024782_psso.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/024\/0\/8456494\/il_170x135.490024782_psso.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/024\/0\/8456494\/il_570xN.490024782_psso.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/024\/0\/8456494\/il_fullxfull.490024782_psso.jpg","full_height":500,"full_width":500},{"listing_image_id":778392783,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1432740380,"listing_id":169223476,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/068\/0\/8456494\/il_75x75.778392783_n6kn.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/068\/0\/8456494\/il_170x135.778392783_n6kn.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/068\/0\/8456494\/il_570xN.778392783_n6kn.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/068\/0\/8456494\/il_fullxfull.778392783_n6kn.jpg","full_height":500,"full_width":500},{"listing_image_id":778350904,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1432740380,"listing_id":169223476,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/065\/0\/8456494\/il_75x75.778350904_tgbp.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/065\/0\/8456494\/il_170x135.778350904_tgbp.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/065\/0\/8456494\/il_570xN.778350904_tgbp.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/065\/0\/8456494\/il_fullxfull.778350904_tgbp.jpg","full_height":1500,"full_width":1500}],"Shop":{"shop_id":8456494,"shop_name":"RCPersonalizedGifts","user_id":36444245,"creation_tsz":1376419643,"title":"Groomsmen Gifts - Gifts for Men - Gifts for Him ","announcement":"RC Personalized Gifts offers a terrific selection of personalized and engraved gifts for men, groomsmen gifts and unique ideas for groomsmen gifts.  Ordering in Bulk?  Send me a message and I&#39;ll give you a nice discount!  Thank you for Shopping!\r\n","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you for your order!  We hope you enjoy your personalized gift.\r\n\r\nPlease note, once submitted , orders CANNOT BE CANCELLED.  I will begin working on your order immediately and my personalization techniques are permanent and therefore orders cannot be returned to inventory.\r\n\r\nFAST SHIPPING & PROCESSING:\r\nMy gifts ship in 1-3 business days.  Shipping transit can take 5-7 business days to be delivered depending on delivery location.  I am only shipping within the USA at this time.  \r\nNOTE: A few items may take a day or two longer; this will be noted on those specific items.","digital_sale_message":null,"last_updated_tsz":1456331346,"listing_active_count":559,"digital_listing_count":0,"login_name":"stvdeters","accepts_custom_requests":true,"policy_welcome":"Thank you for visiting my RC Personalized Gifts.  We have a great selection of personalized and engraved gifts for men and a terrific selection of groomsmen gifts and wedding party gifts.  \r\n","policy_payment":"I accept Paypal, Visa, MasterCard, American Express Discover and Etsy Gift Cards.\r\n\r\nI need to collect state sales tax of 7% on order shipping within Minnesota\r\n\r\nCancellation Policy:\r\nPlease note, once submitted, orders cannot be cancelled.  I will begin working on your order immediately and my personalization techniques are permanent and therefore orders cannot be returned to inventory.  No exceptions.\r\n\r\n","policy_shipping":"FAST SHIPPING & PROCESSING:\r\nWe will be accepting orders for Guaranteed Holiday Delivery through Wednesday, December 16th!  My gifts ship in 1-3 business days.  Shipping transit can take 5-7 business days to be delivered depending on delivery location.  I am only shipping within the USA at this time.  \r\n\r\nNEED YOUR ORDER FASTER?\r\nShipping upgrades are offered.  See shipping\/policies tab on each item for details.","policy_refunds":"Because all my items are engraved or personalized, I cannot accept returns.  If the item is damaged or incorrect, I will happily replace the item.","policy_additional":"PLEASE NOTE DEFINITION OF MONOGRAM! PLEASE SEE FONT IMAGE ABOVE AS WELL FOR CLAIRIFICATION. I CANNOT REPLACE ORDERS SENT WITH INCORRECT PERSONALIZATION. I DO EACH CLIP EXACTLY AS YOU HAVE THE PERSONALIZATION LISTED IN THE ORDER LISTED.\r\n\r\nMONOGRAM: FIRST NAME INITIAL - LAST NAME INITIAL (center letter & larger) - MIDDLE NAME INITIAL created in a circular classic monogram style. The First Letter (first name) and the Last Letter (middle name) may look different than expected, this is normal and part of the classic monogram look. Again, see font style image above for reference.","policy_seller_info":null,"policy_updated_tsz":1450302959,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/RCPersonalizedGifts?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/032\/0\/8456494\/iusb_760x100.12724462_k32u.jpg","num_favorers":3663,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":257151080,"state":"active","user_id":22839314,"category_id":68887494,"title":"Christmas Gift - Engraved Whiskey Stones Gift Set - Whiskey Rocks - Gift For Dad, Grandpa, Brother","description":"Christmas gift. Engraved whiskey stones gift set. Set includes six (6) laser engraved whiskey stones with a storage bag and engraved wooden gift box. The coolest gift for the guys in your life! Perfect for Grandpas, Dads, Brothers, friends -- anyone who loves to enjoy a drink once in a while! Each stone is engraved on a single side with your choice of personalization. Custom orders are welcome :)\n\nUse to chill your whiskey, scotch, vodka, wine, etc. Whiskey stones are made from 100% soapstone which has a natural ability to retain it&#39;s temperature for extended periods of time. It&#39;s non-porous, odorless, and tasteless. It will not absorb odors from your freezer like ice cubes do. Soapstone is softer than glass so they will not damage your barware! These stones are dishwasher safe and will never wear out.\n\nBox is shown in Dark Walnut, but it&#39;s also available in other finishes!\n\nThis listing is for a set of six (6) laser engraved whiskey stones with gift box.\nStones are made from 100% pure Soapstone. Each stone measures approx 1&quot;\n\nPlease NOTE the personalization you would like (in the comment box) at checkout!\nHave something else in mind? I can also engrave logos & custom images\/designs.","creation_tsz":1456276586,"ending_tsz":1466727386,"original_creation_tsz":1448028687,"last_modified_tsz":1456276586,"price":"28.00","currency_code":"USD","quantity":11,"tags":["whiskey rocks","whiskey stones","whiskey lover","laser engraved","engraved gift","christmas gift","whiskey gift set","whiskey rock set","groomsmen gift","gift idea","men's gift idea","gift for dad","gift for man"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["wood","stain"],"shop_section_id":15737899,"featured_rank":null,"state_tsz":1455642172,"url":"https:\/\/www.etsy.com\/listing\/257151080\/christmas-gift-engraved-whiskey-stones?utm_source=explorer&utm_medium=api&utm_campaign=api","views":2939,"num_favorers":162,"shipping_template_id":null,"processing_min":15,"processing_max":20,"who_made":"i_did","is_supply":"false","when_made":"2010_2016","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":"christmas","style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1668,"taxonomy_path":["Weddings","Gifts & Mementos","Groomsmen Gifts"],"used_manufacturer":false,"Images":[{"listing_image_id":872278301,"hex_code":"837C72","red":131,"green":124,"blue":114,"hue":35,"saturation":12,"brightness":51,"is_black_and_white":false,"creation_tsz":1448028687,"listing_id":257151080,"rank":1,"url_75x75":"https:\/\/img1.etsystatic.com\/131\/0\/7038428\/il_75x75.872278301_b8ff.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/131\/0\/7038428\/il_170x135.872278301_b8ff.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/131\/0\/7038428\/il_570xN.872278301_b8ff.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/131\/0\/7038428\/il_fullxfull.872278301_b8ff.jpg","full_height":1125,"full_width":1500},{"listing_image_id":872512724,"hex_code":"9A9288","red":154,"green":146,"blue":136,"hue":33,"saturation":11,"brightness":60,"is_black_and_white":false,"creation_tsz":1448028687,"listing_id":257151080,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/103\/0\/7038428\/il_75x75.872512724_5dm7.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/103\/0\/7038428\/il_170x135.872512724_5dm7.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/103\/0\/7038428\/il_570xN.872512724_5dm7.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/103\/0\/7038428\/il_fullxfull.872512724_5dm7.jpg","full_height":1125,"full_width":1500},{"listing_image_id":872278427,"hex_code":"817B70","red":129,"green":123,"blue":112,"hue":39,"saturation":13,"brightness":50,"is_black_and_white":false,"creation_tsz":1448028687,"listing_id":257151080,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/114\/0\/7038428\/il_75x75.872278427_crxx.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/114\/0\/7038428\/il_170x135.872278427_crxx.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/114\/0\/7038428\/il_570xN.872278427_crxx.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/114\/0\/7038428\/il_fullxfull.872278427_crxx.jpg","full_height":1125,"full_width":1500},{"listing_image_id":867871467,"hex_code":"B2B2B2","red":178,"green":178,"blue":178,"hue":0,"saturation":0,"brightness":69,"is_black_and_white":false,"creation_tsz":1448028687,"listing_id":257151080,"rank":4,"url_75x75":"https:\/\/img1.etsystatic.com\/114\/0\/7038428\/il_75x75.867871467_4kaz.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/114\/0\/7038428\/il_170x135.867871467_4kaz.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/114\/0\/7038428\/il_570xN.867871467_4kaz.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/114\/0\/7038428\/il_fullxfull.867871467_4kaz.jpg","full_height":690,"full_width":1030},{"listing_image_id":625415314,"hex_code":"8F878B","red":143,"green":135,"blue":139,"hue":330,"saturation":5,"brightness":56,"is_black_and_white":false,"creation_tsz":1448028687,"listing_id":257151080,"rank":5,"url_75x75":"https:\/\/img0.etsystatic.com\/042\/0\/7038428\/il_75x75.625415314_sruj.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/042\/0\/7038428\/il_170x135.625415314_sruj.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/042\/0\/7038428\/il_570xN.625415314_sruj.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/042\/0\/7038428\/il_fullxfull.625415314_sruj.jpg","full_height":1500,"full_width":1500}],"Shop":{"shop_id":7038428,"shop_name":"BloominBridal","user_id":22839314,"creation_tsz":1341239164,"title":"Personalized Gifts & Decor for Rustic Chic Weddings","announcement":"Personalized Gifts & Decor ** Current TURN-AROUND time is 3-4 WEEKS. If you have any questions regarding your order, please contact us! ** Bloomin Bridal has everything you need for your rustic, shabby chic, country, barnyard or woodland wedding. We&#39;re on INSTAGRAM! @bloominbridal to find us \ud83d\udc95\r\n\r\nCheck out our NEW items and detailed designs --- personalized for\r\nweddings, anniversaries, special occasions, remembrance & more!\r\n\r\nPersonalize a gift for someone special today!\r\n\r\n**** Please see below for our current turn around time. ****\r\nIf you have any questions regarding your purchase, contact me!\r\n\r\nCurrent turn around time is approx. 3-4 weeks before shipment!\r\nPlease note your need-by-date in the comment box at checkout.\r\n\r\nIf you&#39;d like to put a RUSH on your order, please contact me\r\nPRIOR to placing the order - so that I can check too see that\r\nI can accommodate you. I can then set up a shipping upgrade.\r\n\r\nPlease NOTE: Most items in my shop are custom made & personalized!\r\nThese orders do take extra care and time. We appreciate your patience!","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you for purchasing from Bloomin Bridal!\r\n\r\nDue to the busy time of year, our production time is 3-4 weeks. (Your estimated ship date will be noted on your receipt.) if you have any questions regarding your order or ship date, feel free to contact us :)\r\n\r\nDOMESTIC orders (inside the U.S.) ship via Priority mail (which takes 2-3 days).\r\nINTERNATIONAL orders ship via First Class International (which takes 4+ weeks).\r\n\r\nPLEASE.. DOUBLE-CHECK ALL engraving details AND your shipping address.\r\nContact me right away with any changes, questions or concerns about shipping.\r\n\r\nIf you&#39;d like to put a RUSH on your order, please contact me ASAP! I may be able to accommodate you. If an accommodation if possible, there will be an additional fee.\r\n\r\nWe LOVE to see your items! Please use #bloominbridal to tag us on Instagram \ud83d\udc95","digital_sale_message":null,"last_updated_tsz":1456331955,"listing_active_count":1542,"digital_listing_count":0,"login_name":"bloominbridal","accepts_custom_requests":true,"policy_welcome":"Thank you for stopping by!\r\n\r\nBloomin&#39; Bridal is home to many types of unique - rustic, outdoor, barn, shabby chic, woodland wedding gifts & decor! Bridal party gifts, invitations, chalkboard signs, card chests, guest books, keepsakes, cake servers & more! \r\n\r\nCustom bridal decor is truly one of my specialties! Are you looking for a custom item? I enjoy making one-of-a-kind pieces for my clients! I love to work one-on-one with brides AND grooms -- matching your wedding style to create something you will LOVE & treasure for a lifetime!\r\n\r\nA discount is available on all bridal party orders!\r\nUse discount code: BRIDAL10 to save 10% off your purchase.\r\n\r\nPlease NOTE: MY CURRENT TURN-AROUND TIME IS 3-4 WEEKS BEFORE SHIPMENT OF YOUR ORDER. SOME ORDERS CAN TAKE LONGER. Please, as always - contact me if you need your item(s) sooner and I will do everything I can to accommodate you!\r\n\r\nThank you!","policy_payment":"PLEASE MAKE SURE YOUR CORRECT SHIPPING ADDRESS IS LISTED!\r\nI can and will not be held accountable for orders that have been shipped to the incorrect address. I print each label directly from the information you have listed on your order. If for some reason the address is incorrect on your order PLEASE do contact me immediately to arrange for it be changed. Thank you!\r\n\r\nI accept both Paypal and debit\/credit card payments as well as Etsy gift cards!","policy_shipping":"All U.S. orders ship via USPS Priority Mail.\r\n\r\nALL International orders ship via USPS First Class International.\r\nIn most cases - larger orders will ship via Priority International..\r\n\r\nIf you are located Internationally, please be aware that orders can take anywhere from 2-8 weeks to arrive depending on customs. Most orders are shipped via First Class mail (the most economical method). If you would like to upgrade to Priority ot Priority Express - please convo me for a shipping quote.\r\n\r\nNOTE:\r\nALL orders shipped outside the US can have duty or tax fees that your country might charge you. These are fees that we cannot quote you for. Please purchase accordingly. Be aware that you might have to pay duty or tax fees upon accepting your order. We charge actual shipping fees ONLY! We will not be held responsible and will not pay your duty or tax fees. If customs tries to contact you or deliver your package and you do not respond or pick it up it will be returned to me and you will have to repay the original shipping charge.\r\n\r\nThank you for your understanding!","policy_refunds":"If for some reason your order is not as described, engraved incorrectly, or has arrived damaged in any way, please contact me right away! Please do not leave a negative review. This will only prolong the process more. We are only human and we do sometimes make mistakes and typos.... but we are more than happy to help rectify the problem so as not to inconvenience you in any way.\r\n\r\nPlease NOTE: I do not offer refunds on customized orders. Each custom order will be made to your exact specifications, as they are noted by you. This ensures that you are getting exactly what you want & your item(s) will not be eligible for refund and\/or return. Please be sure to double check the finish color, lining color and for any spelling errors or mistakes before placing your order.\r\n\r\nThank you!","policy_additional":null,"policy_seller_info":null,"policy_updated_tsz":1455086569,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/BloominBridal?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/050\/0\/7038428\/iusb_760x100.14479946_5im6.jpg","num_favorers":3052,"languages":["en-US","nl"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/071\/0\/7038428\/isla_fullxfull.15938965_2ianb12f.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":201958462,"state":"active","user_id":50480166,"category_id":68887494,"title":"Personalized Whiskey Glasses \/ Groomsmen Gifts \/ Rocks Glasses \/ Engraved \/ Custom \/ 16 DESIGNS \/ Select ANY Quantity","description":"Personalized &#39;On the Rocks&#39; Glasses\n\n* Select any quantity.\n* Your choice of sixteen designs : Images 2-5 display our current design options.\n................................\n\n- Each glass will hold approximately 10oz of liquid and is 3 inches tall with a 3 inch diameter.\n\n- All of our designs are permanent.\n- Lifetime guarantee on engraving.\n\n- All of our glassware is dishwasher safe.\n................................\n\nLearn more about us and our products here ~&gt; https:\/\/www.etsy.com\/shop\/TheEngravery\/about\n................................\n\nA keepsake your family and friends will forever cherish, personalized glassware is great for: wedding parties, wedding favors, bridal showers, family reunions, family vacations, birthday and holiday gifts, bachelor and bachelorette parties, corporate events, and so much more!\n................................\n\nHOW TO ORDER:\n................................\n\n- 1. Select the number of glasses you would like from the drop down menu option marked &#39;Quantity.&#39;\n\n* Each glass is $10.50. The total will adjust as items are added to\/subtracted from you cart.\n* Shipping costs will also adjust automatically : $11.99 for the first item and $1.50 for each additional glass.\n* All of our orders are shipped 2-3 Business day Priority provided by USPS.\n* Tracking information is provided.\n\n- 2. Select the Design preference you would like from the drop down menu option marked &#39;Design.&#39;\n\n* Our current selections are displayed in images 2-5.\n****Please NOTE: Designs are shown in black for DISPLAY purposes only. All of our creations will be engraved onto the glassware of your choice.****\n\n- 3. Include your personalization requests as you would like them to appear for each glass. \n\n**Review your requests thoroughly before ordering.**\n................................\n\nPlease feel free to reach out with any questions. Thank you!!","creation_tsz":1456284380,"ending_tsz":1466735180,"original_creation_tsz":1409601352,"last_modified_tsz":1456284380,"price":"10.50","currency_code":"USD","quantity":26,"tags":["custom","personalized","glassware","groomsmen","gift","engraved","wedding","rocks glass","whiskey glass","scotch glass","etched","bachelor","glasses"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["Engraved","Personalized","Whiskey Glasses"],"shop_section_id":17270729,"featured_rank":null,"state_tsz":1455291092,"url":"https:\/\/www.etsy.com\/listing\/201958462\/personalized-whiskey-glasses-groomsmen?utm_source=explorer&utm_medium=api&utm_campaign=api","views":3232,"num_favorers":253,"shipping_template_id":null,"processing_min":7,"processing_max":9,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"unisex_adults","occasion":"wedding","style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1668,"taxonomy_path":["Weddings","Gifts & Mementos","Groomsmen Gifts"],"used_manufacturer":false,"Images":[{"listing_image_id":773981456,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1431977166,"listing_id":201958462,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/061\/1\/9715422\/il_75x75.773981456_fyby.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/061\/1\/9715422\/il_170x135.773981456_fyby.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/061\/1\/9715422\/il_570xN.773981456_fyby.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/061\/1\/9715422\/il_fullxfull.773981456_fyby.jpg","full_height":562,"full_width":1000},{"listing_image_id":751658472,"hex_code":"F0F0F0","red":240,"green":240,"blue":240,"hue":0,"saturation":0,"brightness":94,"is_black_and_white":null,"creation_tsz":1428007850,"listing_id":201958462,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/057\/0\/9715422\/il_75x75.751658472_30vy.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/057\/0\/9715422\/il_170x135.751658472_30vy.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/057\/0\/9715422\/il_570xN.751658472_30vy.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/057\/0\/9715422\/il_fullxfull.751658472_30vy.jpg","full_height":900,"full_width":900},{"listing_image_id":818017452,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1439672509,"listing_id":201958462,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/075\/0\/9715422\/il_75x75.818017452_b3oz.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/075\/0\/9715422\/il_170x135.818017452_b3oz.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/075\/0\/9715422\/il_570xN.818017452_b3oz.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/075\/0\/9715422\/il_fullxfull.818017452_b3oz.jpg","full_height":900,"full_width":900},{"listing_image_id":751658476,"hex_code":"F0F0F0","red":240,"green":240,"blue":240,"hue":0,"saturation":0,"brightness":94,"is_black_and_white":null,"creation_tsz":1428007850,"listing_id":201958462,"rank":4,"url_75x75":"https:\/\/img0.etsystatic.com\/059\/0\/9715422\/il_75x75.751658476_dzqc.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/059\/0\/9715422\/il_170x135.751658476_dzqc.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/059\/0\/9715422\/il_570xN.751658476_dzqc.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/059\/0\/9715422\/il_fullxfull.751658476_dzqc.jpg","full_height":900,"full_width":900},{"listing_image_id":751778475,"hex_code":"F1F1F1","red":241,"green":241,"blue":241,"hue":0,"saturation":0,"brightness":94,"is_black_and_white":null,"creation_tsz":1428007850,"listing_id":201958462,"rank":5,"url_75x75":"https:\/\/img1.etsystatic.com\/058\/0\/9715422\/il_75x75.751778475_bjvh.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/058\/0\/9715422\/il_170x135.751778475_bjvh.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/058\/0\/9715422\/il_570xN.751778475_bjvh.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/058\/0\/9715422\/il_fullxfull.751778475_bjvh.jpg","full_height":900,"full_width":900}],"Shop":{"shop_id":9715422,"shop_name":"TheEngravery","user_id":50480166,"creation_tsz":1405644678,"title":"Custom Engraved Glassware and Gifts","announcement":"The Engravery - Custom Engraved Glassware perfect for any event.  We offer the highest quality engraving backed by our lifetime guarantee.  \r\n\r\nWe feature engraved glassware that is elegant, durable, and completely unique.\r\n- Crafted to last a lifetime.\r\n- Designs are permanent and guaranteed never to wash off or fade.\r\n- Dishwasher safe and meant for everyday use.\r\n\r\nA keepsake your family and friends will forever cherish, custom glassware is perfect for so many occasions\r\n- wedding parties and favors\r\n- bridal showers\r\n- holiday gifts\r\n- birthday gifts\r\n- engagement parties\r\n- anniversaries\r\n- family reunions and vacations\r\n- bachelor and bachelorette parties\r\n- corporate events\r\n... you name it!\r\n\r\n Nearly every occasion can be enhanced with the addition of personalized glassware! \r\n\r\nLearn more about us and our products here ~&gt; https:\/\/www.etsy.com\/shop\/TheEngravery\/about\r\n\r\nPlease feel free to reach out with any questions.\r\nCheers!\r\nTymothi","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you for your purchase from The Engravery!\r\nConnect With Us\r\n------------------------\r\nwww.facebook.com\/Engravery\r\nwww.twitter.com\/TheEngravery\r\nwww.pinterest.com\/TheEngravery\r\nwww.instagram.com\/TheEngravery\r\n------------------------\r\n#TheEngravery","digital_sale_message":null,"last_updated_tsz":1456288549,"listing_active_count":101,"digital_listing_count":0,"login_name":"etchyeah","accepts_custom_requests":true,"policy_welcome":"Welcome Friends! \r\n\r\nThanks so much for stopping by.  I&#39;m proudly located in Denver, Colorado and grateful every day to be part of this INCREDIBLE Etsy community.\r\n\r\nI&#39;m so thankful for the opportunity to live a dream and Id&#39;e be more than honored to be part of your celebration. Personalized glassware adds that &#39;special touch&#39; to any occasion and creates a lasting keepsake your family and friends will forever cherish.\r\n\r\nCheers!\r\nTym","policy_payment":"We accept many different payment options through Etsy including: Etsy gift cards, Paypal and most major credit cards.\r\n\r\n*Please allow 7-10 business days for all custom creations.\r\n\r\nRUSH Processing is available, please inquire for details.\r\n\r\n*Sales tax applies to all Colorado orders.\r\n\r\nThank you!","policy_shipping":"It is our goal to complete orders as quickly as possible. Our normal processing time for personalized orders is 5-7 business days. If you would like to have your order processed faster than the stated handling time, please message us for details regarding rush processing.\r\n\r\nThe Engravery uses the United States Postal Service as our shipping carrier. We securely bubble-wrap each item individually to provide added cushion and support while shipping. We ship Priority Mail and USPS estimates shipping times at 2-3 business days to most major US cities. \r\n\r\nTracking information is included with all orders and will be uploaded to your Etsy sales record as soon as it becomes available. To track your package please visit www.usps.com and enter your tracking number into the space provided on the homepage.\r\n\r\n*Please understand: The Engravery cannot take responsibility for loss\/late\/damaged items on behalf of USPS. If your item arrives damaged please follow the procedure outlined in the Refund Policy.","policy_refunds":"We strive to create custom, one-of-a-kind pieces that are elegant, durable, and 100% accurate. We use professional grade equipment that ensures each of your requests will be permanently engraved onto the glassware of your choice. \r\n\r\nPlease review your personalization requests thoroughly before submitting your order.\r\n\r\nDue to the nature of our business all custom engraved items are final sale and cannot be returned or exchanged. \r\n\r\nOur goal is to create the look you&#39;re hoping for and we want all of our clients to have the best experience possible at The Engravery. Please understand that while consistency and  accuracy are our main goals these items are all hand crafted and may have their own thumbprint.\r\n\r\n*Please NOTE: If items are damaged during shipping they will be replaced. To file a claim and qualify for our Free Replacement Guarantee please contact us via Etsy and provide the following information within 48 hours of receiving your glassware:\r\n- Your name\r\n- Number of items damaged\r\n- Description of items damaged\r\n*Please also attach a photo of any\/all damaged items to an Etsy message, required.*\r\n\r\n**Buyer pays all applicable USPS shipping fees. We&#39;re very sorry, however claims filed outside the 48 hour time frame may not be accepted. Thank you for understanding. \r\n\r\n- Once your claim has been received we will get back with you as soon as able and guide you through the claim process. \r\n\r\n*Any misprinted items, or mistakes on our behalf, will be replaced even if notified outside of the 48 hour window.\r\n\r\nPlease feel free to reach out with any questions.\r\nThank you!","policy_additional":"Connect With Us\r\n------------------------\r\n\r\nFacebook @ www.facebook.com\/Engravery\r\nTwitter @ www.twitter.com\/TheEngravery\r\nPinterest @ www.pinterest.com\/TheEngravery\r\nInstagram @ www.instagram.com\/TheEngravery\r\n","policy_seller_info":null,"policy_updated_tsz":1446252002,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/TheEngravery?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/067\/0\/9715422\/iusb_760x100.15444749_sjd3.jpg","num_favorers":580,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/070\/0\/9715422\/isla_fullxfull.15875859_todttmuy.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":204355303,"state":"active","user_id":18366368,"category_id":69201253,"title":"Whiskey Southern Girl Sweatshirt Country. Southern Sweatshirt Southern Clothing Stagecoach. Coachellla.","description":"Southern Girl 100% Music Lovin&#39;, Whiskey Drinkin&#39;, Boot Skootin&#39;, Born in the US of A 70% Sassy 30% Classy\n\nI ship Priority, it usually arrives 2-3 days after shipping according to the US Postal Service but they do not guarantee that, I will email you the tracking number\n\nIf you&#39;re not a WHISKEY DRINKER. I can add whatever your preference is...\n\nBEER DRINKIN&#39;\nWINE DRINKIN&#39;\nTEQUILA DRINKIN&#39;\nSWEET TEA DRINKIN&#39;\nLEMONADE DRINKIN&#39;\n\nWHATEVER YOU LIKE...\n\nJust include in &quot;NOTE TO SELLER&quot; when placing your order.\n\n\n* French Terry Raglan\n* Lightweight Sweatshirt\n* Raw Edge Neckline\n* 3\/4th Raglan Sleeve\n* 50% Cotton\/ 50% Polyester\n\n\nThese sweatshirts are very lightweight and super comfy and cute with jeans, shorts, tights or whatever and are great for layering.\n\nPlease review the measurements below before ordering to ensure you are ordering the size that is the best fit for you, width and length.\n\nMeasurements are taken lying flat so double where appropriate\n\nSMALL: Chest 19&quot; (taken across 1&quot; below arm hole&quot;) \/ Length 25\nMEDIUM: Chest 20&quot;(taken across 1&quot; below arm hole&quot;) \/ Length 25 1\/2\nLARGE: Chest 21&quot;  (taken across 1&quot; below arm hole&quot;) \/ Length 26\nXLARGE: Chest 22 1\/2&quot; (taken across 1&quot; below arm hole&quot;) \/ Length 26 1\/2\nXXLARGE: Chest 24&quot;(taken across 1&quot; below arm hole&quot;)  \/ Length 27\n\n\nTo give you an idea of the sizing, my mannequin&#39;s measurements are\nChest 32ish approx. a B+\/small C cup\nWaist 26\nHips 34\nAnd in this photo she has a large on \n\n\nSo if you want it to fit looser or tighter order accordingly\n\nCare instructions - Wash inside out with cold water on delicate cycle and dry on low heat\n\nLet me know if you have any questions before purchasing.\n\nIf you need it sooner let me know and we&#39;ll do our best to accommodate.\n\nYou can view the rest of my store at https:\/\/www.etsy.com\/shop\/SouthernGirlApparel\n\n\nThanks for shopping here at Southern Girl Apparel","creation_tsz":1456288838,"ending_tsz":1466739638,"original_creation_tsz":1411334101,"last_modified_tsz":1456288838,"price":"29.00","currency_code":"USD","quantity":20,"tags":["country music","Southern Girl","country concert","Southern Girl top","country music shirt","festival clothing","whiskey shirt","jack daniels shirt","concert shirt","southern shirt","southerngirlapparel","country shirts","southern shirts"],"category_path":["Clothing","Women","Sweater"],"category_path_ids":[69150353,69152559,69201253],"materials":[],"shop_section_id":15191211,"featured_rank":null,"state_tsz":1452026716,"url":"https:\/\/www.etsy.com\/listing\/204355303\/whiskey-southern-girl-sweatshirt-country?utm_source=explorer&utm_medium=api&utm_campaign=api","views":6800,"num_favorers":1170,"shipping_template_id":null,"processing_min":3,"processing_max":5,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"women","occasion":null,"style":null,"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":506,"taxonomy_path":["Clothing","Women's Clothing","Hoodies & Sweatshirts"],"used_manufacturer":false,"Images":[{"listing_image_id":656674626,"hex_code":"A5614E","red":165,"green":97,"blue":78,"hue":13,"saturation":52,"brightness":64,"is_black_and_white":false,"creation_tsz":1411334101,"listing_id":204355303,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/038\/4\/9046066\/il_75x75.656674626_1ilq.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/038\/4\/9046066\/il_170x135.656674626_1ilq.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/038\/4\/9046066\/il_570xN.656674626_1ilq.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/038\/4\/9046066\/il_fullxfull.656674626_1ilq.jpg","full_height":855,"full_width":570},{"listing_image_id":656674624,"hex_code":"AF5038","red":175,"green":80,"blue":56,"hue":12,"saturation":68,"brightness":68,"is_black_and_white":false,"creation_tsz":1411334101,"listing_id":204355303,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/037\/0\/9046066\/il_75x75.656674624_68h2.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/037\/0\/9046066\/il_170x135.656674624_68h2.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/037\/0\/9046066\/il_570xN.656674624_68h2.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/037\/0\/9046066\/il_fullxfull.656674624_68h2.jpg","full_height":855,"full_width":570}],"Shop":{"shop_id":9046066,"shop_name":"SouthernGirlApparel","user_id":18366368,"creation_tsz":1392451292,"title":"SOUTHERN GIRL APPAREL\u00ae ","announcement":"We\u2019re big fans of the southern girl look and to us that\u2019s denim, leather and lace and of course tops and gifts with fun sayings, jewelry and handbags.\r\n\r\nTo keep up with all of our latest releases \r\nFollow us on:\r\n\r\nFacebook : https:\/\/www.facebook.com\/southerngirlapparel\r\n\r\nTwitter: https:\/\/twitter.com\/sogirlapparel\r\n\r\nsoutherngirlapparel.com\r\n\r\nEnjoy!! And check back often we&#39;re always adding new sayings and items.\r\n","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you so much for your purchase!! I appreciate your business!!\r\n","digital_sale_message":null,"last_updated_tsz":1456339147,"listing_active_count":269,"digital_listing_count":0,"login_name":"SouthernGirlApparel","accepts_custom_requests":false,"policy_welcome":"Welcome to Southern Girl Apparel \u00ae !!! The original trademark registered brand.","policy_payment":"Payment due upon purchase. Taxes are due for purchases from those residing in California.\r\n\r\nWe accept both PAYPAL and DIRECT CHECK OUT via Etsy. \r\n\r\nPaypal allows for payment via Paypal account, credit\/debit card or via echeck (echeck takes about a week to clear). If paying by e-check product will not be made or shipped until e-check has cleared. \r\n\r\nDirect check-out via Etsy allows for credit\/debit cards directly without any Paypal involvement. \r\n","policy_shipping":"DOMESTIC SHIPPING: We ship USPS Priority and it includes online tracking, I will send you the tracking number once shipped. \r\n\r\nIf you want to upgrade your domestic order to Express mail, PLEASE see listing in my shop marked &quot;Express Shipping&quot; or contact us BEFORE placing your order.\r\n\r\nLarge orders are shipped UPS and require a signature when delivered.\r\n\r\nINTERNATIONAL SHIPPING: Shipping to all other countries will be shipped USPS First Class with no tracking number available. Once items leave the US they are no longer the shop&#39;s responsibility. Customs in your country may charge a fee and will be buyer\u2019s responsibility and will not be paid by Southern Girl Apparel. Please check on your country&#39;s customs rates before purchase.\r\n\r\nPLEASE NOTE that for international shipments, there may be unexpected delays if your package is held at customs. We have no control over shipments after they leave our hands. Buyers are responsible for any import duties imposed by their country of residence. All orders shipped internationally through Etsy include the full purchase price on the customs form.\r\n\r\nSTOLEN AFTER DELIVERY or UNDELIVERABLE DUE TO SHIPPING ADDRESS PROVIDED ON ETSY: Refunds or replacements will *not* be issued for merchandise that has been &quot;delivered&quot; to your requested address, according to the USPS tracking number, but you claim you never received it. I am not responsible for your stolen mail, and will not provide a replacement at my expense or a refund for your missing goods. You can request a signature confirmation at delivery for an additional $2.20 USD. Also, partial refunds (minus original shipping) are issued when an order is returned to me because a delivery attempt was made and a notice was left, but the buyer did not pick up the package or arrange a re-delivery for whatever reason, or an incorrect address was provided by the buyer on Etsy. If you choose to have me re-ship the product back to you, it will be AT YOUR EXPENSE -- no exceptions. \r\n\r\n*PLEASE, PLEASE, PLEASE check your ADDRESS in ETSY prior to purchasing. I ship your purchase to your Etsy address. Sometimes, Etsy will try to add a &quot;Street&quot;, &quot;Terr&quot; or &quot;Drive&quot; to your address. I DO NOT alter your shipping address. Please understand there may be a shipping delay if you do not include the full address as USPS considers this an &quot;Unconfirmed&quot; shipping address. If you realize your address is incorrect after purchase, please convo me ASAP to avoid a delay in shipping and\/or not receiving your purchase* \r\n\r\nORDERS LOST IN TRANSIT: In the event that a US order is *lost in transit* by the US Postal Service and has not arrived in 45 days, as verified by the tracking information, you will be offered a refund minus the original shipping charges. I am not responsible for orders listed as &#39;delivered&#39; that are stolen after delivery (see details above). If your international order has not arrived in 45 days, it is likely lost or stolen. I am not responsible for lost or stolen international orders where I can guarantee the box was shipped by providing you with a shipping receipt on paper. Unfortunately, tracking numbers are only available for international orders where expensive priority international mail is used, which I do not offer, as it is always more expensive than the cost of my goods.\r\n","policy_refunds":"We do want you to be perfectly happy with your purchase but if for some reason you are not I do allow a one time exchange on most items, just send it back to me, be sure to include a note of what size you want. And we will accept returns within 7 days. However, the customer will be responsible for shipping costs; we will ONLY refund the purchase price. If a refund is requested on a listing with free shipping, the shipping costs will be subtracted before refund is submitted.\r\n\r\nALL ITEMS RETURNED MUST BE IN NEW, UNUSED AND UNLAUNDERED CONDITION. WE ONLY RETURN ITEMS THAT HAVE BEEN PURCHASED DIRECTLY FROM ETSY\/SOUTHERNGIRLAPPAREL.COM. All ITEMS MUST HAVE THEIR ORIGINAL TAGS ATTACHED. \r\n\r\nIf you receive an item that is damaged send a note and a photo and we&#39;ll start working with you right away to exchange or refund your purchase. \r\n\r\nI&#39;m sorry I do not accept returns on holiday items, 4th of July, Christmas, Easter, Halloween, Thanksgiving, etc...\r\nI put the measurements and do my best to describe the item in the &quot;Item Details&quot; area so be sure to check them before ordering.","policy_additional":"We endeavor to represent our items as accurately as we can online, but please bear in mind that all computer monitors are calibrated differently and some colors may appear differently on your screen than in real life.\r\n\r\n*If you have ANY questions, please do not hesitate to send me a convo via Etsy. I am happy to answer and help with questions\/concerns you may have*\r\n\r\n\r\n\r\nLEGAL NOTICE: Southern Girl Apparel\u00ae is a Registered Trademark. Regarding all original images and Content \u00a9 2011-2015 Southern Girl Apparel. All Rights Reserved. No artwork, images, or designs from this site may be reproduced in any way, shape or form without prior written consent. No rights are transferred upon purchase of apparel, accessories, wall art or gift items.  Southern Girl Apparel\u00ae","policy_seller_info":"Southern Girl Apparel\u00ae is a Registered Trademark. All art and content is copyright Southern Girl Apparel\u00ae\r\n\r\nsoutherngirlapparel@gmail.com","policy_updated_tsz":1444959448,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/SouthernGirlApparel?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/114\/0\/9046066\/iusb_760x100.18101227_g3jq.jpg","num_favorers":3024,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img0.etsystatic.com\/106\/0\/9046066\/isla_fullxfull.18194650_mfmy36xe.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":183093375,"state":"active","user_id":10255850,"category_id":68887494,"title":"Groomsmen Gift Personalized Whiskey Glasses Wedding Groomsmen Gifts ANY QUANTITY Custom Rocks Glass Whiskey Engraved Glass Bar Glassware","description":"Groomsmen Gift Personalized Whiskey Glasses Wedding Groomsmen Gifts ANY QUANTITY Custom Rocks Glass Whiskey Engraved Glass Bar Glassware. Toasting Glasses, Groom Gift, Engraved On The Rocks Glasses, Unique Wedding Gift Idea\n\nWhats Included: \n-Free Personalization\n-Any Design Shown\n-Large Glasses Hold Over 13.5oz\n-Lifetime Guarantee on Engraving\n-Dishwasher Safe\n-Complimentary White Gift Boxes (Upon Request)\n-Shipping Discounts for Multiple Quantities (Updated Price Will Reflect at Checkout)\n\nHow To Order:\n\n1. Select Quantity, Design Choice & Add To Cart\n2. In The Notes At Checkout Please Include: Name, Date & (Optional) Wedding Role for Each Person (Exactly As It Should Be Engraved)\n3. Complimentary Gift Boxes - Yes or No\n\nWe Now Ship To The Australia & Canada! Shipping Price Will Reflect at Checkout. \n\nOur Average Production Time for Custom Crafted Items is 7-10 Days with an Additional 3-5 for Delivery. Need Something Really Fast? Add our Rush Option for 1-2 Day Processing and Expedited Shipping Here: https:\/\/www.etsy.com\/listing\/152346316\/rush-processing-add-this-feature-for-1-2?ref=shop_home_active\n\nAll Intellectual Property Urban Farmhouse Tampa\nCopyright 2012","creation_tsz":1456261845,"ending_tsz":1466712645,"original_creation_tsz":1395150938,"last_modified_tsz":1456261845,"price":"10.50","currency_code":"USD","quantity":98,"tags":["groomsmen gift","groomsmen gifts","personalized glasses","groomsmen","glass","whiskey","whiskey glasses","wedding","personalized glass","personalized whiskey","custom rocks glasses","groomsmen glasses","whiskey glass set"],"category_path":["Weddings"],"category_path_ids":[68887494],"materials":["Glass","rocks glasses","whiskey glasses"],"shop_section_id":13187521,"featured_rank":null,"state_tsz":1452190163,"url":"https:\/\/www.etsy.com\/listing\/183093375\/groomsmen-gift-personalized-whiskey?utm_source=explorer&utm_medium=api&utm_campaign=api","views":34821,"num_favorers":2763,"shipping_template_id":null,"processing_min":5,"processing_max":10,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"men","occasion":"wedding","style":["Modern","Traditional"],"non_taxable":false,"is_customizable":false,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":1668,"taxonomy_path":["Weddings","Gifts & Mementos","Groomsmen Gifts"],"used_manufacturer":false,"Images":[{"listing_image_id":713153156,"hex_code":"D9B694","red":217,"green":182,"blue":148,"hue":30,"saturation":31,"brightness":85,"is_black_and_white":false,"creation_tsz":1421530116,"listing_id":183093375,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/047\/1\/7101908\/il_75x75.713153156_i7yn.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/047\/1\/7101908\/il_170x135.713153156_i7yn.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/047\/1\/7101908\/il_570xN.713153156_i7yn.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/047\/1\/7101908\/il_fullxfull.713153156_i7yn.jpg","full_height":875,"full_width":1316},{"listing_image_id":713153042,"hex_code":"D9B695","red":217,"green":182,"blue":149,"hue":29,"saturation":31,"brightness":85,"is_black_and_white":false,"creation_tsz":1421530116,"listing_id":183093375,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/054\/1\/7101908\/il_75x75.713153042_ogpi.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/054\/1\/7101908\/il_170x135.713153042_ogpi.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/054\/1\/7101908\/il_570xN.713153042_ogpi.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/054\/1\/7101908\/il_fullxfull.713153042_ogpi.jpg","full_height":875,"full_width":1316},{"listing_image_id":713153214,"hex_code":"D8B593","red":216,"green":181,"blue":147,"hue":30,"saturation":31,"brightness":84,"is_black_and_white":false,"creation_tsz":1421530116,"listing_id":183093375,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/060\/0\/7101908\/il_75x75.713153214_81m6.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/060\/0\/7101908\/il_170x135.713153214_81m6.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/060\/0\/7101908\/il_570xN.713153214_81m6.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/060\/0\/7101908\/il_fullxfull.713153214_81m6.jpg","full_height":875,"full_width":1316},{"listing_image_id":713275645,"hex_code":"D7B594","red":215,"green":181,"blue":148,"hue":30,"saturation":31,"brightness":84,"is_black_and_white":false,"creation_tsz":1421530116,"listing_id":183093375,"rank":4,"url_75x75":"https:\/\/img1.etsystatic.com\/059\/0\/7101908\/il_75x75.713275645_puor.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/059\/0\/7101908\/il_170x135.713275645_puor.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/059\/0\/7101908\/il_570xN.713275645_puor.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/059\/0\/7101908\/il_fullxfull.713275645_puor.jpg","full_height":875,"full_width":1316},{"listing_image_id":713153392,"hex_code":"D9B898","red":217,"green":184,"blue":152,"hue":30,"saturation":29,"brightness":85,"is_black_and_white":false,"creation_tsz":1421530116,"listing_id":183093375,"rank":5,"url_75x75":"https:\/\/img0.etsystatic.com\/053\/0\/7101908\/il_75x75.713153392_ikud.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/053\/0\/7101908\/il_170x135.713153392_ikud.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/053\/0\/7101908\/il_570xN.713153392_ikud.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/053\/0\/7101908\/il_fullxfull.713153392_ikud.jpg","full_height":875,"full_width":1316}],"Shop":{"shop_id":7101908,"shop_name":"UrbanFarmhouseTampa","user_id":10255850,"creation_tsz":1342663045,"title":"Personalized Groomsmen & Bridesmaid Gifts,Wedding Glass","announcement":"Personalized Wedding Gift, Groomsmen Gift, Beer Mug, Personalized Favors, Groomsmen Flask, Bridesmaids Gift, Toasting Glasses, Gifts for Dad, Monogrammed Gifts, Gifts for Men, Gifts for Groomsmen, Custom Wedding Gift, Name Sign, Pocket Knife, Groomsman Flask, Beer Glasses, Bridesmaid Picture Frames, Bridal Party Wine Glasses, Wedding Shower Gifts, Personalized Wedding Gifts, Wedding Party Favors, Bulk Wedding Favors, Bridal Shower Gift, Guest Book, Ring Bearer Gifts","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you for choosing Urban Farmhouse Tampa! \r\n\r\n******************IMPORTANT INFO*********************\r\n\r\nPROCESSING TIME: \r\nEngraving will start on most items within the hour (excluding holidays and weekends). It may be difficult to make changes after your order is placed. Please contact us as soon as possible for any changes you may need and we will try our best to accommodate.\r\n\r\nWe are currently at 10 business days for processing and 5 days for shipping. During our slower months your order may arrive much sooner. A tracking number will be emailed once it has shipped so updates can be checked as it progresses with the mail.\r\n\r\nIf you have any questions, please do not hesitate to contact me via etsy convo. I&#39;m the mom of a 3 year old little girl and have two shops I manage so my response time is typically 24-48 hours. If you need immediate assistance we can be reached directly in the shop at: 813-508-5840.\r\n\r\nWarmly,\r\nSara\r\nUrban Farmhouse Tampa\r\n\r\n*****LETS GET SOCIAL*****\r\n\r\nWedding Planning Guides, New Products, Giveaways and So Much More. Join Us!\r\n\r\nFacebook: https:\/\/www.facebook.com\/pages\/Urban-Farmhouse-Tampa\/427363244017167\r\n\r\nPinterest: http:\/\/www.pinterest.com\/urbanfarmhouset\/\r\n\r\nTwitter: https:\/\/twitter.com\/urbanfhweddings","digital_sale_message":null,"last_updated_tsz":1456341299,"listing_active_count":775,"digital_listing_count":0,"login_name":"snowflakesara20","accepts_custom_requests":false,"policy_welcome":"Welcome to Urban Farmhouse Tampa. Browse our Assortment of Personalized Groomsmen Gifts and Wedding Party Favors. We Offer Custom Mason Jar Mugs, Engraved Flasks, Pilsner Glasses, and Other Specialty Gifts for your Wedding or Special Occasion. With a Passion for Creating Quality Handcrafted One of a Kind Farmhouse Treasures, Our Wedding Favors, Hostess Gifts, & Home Decor Will Add a Unique Style to Any Occasion! \r\n\r\nOur Mission: To Provide our Guests with a Stress Free Experience and Quality Wedding Keepsakes.","policy_payment":"We accept all major debit and credit cards via paypal or direct checkout.","policy_shipping":"Upon completion of your order, a USPS shipping confirmation will be provided along with a tracking number. Insurance is included with our shipping and handling. 1-2 day rush processing is available in our shop with expedited priority mail shipping for an extra $35. ","policy_refunds":"Refunds:\r\nDue to the nature of items we sell, personalized items are final sale. \r\n\r\nDamaged Items:\r\nPlease inform us of any damage within 48 hours of receipt of your order. Claims can be emailed along with a picture of the damage to qualify for our free replacement guarantee. \r\n\r\nSpelling Errors:\r\nTo qualify for free replacements please send us a photograph of the personalization and we will mail a new item within 48 hours.  ","policy_additional":"Custom orders are always welcome.","policy_seller_info":null,"policy_updated_tsz":1412366408,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/UrbanFarmhouseTampa?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/059\/0\/7101908\/iusb_760x100.14790524_agjo.jpg","num_favorers":8996,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":null,"is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":236000729,"state":"active","user_id":22666218,"category_id":69201265,"title":"Sunshine And Whiskey - Country Song - Frankie Ballard -- Racerback, Burnout Tank Top- Sizes S-XL. Other Colors Available","description":"\u2665  This sleeveless staple is just the right fit with a racer-back style. The burnout material is also very cool and comfortable for those hot summer days and nights!\u2665\n***LISTING FOR TANK ONLY (shorts not included)***\n\nColors:\nWhite\nBlack\nNeon Green\nNeon Pink\nNeon Orange\n\u2665\n\nSizes are S-XL:\nSmall\nMedium\nLarge\nX-Large\n\u2665\n\nI create all shirts myself so your item will be made to order. After your purchase is made please allow 5-10 BUSINESS DAYS to receive your item. Turnaround time is usually 5 BUSINESS DAYS or less before shipping. My business days are Monday-Friday. Although I&#39;m always trying to check emails and convo&#39;s everyday.\n\nThanks for looking and if you have any other questions or requests let me know :)\n\nI also do custom designs!! So let me know if you are interested in creating a new design! :)\n\nAlso check out the new Facebook page for Bijou Buys to catch up on new designs, contests, coupons and giveaways!!\n\n\u2665","creation_tsz":1456319243,"ending_tsz":1466770043,"original_creation_tsz":1433585105,"last_modified_tsz":1456319243,"price":"26.00","currency_code":"USD","quantity":50,"tags":["tank top","quote","summer","country","cowgirl","country gal","country love","love country","Miranda Lambert","country tank","country song","Frankie Ballard","Sunshine and Whiskey"],"category_path":["Clothing","Women","Tank"],"category_path_ids":[69150353,69152559,69201265],"materials":[],"shop_section_id":11973826,"featured_rank":11,"state_tsz":1456319234,"url":"https:\/\/www.etsy.com\/listing\/236000729\/sunshine-and-whiskey-country-song?utm_source=explorer&utm_medium=api&utm_campaign=api","views":4370,"num_favorers":1305,"shipping_template_id":null,"processing_min":5,"processing_max":10,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":"women","occasion":null,"style":["Rocker","Country Western"],"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":558,"taxonomy_path":["Clothing","Women's Clothing","Tops & Tees","Tanks"],"used_manufacturer":false,"Images":[{"listing_image_id":783351990,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1433585106,"listing_id":236000729,"rank":1,"url_75x75":"https:\/\/img0.etsystatic.com\/064\/1\/7014428\/il_75x75.783351990_sqvu.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/064\/1\/7014428\/il_170x135.783351990_sqvu.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/064\/1\/7014428\/il_570xN.783351990_sqvu.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/064\/1\/7014428\/il_fullxfull.783351990_sqvu.jpg","full_height":640,"full_width":480},{"listing_image_id":796059782,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1435854173,"listing_id":236000729,"rank":2,"url_75x75":"https:\/\/img0.etsystatic.com\/064\/0\/7014428\/il_75x75.796059782_4dqu.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/064\/0\/7014428\/il_170x135.796059782_4dqu.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/064\/0\/7014428\/il_570xN.796059782_4dqu.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/064\/0\/7014428\/il_fullxfull.796059782_4dqu.jpg","full_height":428,"full_width":570},{"listing_image_id":796059976,"hex_code":"000000","red":0,"green":0,"blue":0,"hue":0,"saturation":0,"brightness":0,"is_black_and_white":null,"creation_tsz":1435854173,"listing_id":236000729,"rank":3,"url_75x75":"https:\/\/img0.etsystatic.com\/065\/0\/7014428\/il_75x75.796059976_ngwc.jpg","url_170x135":"https:\/\/img0.etsystatic.com\/065\/0\/7014428\/il_170x135.796059976_ngwc.jpg","url_570xN":"https:\/\/img0.etsystatic.com\/065\/0\/7014428\/il_570xN.796059976_ngwc.jpg","url_fullxfull":"https:\/\/img0.etsystatic.com\/065\/0\/7014428\/il_fullxfull.796059976_ngwc.jpg","full_height":1500,"full_width":1500}],"Shop":{"shop_id":7014428,"shop_name":"BijouBuys","user_id":22666218,"creation_tsz":1340747113,"title":"\u2665","announcement":"Thank you for stopping by my little Etsy shop called Bijou Buys. \r\nI create all of my designs on sweatshirts, tank tops, and tee shirts. I&#39;ve searched high and low for some of the best clothing manufacturers. I wear all of my pieces and they are not only VERY comfortable but the style and fit is awesome too!\r\n\u2665\r\nMy goal is to continue to share and create my lovely clothing designs for all of you and to someday expand my clothing line :) Thanks again for all of your continued support to Bijou Buys. Please allow 5-10 business days before shipment. Also check out the new Facebook page https:\/\/www.facebook.com\/BijouBuys where you can stay updated about new designs, coupons, GIVEAWAYS, and more! \r\n\u2665","currency_code":"USD","is_vacation":false,"vacation_message":null,"sale_message":"Thank you for shopping with Bijou Buys! \u2665 All items are hand-made to order so please allow 3-10 business days for your item to ship. Your patience is very much appreciated as I am working very hard to get your order out as fast as I can :) If you have any questions or concerns along the way please contact me :)\r\nThanks again!\r\n~\u2665~\r\nLinds","digital_sale_message":null,"last_updated_tsz":1456330155,"listing_active_count":141,"digital_listing_count":0,"login_name":"lovelyloxs1105","accepts_custom_requests":true,"policy_welcome":"Thank you for stopping by my little Etsy shop called Bijou Buys. \r\n\r\nI create all of my designs on sweatshirts, tank tops, and tee shirts. I&#39;ve searched high and low for some of the best clothing distributors. I wear all of my pieces and they are not only VERY comfortable but the style and fit is awesome too! My goal is to continue to share and create my lovely clothing designs for all of you :) \r\n Thanks again for all of your continued support to Bijou Buys.\r\n \u2665","policy_payment":"I accept PayPal as my primary method of payment or credit cards through Etsy&#39;s payment processing. \r\n\r\nIf you reside in the wonderfully awesome state of Michigan I must do my part as a small business owner and charge 6% sales tax with your order. \r\n\u2665","policy_shipping":"I ship via USPS to offer you the most economical shipping method possible. When your item ships you will receive an email via Etsy with the parcel number.  It may not show or be updated within their system even though it has shipped. It may also be a few days from when you received the email to when the tracking is updated. All items are hand-made to order so please allow 3-10 business days for your item to ship. Your patience is very much appreciated as I am working very hard to get your order out as fast as I can :) If you have any questions or concerns along the way please contact me :)\r\n\r\nPLEASE NOTE: { I am NOT responsible for lost, stolen or undelivered packages } If you want to purchase insurance you may do so by contacting me prior to ordering. ALL LOST, STOLEN OR RETURNED packages paid without insurance are the responsibility of the buyer. USPS failures are not my fault or a reflection on my level of dedication to my customers.\r\n\r\n{INTERNATIONAL SHIPMENTS}\r\nInternational orders are averaging 5-12 business days for delivery. This depends on your country as well. { I cannot control customs delays and am not responsible for lost or stolen packages or any fees relating to customs }. If you want to add insurance to your order please contact me prior to purchasing.\r\n\r\nInternational package IDs are NOT tracking numbers, just a parcel number. It will most likely show as being in Los Angeles, CA if you try to track it as this is the International postal hub. If you want a tracking ID it will need to ship FedEx or UPS which is about 4x the cost.\r\n\r\nI will ship to the Paypal or ship to address listed in the order confirmation. Any packages returned due to wrong\/incorrect address will be reshipped at the cost of purchaser.\r\n\r\nNeed it FAST?? There is a small rush fee. Convo me for details.\r\n\u2665","policy_refunds":"{All Sales Are Final} I am a small shop and please know that I keep my prices low and affordable so that everyone can enjoy handmade! Because of this I have a final sales policy. \r\n\r\nI try to avoid there being any issues or reasons why you might want to return an item from my shop but due to the handmade nature and being a small business I do have a policy of final sales. So please, ask me whatever questions you may have up front. I&#39;m happy to help and get you the perfect item(s).\r\n\r\nIf, for some reason, you do decide you want a different item or color I am happy to work with you to do an exchange but the item MUST be in brand new condition. Buyer is responsible for shipping charges and must place a new order for replacement.\r\n\r\nAlthough I like to consider myself one that never makes a mistake, sometimes I do and an item may be damaged, or may have a small smudge that I missed. I&#39;ll make it right so please let me know.\r\n\u2665\r\n","policy_additional":"Leaving me feedback? PLEASE remember this is my livelihood and anything negative hurts not only my business but my opportunities to grow. I am pretty reasonable to work with and will make any mistake or issue right...so please, be nice :)\r\nThank you\r\n\u2665","policy_seller_info":"Still have questions? Send me a convo or email to the address below.\r\nLNHBB1105@gmail.com \r\n\u2665\r\n","policy_updated_tsz":1453728540,"policy_has_private_receipt_info":false,"vacation_autoreply":null,"url":"https:\/\/www.etsy.com\/shop\/BijouBuys?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img0.etsystatic.com\/106\/0\/7014428\/iusb_760x100.17034890_q7ya.jpg","num_favorers":4798,"languages":["en-US"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/137\/0\/7014428\/isla_fullxfull.17032073_cnuogfrb.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}},{"listing_id":234218324,"state":"active","user_id":15538539,"category_id":69153125,"title":"GIFT BOXED, Crown Royal, Whiskey Candy, Hard Candy, Gems, Adults Only, Alcohol Candy","description":"Crown Royal Whiskey Candy. Hard Candy, Gems, Alcohol Candy with make them smile\nif this happens to be their favorite.\n\nSold in 4 ounce bags only. The emerald cut gems are approx. 1 inch long and 3\/4 inch wide and are flat and lay nicely on your tongue. \n\nI make these with real Crown Royal whiskey and there is no water added. There have to be made in very small batches to get them to harden well,  but I think they are worth my time I ship them in double sealed foil packs so they stay fresh and if you need them as a special gift for someone, just let me know and they will look like they are packaged for an old English Vicorage and the taste is worthy of note. Just setting into an over stuffed chair, enjoy a candy, close your eyes and you&#39;ll be there:)\nEnjoy!\nIf you need a custom order of these gems packaged in little individual clear pockets, let me know and I&#39;ll take the time to do it. They then can fill a candy dish of a favor package for a wedding or buffet table.","creation_tsz":1456273037,"ending_tsz":1466723837,"original_creation_tsz":1432210722,"last_modified_tsz":1456273742,"price":"16.00","currency_code":"USD","quantity":1,"tags":["hard candy","candy gems","alcohol candy","buffet","golden","gold","adults only","emerald cut candy","Crown Royal candy","whiskey candy gems","crown royal whiskey","edible favors","gift boxes"],"category_path":["Plants and Edibles","Candy"],"category_path_ids":[68887346,69153125],"materials":["Jack Daniels bourbon","Sugar","Karo","Kosher salt"],"shop_section_id":15513166,"featured_rank":3,"state_tsz":1456160531,"url":"https:\/\/www.etsy.com\/listing\/234218324\/gift-boxed-crown-royal-whiskey-candy?utm_source=explorer&utm_medium=api&utm_campaign=api","views":3413,"num_favorers":280,"shipping_template_id":1208162088,"processing_min":1,"processing_max":3,"who_made":"i_did","is_supply":"false","when_made":"made_to_order","item_weight":null,"item_weight_units":null,"item_length":null,"item_width":null,"item_height":null,"item_dimensions_unit":"in","is_private":false,"recipient":null,"occasion":null,"style":null,"non_taxable":false,"is_customizable":true,"is_digital":false,"file_data":"","language":"en-US","has_variations":true,"taxonomy_id":940,"taxonomy_path":["Home & Living","Food & Drink","Candy"],"used_manufacturer":false,"Images":[{"listing_image_id":658073267,"hex_code":"BCA37F","red":188,"green":163,"blue":127,"hue":35,"saturation":32,"brightness":73,"is_black_and_white":false,"creation_tsz":1432210722,"listing_id":234218324,"rank":1,"url_75x75":"https:\/\/img1.etsystatic.com\/038\/0\/6407465\/il_75x75.658073267_pszf.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/038\/0\/6407465\/il_170x135.658073267_pszf.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/038\/0\/6407465\/il_570xN.658073267_pszf.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/038\/0\/6407465\/il_fullxfull.658073267_pszf.jpg","full_height":1125,"full_width":1500},{"listing_image_id":658073305,"hex_code":"B29B7E","red":178,"green":155,"blue":126,"hue":33,"saturation":29,"brightness":69,"is_black_and_white":false,"creation_tsz":1432210722,"listing_id":234218324,"rank":2,"url_75x75":"https:\/\/img1.etsystatic.com\/037\/0\/6407465\/il_75x75.658073305_k50o.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/037\/0\/6407465\/il_170x135.658073305_k50o.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/037\/0\/6407465\/il_570xN.658073305_k50o.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/037\/0\/6407465\/il_fullxfull.658073305_k50o.jpg","full_height":1191,"full_width":1500},{"listing_image_id":658073357,"hex_code":"AF9A6F","red":175,"green":154,"blue":111,"hue":40,"saturation":36,"brightness":68,"is_black_and_white":false,"creation_tsz":1432210722,"listing_id":234218324,"rank":3,"url_75x75":"https:\/\/img1.etsystatic.com\/043\/0\/6407465\/il_75x75.658073357_cxus.jpg","url_170x135":"https:\/\/img1.etsystatic.com\/043\/0\/6407465\/il_170x135.658073357_cxus.jpg","url_570xN":"https:\/\/img1.etsystatic.com\/043\/0\/6407465\/il_570xN.658073357_cxus.jpg","url_fullxfull":"https:\/\/img1.etsystatic.com\/043\/0\/6407465\/il_fullxfull.658073357_cxus.jpg","full_height":1500,"full_width":1025}],"Shop":{"shop_id":6407465,"shop_name":"SugarBakersBakery","user_id":15538539,"creation_tsz":1310006043,"title":"Edible\/Flowers\/Gifts\/Cake Toppers\/Candy Cups\/Favors","announcement":"Welcome!  Sugar Bakers will provide you with delicious Edible Favors, Corporate Gifts, Cake Decorations, Paleo Snacks, Handmade Chocolates, Gifts for Everyone. What are you hungry for right now?  Just type it in the search bar of my shop below and you may find it, waiting for you.  It won&#39;t take long for it to arrive. Everything ships to you by expedited Priority Mail.\r\n\r\nThere&#39;s something delicious for everyone - from  Lollipop Favors, Candied Flowers, Handmade Chocolates, and Healthy Paleo Snacks, Wedding Table Accessories to Wedding Guest Table Accents Coordinated to Brides Maids Gown Colors- \r\nCenterpiece with Personalized Favors, Candied Flower Cake Toppers, Matching Sugar Cubes and Name Cards (coming soon).\r\n\r\n For all of you lucky Brides to be, be sure and visit my shop when it comes time for the finishing touches.  I am able to color coordinate everything from your wedding favors, match them to your sugar cubes and the edible real flowers on your wedding cake and am happy to help your create your wedding theme.  This is what I really loooove to do!\r\n\r\nAlso, just so you know - all of the Why Weight Bars are sugear free and are sweetened with agave nectar, raisins, coconut, and\/or chocolate (your choice of chocolates or no chocolate at all ). My other products may be made &quot;sugar Free&quot; by using Stevia, Nectresse, Coconut, Honey, Agave Nectar etc. and still be sweet. Most can be made sugar free and some can not, such as hard (rock) candies and lollipops. Please convo me if you would like your selection &quot;sugar Free&quot; and I will be happy to let you know.\r\n\r\nWhat I make you here:\r\nGourmet Chocolate Candy, Why Weight Bars, Garcinia Cambogia Lollipops and Snacks, Sugar Cubes, Cake Toppers, Sweet Snacks, Desserts, Gourmet Chocolate Candy, Wedding Favors, Party Favors, GIFTS, Holiday Theme Treats, Baked Goods, Garcinia Cambogia Quit Smoking Candies,, Pies, Jar Cakes, & Cookie Wiches\r\nand yes I do candy real edible organic fresh flowers.\r\n\r\nI can bake some for you!  I know It may seem contradictory to have truly decadent snacks and candy on the same page as my Why Weight bars, but I just don&#39;t know what you would want or need. Your family that may not be in the middle of trying to lose weight and then there is the need for a gift factor, the need for party favors and all the other great reasons we have to indulge in scrumptious foods and celebrate life.--and that is why they are offered. .  So, let me bake for you - enjoy - indulge !\r\n\r\nABOUT WHY WEIGHT BARS\r\nI have been using Garcinia Cambogia in my Why Weight Bars since 2007 and this is the first time it has been given credit on national T.V. FYI watch the attached video.\r\nMake the most of your time and do something good for yourself. Raise the bar on weight  with the power of our Acai Berry Brownie Bars!\r\n\r\nCurb the urge to snack between meals, get a stamina boost, look good and feel even better. Saving the world just got slimmer, trimmer and sexier!\r\n\r\nAcai Berries Suppress Appetite\r\n\r\nThe hardest part of living a healthy lifestyle is resisting the temptations to eat those tasty snacks. The Acai Berry is rich in fiber and omega 6 & 9 fats promoting a healthy metabolism. This is an all natural solution to temper those little snack cravings between meals.\r\n\r\nAcai Berry is a Natural Energy Booster\r\n\r\nUnlike energy drinks or pills that are filled with caffeine and dangerous chemicals, the Acai Berry is 100% natural. Increased energy is one of its most noted side effects and the benefits are not negated by a crash (like energy drinks) that makes you feel worse than before you took it.\r\n\r\nIncrease Metabolism with the Acai Berry\r\n\r\nStudies have shown a direct link to the Acai Berry and an increase in your body\u2019s metabolic rate. This speeds up caloric burn and flushes the toxins that decrease energy and make you feel bloated.\r\n\r\nOne of the coolest aspects of this however is that Acai is a natural and organic product so unlike the synthetic lab created products you see advertised on TV and in magazines, Acai will keep your metabolism running strong all day without any of the jittery side effects!\r\n\r\nFat Fighting Fiber\r\n\r\nWhen fiber is eaten it swells in the stomach creating a filling quality. The body must work harder to digest high fiber foods, which speeds up the metabolism and burns calories faster.\r\n\r\nIt also acts as a digestive cleanser which helps in the removal of fat before your body can absorb it.\r\n\r\nThe Bottom Line\r\n\r\nYou will be hard pressed to find a better product on the market then Acai Berry to aid in fast, effective, and healthy weight .\r\n\r\nNow you too can enjoy the wonderful baked goods here on Etsy without feeling guilty about taking in those extra calories. Enjoy along with them, my wholesome Why Weight Bars with Acai Berry and Brindle Berries, Super Fruit and made with Gluten Free Grains and Organic Fruits and Nuts.Just 1 per day for less than the cost of an energy bar from your local gas station. \r\n\r\nYou will notice from the photos of the already baked bars, that they have a purplish cast to them. I mention this because I know you have a great sense of color here on Etsy. The cast is coming from the ground Acai pulp and there is quite a bit in each batch. Acai berries are pictured above and the richer and  fresher they are, the blacker they are. I use Acai in everything I make with the exception of the children&#39;s bars. It is a Super Duper Fruit.\r\n\r\nThey are made to order in my licensed and inspected kitchen and have at least  a 60 day shelf life because they are Vegan and there are no animal products of any kind in them to spoil\r\n. Remember to drink lots of water with your bar to get the nutrients into your system. Green tea is wonderful too, as a companion product for these bars. The more water or Green tea, the better.  We recommend that your bars be stored in a cool dry location. \r\nNuff said!\r\nThank you again and if you have any questions at all, please give me a holler.    \r\n                                                                                                                  Janet Best                    \r\n","currency_code":"USD","is_vacation":false,"vacation_message":"I am catching up on orders for the holidays and have to take a break from selling until II am ahead . I miss you all.  All of the existing orders will be shipped timely and if you have questions, I&#39;m here but can&#39;t accept new orders right now.I&#39;ll be looking forward to hearing from you all again soon. Thank you for your patience. Janet","sale_message":"Please contact me if you have any questions about the organic ingredients and their health factors. Freshly handmade, organic, raw, vegan, soy-free, gluten-free, No GMO, low-carb, and low-sugar (paleo\/primal) is  guaranteed if stated.\r\nPlease abide by the DO&#39;s and DON&#39;Ts page of Etsy Membership.\r\n\r\nPlease write a message if you&#39;d like a recurring order sent on the same day every month (exception of holidays and weekends).\r\n","digital_sale_message":null,"last_updated_tsz":1456341377,"listing_active_count":488,"digital_listing_count":0,"login_name":"WhyWeight","accepts_custom_requests":true,"policy_welcome":"For your information, all of the items in the shop are custom made for you here on our farm in our Allegheny County Health Department licensed  kitchen. The bakery is in it&#39;s own building and apart from my home.\r\n  I take pride in treating each order with care and to use all F.D.A. approved and inspected ingredients. Recipes were created and the bars are baked with love, to the sounds and rhythm of my old Pennsylvania farm.\r\n.","policy_payment":"We may be paid through Paypal with any credit or debit card with the Master Card, Visa, Discover or Am Ex Logo or with the Etsy credit card system account. There is a sales tax of 6% on all Pa ship to address orders and there are no cancellations to be made once your order is placed because most of my products are made to order and not mass produced..  Thank you.","policy_shipping":"PLEASE NOTE:\r\n\r\nMY &quot; STANDARD &quot; way to SHIP IS PRIORITY MAIL through the United States Post Office\r\n  Packages get to you in 2 to 3 days from the day after the day I ship and they are reliable. So, when you see the word &quot;standard&quot; it is actually EXPEDITED shipping and the only upgrade is OVER NIGHT MAIL .\r\n\r\nNOTICE ABOUT SUMMER HEAT\r\nYour &quot;chocolates and candies will be &quot;Made to Order&quot;.\r\nThey will be Shipped USPS Priority Mail Only which deliveries are usually made 2-3 days, and Shipping will be charged according to the size of the order. We pride ourselves in taking the greatest care when packaging your &quot;sweet treats&quot; to make sure that they arrive safely to you. I cannot be responsible for what happens to packages after it leaves our hands at the Post Office and on it&#39;s way to its destination. \r\nTracking will be provided to you when treats are shipped. I am Not responsible for items left on the door step or in the heat. Due to the hot weather, I cannot guarantee the products will arrive in perfect condition. I will Ship in time for you to receive a few days earlier, I am not responsible for any delays due to the Winter weather, or any weather related delay. I will do my best in packaging them and if needed you may purchase an ice pack. Please contact me BEFORE ordering. Thank you\r\n\r\n\r\n\r\n To ensure that you will be able to fully enjoy each of our baked goods your order will be produced, packaged all on the same day within 24 hours and shipped the following morning. We take great care to package your order, and use an excessive amount of packing material, so that your treats will arrive to your door in tact and as fresh & delicious as possible. We welcome custom orders & will be happy to work with you. Just send us a convo to get started. \r\n\r\n\u2665 \u2665 \u2665 \u2665 Please indicate in the Notes to the Seller at checkout if your order should be shipped to an address other than the one specified on your invoice & PayPal or on your Credit Card. If not specified, your order will be shipped to the address on your invoice!!\r\n\r\nShipping rates are USD. Shipping charges are estimated based on the smallest of our packages to the farthest distance away in the continental USA We use USPS flat rate packages for our heavier Priority Mail postage which includes free delivery confirmation. Once shipped, we will send you a tracking # for your package. \r\n***NOTE: we are not responsible for packages once they leave our hands....they are then in the hands of the USPS Postal Service!!\r\nAll of our orders ship USPS Priority Mail 2-3 day delivery \u2665\r\n\r\n\u2665 \u2665 \u2665 \u2665 Also Please Note the following: Combined shipping is only applicable to ONE shipping address!! If within one order, multiple purchases are made that are going to different destinations, additional shipping charges WILL incur and must be paid by the buyer before those orders will be produced & shipped!\r\n\r\n\r\n\u2665 \u2665 \u2665 \u2665 Also NOTE: If more than 1 pastry box is required in an order going to the same address, there will be an additional charge of $2.50\/per box to cover all of the extra materials & any additional shipping charges! \r\n\r\n\u2665 \u2665 \u2665 \u2665 Any package being shipped to a place of business, college or university, hotel, wedding venue, etc. will require the addition of Signature Confirmation to the postage!\r\n\r\n\u2665 \u2665 \u2665 \u2665*PLEASE NOTE ***   We  hold no liability for lost or damaged packages caused by USPS or any other shipping company.\r\nWe package each and every order with care and have no control over the way the package is handled once it leaves our bakery.\r\nIf your order has been lost or damaged, it is the customer&#39;s responsibility to place an insurance claim to cover any loss. Each and every package we ship is insured for the value of its contents. \r\nSorry!! There are no refunds or exchanges given on made to order food items!!\r\n\r\n\r\n**We will not be including invoices with orders to save time & paper. If you would like an invoice, please convo us to let us know & we will include one with your order**\r\n*****************************************************************\r\n\u2665 Wedding & Favor Shipping Policy:\r\nWhen placing your favor order please give us the date of your event in the notes to the seller at checkout. Favor orders should be placed no later than 2 weeks prior to your celebration. Wedding & Favor orders will be shipped through UPS, which includes insurance & delivery confirmation.\r\n\r\n\u2665 Cancellation of Orders:\r\nIf a wedding or favor order needs to be cancelled, it must be done no later than 2 weeks prior to the event for a full refund, otherwise we reserve the right to retain partial payment to cover purchased supplies for the order.","policy_refunds":"We are sorry but we can not accept returns on food products. We have not had any problems with shipments getting damaged however the bars are packaged well in individual wrappings and then double and sometimes triple boxed.\r\nWe strive for return customers so if there is any problem with your order, please email us through Etsy and we will always try to resolve a complaint.","policy_additional":"All of our delicacies are made to order, and have a limited shelf life. However, if you are a store owner and are interested in keeping an assortment of our weight loss fruit bars, they have a 60 day shelf life and are available for your customers, we can do that with notice and can offer special pricing on large orders.  Just let us know.\r\n\r\nOur non-weight loss baked goods will keep well refridgerated for 7 to 10 days and in a freezer for 2 months.  Thanks so much.","policy_seller_info":"If you have a brick and mortar shop or fitness center, and have a U.S. tax I.D. number,  let me know and we can set up a business account for you. We will need your Business name, physical business address, contact email address\r\nby email to mail@hillrisefarms.com   Thank you.","policy_updated_tsz":1438269662,"policy_has_private_receipt_info":false,"vacation_autoreply":"Hi, I&#39;ll get back to you as soon as possible. I check mail every day. Thank you. Janet","url":"https:\/\/www.etsy.com\/shop\/SugarBakersBakery?utm_source=explorer&utm_medium=api&utm_campaign=api","image_url_760x100":"https:\/\/img1.etsystatic.com\/048\/0\/6407465\/iusb_760x100.15032711_b6xu.jpg","num_favorers":2661,"languages":["en-US","es"],"upcoming_local_event_id":null,"icon_url_fullxfull":"https:\/\/img1.etsystatic.com\/128\/0\/6407465\/isla_fullxfull.18109495_n3tel9vj.jpg","is_using_structured_policies":false,"has_onboarded_structured_policies":false}}],"params":{"limit":25,"offset":0,"page":null,"keywords":"whiskey","sort_on":"score","sort_order":"down","min_price":null,"max_price":null,"color":null,"color_accuracy":0,"tags":null,"category":null,"location":null,"lat":null,"lon":null,"region":null,"geo_level":"city","accepts_gift_cards":"false","translate_keywords":"false","etsy_asap":"false"},"type":"Listing","pagination":{"effective_limit":25,"effective_offset":0,"next_offset":25,"effective_page":1,"next_page":2},"ok":true});

},{}],3:[function(require,module,exports){
(function (process,__filename){
/** vim: et:ts=4:sw=4:sts=4
 * @license amdefine 1.0.0 Copyright (c) 2011-2015, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/amdefine for details
 */

/*jslint node: true */
/*global module, process */
'use strict';

/**
 * Creates a define for node.
 * @param {Object} module the "module" object that is defined by Node for the
 * current module.
 * @param {Function} [requireFn]. Node's require function for the current module.
 * It only needs to be passed in Node versions before 0.5, when module.require
 * did not exist.
 * @returns {Function} a define function that is usable for the current node
 * module.
 */
function amdefine(module, requireFn) {
    'use strict';
    var defineCache = {},
        loaderCache = {},
        alreadyCalled = false,
        path = require('path'),
        makeRequire, stringRequire;

    /**
     * Trims the . and .. from an array of path segments.
     * It will keep a leading path segment if a .. will become
     * the first path segment, to help with module name lookups,
     * which act like paths, but can be remapped. But the end result,
     * all paths that use this function should look normalized.
     * NOTE: this method MODIFIES the input array.
     * @param {Array} ary the array of path segments.
     */
    function trimDots(ary) {
        var i, part;
        for (i = 0; ary[i]; i+= 1) {
            part = ary[i];
            if (part === '.') {
                ary.splice(i, 1);
                i -= 1;
            } else if (part === '..') {
                if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
                    //End of the line. Keep at least one non-dot
                    //path segment at the front so it can be mapped
                    //correctly to disk. Otherwise, there is likely
                    //no path mapping for a path starting with '..'.
                    //This can still fail, but catches the most reasonable
                    //uses of ..
                    break;
                } else if (i > 0) {
                    ary.splice(i - 1, 2);
                    i -= 2;
                }
            }
        }
    }

    function normalize(name, baseName) {
        var baseParts;

        //Adjust any relative paths.
        if (name && name.charAt(0) === '.') {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                baseParts = baseName.split('/');
                baseParts = baseParts.slice(0, baseParts.length - 1);
                baseParts = baseParts.concat(name.split('/'));
                trimDots(baseParts);
                name = baseParts.join('/');
            }
        }

        return name;
    }

    /**
     * Create the normalize() function passed to a loader plugin's
     * normalize method.
     */
    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(id) {
        function load(value) {
            loaderCache[id] = value;
        }

        load.fromText = function (id, text) {
            //This one is difficult because the text can/probably uses
            //define, and any relative paths and requires should be relative
            //to that id was it would be found on disk. But this would require
            //bootstrapping a module/require fairly deeply from node core.
            //Not sure how best to go about that yet.
            throw new Error('amdefine does not implement load.fromText');
        };

        return load;
    }

    makeRequire = function (systemRequire, exports, module, relId) {
        function amdRequire(deps, callback) {
            if (typeof deps === 'string') {
                //Synchronous, single module require('')
                return stringRequire(systemRequire, exports, module, deps, relId);
            } else {
                //Array of dependencies with a callback.

                //Convert the dependencies to modules.
                deps = deps.map(function (depName) {
                    return stringRequire(systemRequire, exports, module, depName, relId);
                });

                //Wait for next tick to call back the require call.
                if (callback) {
                    process.nextTick(function () {
                        callback.apply(null, deps);
                    });
                }
            }
        }

        amdRequire.toUrl = function (filePath) {
            if (filePath.indexOf('.') === 0) {
                return normalize(filePath, path.dirname(module.filename));
            } else {
                return filePath;
            }
        };

        return amdRequire;
    };

    //Favor explicit value, passed in if the module wants to support Node 0.4.
    requireFn = requireFn || function req() {
        return module.require.apply(module, arguments);
    };

    function runFactory(id, deps, factory) {
        var r, e, m, result;

        if (id) {
            e = loaderCache[id] = {};
            m = {
                id: id,
                uri: __filename,
                exports: e
            };
            r = makeRequire(requireFn, e, m, id);
        } else {
            //Only support one define call per file
            if (alreadyCalled) {
                throw new Error('amdefine with no module ID cannot be called more than once per file.');
            }
            alreadyCalled = true;

            //Use the real variables from node
            //Use module.exports for exports, since
            //the exports in here is amdefine exports.
            e = module.exports;
            m = module;
            r = makeRequire(requireFn, e, m, module.id);
        }

        //If there are dependencies, they are strings, so need
        //to convert them to dependency values.
        if (deps) {
            deps = deps.map(function (depName) {
                return r(depName);
            });
        }

        //Call the factory with the right dependencies.
        if (typeof factory === 'function') {
            result = factory.apply(m.exports, deps);
        } else {
            result = factory;
        }

        if (result !== undefined) {
            m.exports = result;
            if (id) {
                loaderCache[id] = m.exports;
            }
        }
    }

    stringRequire = function (systemRequire, exports, module, id, relId) {
        //Split the ID by a ! so that
        var index = id.indexOf('!'),
            originalId = id,
            prefix, plugin;

        if (index === -1) {
            id = normalize(id, relId);

            //Straight module lookup. If it is one of the special dependencies,
            //deal with it, otherwise, delegate to node.
            if (id === 'require') {
                return makeRequire(systemRequire, exports, module, relId);
            } else if (id === 'exports') {
                return exports;
            } else if (id === 'module') {
                return module;
            } else if (loaderCache.hasOwnProperty(id)) {
                return loaderCache[id];
            } else if (defineCache[id]) {
                runFactory.apply(null, defineCache[id]);
                return loaderCache[id];
            } else {
                if(systemRequire) {
                    return systemRequire(originalId);
                } else {
                    throw new Error('No module with ID: ' + id);
                }
            }
        } else {
            //There is a plugin in play.
            prefix = id.substring(0, index);
            id = id.substring(index + 1, id.length);

            plugin = stringRequire(systemRequire, exports, module, prefix, relId);

            if (plugin.normalize) {
                id = plugin.normalize(id, makeNormalize(relId));
            } else {
                //Normalize the ID normally.
                id = normalize(id, relId);
            }

            if (loaderCache[id]) {
                return loaderCache[id];
            } else {
                plugin.load(id, makeRequire(systemRequire, exports, module, relId), makeLoad(id), {});

                return loaderCache[id];
            }
        }
    };

    //Create a define function specific to the module asking for amdefine.
    function define(id, deps, factory) {
        if (Array.isArray(id)) {
            factory = deps;
            deps = id;
            id = undefined;
        } else if (typeof id !== 'string') {
            factory = id;
            id = deps = undefined;
        }

        if (deps && !Array.isArray(deps)) {
            factory = deps;
            deps = undefined;
        }

        if (!deps) {
            deps = ['require', 'exports', 'module'];
        }

        //Set up properties for this module. If an ID, then use
        //internal cache. If no ID, then use the external variables
        //for this node module.
        if (id) {
            //Put the module in deep freeze until there is a
            //require call for it.
            defineCache[id] = [id, deps, factory];
        } else {
            runFactory(id, deps, factory);
        }
    }

    //define.require, which has access to all the values in the
    //cache. Useful for AMD modules that all have IDs in the file,
    //but need to finally export a value to node based on one of those
    //IDs.
    define.require = function (id) {
        if (loaderCache[id]) {
            return loaderCache[id];
        }

        if (defineCache[id]) {
            runFactory.apply(null, defineCache[id]);
            return loaderCache[id];
        }
    };

    define.amd = {};

    return define;
}

module.exports = amdefine;

}).call(this,require('_process'),"/node_modules/amdefine/amdefine.js")
},{"_process":47,"path":46}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _handlebarsRuntime = require('./handlebars.runtime');

var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

// Compiler imports

var _handlebarsCompilerAst = require('./handlebars/compiler/ast');

var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

var _handlebarsCompilerBase = require('./handlebars/compiler/base');

var _handlebarsCompilerCompiler = require('./handlebars/compiler/compiler');

var _handlebarsCompilerJavascriptCompiler = require('./handlebars/compiler/javascript-compiler');

var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

var _handlebarsCompilerVisitor = require('./handlebars/compiler/visitor');

var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

var _handlebarsNoConflict = require('./handlebars/no-conflict');

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

var _create = _handlebarsRuntime2['default'].create;
function create() {
  var hb = _create();

  hb.compile = function (input, options) {
    return _handlebarsCompilerCompiler.compile(input, options, hb);
  };
  hb.precompile = function (input, options) {
    return _handlebarsCompilerCompiler.precompile(input, options, hb);
  };

  hb.AST = _handlebarsCompilerAst2['default'];
  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
  hb.Parser = _handlebarsCompilerBase.parser;
  hb.parse = _handlebarsCompilerBase.parse;

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst.Visitor = _handlebarsCompilerVisitor2['default'];

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];


},{"./handlebars.runtime":5,"./handlebars/compiler/ast":7,"./handlebars/compiler/base":8,"./handlebars/compiler/compiler":10,"./handlebars/compiler/javascript-compiler":12,"./handlebars/compiler/visitor":15,"./handlebars/no-conflict":29}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = require('./handlebars/base');

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = require('./handlebars/safe-string');

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = require('./handlebars/exception');

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = require('./handlebars/utils');

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = require('./handlebars/runtime');

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = require('./handlebars/no-conflict');

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];


},{"./handlebars/base":6,"./handlebars/exception":19,"./handlebars/no-conflict":29,"./handlebars/runtime":30,"./handlebars/safe-string":31,"./handlebars/utils":32}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _helpers = require('./helpers');

var _decorators = require('./decorators');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.5';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];


},{"./decorators":17,"./exception":19,"./helpers":20,"./logger":28,"./utils":32}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var AST = {
  // Public API used to evaluate derived attributes regarding AST nodes
  helpers: {
    // a mustache is definitely a helper if:
    // * it is an eligible helper, and
    // * it has at least one parameter or hash segment
    helperExpression: function helperExpression(node) {
      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
    },

    scopedId: function scopedId(path) {
      return (/^\.|this\b/.test(path.original)
      );
    },

    // an ID is simple if it only has one part, and that part is not
    // `..` or `this`.
    simpleId: function simpleId(path) {
      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
    }
  }
};

// Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
exports['default'] = AST;
module.exports = exports['default'];


},{}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.parse = parse;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _whitespaceControl = require('./whitespace-control');

var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

var _helpers = require('./helpers');

var Helpers = _interopRequireWildcard(_helpers);

var _utils = require('../utils');

exports.parser = _parser2['default'];

var yy = {};
_utils.extend(yy, Helpers);

function parse(input, options) {
  // Just return if an already-compiled AST was passed in.
  if (input.type === 'Program') {
    return input;
  }

  _parser2['default'].yy = yy;

  // Altering the shared object here, but this is ok as parser is a sync operation
  yy.locInfo = function (locInfo) {
    return new yy.SourceLocation(options && options.srcName, locInfo);
  };

  var strip = new _whitespaceControl2['default'](options);
  return strip.accept(_parser2['default'].parse(input));
}


},{"../utils":32,"./helpers":11,"./parser":13,"./whitespace-control":16}],9:[function(require,module,exports){
/* global define */
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

var SourceNode = undefined;

try {
  /* istanbul ignore next */
  if (typeof define !== 'function' || !define.amd) {
    // We don't support this in AMD environments. For these environments, we asusme that
    // they are running on the browser and thus have no need for the source-map library.
    var SourceMap = require('source-map');
    SourceNode = SourceMap.SourceNode;
  }
} catch (err) {}
/* NOP */

/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
if (!SourceNode) {
  SourceNode = function (line, column, srcFile, chunks) {
    this.src = '';
    if (chunks) {
      this.add(chunks);
    }
  };
  /* istanbul ignore next */
  SourceNode.prototype = {
    add: function add(chunks) {
      if (_utils.isArray(chunks)) {
        chunks = chunks.join('');
      }
      this.src += chunks;
    },
    prepend: function prepend(chunks) {
      if (_utils.isArray(chunks)) {
        chunks = chunks.join('');
      }
      this.src = chunks + this.src;
    },
    toStringWithSourceMap: function toStringWithSourceMap() {
      return { code: this.toString() };
    },
    toString: function toString() {
      return this.src;
    }
  };
}

function castChunk(chunk, codeGen, loc) {
  if (_utils.isArray(chunk)) {
    var ret = [];

    for (var i = 0, len = chunk.length; i < len; i++) {
      ret.push(codeGen.wrap(chunk[i], loc));
    }
    return ret;
  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
    // Handle primitives that the SourceNode will throw up on
    return chunk + '';
  }
  return chunk;
}

function CodeGen(srcFile) {
  this.srcFile = srcFile;
  this.source = [];
}

CodeGen.prototype = {
  isEmpty: function isEmpty() {
    return !this.source.length;
  },
  prepend: function prepend(source, loc) {
    this.source.unshift(this.wrap(source, loc));
  },
  push: function push(source, loc) {
    this.source.push(this.wrap(source, loc));
  },

  merge: function merge() {
    var source = this.empty();
    this.each(function (line) {
      source.add(['  ', line, '\n']);
    });
    return source;
  },

  each: function each(iter) {
    for (var i = 0, len = this.source.length; i < len; i++) {
      iter(this.source[i]);
    }
  },

  empty: function empty() {
    var loc = this.currentLocation || { start: {} };
    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
  },
  wrap: function wrap(chunk) {
    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

    if (chunk instanceof SourceNode) {
      return chunk;
    }

    chunk = castChunk(chunk, this, loc);

    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
  },

  functionCall: function functionCall(fn, type, params) {
    params = this.generateList(params);
    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
  },

  quotedString: function quotedString(str) {
    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
    .replace(/\u2029/g, '\\u2029') + '"';
  },

  objectLiteral: function objectLiteral(obj) {
    var pairs = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var value = castChunk(obj[key], this);
        if (value !== 'undefined') {
          pairs.push([this.quotedString(key), ':', value]);
        }
      }
    }

    var ret = this.generateList(pairs);
    ret.prepend('{');
    ret.add('}');
    return ret;
  },

  generateList: function generateList(entries) {
    var ret = this.empty();

    for (var i = 0, len = entries.length; i < len; i++) {
      if (i) {
        ret.add(',');
      }

      ret.add(castChunk(entries[i], this));
    }

    return ret;
  },

  generateArray: function generateArray(entries) {
    var ret = this.generateList(entries);
    ret.prepend('[');
    ret.add(']');

    return ret;
  }
};

exports['default'] = CodeGen;
module.exports = exports['default'];


},{"../utils":32,"source-map":34}],10:[function(require,module,exports){
/* eslint-disable new-cap */

'use strict';

exports.__esModule = true;
exports.Compiler = Compiler;
exports.precompile = precompile;
exports.compile = compile;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

var _utils = require('../utils');

var _ast = require('./ast');

var _ast2 = _interopRequireDefault(_ast);

var slice = [].slice;

function Compiler() {}

// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

Compiler.prototype = {
  compiler: Compiler,

  equals: function equals(other) {
    var len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      var opcode = this.opcodes[i],
          otherOpcode = other.opcodes[i];
      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
        return false;
      }
    }

    // We know that length is the same between the two arrays because they are directly tied
    // to the opcode behavior above.
    len = this.children.length;
    for (var i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }

    return true;
  },

  guid: 0,

  compile: function compile(program, options) {
    this.sourceNode = [];
    this.opcodes = [];
    this.children = [];
    this.options = options;
    this.stringParams = options.stringParams;
    this.trackIds = options.trackIds;

    options.blockParams = options.blockParams || [];

    // These changes will propagate to the other compiler components
    var knownHelpers = options.knownHelpers;
    options.knownHelpers = {
      'helperMissing': true,
      'blockHelperMissing': true,
      'each': true,
      'if': true,
      'unless': true,
      'with': true,
      'log': true,
      'lookup': true
    };
    if (knownHelpers) {
      for (var _name in knownHelpers) {
        /* istanbul ignore else */
        if (_name in knownHelpers) {
          options.knownHelpers[_name] = knownHelpers[_name];
        }
      }
    }

    return this.accept(program);
  },

  compileProgram: function compileProgram(program) {
    var childCompiler = new this.compiler(),
        // eslint-disable-line new-cap
    result = childCompiler.compile(program, this.options),
        guid = this.guid++;

    this.usePartial = this.usePartial || result.usePartial;

    this.children[guid] = result;
    this.useDepths = this.useDepths || result.useDepths;

    return guid;
  },

  accept: function accept(node) {
    /* istanbul ignore next: Sanity code */
    if (!this[node.type]) {
      throw new _exception2['default']('Unknown type: ' + node.type, node);
    }

    this.sourceNode.unshift(node);
    var ret = this[node.type](node);
    this.sourceNode.shift();
    return ret;
  },

  Program: function Program(program) {
    this.options.blockParams.unshift(program.blockParams);

    var body = program.body,
        bodyLength = body.length;
    for (var i = 0; i < bodyLength; i++) {
      this.accept(body[i]);
    }

    this.options.blockParams.shift();

    this.isSimple = bodyLength === 1;
    this.blockParams = program.blockParams ? program.blockParams.length : 0;

    return this;
  },

  BlockStatement: function BlockStatement(block) {
    transformLiteralToPath(block);

    var program = block.program,
        inverse = block.inverse;

    program = program && this.compileProgram(program);
    inverse = inverse && this.compileProgram(inverse);

    var type = this.classifySexpr(block);

    if (type === 'helper') {
      this.helperSexpr(block, program, inverse);
    } else if (type === 'simple') {
      this.simpleSexpr(block);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('blockValue', block.path.original);
    } else {
      this.ambiguousSexpr(block, program, inverse);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('ambiguousBlockValue');
    }

    this.opcode('append');
  },

  DecoratorBlock: function DecoratorBlock(decorator) {
    var program = decorator.program && this.compileProgram(decorator.program);
    var params = this.setupFullMustacheParams(decorator, program, undefined),
        path = decorator.path;

    this.useDecorators = true;
    this.opcode('registerDecorator', params.length, path.original);
  },

  PartialStatement: function PartialStatement(partial) {
    this.usePartial = true;

    var program = partial.program;
    if (program) {
      program = this.compileProgram(partial.program);
    }

    var params = partial.params;
    if (params.length > 1) {
      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
    } else if (!params.length) {
      if (this.options.explicitPartialContext) {
        this.opcode('pushLiteral', 'undefined');
      } else {
        params.push({ type: 'PathExpression', parts: [], depth: 0 });
      }
    }

    var partialName = partial.name.original,
        isDynamic = partial.name.type === 'SubExpression';
    if (isDynamic) {
      this.accept(partial.name);
    }

    this.setupFullMustacheParams(partial, program, undefined, true);

    var indent = partial.indent || '';
    if (this.options.preventIndent && indent) {
      this.opcode('appendContent', indent);
      indent = '';
    }

    this.opcode('invokePartial', isDynamic, partialName, indent);
    this.opcode('append');
  },
  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
    this.PartialStatement(partialBlock);
  },

  MustacheStatement: function MustacheStatement(mustache) {
    this.SubExpression(mustache);

    if (mustache.escaped && !this.options.noEscape) {
      this.opcode('appendEscaped');
    } else {
      this.opcode('append');
    }
  },
  Decorator: function Decorator(decorator) {
    this.DecoratorBlock(decorator);
  },

  ContentStatement: function ContentStatement(content) {
    if (content.value) {
      this.opcode('appendContent', content.value);
    }
  },

  CommentStatement: function CommentStatement() {},

  SubExpression: function SubExpression(sexpr) {
    transformLiteralToPath(sexpr);
    var type = this.classifySexpr(sexpr);

    if (type === 'simple') {
      this.simpleSexpr(sexpr);
    } else if (type === 'helper') {
      this.helperSexpr(sexpr);
    } else {
      this.ambiguousSexpr(sexpr);
    }
  },
  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
    var path = sexpr.path,
        name = path.parts[0],
        isBlock = program != null || inverse != null;

    this.opcode('getContext', path.depth);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    path.strict = true;
    this.accept(path);

    this.opcode('invokeAmbiguous', name, isBlock);
  },

  simpleSexpr: function simpleSexpr(sexpr) {
    var path = sexpr.path;
    path.strict = true;
    this.accept(path);
    this.opcode('resolvePossibleLambda');
  },

  helperSexpr: function helperSexpr(sexpr, program, inverse) {
    var params = this.setupFullMustacheParams(sexpr, program, inverse),
        path = sexpr.path,
        name = path.parts[0];

    if (this.options.knownHelpers[name]) {
      this.opcode('invokeKnownHelper', params.length, name);
    } else if (this.options.knownHelpersOnly) {
      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
    } else {
      path.strict = true;
      path.falsy = true;

      this.accept(path);
      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
    }
  },

  PathExpression: function PathExpression(path) {
    this.addDepth(path.depth);
    this.opcode('getContext', path.depth);

    var name = path.parts[0],
        scoped = _ast2['default'].helpers.scopedId(path),
        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

    if (blockParamId) {
      this.opcode('lookupBlockParam', blockParamId, path.parts);
    } else if (!name) {
      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
      this.opcode('pushContext');
    } else if (path.data) {
      this.options.data = true;
      this.opcode('lookupData', path.depth, path.parts, path.strict);
    } else {
      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
    }
  },

  StringLiteral: function StringLiteral(string) {
    this.opcode('pushString', string.value);
  },

  NumberLiteral: function NumberLiteral(number) {
    this.opcode('pushLiteral', number.value);
  },

  BooleanLiteral: function BooleanLiteral(bool) {
    this.opcode('pushLiteral', bool.value);
  },

  UndefinedLiteral: function UndefinedLiteral() {
    this.opcode('pushLiteral', 'undefined');
  },

  NullLiteral: function NullLiteral() {
    this.opcode('pushLiteral', 'null');
  },

  Hash: function Hash(hash) {
    var pairs = hash.pairs,
        i = 0,
        l = pairs.length;

    this.opcode('pushHash');

    for (; i < l; i++) {
      this.pushParam(pairs[i].value);
    }
    while (i--) {
      this.opcode('assignToHash', pairs[i].key);
    }
    this.opcode('popHash');
  },

  // HELPERS
  opcode: function opcode(name) {
    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
  },

  addDepth: function addDepth(depth) {
    if (!depth) {
      return;
    }

    this.useDepths = true;
  },

  classifySexpr: function classifySexpr(sexpr) {
    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
    var isEligible = !isBlockParam && (isHelper || isSimple);

    // if ambiguous, we can possibly resolve the ambiguity now
    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
    if (isEligible && !isHelper) {
      var _name2 = sexpr.path.parts[0],
          options = this.options;

      if (options.knownHelpers[_name2]) {
        isHelper = true;
      } else if (options.knownHelpersOnly) {
        isEligible = false;
      }
    }

    if (isHelper) {
      return 'helper';
    } else if (isEligible) {
      return 'ambiguous';
    } else {
      return 'simple';
    }
  },

  pushParams: function pushParams(params) {
    for (var i = 0, l = params.length; i < l; i++) {
      this.pushParam(params[i]);
    }
  },

  pushParam: function pushParam(val) {
    var value = val.value != null ? val.value : val.original || '';

    if (this.stringParams) {
      if (value.replace) {
        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
      }

      if (val.depth) {
        this.addDepth(val.depth);
      }
      this.opcode('getContext', val.depth || 0);
      this.opcode('pushStringParam', value, val.type);

      if (val.type === 'SubExpression') {
        // SubExpressions get evaluated and passed in
        // in string params mode.
        this.accept(val);
      }
    } else {
      if (this.trackIds) {
        var blockParamIndex = undefined;
        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
          blockParamIndex = this.blockParamIndex(val.parts[0]);
        }
        if (blockParamIndex) {
          var blockParamChild = val.parts.slice(1).join('.');
          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
        } else {
          value = val.original || value;
          if (value.replace) {
            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
          }

          this.opcode('pushId', val.type, value);
        }
      }
      this.accept(val);
    }
  },

  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
    var params = sexpr.params;
    this.pushParams(params);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    if (sexpr.hash) {
      this.accept(sexpr.hash);
    } else {
      this.opcode('emptyHash', omitEmpty);
    }

    return params;
  },

  blockParamIndex: function blockParamIndex(name) {
    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
      var blockParams = this.options.blockParams[depth],
          param = blockParams && _utils.indexOf(blockParams, name);
      if (blockParams && param >= 0) {
        return [depth, param];
      }
    }
  }
};

function precompile(input, options, env) {
  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var ast = env.parse(input, options),
      environment = new env.Compiler().compile(ast, options);
  return new env.JavaScriptCompiler().compile(environment, options);
}

function compile(input, options, env) {
  if (options === undefined) options = {};

  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
  }

  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var compiled = undefined;

  function compileInput() {
    var ast = env.parse(input, options),
        environment = new env.Compiler().compile(ast, options),
        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
    return env.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  function ret(context, execOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled.call(this, context, execOptions);
  }
  ret._setup = function (setupOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._setup(setupOptions);
  };
  ret._child = function (i, data, blockParams, depths) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._child(i, data, blockParams, depths);
  };
  return ret;
}

function argEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (!argEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
}

function transformLiteralToPath(sexpr) {
  if (!sexpr.path.parts) {
    var literal = sexpr.path;
    // Casting to string here to make false and 0 literal values play nicely with the rest
    // of the system.
    sexpr.path = {
      type: 'PathExpression',
      data: false,
      depth: 0,
      parts: [literal.original + ''],
      original: literal.original + '',
      loc: literal.loc
    };
  }
}


},{"../exception":19,"../utils":32,"./ast":7}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.SourceLocation = SourceLocation;
exports.id = id;
exports.stripFlags = stripFlags;
exports.stripComment = stripComment;
exports.preparePath = preparePath;
exports.prepareMustache = prepareMustache;
exports.prepareRawBlock = prepareRawBlock;
exports.prepareBlock = prepareBlock;
exports.prepareProgram = prepareProgram;
exports.preparePartialBlock = preparePartialBlock;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

function validateClose(open, close) {
  close = close.path ? close.path.original : close;

  if (open.path.original !== close) {
    var errorNode = { loc: open.path.loc };

    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
  }
}

function SourceLocation(source, locInfo) {
  this.source = source;
  this.start = {
    line: locInfo.first_line,
    column: locInfo.first_column
  };
  this.end = {
    line: locInfo.last_line,
    column: locInfo.last_column
  };
}

function id(token) {
  if (/^\[.*\]$/.test(token)) {
    return token.substr(1, token.length - 2);
  } else {
    return token;
  }
}

function stripFlags(open, close) {
  return {
    open: open.charAt(2) === '~',
    close: close.charAt(close.length - 3) === '~'
  };
}

function stripComment(comment) {
  return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
}

function preparePath(data, parts, loc) {
  loc = this.locInfo(loc);

  var original = data ? '@' : '',
      dig = [],
      depth = 0,
      depthString = '';

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].part,

    // If we have [] syntax then we do not treat path references as operators,
    // i.e. foo.[this] resolves to approximately context.foo['this']
    isLiteral = parts[i].original !== part;
    original += (parts[i].separator || '') + part;

    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
      if (dig.length > 0) {
        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
      } else if (part === '..') {
        depth++;
        depthString += '../';
      }
    } else {
      dig.push(part);
    }
  }

  return {
    type: 'PathExpression',
    data: data,
    depth: depth,
    parts: dig,
    original: original,
    loc: loc
  };
}

function prepareMustache(path, params, hash, open, strip, locInfo) {
  // Must use charAt to support IE pre-10
  var escapeFlag = open.charAt(3) || open.charAt(2),
      escaped = escapeFlag !== '{' && escapeFlag !== '&';

  var decorator = /\*/.test(open);
  return {
    type: decorator ? 'Decorator' : 'MustacheStatement',
    path: path,
    params: params,
    hash: hash,
    escaped: escaped,
    strip: strip,
    loc: this.locInfo(locInfo)
  };
}

function prepareRawBlock(openRawBlock, contents, close, locInfo) {
  validateClose(openRawBlock, close);

  locInfo = this.locInfo(locInfo);
  var program = {
    type: 'Program',
    body: contents,
    strip: {},
    loc: locInfo
  };

  return {
    type: 'BlockStatement',
    path: openRawBlock.path,
    params: openRawBlock.params,
    hash: openRawBlock.hash,
    program: program,
    openStrip: {},
    inverseStrip: {},
    closeStrip: {},
    loc: locInfo
  };
}

function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
  if (close && close.path) {
    validateClose(openBlock, close);
  }

  var decorator = /\*/.test(openBlock.open);

  program.blockParams = openBlock.blockParams;

  var inverse = undefined,
      inverseStrip = undefined;

  if (inverseAndProgram) {
    if (decorator) {
      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
    }

    if (inverseAndProgram.chain) {
      inverseAndProgram.program.body[0].closeStrip = close.strip;
    }

    inverseStrip = inverseAndProgram.strip;
    inverse = inverseAndProgram.program;
  }

  if (inverted) {
    inverted = inverse;
    inverse = program;
    program = inverted;
  }

  return {
    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
    path: openBlock.path,
    params: openBlock.params,
    hash: openBlock.hash,
    program: program,
    inverse: inverse,
    openStrip: openBlock.strip,
    inverseStrip: inverseStrip,
    closeStrip: close && close.strip,
    loc: this.locInfo(locInfo)
  };
}

function prepareProgram(statements, loc) {
  if (!loc && statements.length) {
    var firstLoc = statements[0].loc,
        lastLoc = statements[statements.length - 1].loc;

    /* istanbul ignore else */
    if (firstLoc && lastLoc) {
      loc = {
        source: firstLoc.source,
        start: {
          line: firstLoc.start.line,
          column: firstLoc.start.column
        },
        end: {
          line: lastLoc.end.line,
          column: lastLoc.end.column
        }
      };
    }
  }

  return {
    type: 'Program',
    body: statements,
    strip: {},
    loc: loc
  };
}

function preparePartialBlock(open, program, close, locInfo) {
  validateClose(open, close);

  return {
    type: 'PartialBlockStatement',
    name: open.path,
    params: open.params,
    hash: open.hash,
    program: program,
    openStrip: open.strip,
    closeStrip: close && close.strip,
    loc: this.locInfo(locInfo)
  };
}


},{"../exception":19}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _base = require('../base');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

var _utils = require('../utils');

var _codeGen = require('./code-gen');

var _codeGen2 = _interopRequireDefault(_codeGen);

function Literal(value) {
  this.value = value;
}

function JavaScriptCompiler() {}

JavaScriptCompiler.prototype = {
  // PUBLIC API: You can override these methods in a subclass to provide
  // alternative compiled forms for name lookup and buffering semantics
  nameLookup: function nameLookup(parent, name /* , type*/) {
    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
      return [parent, '.', name];
    } else {
      return [parent, '[', JSON.stringify(name), ']'];
    }
  },
  depthedLookup: function depthedLookup(name) {
    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
  },

  compilerInfo: function compilerInfo() {
    var revision = _base.COMPILER_REVISION,
        versions = _base.REVISION_CHANGES[revision];
    return [revision, versions];
  },

  appendToBuffer: function appendToBuffer(source, location, explicit) {
    // Force a source as this simplifies the merge logic.
    if (!_utils.isArray(source)) {
      source = [source];
    }
    source = this.source.wrap(source, location);

    if (this.environment.isSimple) {
      return ['return ', source, ';'];
    } else if (explicit) {
      // This is a case where the buffer operation occurs as a child of another
      // construct, generally braces. We have to explicitly output these buffer
      // operations to ensure that the emitted code goes in the correct location.
      return ['buffer += ', source, ';'];
    } else {
      source.appendToBuffer = true;
      return source;
    }
  },

  initializeBuffer: function initializeBuffer() {
    return this.quotedString('');
  },
  // END PUBLIC API

  compile: function compile(environment, options, context, asObject) {
    this.environment = environment;
    this.options = options;
    this.stringParams = this.options.stringParams;
    this.trackIds = this.options.trackIds;
    this.precompile = !asObject;

    this.name = this.environment.name;
    this.isChild = !!context;
    this.context = context || {
      decorators: [],
      programs: [],
      environments: []
    };

    this.preamble();

    this.stackSlot = 0;
    this.stackVars = [];
    this.aliases = {};
    this.registers = { list: [] };
    this.hashes = [];
    this.compileStack = [];
    this.inlineStack = [];
    this.blockParams = [];

    this.compileChildren(environment, options);

    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

    var opcodes = environment.opcodes,
        opcode = undefined,
        firstLoc = undefined,
        i = undefined,
        l = undefined;

    for (i = 0, l = opcodes.length; i < l; i++) {
      opcode = opcodes[i];

      this.source.currentLocation = opcode.loc;
      firstLoc = firstLoc || opcode.loc;
      this[opcode.opcode].apply(this, opcode.args);
    }

    // Flush any trailing content that might be pending.
    this.source.currentLocation = firstLoc;
    this.pushSource('');

    /* istanbul ignore next */
    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
      throw new _exception2['default']('Compile completed with content left on stack');
    }

    if (!this.decorators.isEmpty()) {
      this.useDecorators = true;

      this.decorators.prepend('var decorators = container.decorators;\n');
      this.decorators.push('return fn;');

      if (asObject) {
        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
      } else {
        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
        this.decorators.push('}\n');
        this.decorators = this.decorators.merge();
      }
    } else {
      this.decorators = undefined;
    }

    var fn = this.createFunctionContext(asObject);
    if (!this.isChild) {
      var ret = {
        compiler: this.compilerInfo(),
        main: fn
      };

      if (this.decorators) {
        ret.main_d = this.decorators; // eslint-disable-line camelcase
        ret.useDecorators = true;
      }

      var _context = this.context;
      var programs = _context.programs;
      var decorators = _context.decorators;

      for (i = 0, l = programs.length; i < l; i++) {
        if (programs[i]) {
          ret[i] = programs[i];
          if (decorators[i]) {
            ret[i + '_d'] = decorators[i];
            ret.useDecorators = true;
          }
        }
      }

      if (this.environment.usePartial) {
        ret.usePartial = true;
      }
      if (this.options.data) {
        ret.useData = true;
      }
      if (this.useDepths) {
        ret.useDepths = true;
      }
      if (this.useBlockParams) {
        ret.useBlockParams = true;
      }
      if (this.options.compat) {
        ret.compat = true;
      }

      if (!asObject) {
        ret.compiler = JSON.stringify(ret.compiler);

        this.source.currentLocation = { start: { line: 1, column: 0 } };
        ret = this.objectLiteral(ret);

        if (options.srcName) {
          ret = ret.toStringWithSourceMap({ file: options.destName });
          ret.map = ret.map && ret.map.toString();
        } else {
          ret = ret.toString();
        }
      } else {
        ret.compilerOptions = this.options;
      }

      return ret;
    } else {
      return fn;
    }
  },

  preamble: function preamble() {
    // track the last context pushed into place to allow skipping the
    // getContext opcode when it would be a noop
    this.lastContext = 0;
    this.source = new _codeGen2['default'](this.options.srcName);
    this.decorators = new _codeGen2['default'](this.options.srcName);
  },

  createFunctionContext: function createFunctionContext(asObject) {
    var varDeclarations = '';

    var locals = this.stackVars.concat(this.registers.list);
    if (locals.length > 0) {
      varDeclarations += ', ' + locals.join(', ');
    }

    // Generate minimizer alias mappings
    //
    // When using true SourceNodes, this will update all references to the given alias
    // as the source nodes are reused in situ. For the non-source node compilation mode,
    // aliases will not be used, but this case is already being run on the client and
    // we aren't concern about minimizing the template size.
    var aliasCount = 0;
    for (var alias in this.aliases) {
      // eslint-disable-line guard-for-in
      var node = this.aliases[alias];

      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
        node.children[0] = 'alias' + aliasCount;
      }
    }

    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

    if (this.useBlockParams || this.useDepths) {
      params.push('blockParams');
    }
    if (this.useDepths) {
      params.push('depths');
    }

    // Perform a second pass over the output to merge content when possible
    var source = this.mergeSource(varDeclarations);

    if (asObject) {
      params.push(source);

      return Function.apply(this, params);
    } else {
      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
    }
  },
  mergeSource: function mergeSource(varDeclarations) {
    var isSimple = this.environment.isSimple,
        appendOnly = !this.forceBuffer,
        appendFirst = undefined,
        sourceSeen = undefined,
        bufferStart = undefined,
        bufferEnd = undefined;
    this.source.each(function (line) {
      if (line.appendToBuffer) {
        if (bufferStart) {
          line.prepend('  + ');
        } else {
          bufferStart = line;
        }
        bufferEnd = line;
      } else {
        if (bufferStart) {
          if (!sourceSeen) {
            appendFirst = true;
          } else {
            bufferStart.prepend('buffer += ');
          }
          bufferEnd.add(';');
          bufferStart = bufferEnd = undefined;
        }

        sourceSeen = true;
        if (!isSimple) {
          appendOnly = false;
        }
      }
    });

    if (appendOnly) {
      if (bufferStart) {
        bufferStart.prepend('return ');
        bufferEnd.add(';');
      } else if (!sourceSeen) {
        this.source.push('return "";');
      }
    } else {
      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

      if (bufferStart) {
        bufferStart.prepend('return buffer + ');
        bufferEnd.add(';');
      } else {
        this.source.push('return buffer;');
      }
    }

    if (varDeclarations) {
      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
    }

    return this.source.merge();
  },

  // [blockValue]
  //
  // On stack, before: hash, inverse, program, value
  // On stack, after: return value of blockHelperMissing
  //
  // The purpose of this opcode is to take a block of the form
  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
  // replace it on the stack with the result of properly
  // invoking blockHelperMissing.
  blockValue: function blockValue(name) {
    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
        params = [this.contextName(0)];
    this.setupHelperArgs(name, 0, params);

    var blockName = this.popStack();
    params.splice(1, 0, blockName);

    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
  },

  // [ambiguousBlockValue]
  //
  // On stack, before: hash, inverse, program, value
  // Compiler value, before: lastHelper=value of last found helper, if any
  // On stack, after, if no lastHelper: same as [blockValue]
  // On stack, after, if lastHelper: value
  ambiguousBlockValue: function ambiguousBlockValue() {
    // We're being a bit cheeky and reusing the options value from the prior exec
    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
        params = [this.contextName(0)];
    this.setupHelperArgs('', 0, params, true);

    this.flushInline();

    var current = this.topStack();
    params.splice(1, 0, current);

    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
  },

  // [appendContent]
  //
  // On stack, before: ...
  // On stack, after: ...
  //
  // Appends the string value of `content` to the current buffer
  appendContent: function appendContent(content) {
    if (this.pendingContent) {
      content = this.pendingContent + content;
    } else {
      this.pendingLocation = this.source.currentLocation;
    }

    this.pendingContent = content;
  },

  // [append]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Coerces `value` to a String and appends it to the current buffer.
  //
  // If `value` is truthy, or 0, it is coerced into a string and appended
  // Otherwise, the empty string is appended
  append: function append() {
    if (this.isInline()) {
      this.replaceStack(function (current) {
        return [' != null ? ', current, ' : ""'];
      });

      this.pushSource(this.appendToBuffer(this.popStack()));
    } else {
      var local = this.popStack();
      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
      if (this.environment.isSimple) {
        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
      }
    }
  },

  // [appendEscaped]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Escape `value` and append it to the buffer
  appendEscaped: function appendEscaped() {
    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
  },

  // [getContext]
  //
  // On stack, before: ...
  // On stack, after: ...
  // Compiler value, after: lastContext=depth
  //
  // Set the value of the `lastContext` compiler value to the depth
  getContext: function getContext(depth) {
    this.lastContext = depth;
  },

  // [pushContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext, ...
  //
  // Pushes the value of the current context onto the stack.
  pushContext: function pushContext() {
    this.pushStackLiteral(this.contextName(this.lastContext));
  },

  // [lookupOnContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext[name], ...
  //
  // Looks up the value of `name` on the current context and pushes
  // it onto the stack.
  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
    var i = 0;

    if (!scoped && this.options.compat && !this.lastContext) {
      // The depthed query is expected to handle the undefined logic for the root level that
      // is implemented below, so we evaluate that directly in compat mode
      this.push(this.depthedLookup(parts[i++]));
    } else {
      this.pushContext();
    }

    this.resolvePath('context', parts, i, falsy, strict);
  },

  // [lookupBlockParam]
  //
  // On stack, before: ...
  // On stack, after: blockParam[name], ...
  //
  // Looks up the value of `parts` on the given block param and pushes
  // it onto the stack.
  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
    this.useBlockParams = true;

    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
    this.resolvePath('context', parts, 1);
  },

  // [lookupData]
  //
  // On stack, before: ...
  // On stack, after: data, ...
  //
  // Push the data lookup operator
  lookupData: function lookupData(depth, parts, strict) {
    if (!depth) {
      this.pushStackLiteral('data');
    } else {
      this.pushStackLiteral('container.data(data, ' + depth + ')');
    }

    this.resolvePath('data', parts, 0, true, strict);
  },

  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
    // istanbul ignore next

    var _this = this;

    if (this.options.strict || this.options.assumeObjects) {
      this.push(strictLookup(this.options.strict && strict, this, parts, type));
      return;
    }

    var len = parts.length;
    for (; i < len; i++) {
      /* eslint-disable no-loop-func */
      this.replaceStack(function (current) {
        var lookup = _this.nameLookup(current, parts[i], type);
        // We want to ensure that zero and false are handled properly if the context (falsy flag)
        // needs to have the special handling for these values.
        if (!falsy) {
          return [' != null ? ', lookup, ' : ', current];
        } else {
          // Otherwise we can use generic falsy handling
          return [' && ', lookup];
        }
      });
      /* eslint-enable no-loop-func */
    }
  },

  // [resolvePossibleLambda]
  //
  // On stack, before: value, ...
  // On stack, after: resolved value, ...
  //
  // If the `value` is a lambda, replace it on the stack by
  // the return value of the lambda
  resolvePossibleLambda: function resolvePossibleLambda() {
    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
  },

  // [pushStringParam]
  //
  // On stack, before: ...
  // On stack, after: string, currentContext, ...
  //
  // This opcode is designed for use in string mode, which
  // provides the string value of a parameter along with its
  // depth rather than resolving it immediately.
  pushStringParam: function pushStringParam(string, type) {
    this.pushContext();
    this.pushString(type);

    // If it's a subexpression, the string result
    // will be pushed after this opcode.
    if (type !== 'SubExpression') {
      if (typeof string === 'string') {
        this.pushString(string);
      } else {
        this.pushStackLiteral(string);
      }
    }
  },

  emptyHash: function emptyHash(omitEmpty) {
    if (this.trackIds) {
      this.push('{}'); // hashIds
    }
    if (this.stringParams) {
      this.push('{}'); // hashContexts
      this.push('{}'); // hashTypes
    }
    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
  },
  pushHash: function pushHash() {
    if (this.hash) {
      this.hashes.push(this.hash);
    }
    this.hash = { values: [], types: [], contexts: [], ids: [] };
  },
  popHash: function popHash() {
    var hash = this.hash;
    this.hash = this.hashes.pop();

    if (this.trackIds) {
      this.push(this.objectLiteral(hash.ids));
    }
    if (this.stringParams) {
      this.push(this.objectLiteral(hash.contexts));
      this.push(this.objectLiteral(hash.types));
    }

    this.push(this.objectLiteral(hash.values));
  },

  // [pushString]
  //
  // On stack, before: ...
  // On stack, after: quotedString(string), ...
  //
  // Push a quoted version of `string` onto the stack
  pushString: function pushString(string) {
    this.pushStackLiteral(this.quotedString(string));
  },

  // [pushLiteral]
  //
  // On stack, before: ...
  // On stack, after: value, ...
  //
  // Pushes a value onto the stack. This operation prevents
  // the compiler from creating a temporary variable to hold
  // it.
  pushLiteral: function pushLiteral(value) {
    this.pushStackLiteral(value);
  },

  // [pushProgram]
  //
  // On stack, before: ...
  // On stack, after: program(guid), ...
  //
  // Push a program expression onto the stack. This takes
  // a compile-time guid and converts it into a runtime-accessible
  // expression.
  pushProgram: function pushProgram(guid) {
    if (guid != null) {
      this.pushStackLiteral(this.programExpression(guid));
    } else {
      this.pushStackLiteral(null);
    }
  },

  // [registerDecorator]
  //
  // On stack, before: hash, program, params..., ...
  // On stack, after: ...
  //
  // Pops off the decorator's parameters, invokes the decorator,
  // and inserts the decorator into the decorators list.
  registerDecorator: function registerDecorator(paramSize, name) {
    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
        options = this.setupHelperArgs(name, paramSize);

    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
  },

  // [invokeHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // Pops off the helper's parameters, invokes the helper,
  // and pushes the helper's return value onto the stack.
  //
  // If the helper is not found, `helperMissing` is called.
  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
    var nonHelper = this.popStack(),
        helper = this.setupHelper(paramSize, name),
        simple = isSimple ? [helper.name, ' || '] : '';

    var lookup = ['('].concat(simple, nonHelper);
    if (!this.options.strict) {
      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
    }
    lookup.push(')');

    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
  },

  // [invokeKnownHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // This operation is used when the helper is known to exist,
  // so a `helperMissing` fallback is not required.
  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
    var helper = this.setupHelper(paramSize, name);
    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
  },

  // [invokeAmbiguous]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of disambiguation
  //
  // This operation is used when an expression like `{{foo}}`
  // is provided, but we don't know at compile-time whether it
  // is a helper or a path.
  //
  // This operation emits more code than the other options,
  // and can be avoided by passing the `knownHelpers` and
  // `knownHelpersOnly` flags at compile-time.
  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
    this.useRegister('helper');

    var nonHelper = this.popStack();

    this.emptyHash();
    var helper = this.setupHelper(0, name, helperCall);

    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
    if (!this.options.strict) {
      lookup[0] = '(helper = ';
      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
    }

    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
  },

  // [invokePartial]
  //
  // On stack, before: context, ...
  // On stack after: result of partial invocation
  //
  // This operation pops off a context, invokes a partial with that context,
  // and pushes the result of the invocation back.
  invokePartial: function invokePartial(isDynamic, name, indent) {
    var params = [],
        options = this.setupParams(name, 1, params);

    if (isDynamic) {
      name = this.popStack();
      delete options.name;
    }

    if (indent) {
      options.indent = JSON.stringify(indent);
    }
    options.helpers = 'helpers';
    options.partials = 'partials';
    options.decorators = 'container.decorators';

    if (!isDynamic) {
      params.unshift(this.nameLookup('partials', name, 'partial'));
    } else {
      params.unshift(name);
    }

    if (this.options.compat) {
      options.depths = 'depths';
    }
    options = this.objectLiteral(options);
    params.push(options);

    this.push(this.source.functionCall('container.invokePartial', '', params));
  },

  // [assignToHash]
  //
  // On stack, before: value, ..., hash, ...
  // On stack, after: ..., hash, ...
  //
  // Pops a value off the stack and assigns it to the current hash
  assignToHash: function assignToHash(key) {
    var value = this.popStack(),
        context = undefined,
        type = undefined,
        id = undefined;

    if (this.trackIds) {
      id = this.popStack();
    }
    if (this.stringParams) {
      type = this.popStack();
      context = this.popStack();
    }

    var hash = this.hash;
    if (context) {
      hash.contexts[key] = context;
    }
    if (type) {
      hash.types[key] = type;
    }
    if (id) {
      hash.ids[key] = id;
    }
    hash.values[key] = value;
  },

  pushId: function pushId(type, name, child) {
    if (type === 'BlockParam') {
      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
    } else if (type === 'PathExpression') {
      this.pushString(name);
    } else if (type === 'SubExpression') {
      this.pushStackLiteral('true');
    } else {
      this.pushStackLiteral('null');
    }
  },

  // HELPERS

  compiler: JavaScriptCompiler,

  compileChildren: function compileChildren(environment, options) {
    var children = environment.children,
        child = undefined,
        compiler = undefined;

    for (var i = 0, l = children.length; i < l; i++) {
      child = children[i];
      compiler = new this.compiler(); // eslint-disable-line new-cap

      var index = this.matchExistingProgram(child);

      if (index == null) {
        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
        index = this.context.programs.length;
        child.index = index;
        child.name = 'program' + index;
        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
        this.context.decorators[index] = compiler.decorators;
        this.context.environments[index] = child;

        this.useDepths = this.useDepths || compiler.useDepths;
        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
      } else {
        child.index = index;
        child.name = 'program' + index;

        this.useDepths = this.useDepths || child.useDepths;
        this.useBlockParams = this.useBlockParams || child.useBlockParams;
      }
    }
  },
  matchExistingProgram: function matchExistingProgram(child) {
    for (var i = 0, len = this.context.environments.length; i < len; i++) {
      var environment = this.context.environments[i];
      if (environment && environment.equals(child)) {
        return i;
      }
    }
  },

  programExpression: function programExpression(guid) {
    var child = this.environment.children[guid],
        programParams = [child.index, 'data', child.blockParams];

    if (this.useBlockParams || this.useDepths) {
      programParams.push('blockParams');
    }
    if (this.useDepths) {
      programParams.push('depths');
    }

    return 'container.program(' + programParams.join(', ') + ')';
  },

  useRegister: function useRegister(name) {
    if (!this.registers[name]) {
      this.registers[name] = true;
      this.registers.list.push(name);
    }
  },

  push: function push(expr) {
    if (!(expr instanceof Literal)) {
      expr = this.source.wrap(expr);
    }

    this.inlineStack.push(expr);
    return expr;
  },

  pushStackLiteral: function pushStackLiteral(item) {
    this.push(new Literal(item));
  },

  pushSource: function pushSource(source) {
    if (this.pendingContent) {
      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
      this.pendingContent = undefined;
    }

    if (source) {
      this.source.push(source);
    }
  },

  replaceStack: function replaceStack(callback) {
    var prefix = ['('],
        stack = undefined,
        createdStack = undefined,
        usedLiteral = undefined;

    /* istanbul ignore next */
    if (!this.isInline()) {
      throw new _exception2['default']('replaceStack on non-inline');
    }

    // We want to merge the inline statement into the replacement statement via ','
    var top = this.popStack(true);

    if (top instanceof Literal) {
      // Literals do not need to be inlined
      stack = [top.value];
      prefix = ['(', stack];
      usedLiteral = true;
    } else {
      // Get or create the current stack name for use by the inline
      createdStack = true;
      var _name = this.incrStack();

      prefix = ['((', this.push(_name), ' = ', top, ')'];
      stack = this.topStack();
    }

    var item = callback.call(this, stack);

    if (!usedLiteral) {
      this.popStack();
    }
    if (createdStack) {
      this.stackSlot--;
    }
    this.push(prefix.concat(item, ')'));
  },

  incrStack: function incrStack() {
    this.stackSlot++;
    if (this.stackSlot > this.stackVars.length) {
      this.stackVars.push('stack' + this.stackSlot);
    }
    return this.topStackName();
  },
  topStackName: function topStackName() {
    return 'stack' + this.stackSlot;
  },
  flushInline: function flushInline() {
    var inlineStack = this.inlineStack;
    this.inlineStack = [];
    for (var i = 0, len = inlineStack.length; i < len; i++) {
      var entry = inlineStack[i];
      /* istanbul ignore if */
      if (entry instanceof Literal) {
        this.compileStack.push(entry);
      } else {
        var stack = this.incrStack();
        this.pushSource([stack, ' = ', entry, ';']);
        this.compileStack.push(stack);
      }
    }
  },
  isInline: function isInline() {
    return this.inlineStack.length;
  },

  popStack: function popStack(wrapped) {
    var inline = this.isInline(),
        item = (inline ? this.inlineStack : this.compileStack).pop();

    if (!wrapped && item instanceof Literal) {
      return item.value;
    } else {
      if (!inline) {
        /* istanbul ignore next */
        if (!this.stackSlot) {
          throw new _exception2['default']('Invalid stack pop');
        }
        this.stackSlot--;
      }
      return item;
    }
  },

  topStack: function topStack() {
    var stack = this.isInline() ? this.inlineStack : this.compileStack,
        item = stack[stack.length - 1];

    /* istanbul ignore if */
    if (item instanceof Literal) {
      return item.value;
    } else {
      return item;
    }
  },

  contextName: function contextName(context) {
    if (this.useDepths && context) {
      return 'depths[' + context + ']';
    } else {
      return 'depth' + context;
    }
  },

  quotedString: function quotedString(str) {
    return this.source.quotedString(str);
  },

  objectLiteral: function objectLiteral(obj) {
    return this.source.objectLiteral(obj);
  },

  aliasable: function aliasable(name) {
    var ret = this.aliases[name];
    if (ret) {
      ret.referenceCount++;
      return ret;
    }

    ret = this.aliases[name] = this.source.wrap(name);
    ret.aliasable = true;
    ret.referenceCount = 1;

    return ret;
  },

  setupHelper: function setupHelper(paramSize, name, blockHelper) {
    var params = [],
        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
    var foundHelper = this.nameLookup('helpers', name, 'helper'),
        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');

    return {
      params: params,
      paramsInit: paramsInit,
      name: foundHelper,
      callParams: [callContext].concat(params)
    };
  },

  setupParams: function setupParams(helper, paramSize, params) {
    var options = {},
        contexts = [],
        types = [],
        ids = [],
        objectArgs = !params,
        param = undefined;

    if (objectArgs) {
      params = [];
    }

    options.name = this.quotedString(helper);
    options.hash = this.popStack();

    if (this.trackIds) {
      options.hashIds = this.popStack();
    }
    if (this.stringParams) {
      options.hashTypes = this.popStack();
      options.hashContexts = this.popStack();
    }

    var inverse = this.popStack(),
        program = this.popStack();

    // Avoid setting fn and inverse if neither are set. This allows
    // helpers to do a check for `if (options.fn)`
    if (program || inverse) {
      options.fn = program || 'container.noop';
      options.inverse = inverse || 'container.noop';
    }

    // The parameters go on to the stack in order (making sure that they are evaluated in order)
    // so we need to pop them off the stack in reverse order
    var i = paramSize;
    while (i--) {
      param = this.popStack();
      params[i] = param;

      if (this.trackIds) {
        ids[i] = this.popStack();
      }
      if (this.stringParams) {
        types[i] = this.popStack();
        contexts[i] = this.popStack();
      }
    }

    if (objectArgs) {
      options.args = this.source.generateArray(params);
    }

    if (this.trackIds) {
      options.ids = this.source.generateArray(ids);
    }
    if (this.stringParams) {
      options.types = this.source.generateArray(types);
      options.contexts = this.source.generateArray(contexts);
    }

    if (this.options.data) {
      options.data = 'data';
    }
    if (this.useBlockParams) {
      options.blockParams = 'blockParams';
    }
    return options;
  },

  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
    var options = this.setupParams(helper, paramSize, params);
    options = this.objectLiteral(options);
    if (useRegister) {
      this.useRegister('options');
      params.push('options');
      return ['options=', options];
    } else if (params) {
      params.push(options);
      return '';
    } else {
      return options;
    }
  }
};

(function () {
  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for (var i = 0, l = reservedWords.length; i < l; i++) {
    compilerWords[reservedWords[i]] = true;
  }
})();

JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};

function strictLookup(requireTerminal, compiler, parts, type) {
  var stack = compiler.popStack(),
      i = 0,
      len = parts.length;
  if (requireTerminal) {
    len--;
  }

  for (; i < len; i++) {
    stack = compiler.nameLookup(stack, parts[i], type);
  }

  if (requireTerminal) {
    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
  } else {
    return stack;
  }
}

exports['default'] = JavaScriptCompiler;
module.exports = exports['default'];


},{"../base":6,"../exception":19,"../utils":32,"./code-gen":9}],13:[function(require,module,exports){
/* istanbul ignore next */
/* Jison generated parser */
"use strict";

var handlebars = (function () {
    var parser = { trace: function trace() {},
        yy: {},
        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
        /**/) {

            var $0 = $$.length - 1;
            switch (yystate) {
                case 1:
                    return $$[$0 - 1];
                    break;
                case 2:
                    this.$ = yy.prepareProgram($$[$0]);
                    break;
                case 3:
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = $$[$0];
                    break;
                case 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = {
                        type: 'CommentStatement',
                        value: yy.stripComment($$[$0]),
                        strip: yy.stripFlags($$[$0], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };

                    break;
                case 10:
                    this.$ = {
                        type: 'ContentStatement',
                        original: $$[$0],
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };

                    break;
                case 11:
                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 12:
                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
                    break;
                case 13:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                    break;
                case 14:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                    break;
                case 15:
                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                    break;
                case 16:
                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                    break;
                case 17:
                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                    break;
                case 18:
                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
                    break;
                case 19:
                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                    program.chained = true;

                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

                    break;
                case 20:
                    this.$ = $$[$0];
                    break;
                case 21:
                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
                    break;
                case 22:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 23:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 24:
                    this.$ = {
                        type: 'PartialStatement',
                        name: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        indent: '',
                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };

                    break;
                case 25:
                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 26:
                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
                    break;
                case 27:
                    this.$ = $$[$0];
                    break;
                case 28:
                    this.$ = $$[$0];
                    break;
                case 29:
                    this.$ = {
                        type: 'SubExpression',
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        loc: yy.locInfo(this._$)
                    };

                    break;
                case 30:
                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
                    break;
                case 31:
                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
                    break;
                case 32:
                    this.$ = yy.id($$[$0 - 1]);
                    break;
                case 33:
                    this.$ = $$[$0];
                    break;
                case 34:
                    this.$ = $$[$0];
                    break;
                case 35:
                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
                    break;
                case 36:
                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
                    break;
                case 37:
                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
                    break;
                case 38:
                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
                    break;
                case 39:
                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
                    break;
                case 40:
                    this.$ = $$[$0];
                    break;
                case 41:
                    this.$ = $$[$0];
                    break;
                case 42:
                    this.$ = yy.preparePath(true, $$[$0], this._$);
                    break;
                case 43:
                    this.$ = yy.preparePath(false, $$[$0], this._$);
                    break;
                case 44:
                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
                    break;
                case 45:
                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
                    break;
                case 46:
                    this.$ = [];
                    break;
                case 47:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 48:
                    this.$ = [$$[$0]];
                    break;
                case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 50:
                    this.$ = [];
                    break;
                case 51:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 58:
                    this.$ = [];
                    break;
                case 59:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 64:
                    this.$ = [];
                    break;
                case 65:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 70:
                    this.$ = [];
                    break;
                case 71:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 78:
                    this.$ = [];
                    break;
                case 79:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 82:
                    this.$ = [];
                    break;
                case 83:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 86:
                    this.$ = [];
                    break;
                case 87:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 90:
                    this.$ = [];
                    break;
                case 91:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 94:
                    this.$ = [];
                    break;
                case 95:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 98:
                    this.$ = [$$[$0]];
                    break;
                case 99:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 100:
                    this.$ = [$$[$0]];
                    break;
                case 101:
                    $$[$0 - 1].push($$[$0]);
                    break;
            }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this,
                stack = [0],
                vstack = [null],
                lstack = [],
                table = this.table,
                yytext = "",
                yylineno = 0,
                yyleng = 0,
                recovering = 0,
                TERROR = 2,
                EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") {
                    token = self.symbols_[token] || token;
                }
                return token;
            }
            var symbol,
                preErrorSymbol,
                state,
                action,
                a,
                r,
                yyval = {},
                p,
                len,
                newState,
                expected;
            while (true) {
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                } else {
                    if (symbol === null || typeof symbol == "undefined") {
                        symbol = lex();
                    }
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                        expected = [];
                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
                            expected.push("'" + this.terminals_[p] + "'");
                        }
                        if (this.lexer.showPosition) {
                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        } else {
                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                        }
                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
                    }
                }
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                }
                switch (action[0]) {
                    case 1:
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0) recovering--;
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
                        if (ranges) {
                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                        }
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                        if (typeof r !== "undefined") {
                            return r;
                        }
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };
    /* Jison generated lexer */
    var lexer = (function () {
        var lexer = { EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(str, hash);
                } else {
                    throw new Error(str);
                }
            },
            setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
                if (this.options.ranges) this.yylloc.range = [0, 0];
                this.offset = 0;
                return this;
            },
            input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else {
                    this.yylloc.last_column++;
                }
                if (this.options.ranges) this.yylloc.range[1]++;

                this._input = this._input.slice(1);
                return ch;
            },
            unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);

                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);

                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;

                this.yylloc = { first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };

                if (this.options.ranges) {
                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                return this;
            },
            more: function more() {
                this._more = true;
                return this;
            },
            less: function less(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) {
                    next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) this.done = true;

                var token, match, tempMatch, index, col, lines;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (!this.options.flex) break;
                    }
                }
                if (match) {
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) this.yylineno += lines.length;
                    this.yylloc = { first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) {
                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
                    }
                    this._more = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) this.done = false;
                    if (token) return token;else return;
                }
                if (this._input === "") {
                    return this.EOF;
                } else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
                }
            },
            lex: function lex() {
                var r = this.next();
                if (typeof r !== 'undefined') {
                    return r;
                } else {
                    return this.lex();
                }
            },
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            popState: function popState() {
                return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
                this.begin(condition);
            } };
        lexer.options = {};
        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
        /**/) {

            function strip(start, end) {
                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
            }

            var YYSTATE = YY_START;
            switch ($avoiding_name_collisions) {
                case 0:
                    if (yy_.yytext.slice(-2) === "\\\\") {
                        strip(0, 1);
                        this.begin("mu");
                    } else if (yy_.yytext.slice(-1) === "\\") {
                        strip(0, 1);
                        this.begin("emu");
                    } else {
                        this.begin("mu");
                    }
                    if (yy_.yytext) return 15;

                    break;
                case 1:
                    return 15;
                    break;
                case 2:
                    this.popState();
                    return 15;

                    break;
                case 3:
                    this.begin('raw');return 15;
                    break;
                case 4:
                    this.popState();
                    // Should be using `this.topState()` below, but it currently
                    // returns the second top instead of the first top. Opened an
                    // issue about it at https://github.com/zaach/jison/issues/291
                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
                        return 15;
                    } else {
                        yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
                        return 'END_RAW_BLOCK';
                    }

                    break;
                case 5:
                    return 15;
                    break;
                case 6:
                    this.popState();
                    return 14;

                    break;
                case 7:
                    return 65;
                    break;
                case 8:
                    return 68;
                    break;
                case 9:
                    return 19;
                    break;
                case 10:
                    this.popState();
                    this.begin('raw');
                    return 23;

                    break;
                case 11:
                    return 55;
                    break;
                case 12:
                    return 60;
                    break;
                case 13:
                    return 29;
                    break;
                case 14:
                    return 47;
                    break;
                case 15:
                    this.popState();return 44;
                    break;
                case 16:
                    this.popState();return 44;
                    break;
                case 17:
                    return 34;
                    break;
                case 18:
                    return 39;
                    break;
                case 19:
                    return 51;
                    break;
                case 20:
                    return 48;
                    break;
                case 21:
                    this.unput(yy_.yytext);
                    this.popState();
                    this.begin('com');

                    break;
                case 22:
                    this.popState();
                    return 14;

                    break;
                case 23:
                    return 48;
                    break;
                case 24:
                    return 73;
                    break;
                case 25:
                    return 72;
                    break;
                case 26:
                    return 72;
                    break;
                case 27:
                    return 87;
                    break;
                case 28:
                    // ignore whitespace
                    break;
                case 29:
                    this.popState();return 54;
                    break;
                case 30:
                    this.popState();return 33;
                    break;
                case 31:
                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
                    break;
                case 32:
                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
                    break;
                case 33:
                    return 85;
                    break;
                case 34:
                    return 82;
                    break;
                case 35:
                    return 82;
                    break;
                case 36:
                    return 83;
                    break;
                case 37:
                    return 84;
                    break;
                case 38:
                    return 81;
                    break;
                case 39:
                    return 75;
                    break;
                case 40:
                    return 77;
                    break;
                case 41:
                    return 72;
                    break;
                case 42:
                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
                    break;
                case 43:
                    return 'INVALID';
                    break;
                case 44:
                    return 5;
                    break;
            }
        };
        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
        return lexer;
    })();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }Parser.prototype = parser;parser.Parser = Parser;
    return new Parser();
})();exports.__esModule = true;
exports['default'] = handlebars;


},{}],14:[function(require,module,exports){
/* eslint-disable new-cap */
'use strict';

exports.__esModule = true;
exports.print = print;
exports.PrintVisitor = PrintVisitor;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _visitor = require('./visitor');

var _visitor2 = _interopRequireDefault(_visitor);

function print(ast) {
  return new PrintVisitor().accept(ast);
}

function PrintVisitor() {
  this.padding = 0;
}

PrintVisitor.prototype = new _visitor2['default']();

PrintVisitor.prototype.pad = function (string) {
  var out = '';

  for (var i = 0, l = this.padding; i < l; i++) {
    out += '  ';
  }

  out += string + '\n';
  return out;
};

PrintVisitor.prototype.Program = function (program) {
  var out = '',
      body = program.body,
      i = undefined,
      l = undefined;

  if (program.blockParams) {
    var blockParams = 'BLOCK PARAMS: [';
    for (i = 0, l = program.blockParams.length; i < l; i++) {
      blockParams += ' ' + program.blockParams[i];
    }
    blockParams += ' ]';
    out += this.pad(blockParams);
  }

  for (i = 0, l = body.length; i < l; i++) {
    out += this.accept(body[i]);
  }

  this.padding--;

  return out;
};

PrintVisitor.prototype.MustacheStatement = function (mustache) {
  return this.pad('{{ ' + this.SubExpression(mustache) + ' }}');
};
PrintVisitor.prototype.Decorator = function (mustache) {
  return this.pad('{{ DIRECTIVE ' + this.SubExpression(mustache) + ' }}');
};

PrintVisitor.prototype.BlockStatement = PrintVisitor.prototype.DecoratorBlock = function (block) {
  var out = '';

  out += this.pad((block.type === 'DecoratorBlock' ? 'DIRECTIVE ' : '') + 'BLOCK:');
  this.padding++;
  out += this.pad(this.SubExpression(block));
  if (block.program) {
    out += this.pad('PROGRAM:');
    this.padding++;
    out += this.accept(block.program);
    this.padding--;
  }
  if (block.inverse) {
    if (block.program) {
      this.padding++;
    }
    out += this.pad('{{^}}');
    this.padding++;
    out += this.accept(block.inverse);
    this.padding--;
    if (block.program) {
      this.padding--;
    }
  }
  this.padding--;

  return out;
};

PrintVisitor.prototype.PartialStatement = function (partial) {
  var content = 'PARTIAL:' + partial.name.original;
  if (partial.params[0]) {
    content += ' ' + this.accept(partial.params[0]);
  }
  if (partial.hash) {
    content += ' ' + this.accept(partial.hash);
  }
  return this.pad('{{> ' + content + ' }}');
};
PrintVisitor.prototype.PartialBlockStatement = function (partial) {
  var content = 'PARTIAL BLOCK:' + partial.name.original;
  if (partial.params[0]) {
    content += ' ' + this.accept(partial.params[0]);
  }
  if (partial.hash) {
    content += ' ' + this.accept(partial.hash);
  }

  content += ' ' + this.pad('PROGRAM:');
  this.padding++;
  content += this.accept(partial.program);
  this.padding--;

  return this.pad('{{> ' + content + ' }}');
};

PrintVisitor.prototype.ContentStatement = function (content) {
  return this.pad("CONTENT[ '" + content.value + "' ]");
};

PrintVisitor.prototype.CommentStatement = function (comment) {
  return this.pad("{{! '" + comment.value + "' }}");
};

PrintVisitor.prototype.SubExpression = function (sexpr) {
  var params = sexpr.params,
      paramStrings = [],
      hash = undefined;

  for (var i = 0, l = params.length; i < l; i++) {
    paramStrings.push(this.accept(params[i]));
  }

  params = '[' + paramStrings.join(', ') + ']';

  hash = sexpr.hash ? ' ' + this.accept(sexpr.hash) : '';

  return this.accept(sexpr.path) + ' ' + params + hash;
};

PrintVisitor.prototype.PathExpression = function (id) {
  var path = id.parts.join('/');
  return (id.data ? '@' : '') + 'PATH:' + path;
};

PrintVisitor.prototype.StringLiteral = function (string) {
  return '"' + string.value + '"';
};

PrintVisitor.prototype.NumberLiteral = function (number) {
  return 'NUMBER{' + number.value + '}';
};

PrintVisitor.prototype.BooleanLiteral = function (bool) {
  return 'BOOLEAN{' + bool.value + '}';
};

PrintVisitor.prototype.UndefinedLiteral = function () {
  return 'UNDEFINED';
};

PrintVisitor.prototype.NullLiteral = function () {
  return 'NULL';
};

PrintVisitor.prototype.Hash = function (hash) {
  var pairs = hash.pairs,
      joinedPairs = [];

  for (var i = 0, l = pairs.length; i < l; i++) {
    joinedPairs.push(this.accept(pairs[i]));
  }

  return 'HASH{' + joinedPairs.join(', ') + '}';
};
PrintVisitor.prototype.HashPair = function (pair) {
  return pair.key + '=' + this.accept(pair.value);
};
/* eslint-enable new-cap */


},{"./visitor":15}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

function Visitor() {
  this.parents = [];
}

Visitor.prototype = {
  constructor: Visitor,
  mutating: false,

  // Visits a given value. If mutating, will replace the value if necessary.
  acceptKey: function acceptKey(node, name) {
    var value = this.accept(node[name]);
    if (this.mutating) {
      // Hacky sanity check: This may have a few false positives for type for the helper
      // methods but will generally do the right thing without a lot of overhead.
      if (value && !Visitor.prototype[value.type]) {
        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
      }
      node[name] = value;
    }
  },

  // Performs an accept operation with added sanity check to ensure
  // required keys are not removed.
  acceptRequired: function acceptRequired(node, name) {
    this.acceptKey(node, name);

    if (!node[name]) {
      throw new _exception2['default'](node.type + ' requires ' + name);
    }
  },

  // Traverses a given array. If mutating, empty respnses will be removed
  // for child elements.
  acceptArray: function acceptArray(array) {
    for (var i = 0, l = array.length; i < l; i++) {
      this.acceptKey(array, i);

      if (!array[i]) {
        array.splice(i, 1);
        i--;
        l--;
      }
    }
  },

  accept: function accept(object) {
    if (!object) {
      return;
    }

    /* istanbul ignore next: Sanity code */
    if (!this[object.type]) {
      throw new _exception2['default']('Unknown type: ' + object.type, object);
    }

    if (this.current) {
      this.parents.unshift(this.current);
    }
    this.current = object;

    var ret = this[object.type](object);

    this.current = this.parents.shift();

    if (!this.mutating || ret) {
      return ret;
    } else if (ret !== false) {
      return object;
    }
  },

  Program: function Program(program) {
    this.acceptArray(program.body);
  },

  MustacheStatement: visitSubExpression,
  Decorator: visitSubExpression,

  BlockStatement: visitBlock,
  DecoratorBlock: visitBlock,

  PartialStatement: visitPartial,
  PartialBlockStatement: function PartialBlockStatement(partial) {
    visitPartial.call(this, partial);

    this.acceptKey(partial, 'program');
  },

  ContentStatement: function ContentStatement() /* content */{},
  CommentStatement: function CommentStatement() /* comment */{},

  SubExpression: visitSubExpression,

  PathExpression: function PathExpression() /* path */{},

  StringLiteral: function StringLiteral() /* string */{},
  NumberLiteral: function NumberLiteral() /* number */{},
  BooleanLiteral: function BooleanLiteral() /* bool */{},
  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
  NullLiteral: function NullLiteral() /* literal */{},

  Hash: function Hash(hash) {
    this.acceptArray(hash.pairs);
  },
  HashPair: function HashPair(pair) {
    this.acceptRequired(pair, 'value');
  }
};

function visitSubExpression(mustache) {
  this.acceptRequired(mustache, 'path');
  this.acceptArray(mustache.params);
  this.acceptKey(mustache, 'hash');
}
function visitBlock(block) {
  visitSubExpression.call(this, block);

  this.acceptKey(block, 'program');
  this.acceptKey(block, 'inverse');
}
function visitPartial(partial) {
  this.acceptRequired(partial, 'name');
  this.acceptArray(partial.params);
  this.acceptKey(partial, 'hash');
}

exports['default'] = Visitor;
module.exports = exports['default'];


},{"../exception":19}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _visitor = require('./visitor');

var _visitor2 = _interopRequireDefault(_visitor);

function WhitespaceControl() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  this.options = options;
}
WhitespaceControl.prototype = new _visitor2['default']();

WhitespaceControl.prototype.Program = function (program) {
  var doStandalone = !this.options.ignoreStandalone;

  var isRoot = !this.isRootSeen;
  this.isRootSeen = true;

  var body = program.body;
  for (var i = 0, l = body.length; i < l; i++) {
    var current = body[i],
        strip = this.accept(current);

    if (!strip) {
      continue;
    }

    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
        openStandalone = strip.openStandalone && _isPrevWhitespace,
        closeStandalone = strip.closeStandalone && _isNextWhitespace,
        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

    if (strip.close) {
      omitRight(body, i, true);
    }
    if (strip.open) {
      omitLeft(body, i, true);
    }

    if (doStandalone && inlineStandalone) {
      omitRight(body, i);

      if (omitLeft(body, i)) {
        // If we are on a standalone node, save the indent info for partials
        if (current.type === 'PartialStatement') {
          // Pull out the whitespace from the final line
          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
        }
      }
    }
    if (doStandalone && openStandalone) {
      omitRight((current.program || current.inverse).body);

      // Strip out the previous content node if it's whitespace only
      omitLeft(body, i);
    }
    if (doStandalone && closeStandalone) {
      // Always strip the next node
      omitRight(body, i);

      omitLeft((current.inverse || current.program).body);
    }
  }

  return program;
};

WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
  this.accept(block.program);
  this.accept(block.inverse);

  // Find the inverse program that is involed with whitespace stripping.
  var program = block.program || block.inverse,
      inverse = block.program && block.inverse,
      firstInverse = inverse,
      lastInverse = inverse;

  if (inverse && inverse.chained) {
    firstInverse = inverse.body[0].program;

    // Walk the inverse chain to find the last inverse that is actually in the chain.
    while (lastInverse.chained) {
      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
    }
  }

  var strip = {
    open: block.openStrip.open,
    close: block.closeStrip.close,

    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
    // so our parent can determine if we actually are standalone
    openStandalone: isNextWhitespace(program.body),
    closeStandalone: isPrevWhitespace((firstInverse || program).body)
  };

  if (block.openStrip.close) {
    omitRight(program.body, null, true);
  }

  if (inverse) {
    var inverseStrip = block.inverseStrip;

    if (inverseStrip.open) {
      omitLeft(program.body, null, true);
    }

    if (inverseStrip.close) {
      omitRight(firstInverse.body, null, true);
    }
    if (block.closeStrip.open) {
      omitLeft(lastInverse.body, null, true);
    }

    // Find standalone else statments
    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
      omitLeft(program.body);
      omitRight(firstInverse.body);
    }
  } else if (block.closeStrip.open) {
    omitLeft(program.body, null, true);
  }

  return strip;
};

WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
  return mustache.strip;
};

WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
  /* istanbul ignore next */
  var strip = node.strip || {};
  return {
    inlineStandalone: true,
    open: strip.open,
    close: strip.close
  };
};

function isPrevWhitespace(body, i, isRoot) {
  if (i === undefined) {
    i = body.length;
  }

  // Nodes that end with newlines are considered whitespace (but are special
  // cased for strip operations)
  var prev = body[i - 1],
      sibling = body[i - 2];
  if (!prev) {
    return isRoot;
  }

  if (prev.type === 'ContentStatement') {
    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
  }
}
function isNextWhitespace(body, i, isRoot) {
  if (i === undefined) {
    i = -1;
  }

  var next = body[i + 1],
      sibling = body[i + 2];
  if (!next) {
    return isRoot;
  }

  if (next.type === 'ContentStatement') {
    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
  }
}

// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(body, i, multiple) {
  var current = body[i == null ? 0 : i + 1];
  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
    return;
  }

  var original = current.value;
  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
  current.rightStripped = current.value !== original;
}

// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(body, i, multiple) {
  var current = body[i == null ? body.length - 1 : i - 1];
  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
    return;
  }

  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
  var original = current.value;
  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
  current.leftStripped = current.value !== original;
  return current.leftStripped;
}

exports['default'] = WhitespaceControl;
module.exports = exports['default'];


},{"./visitor":15}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = require('./decorators/inline');

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}


},{"./decorators/inline":18}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];


},{"../utils":32}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  if (loc) {
    this.lineNumber = line;
    this.column = column;
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];


},{}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = require('./helpers/block-helper-missing');

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = require('./helpers/each');

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = require('./helpers/helper-missing');

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = require('./helpers/if');

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = require('./helpers/log');

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = require('./helpers/lookup');

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = require('./helpers/with');

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}


},{"./helpers/block-helper-missing":21,"./helpers/each":22,"./helpers/helper-missing":23,"./helpers/if":24,"./helpers/log":25,"./helpers/lookup":26,"./helpers/with":27}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];


},{"../utils":32}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('../utils');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];


},{"../exception":19,"../utils":32}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];


},{"../exception":19}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];


},{"../utils":32}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];


},{}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];


},{}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];


},{"../utils":32}],28:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('./utils');

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];


},{"./utils":32}],29:[function(require,module,exports){
(function (global){
/* global window */
'use strict';

exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],30:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = require('./utils');

var Utils = _interopRequireWildcard(_utils);

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _base = require('./base');

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context !== depths[0]) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    options.data = _base.createFrame(options.data);
    partialBlock = options.data['partial-block'] = options.fn;

    if (partialBlock.partials) {
      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
    }
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}


},{"./base":6,"./exception":19,"./utils":32}],31:[function(require,module,exports){
// Build out our basic SafeString type
'use strict';

exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];


},{}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}


},{}],33:[function(require,module,exports){
// USAGE:
// var handlebars = require('handlebars');
/* eslint-disable no-var */

// var local = handlebars.create();

var handlebars = require('../dist/cjs/handlebars')['default'];

var printer = require('../dist/cjs/handlebars/compiler/printer');
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;

module.exports = handlebars;

// Publish a Node.js require() handler for .handlebars and .hbs files
function extension(module, filename) {
  var fs = require('fs');
  var templateString = fs.readFileSync(filename, 'utf8');
  module.exports = handlebars.compile(templateString);
}
/* istanbul ignore else */
if (typeof require !== 'undefined' && require.extensions) {
  require.extensions['.handlebars'] = extension;
  require.extensions['.hbs'] = extension;
}

},{"../dist/cjs/handlebars":4,"../dist/cjs/handlebars/compiler/printer":14,"fs":48}],34:[function(require,module,exports){
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = require('./source-map/source-map-generator').SourceMapGenerator;
exports.SourceMapConsumer = require('./source-map/source-map-consumer').SourceMapConsumer;
exports.SourceNode = require('./source-map/source-node').SourceNode;

},{"./source-map/source-map-consumer":41,"./source-map/source-map-generator":42,"./source-map/source-node":43}],35:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var util = require('./util');

  /**
   * A data structure which is a combination of an array and a set. Adding a new
   * member is O(1), testing for membership is O(1), and finding the index of an
   * element is O(1). Removing elements from the set is not supported. Only
   * strings are supported for membership.
   */
  function ArraySet() {
    this._array = [];
    this._set = {};
  }

  /**
   * Static method for creating ArraySet instances from an existing array.
   */
  ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
      set.add(aArray[i], aAllowDuplicates);
    }
    return set;
  };

  /**
   * Return how many unique items are in this ArraySet. If duplicates have been
   * added, than those do not count towards the size.
   *
   * @returns Number
   */
  ArraySet.prototype.size = function ArraySet_size() {
    return Object.getOwnPropertyNames(this._set).length;
  };

  /**
   * Add the given string to this set.
   *
   * @param String aStr
   */
  ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var isDuplicate = this.has(aStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
      this._array.push(aStr);
    }
    if (!isDuplicate) {
      this._set[util.toSetString(aStr)] = idx;
    }
  };

  /**
   * Is the given string a member of this set?
   *
   * @param String aStr
   */
  ArraySet.prototype.has = function ArraySet_has(aStr) {
    return Object.prototype.hasOwnProperty.call(this._set,
                                                util.toSetString(aStr));
  };

  /**
   * What is the index of the given string in the array?
   *
   * @param String aStr
   */
  ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (this.has(aStr)) {
      return this._set[util.toSetString(aStr)];
    }
    throw new Error('"' + aStr + '" is not in the set.');
  };

  /**
   * What is the element at the given index?
   *
   * @param Number aIdx
   */
  ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
      return this._array[aIdx];
    }
    throw new Error('No element indexed by ' + aIdx);
  };

  /**
   * Returns the array representation of this set (which has the proper indices
   * indicated by indexOf). Note that this is a copy of the internal array used
   * for storing the members so that no one can mess with internal state.
   */
  ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
  };

  exports.ArraySet = ArraySet;

});

},{"./util":44,"amdefine":3}],36:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var base64 = require('./base64');

  // A single base 64 digit can contain 6 bits of data. For the base 64 variable
  // length quantities we use in the source map spec, the first bit is the sign,
  // the next four bits are the actual value, and the 6th bit is the
  // continuation bit. The continuation bit tells us whether there are more
  // digits in this value following this digit.
  //
  //   Continuation
  //   |    Sign
  //   |    |
  //   V    V
  //   101011

  var VLQ_BASE_SHIFT = 5;

  // binary: 100000
  var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

  // binary: 011111
  var VLQ_BASE_MASK = VLQ_BASE - 1;

  // binary: 100000
  var VLQ_CONTINUATION_BIT = VLQ_BASE;

  /**
   * Converts from a two-complement value to a value where the sign bit is
   * placed in the least significant bit.  For example, as decimals:
   *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
   *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
   */
  function toVLQSigned(aValue) {
    return aValue < 0
      ? ((-aValue) << 1) + 1
      : (aValue << 1) + 0;
  }

  /**
   * Converts to a two-complement value from a value where the sign bit is
   * placed in the least significant bit.  For example, as decimals:
   *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
   *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
   */
  function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative
      ? -shifted
      : shifted;
  }

  /**
   * Returns the base 64 VLQ encoded value.
   */
  exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;

    var vlq = toVLQSigned(aValue);

    do {
      digit = vlq & VLQ_BASE_MASK;
      vlq >>>= VLQ_BASE_SHIFT;
      if (vlq > 0) {
        // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
      }
      encoded += base64.encode(digit);
    } while (vlq > 0);

    return encoded;
  };

  /**
   * Decodes the next base 64 VLQ value from the given string and returns the
   * value and the rest of the string via the out parameter.
   */
  exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;

    do {
      if (aIndex >= strLen) {
        throw new Error("Expected more digits in base 64 VLQ value.");
      }

      digit = base64.decode(aStr.charCodeAt(aIndex++));
      if (digit === -1) {
        throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
      }

      continuation = !!(digit & VLQ_CONTINUATION_BIT);
      digit &= VLQ_BASE_MASK;
      result = result + (digit << shift);
      shift += VLQ_BASE_SHIFT;
    } while (continuation);

    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
  };

});

},{"./base64":37,"amdefine":3}],37:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

  /**
   * Encode an integer in the range of 0 to 63 to a single base 64 digit.
   */
  exports.encode = function (number) {
    if (0 <= number && number < intToCharMap.length) {
      return intToCharMap[number];
    }
    throw new TypeError("Must be between 0 and 63: " + aNumber);
  };

  /**
   * Decode a single base 64 character code digit to an integer. Returns -1 on
   * failure.
   */
  exports.decode = function (charCode) {
    var bigA = 65;     // 'A'
    var bigZ = 90;     // 'Z'

    var littleA = 97;  // 'a'
    var littleZ = 122; // 'z'

    var zero = 48;     // '0'
    var nine = 57;     // '9'

    var plus = 43;     // '+'
    var slash = 47;    // '/'

    var littleOffset = 26;
    var numberOffset = 52;

    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) {
      return (charCode - bigA);
    }

    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) {
      return (charCode - littleA + littleOffset);
    }

    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) {
      return (charCode - zero + numberOffset);
    }

    // 62: +
    if (charCode == plus) {
      return 62;
    }

    // 63: /
    if (charCode == slash) {
      return 63;
    }

    // Invalid base64 digit.
    return -1;
  };

});

},{"amdefine":3}],38:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  exports.GREATEST_LOWER_BOUND = 1;
  exports.LEAST_UPPER_BOUND = 2;

  /**
   * Recursive implementation of binary search.
   *
   * @param aLow Indices here and lower do not contain the needle.
   * @param aHigh Indices here and higher do not contain the needle.
   * @param aNeedle The element being searched for.
   * @param aHaystack The non-empty array being searched.
   * @param aCompare Function which takes two elements and returns -1, 0, or 1.
   * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
   *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   */
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      // Found the element we are looking for.
      return mid;
    }
    else if (cmp > 0) {
      // Our needle is greater than aHaystack[mid].
      if (aHigh - mid > 1) {
        // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      }

      // The exact needle element was not found in this haystack. Determine if
      // we are in termination case (3) or (2) and return the appropriate thing.
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    }
    else {
      // Our needle is less than aHaystack[mid].
      if (mid - aLow > 1) {
        // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      }

      // we are in termination case (3) or (2) and return the appropriate thing.
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }

  /**
   * This is an implementation of binary search which will always try and return
   * the index of the closest element if there is no exact hit. This is because
   * mappings between original and generated line/col pairs are single points,
   * and there is an implicit region between each of them, so a miss just means
   * that you aren't on the very start of a region.
   *
   * @param aNeedle The element you are looking for.
   * @param aHaystack The array that is being searched.
   * @param aCompare A function which takes the needle and an element in the
   *     array and returns -1, 0, or 1 depending on whether the needle is less
   *     than, equal to, or greater than the element, respectively.
   * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
   *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
   */
  exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }

    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                                aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) {
      return -1;
    }

    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while (index - 1 >= 0) {
      if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
        break;
      }
      --index;
    }

    return index;
  };

});

},{"amdefine":3}],39:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var util = require('./util');

  /**
   * Determine whether mappingB is after mappingA with respect to generated
   * position.
   */
  function generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA ||
           util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
  }

  /**
   * A data structure to provide a sorted view of accumulated mappings in a
   * performance conscious manner. It trades a neglibable overhead in general
   * case for a large speedup in case of mappings being added in order.
   */
  function MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {generatedLine: -1, generatedColumn: 0};
  }

  /**
   * Iterate through internal items. This method takes the same arguments that
   * `Array.prototype.forEach` takes.
   *
   * NOTE: The order of the mappings is NOT guaranteed.
   */
  MappingList.prototype.unsortedForEach =
    function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };

  /**
   * Add the given source mapping.
   *
   * @param Object aMapping
   */
  MappingList.prototype.add = function MappingList_add(aMapping) {
    var mapping;
    if (generatedPositionAfter(this._last, aMapping)) {
      this._last = aMapping;
      this._array.push(aMapping);
    } else {
      this._sorted = false;
      this._array.push(aMapping);
    }
  };

  /**
   * Returns the flat, sorted array of mappings. The mappings are sorted by
   * generated position.
   *
   * WARNING: This method returns internal data without copying, for
   * performance. The return value must NOT be mutated, and should be treated as
   * an immutable borrow. If you want to take ownership, you must make your own
   * copy.
   */
  MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
      this._array.sort(util.compareByGeneratedPositionsInflated);
      this._sorted = true;
    }
    return this._array;
  };

  exports.MappingList = MappingList;

});

},{"./util":44,"amdefine":3}],40:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  // It turns out that some (most?) JavaScript engines don't self-host
  // `Array.prototype.sort`. This makes sense because C++ will likely remain
  // faster than JS when doing raw CPU-intensive sorting. However, when using a
  // custom comparator function, calling back and forth between the VM's C++ and
  // JIT'd JS is rather slow *and* loses JIT type information, resulting in
  // worse generated code for the comparator function than would be optimal. In
  // fact, when sorting with a comparator, these costs outweigh the benefits of
  // sorting in C++. By using our own JS-implemented Quick Sort (below), we get
  // a ~3500ms mean speed-up in `bench/bench.html`.

  /**
   * Swap the elements indexed by `x` and `y` in the array `ary`.
   *
   * @param {Array} ary
   *        The array.
   * @param {Number} x
   *        The index of the first item.
   * @param {Number} y
   *        The index of the second item.
   */
  function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
  }

  /**
   * Returns a random integer within the range `low .. high` inclusive.
   *
   * @param {Number} low
   *        The lower bound on the range.
   * @param {Number} high
   *        The upper bound on the range.
   */
  function randomIntInRange(low, high) {
    return Math.round(low + (Math.random() * (high - low)));
  }

  /**
   * The Quick Sort algorithm.
   *
   * @param {Array} ary
   *        An array to sort.
   * @param {function} comparator
   *        Function to use to compare two items.
   * @param {Number} p
   *        Start index of the array
   * @param {Number} r
   *        End index of the array
   */
  function doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.

    if (p < r) {
      // (1) Partitioning.
      //
      // The partitioning chooses a pivot between `p` and `r` and moves all
      // elements that are less than or equal to the pivot to the before it, and
      // all the elements that are greater than it after it. The effect is that
      // once partition is done, the pivot is in the exact place it will be when
      // the array is put in sorted order, and it will not need to be moved
      // again. This runs in O(n) time.

      // Always choose a random pivot so that an input array which is reverse
      // sorted does not cause O(n^2) running time.
      var pivotIndex = randomIntInRange(p, r);
      var i = p - 1;

      swap(ary, pivotIndex, r);
      var pivot = ary[r];

      // Immediately after `j` is incremented in this loop, the following hold
      // true:
      //
      //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
      //
      //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
      for (var j = p; j < r; j++) {
        if (comparator(ary[j], pivot) <= 0) {
          i += 1;
          swap(ary, i, j);
        }
      }

      swap(ary, i + 1, j);
      var q = i + 1;

      // (2) Recurse on each half.

      doQuickSort(ary, comparator, p, q - 1);
      doQuickSort(ary, comparator, q + 1, r);
    }
  }

  /**
   * Sort the given array in-place with the given comparator function.
   *
   * @param {Array} ary
   *        An array to sort.
   * @param {function} comparator
   *        Function to use to compare two items.
   */
  exports.quickSort = function (ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
  };

});

},{"amdefine":3}],41:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var util = require('./util');
  var binarySearch = require('./binary-search');
  var ArraySet = require('./array-set').ArraySet;
  var base64VLQ = require('./base64-vlq');
  var quickSort = require('./quick-sort').quickSort;

  function SourceMapConsumer(aSourceMap) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
      sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
    }

    return sourceMap.sections != null
      ? new IndexedSourceMapConsumer(sourceMap)
      : new BasicSourceMapConsumer(sourceMap);
  }

  SourceMapConsumer.fromSourceMap = function(aSourceMap) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
  }

  /**
   * The version of the source mapping spec that we are consuming.
   */
  SourceMapConsumer.prototype._version = 3;

  // `__generatedMappings` and `__originalMappings` are arrays that hold the
  // parsed mapping coordinates from the source map's "mappings" attribute. They
  // are lazily instantiated, accessed via the `_generatedMappings` and
  // `_originalMappings` getters respectively, and we only parse the mappings
  // and create these arrays once queried for a source location. We jump through
  // these hoops because there can be many thousands of mappings, and parsing
  // them is expensive, so we only want to do it if we must.
  //
  // Each object in the arrays is of the form:
  //
  //     {
  //       generatedLine: The line number in the generated code,
  //       generatedColumn: The column number in the generated code,
  //       source: The path to the original source file that generated this
  //               chunk of code,
  //       originalLine: The line number in the original source that
  //                     corresponds to this chunk of generated code,
  //       originalColumn: The column number in the original source that
  //                       corresponds to this chunk of generated code,
  //       name: The name of the original symbol which generated this chunk of
  //             code.
  //     }
  //
  // All properties except for `generatedLine` and `generatedColumn` can be
  // `null`.
  //
  // `_generatedMappings` is ordered by the generated positions.
  //
  // `_originalMappings` is ordered by the original positions.

  SourceMapConsumer.prototype.__generatedMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
    get: function () {
      if (!this.__generatedMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }

      return this.__generatedMappings;
    }
  });

  SourceMapConsumer.prototype.__originalMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
    get: function () {
      if (!this.__originalMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }

      return this.__originalMappings;
    }
  });

  SourceMapConsumer.prototype._charIsMappingSeparator =
    function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
      var c = aStr.charAt(index);
      return c === ";" || c === ",";
    };

  /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
  SourceMapConsumer.prototype._parseMappings =
    function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };

  SourceMapConsumer.GENERATED_ORDER = 1;
  SourceMapConsumer.ORIGINAL_ORDER = 2;

  SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
  SourceMapConsumer.LEAST_UPPER_BOUND = 2;

  /**
   * Iterate over each mapping between an original source/line/column and a
   * generated line/column in this source map.
   *
   * @param Function aCallback
   *        The function that is called with each mapping.
   * @param Object aContext
   *        Optional. If specified, this object will be the value of `this` every
   *        time that `aCallback` is called.
   * @param aOrder
   *        Either `SourceMapConsumer.GENERATED_ORDER` or
   *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
   *        iterate over the mappings sorted by the generated file's line/column
   *        order or the original's source/line/column order, respectively. Defaults to
   *        `SourceMapConsumer.GENERATED_ORDER`.
   */
  SourceMapConsumer.prototype.eachMapping =
    function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

      var mappings;
      switch (order) {
      case SourceMapConsumer.GENERATED_ORDER:
        mappings = this._generatedMappings;
        break;
      case SourceMapConsumer.ORIGINAL_ORDER:
        mappings = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
      }

      var sourceRoot = this.sourceRoot;
      mappings.map(function (mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        if (source != null && sourceRoot != null) {
          source = util.join(sourceRoot, source);
        }
        return {
          source: source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : this._names.at(mapping.name)
        };
      }, this).forEach(aCallback, context);
    };

  /**
   * Returns all generated line and column information for the original source,
   * line, and column provided. If no column is provided, returns all mappings
   * corresponding to a either the line we are searching for or the next
   * closest line that has any mappings. Otherwise, returns all mappings
   * corresponding to the given line and either the column we are searching for
   * or the next closest column that has any offsets.
   *
   * The only argument is an object with the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: Optional. the column number in the original source.
   *
   * and an array of objects is returned, each with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
  SourceMapConsumer.prototype.allGeneratedPositionsFor =
    function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util.getArg(aArgs, 'line');

      // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
      // returns the index of the closest mapping less than the needle. By
      // setting needle.originalColumn to 0, we thus find the last mapping for
      // the given line, provided such a mapping exists.
      var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: line,
        originalColumn: util.getArg(aArgs, 'column', 0)
      };

      if (this.sourceRoot != null) {
        needle.source = util.relative(this.sourceRoot, needle.source);
      }
      if (!this._sources.has(needle.source)) {
        return [];
      }
      needle.source = this._sources.indexOf(needle.source);

      var mappings = [];

      var index = this._findMapping(needle,
                                    this._originalMappings,
                                    "originalLine",
                                    "originalColumn",
                                    util.compareByOriginalPositions,
                                    binarySearch.LEAST_UPPER_BOUND);
      if (index >= 0) {
        var mapping = this._originalMappings[index];

        if (aArgs.column === undefined) {
          var originalLine = mapping.originalLine;

          // Iterate until either we run out of mappings, or we run into
          // a mapping for a different line than the one we found. Since
          // mappings are sorted, this is guaranteed to find all mappings for
          // the line we found.
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util.getArg(mapping, 'generatedLine', null),
              column: util.getArg(mapping, 'generatedColumn', null),
              lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
            });

            mapping = this._originalMappings[++index];
          }
        } else {
          var originalColumn = mapping.originalColumn;

          // Iterate until either we run out of mappings, or we run into
          // a mapping for a different line than the one we were searching for.
          // Since mappings are sorted, this is guaranteed to find all mappings for
          // the line we are searching for.
          while (mapping &&
                 mapping.originalLine === line &&
                 mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util.getArg(mapping, 'generatedLine', null),
              column: util.getArg(mapping, 'generatedColumn', null),
              lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
            });

            mapping = this._originalMappings[++index];
          }
        }
      }

      return mappings;
    };

  exports.SourceMapConsumer = SourceMapConsumer;

  /**
   * A BasicSourceMapConsumer instance represents a parsed source map which we can
   * query for information about the original file positions by giving it a file
   * position in the generated source.
   *
   * The only parameter is the raw source map (either as a JSON string, or
   * already parsed to an object). According to the spec, source maps have the
   * following attributes:
   *
   *   - version: Which version of the source map spec this map is following.
   *   - sources: An array of URLs to the original source files.
   *   - names: An array of identifiers which can be referrenced by individual mappings.
   *   - sourceRoot: Optional. The URL root from which all sources are relative.
   *   - sourcesContent: Optional. An array of contents of the original source files.
   *   - mappings: A string of base64 VLQs which contain the actual mappings.
   *   - file: Optional. The generated file this source map is associated with.
   *
   * Here is an example source map, taken from the source map spec[0]:
   *
   *     {
   *       version : 3,
   *       file: "out.js",
   *       sourceRoot : "",
   *       sources: ["foo.js", "bar.js"],
   *       names: ["src", "maps", "are", "fun"],
   *       mappings: "AA,AB;;ABCDE;"
   *     }
   *
   * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
   */
  function BasicSourceMapConsumer(aSourceMap) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
      sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
    }

    var version = util.getArg(sourceMap, 'version');
    var sources = util.getArg(sourceMap, 'sources');
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, 'names', []);
    var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
    var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
    var mappings = util.getArg(sourceMap, 'mappings');
    var file = util.getArg(sourceMap, 'file', null);

    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) {
      throw new Error('Unsupported version: ' + version);
    }

    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    sources = sources.map(util.normalize);

    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names, true);
    this._sources = ArraySet.fromArray(sources, true);

    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this.file = file;
  }

  BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

  /**
   * Create a BasicSourceMapConsumer from a SourceMapGenerator.
   *
   * @param SourceMapGenerator aSourceMap
   *        The source map that will be consumed.
   * @returns BasicSourceMapConsumer
   */
  BasicSourceMapConsumer.fromSourceMap =
    function SourceMapConsumer_fromSourceMap(aSourceMap) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);

      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                              smc.sourceRoot);
      smc.file = aSourceMap._file;

      // Because we are modifying the entries (by converting string sources and
      // names to indices into the sources and names ArraySets), we have to make
      // a copy of the entry or else bad things happen. Shared mutable state
      // strikes again! See github issue #191.

      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];

      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;

        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;

          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }

          destOriginalMappings.push(destMapping);
        }

        destGeneratedMappings.push(destMapping);
      }

      quickSort(smc.__originalMappings, util.compareByOriginalPositions);

      return smc;
    };

  /**
   * The version of the source mapping spec that we are consuming.
   */
  BasicSourceMapConsumer.prototype._version = 3;

  /**
   * The list of original sources.
   */
  Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
    get: function () {
      return this._sources.toArray().map(function (s) {
        return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
      }, this);
    }
  });

  /**
   * Provide the JIT with a nice shape / hidden class.
   */
  function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
  }

  /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
  BasicSourceMapConsumer.prototype._parseMappings =
    function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;

      while (index < length) {
        if (aStr.charAt(index) === ';') {
          generatedLine++;
          index++;
          previousGeneratedColumn = 0;
        }
        else if (aStr.charAt(index) === ',') {
          index++;
        }
        else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;

          // Because each offset is encoded relative to the previous one,
          // many segments often have the same encoding. We can exploit this
          // fact by caching the parsed variable length fields of each segment,
          // allowing us to avoid a second parse if we encounter the same
          // segment again.
          for (end = index; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index, end);

          segment = cachedSegments[str];
          if (segment) {
            index += str.length;
          } else {
            segment = [];
            while (index < end) {
              base64VLQ.decode(aStr, index, temp);
              value = temp.value;
              index = temp.rest;
              segment.push(value);
            }

            if (segment.length === 2) {
              throw new Error('Found a source, but no line and column');
            }

            if (segment.length === 3) {
              throw new Error('Found a source and line, but no column');
            }

            cachedSegments[str] = segment;
          }

          // Generated column.
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;

          if (segment.length > 1) {
            // Original source.
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];

            // Original line.
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            // Lines are stored 0-based
            mapping.originalLine += 1;

            // Original column.
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;

            if (segment.length > 4) {
              // Original name.
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }

          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === 'number') {
            originalMappings.push(mapping);
          }
        }
      }

      quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
      this.__generatedMappings = generatedMappings;

      quickSort(originalMappings, util.compareByOriginalPositions);
      this.__originalMappings = originalMappings;
    };

  /**
   * Find the mapping that best matches the hypothetical "needle" mapping that
   * we are searching for in the given "haystack" of mappings.
   */
  BasicSourceMapConsumer.prototype._findMapping =
    function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                           aColumnName, aComparator, aBias) {
      // To return the position we are searching for, we must first find the
      // mapping for the given position and then return the opposite position it
      // points to. Because the mappings are sorted, we can use binary search to
      // find the best mapping.

      if (aNeedle[aLineName] <= 0) {
        throw new TypeError('Line must be greater than or equal to 1, got '
                            + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError('Column must be greater than or equal to 0, got '
                            + aNeedle[aColumnName]);
      }

      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };

  /**
   * Compute the last column for each generated mapping. The last column is
   * inclusive.
   */
  BasicSourceMapConsumer.prototype.computeColumnSpans =
    function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];

        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];

          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }

        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
      }
    };

  /**
   * Returns the original source, line, and column information for the generated
   * source's line and column positions provided. The only argument is an object
   * with the following properties:
   *
   *   - line: The line number in the generated source.
   *   - column: The column number in the generated source.
   *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
   *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
   *
   * and an object is returned with the following properties:
   *
   *   - source: The original source file, or null.
   *   - line: The line number in the original source, or null.
   *   - column: The column number in the original source, or null.
   *   - name: The original identifier, or null.
   */
  BasicSourceMapConsumer.prototype.originalPositionFor =
    function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
      };

      var index = this._findMapping(
        needle,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        util.compareByGeneratedPositionsDeflated,
        util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
      );

      if (index >= 0) {
        var mapping = this._generatedMappings[index];

        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, 'source', null);
          if (source !== null) {
            source = this._sources.at(source);
            if (this.sourceRoot != null) {
              source = util.join(this.sourceRoot, source);
            }
          }
          var name = util.getArg(mapping, 'name', null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source: source,
            line: util.getArg(mapping, 'originalLine', null),
            column: util.getArg(mapping, 'originalColumn', null),
            name: name
          };
        }
      }

      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };

  /**
   * Return true if we have the source content for every source in the source
   * map, false otherwise.
   */
  BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
    function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() &&
        !this.sourcesContent.some(function (sc) { return sc == null; });
    };

  /**
   * Returns the original source content. The only argument is the url of the
   * original source file. Returns null if no original source content is
   * availible.
   */
  BasicSourceMapConsumer.prototype.sourceContentFor =
    function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }

      if (this.sourceRoot != null) {
        aSource = util.relative(this.sourceRoot, aSource);
      }

      if (this._sources.has(aSource)) {
        return this.sourcesContent[this._sources.indexOf(aSource)];
      }

      var url;
      if (this.sourceRoot != null
          && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
        if (url.scheme == "file"
            && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
        }

        if ((!url.path || url.path == "/")
            && this._sources.has("/" + aSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + aSource)];
        }
      }

      // This function is used recursively from
      // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
      // don't want to throw if we can't find the source - we just want to
      // return null, so we provide a flag to exit gracefully.
      if (nullOnMissing) {
        return null;
      }
      else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };

  /**
   * Returns the generated line and column information for the original source,
   * line, and column positions provided. The only argument is an object with
   * the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: The column number in the original source.
   *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
   *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
   *     closest element that is smaller than or greater than the one we are
   *     searching for, respectively, if the exact element cannot be found.
   *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
   *
   * and an object is returned with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
  BasicSourceMapConsumer.prototype.generatedPositionFor =
    function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util.getArg(aArgs, 'source');
      if (this.sourceRoot != null) {
        source = util.relative(this.sourceRoot, source);
      }
      if (!this._sources.has(source)) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      source = this._sources.indexOf(source);

      var needle = {
        source: source,
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
      };

      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
      );

      if (index >= 0) {
        var mapping = this._originalMappings[index];

        if (mapping.source === needle.source) {
          return {
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          };
        }
      }

      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };

  exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

  /**
   * An IndexedSourceMapConsumer instance represents a parsed source map which
   * we can query for information. It differs from BasicSourceMapConsumer in
   * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
   * input.
   *
   * The only parameter is a raw source map (either as a JSON string, or already
   * parsed to an object). According to the spec for indexed source maps, they
   * have the following attributes:
   *
   *   - version: Which version of the source map spec this map is following.
   *   - file: Optional. The generated file this source map is associated with.
   *   - sections: A list of section definitions.
   *
   * Each value under the "sections" field has two fields:
   *   - offset: The offset into the original specified at which this section
   *       begins to apply, defined as an object with a "line" and "column"
   *       field.
   *   - map: A source map definition. This source map could also be indexed,
   *       but doesn't have to be.
   *
   * Instead of the "map" field, it's also possible to have a "url" field
   * specifying a URL to retrieve a source map from, but that's currently
   * unsupported.
   *
   * Here's an example source map, taken from the source map spec[0], but
   * modified to omit a section which uses the "url" field.
   *
   *  {
   *    version : 3,
   *    file: "app.js",
   *    sections: [{
   *      offset: {line:100, column:10},
   *      map: {
   *        version : 3,
   *        file: "section.js",
   *        sources: ["foo.js", "bar.js"],
   *        names: ["src", "maps", "are", "fun"],
   *        mappings: "AAAA,E;;ABCDE;"
   *      }
   *    }],
   *  }
   *
   * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
   */
  function IndexedSourceMapConsumer(aSourceMap) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
      sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
    }

    var version = util.getArg(sourceMap, 'version');
    var sections = util.getArg(sourceMap, 'sections');

    if (version != this._version) {
      throw new Error('Unsupported version: ' + version);
    }

    this._sources = new ArraySet();
    this._names = new ArraySet();

    var lastOffset = {
      line: -1,
      column: 0
    };
    this._sections = sections.map(function (s) {
      if (s.url) {
        // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error('Support for url field in sections not implemented.');
      }
      var offset = util.getArg(s, 'offset');
      var offsetLine = util.getArg(offset, 'line');
      var offsetColumn = util.getArg(offset, 'column');

      if (offsetLine < lastOffset.line ||
          (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
        throw new Error('Section offsets must be ordered and non-overlapping.');
      }
      lastOffset = offset;

      return {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: offsetLine + 1,
          generatedColumn: offsetColumn + 1
        },
        consumer: new SourceMapConsumer(util.getArg(s, 'map'))
      }
    });
  }

  IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

  /**
   * The version of the source mapping spec that we are consuming.
   */
  IndexedSourceMapConsumer.prototype._version = 3;

  /**
   * The list of original sources.
   */
  Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
    get: function () {
      var sources = [];
      for (var i = 0; i < this._sections.length; i++) {
        for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
          sources.push(this._sections[i].consumer.sources[j]);
        }
      };
      return sources;
    }
  });

  /**
   * Returns the original source, line, and column information for the generated
   * source's line and column positions provided. The only argument is an object
   * with the following properties:
   *
   *   - line: The line number in the generated source.
   *   - column: The column number in the generated source.
   *
   * and an object is returned with the following properties:
   *
   *   - source: The original source file, or null.
   *   - line: The line number in the original source, or null.
   *   - column: The column number in the original source, or null.
   *   - name: The original identifier, or null.
   */
  IndexedSourceMapConsumer.prototype.originalPositionFor =
    function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
      };

      // Find the section containing the generated position we're trying to map
      // to an original position.
      var sectionIndex = binarySearch.search(needle, this._sections,
        function(needle, section) {
          var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
          if (cmp) {
            return cmp;
          }

          return (needle.generatedColumn -
                  section.generatedOffset.generatedColumn);
        });
      var section = this._sections[sectionIndex];

      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }

      return section.consumer.originalPositionFor({
        line: needle.generatedLine -
          (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn -
          (section.generatedOffset.generatedLine === needle.generatedLine
           ? section.generatedOffset.generatedColumn - 1
           : 0),
        bias: aArgs.bias
      });
    };

  /**
   * Return true if we have the source content for every source in the source
   * map, false otherwise.
   */
  IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
    function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function (s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };

  /**
   * Returns the original source content. The only argument is the url of the
   * original source file. Returns null if no original source content is
   * available.
   */
  IndexedSourceMapConsumer.prototype.sourceContentFor =
    function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];

        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      }
      else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };

  /**
   * Returns the generated line and column information for the original source,
   * line, and column positions provided. The only argument is an object with
   * the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: The column number in the original source.
   *
   * and an object is returned with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
  IndexedSourceMapConsumer.prototype.generatedPositionFor =
    function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];

        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line +
              (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column +
              (section.generatedOffset.generatedLine === generatedPosition.line
               ? section.generatedOffset.generatedColumn - 1
               : 0)
          };
          return ret;
        }
      }

      return {
        line: null,
        column: null
      };
    };

  /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
  IndexedSourceMapConsumer.prototype._parseMappings =
    function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[i];

          var source = section.consumer._sources.at(mapping.source);
          if (section.consumer.sourceRoot !== null) {
            source = util.join(section.consumer.sourceRoot, source);
          }
          this._sources.add(source);
          source = this._sources.indexOf(source);

          var name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);

          // The mappings coming from the consumer for the section have
          // generated positions relative to the start of the section, so we
          // need to offset them to be relative to the start of the concatenated
          // generated file.
          var adjustedMapping = {
            source: source,
            generatedLine: mapping.generatedLine +
              (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.column +
              (section.generatedOffset.generatedLine === mapping.generatedLine)
              ? section.generatedOffset.generatedColumn - 1
              : 0,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: name
          };

          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === 'number') {
            this.__originalMappings.push(adjustedMapping);
          }
        };
      };

      quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util.compareByOriginalPositions);
    };

  exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

});

},{"./array-set":35,"./base64-vlq":36,"./binary-search":38,"./quick-sort":40,"./util":44,"amdefine":3}],42:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var base64VLQ = require('./base64-vlq');
  var util = require('./util');
  var ArraySet = require('./array-set').ArraySet;
  var MappingList = require('./mapping-list').MappingList;

  /**
   * An instance of the SourceMapGenerator represents a source map which is
   * being built incrementally. You may pass an object with the following
   * properties:
   *
   *   - file: The filename of the generated source.
   *   - sourceRoot: A root for all relative URLs in this source map.
   */
  function SourceMapGenerator(aArgs) {
    if (!aArgs) {
      aArgs = {};
    }
    this._file = util.getArg(aArgs, 'file', null);
    this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
    this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
  }

  SourceMapGenerator.prototype._version = 3;

  /**
   * Creates a new SourceMapGenerator based on a SourceMapConsumer
   *
   * @param aSourceMapConsumer The SourceMap.
   */
  SourceMapGenerator.fromSourceMap =
    function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
      });
      aSourceMapConsumer.eachMapping(function (mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };

        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }

          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };

          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }

        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };

  /**
   * Add a single mapping from original source line and column to the generated
   * source's line and column for this source map being created. The mapping
   * object should have the following properties:
   *
   *   - generated: An object with the generated line and column positions.
   *   - original: An object with the original line and column positions.
   *   - source: The original source file (relative to the sourceRoot).
   *   - name: An optional original token name for this mapping.
   */
  SourceMapGenerator.prototype.addMapping =
    function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, 'generated');
      var original = util.getArg(aArgs, 'original', null);
      var source = util.getArg(aArgs, 'source', null);
      var name = util.getArg(aArgs, 'name', null);

      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }

      if (source != null && !this._sources.has(source)) {
        this._sources.add(source);
      }

      if (name != null && !this._names.has(name)) {
        this._names.add(name);
      }

      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
      });
    };

  /**
   * Set the source content for a source file.
   */
  SourceMapGenerator.prototype.setSourceContent =
    function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }

      if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) {
          this._sourcesContents = {};
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };

  /**
   * Applies the mappings of a sub-source-map for a specific source file to the
   * source map being generated. Each mapping to the supplied source file is
   * rewritten using the supplied source map. Note: The resolution for the
   * resulting mappings is the minimium of this map and the supplied map.
   *
   * @param aSourceMapConsumer The source map to be applied.
   * @param aSourceFile Optional. The filename of the source file.
   *        If omitted, SourceMapConsumer's file property will be used.
   * @param aSourceMapPath Optional. The dirname of the path to the source map
   *        to be applied. If relative, it is relative to the SourceMapConsumer.
   *        This parameter is needed when the two source maps aren't in the same
   *        directory, and the source map to be applied contains relative source
   *        paths. If so, those relative source paths need to be rewritten
   *        relative to the SourceMapGenerator.
   */
  SourceMapGenerator.prototype.applySourceMap =
    function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      // If aSourceFile is omitted, we will use the file property of the SourceMap
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(
            'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
            'or the source map\'s "file" property. Both were omitted.'
          );
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      // Make "sourceFile" relative if an absolute Url is passed.
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      // Applying the SourceMap can add and remove items from the sources and
      // the names array.
      var newSources = new ArraySet();
      var newNames = new ArraySet();

      // Find mappings for the "sourceFile"
      this._mappings.unsortedForEach(function (mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          // Check if it can be mapped by the source map, then update the mapping.
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            // Copy mapping
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source)
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }

        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }

        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }

      }, this);
      this._sources = newSources;
      this._names = newNames;

      // Copy sourcesContents of applied map.
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile = util.join(aSourceMapPath, sourceFile);
          }
          if (sourceRoot != null) {
            sourceFile = util.relative(sourceRoot, sourceFile);
          }
          this.setSourceContent(sourceFile, content);
        }
      }, this);
    };

  /**
   * A mapping can have one of the three levels of data:
   *
   *   1. Just the generated position.
   *   2. The Generated position, original position, and original source.
   *   3. Generated and original position, original source, as well as a name
   *      token.
   *
   * To maintain consistency, we validate that any new mapping being added falls
   * in to one of these categories.
   */
  SourceMapGenerator.prototype._validateMapping =
    function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                                aName) {
      if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
          && aGenerated.line > 0 && aGenerated.column >= 0
          && !aOriginal && !aSource && !aName) {
        // Case 1.
        return;
      }
      else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
               && aOriginal && 'line' in aOriginal && 'column' in aOriginal
               && aGenerated.line > 0 && aGenerated.column >= 0
               && aOriginal.line > 0 && aOriginal.column >= 0
               && aSource) {
        // Cases 2 and 3.
        return;
      }
      else {
        throw new Error('Invalid mapping: ' + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };

  /**
   * Serialize the accumulated mappings in to the stream of base 64 VLQs
   * specified by the source map format.
   */
  SourceMapGenerator.prototype._serializeMappings =
    function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = '';
      var mapping;

      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];

        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            result += ';';
            previousGeneratedLine++;
          }
        }
        else {
          if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            result += ',';
          }
        }

        result += base64VLQ.encode(mapping.generatedColumn
                                   - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;

        if (mapping.source != null) {
          result += base64VLQ.encode(this._sources.indexOf(mapping.source)
                                     - previousSource);
          previousSource = this._sources.indexOf(mapping.source);

          // lines are stored 0-based in SourceMap spec version 3
          result += base64VLQ.encode(mapping.originalLine - 1
                                     - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;

          result += base64VLQ.encode(mapping.originalColumn
                                     - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;

          if (mapping.name != null) {
            result += base64VLQ.encode(this._names.indexOf(mapping.name)
                                       - previousName);
            previousName = this._names.indexOf(mapping.name);
          }
        }
      }

      return result;
    };

  SourceMapGenerator.prototype._generateSourcesContent =
    function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function (source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents,
                                                    key)
          ? this._sourcesContents[key]
          : null;
      }, this);
    };

  /**
   * Externalize the source map.
   */
  SourceMapGenerator.prototype.toJSON =
    function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }

      return map;
    };

  /**
   * Render the source map being generated to a string.
   */
  SourceMapGenerator.prototype.toString =
    function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };

  exports.SourceMapGenerator = SourceMapGenerator;

});

},{"./array-set":35,"./base64-vlq":36,"./mapping-list":39,"./util":44,"amdefine":3}],43:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var SourceMapGenerator = require('./source-map-generator').SourceMapGenerator;
  var util = require('./util');

  // Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
  // operating systems these days (capturing the result).
  var REGEX_NEWLINE = /(\r?\n)/;

  // Newline character code for charCodeAt() comparisons
  var NEWLINE_CODE = 10;

  // Private symbol for identifying `SourceNode`s when multiple versions of
  // the source-map library are loaded. This MUST NOT CHANGE across
  // versions!
  var isSourceNode = "$$$isSourceNode$$$";

  /**
   * SourceNodes provide a way to abstract over interpolating/concatenating
   * snippets of generated JavaScript source code while maintaining the line and
   * column information associated with the original source code.
   *
   * @param aLine The original line number.
   * @param aColumn The original column number.
   * @param aSource The original source's filename.
   * @param aChunks Optional. An array of strings which are snippets of
   *        generated JS, or other SourceNodes.
   * @param aName The original identifier.
   */
  function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
  }

  /**
   * Creates a SourceNode from generated code and a SourceMapConsumer.
   *
   * @param aGeneratedCode The generated code
   * @param aSourceMapConsumer The SourceMap for the generated code
   * @param aRelativePath Optional. The path that relative sources in the
   *        SourceMapConsumer should be relative to.
   */
  SourceNode.fromStringWithSourceMap =
    function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      // The SourceNode we want to fill with the generated code
      // and the SourceMap
      var node = new SourceNode();

      // All even indices of this array are one line of the generated code,
      // while all odd indices are the newlines between two adjacent lines
      // (since `REGEX_NEWLINE` captures its match).
      // Processed fragments are removed from this array, by calling `shiftNextLine`.
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var shiftNextLine = function() {
        var lineContents = remainingLines.shift();
        // The last line of a file might not have a newline.
        var newLine = remainingLines.shift() || "";
        return lineContents + newLine;
      };

      // We need to remember the position of "remainingLines"
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;

      // The generate SourceNodes we need a code range.
      // To extract it current and last mapping is used.
      // Here we store the last mapping.
      var lastMapping = null;

      aSourceMapConsumer.eachMapping(function (mapping) {
        if (lastMapping !== null) {
          // We add the code from "lastMapping" to "mapping":
          // First check if there is a new line in between.
          if (lastGeneratedLine < mapping.generatedLine) {
            var code = "";
            // Associate first line with "lastMapping"
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
            // The remaining code is added without mapping
          } else {
            // There is no new line in between.
            // Associate the code between "lastGeneratedColumn" and
            // "mapping.generatedColumn" with "lastMapping"
            var nextLine = remainingLines[0];
            var code = nextLine.substr(0, mapping.generatedColumn -
                                          lastGeneratedColumn);
            remainingLines[0] = nextLine.substr(mapping.generatedColumn -
                                                lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            // No more remaining code, continue
            lastMapping = mapping;
            return;
          }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[0];
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[0] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      // We have processed all mappings.
      if (remainingLines.length > 0) {
        if (lastMapping) {
          // Associate the remaining code in the current line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        // and add the remaining lines without any mapping
        node.add(remainingLines.join(""));
      }

      // Copy sourcesContent into SourceNode
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });

      return node;

      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
          node.add(code);
        } else {
          var source = aRelativePath
            ? util.join(aRelativePath, mapping.source)
            : mapping.source;
          node.add(new SourceNode(mapping.originalLine,
                                  mapping.originalColumn,
                                  source,
                                  code,
                                  mapping.name));
        }
      }
    };

  /**
   * Add a chunk of generated JS to this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
  SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
      aChunk.forEach(function (chunk) {
        this.add(chunk);
      }, this);
    }
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      if (aChunk) {
        this.children.push(aChunk);
      }
    }
    else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };

  /**
   * Add a chunk of generated JS to the beginning of this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
  SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
      for (var i = aChunk.length-1; i >= 0; i--) {
        this.prepend(aChunk[i]);
      }
    }
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      this.children.unshift(aChunk);
    }
    else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };

  /**
   * Walk over the tree of JS snippets in this node and its children. The
   * walking function is called once for each snippet of JS and is passed that
   * snippet and the its original associated source's line/column location.
   *
   * @param aFn The traversal function.
   */
  SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for (var i = 0, len = this.children.length; i < len; i++) {
      chunk = this.children[i];
      if (chunk[isSourceNode]) {
        chunk.walk(aFn);
      }
      else {
        if (chunk !== '') {
          aFn(chunk, { source: this.source,
                       line: this.line,
                       column: this.column,
                       name: this.name });
        }
      }
    }
  };

  /**
   * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
   * each of `this.children`.
   *
   * @param aSep The separator.
   */
  SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
      newChildren = [];
      for (i = 0; i < len-1; i++) {
        newChildren.push(this.children[i]);
        newChildren.push(aSep);
      }
      newChildren.push(this.children[i]);
      this.children = newChildren;
    }
    return this;
  };

  /**
   * Call String.prototype.replace on the very right-most source snippet. Useful
   * for trimming whitespace from the end of a source node, etc.
   *
   * @param aPattern The pattern to replace.
   * @param aReplacement The thing to replace the pattern with.
   */
  SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) {
      lastChild.replaceRight(aPattern, aReplacement);
    }
    else if (typeof lastChild === 'string') {
      this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    }
    else {
      this.children.push(''.replace(aPattern, aReplacement));
    }
    return this;
  };

  /**
   * Set the source content for a source file. This will be added to the SourceMapGenerator
   * in the sourcesContent field.
   *
   * @param aSourceFile The filename of the source file
   * @param aSourceContent The content of the source file
   */
  SourceNode.prototype.setSourceContent =
    function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };

  /**
   * Walk over the tree of SourceNodes. The walking function is called for each
   * source file content and is passed the filename and source content.
   *
   * @param aFn The traversal function.
   */
  SourceNode.prototype.walkSourceContents =
    function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }

      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };

  /**
   * Return the string representation of this source node. Walks over the tree
   * and concatenates all the various snippets together to one string.
   */
  SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function (chunk) {
      str += chunk;
    });
    return str;
  };

  /**
   * Returns the string representation of this source node along with a source
   * map.
   */
  SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
      code: "",
      line: 1,
      column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function (chunk, original) {
      generated.code += chunk;
      if (original.source !== null
          && original.line !== null
          && original.column !== null) {
        if(lastOriginalSource !== original.source
           || lastOriginalLine !== original.line
           || lastOriginalColumn !== original.column
           || lastOriginalName !== original.name) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
        lastOriginalSource = original.source;
        lastOriginalLine = original.line;
        lastOriginalColumn = original.column;
        lastOriginalName = original.name;
        sourceMappingActive = true;
      } else if (sourceMappingActive) {
        map.addMapping({
          generated: {
            line: generated.line,
            column: generated.column
          }
        });
        lastOriginalSource = null;
        sourceMappingActive = false;
      }
      for (var idx = 0, length = chunk.length; idx < length; idx++) {
        if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
          generated.line++;
          generated.column = 0;
          // Mappings end at eol
          if (idx + 1 === length) {
            lastOriginalSource = null;
            sourceMappingActive = false;
          } else if (sourceMappingActive) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
        } else {
          generated.column++;
        }
      }
    });
    this.walkSourceContents(function (sourceFile, sourceContent) {
      map.setSourceContent(sourceFile, sourceContent);
    });

    return { code: generated.code, map: map };
  };

  exports.SourceNode = SourceNode;

});

},{"./source-map-generator":42,"./util":44,"amdefine":3}],44:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  /**
   * This is a helper function for getting values from parameter/options
   * objects.
   *
   * @param args The object we are extracting values from
   * @param name The name of the property we are getting.
   * @param defaultValue An optional value to return if the property is missing
   * from the object. If this is not specified and the property is missing, an
   * error will be thrown.
   */
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;

  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;

  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports.urlParse = urlParse;

  function urlGenerate(aParsedUrl) {
    var url = '';
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ':';
    }
    url += '//';
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + '@';
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;

  /**
   * Normalizes a path, or the path portion of a URL:
   *
   * - Replaces consequtive slashes with one slash.
   * - Removes unnecessary '.' parts.
   * - Removes unnecessary '<dir>/..' parts.
   *
   * Based on code in the Node.js 'path' core module.
   *
   * @param aPath The path or url to normalize.
   */
  function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path = url.path;
    }
    var isAbsolute = (path.charAt(0) === '/');

    var parts = path.split(/\/+/);
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === '.') {
        parts.splice(i, 1);
      } else if (part === '..') {
        up++;
      } else if (up > 0) {
        if (part === '') {
          // The first part is blank if the path is absolute. Trying to go
          // above the root is a no-op. Therefore we can remove all '..' parts
          // directly after the root.
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path = parts.join('/');

    if (path === '') {
      path = isAbsolute ? '/' : '.';
    }

    if (url) {
      url.path = path;
      return urlGenerate(url);
    }
    return path;
  }
  exports.normalize = normalize;

  /**
   * Joins two paths/URLs.
   *
   * @param aRoot The root path or URL.
   * @param aPath The path or URL to be joined with the root.
   *
   * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
   *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
   *   first.
   * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
   *   is updated with the result and aRoot is returned. Otherwise the result
   *   is returned.
   *   - If aPath is absolute, the result is aPath.
   *   - Otherwise the two paths are joined with a slash.
   * - Joining for example 'http://' and 'www.example.com' is also supported.
   */
  function join(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    if (aPath === "") {
      aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || '/';
    }

    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }

    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }

    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }

    var joined = aPath.charAt(0) === '/'
      ? aPath
      : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports.join = join;

  /**
   * Make a path relative to a URL or another path.
   *
   * @param aRoot The root path or URL.
   * @param aPath The path or URL to be made relative to aRoot.
   */
  function relative(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }

    aRoot = aRoot.replace(/\/$/, '');

    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while (aPath.indexOf(aRoot + '/') !== 0) {
      var index = aRoot.lastIndexOf("/");
      if (index < 0) {
        return aPath;
      }

      // If the only part of the root that is left is the scheme (i.e. http://,
      // file:///, etc.), one or more slashes (/), or simply nothing at all, we
      // have exhausted all components, so the path is not relative to the root.
      aRoot = aRoot.slice(0, index);
      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }

      ++level;
    }

    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }
  exports.relative = relative;

  /**
   * Because behavior goes wacky when you set `__proto__` on objects, we
   * have to prefix all the strings in our set with an arbitrary character.
   *
   * See https://github.com/mozilla/source-map/pull/31 and
   * https://github.com/mozilla/source-map/issues/30
   *
   * @param String aStr
   */
  function toSetString(aStr) {
    return '$' + aStr;
  }
  exports.toSetString = toSetString;

  function fromSetString(aStr) {
    return aStr.substr(1);
  }
  exports.fromSetString = fromSetString;

  /**
   * Comparator between two mappings where the original positions are compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same original source/line/column, but different generated
   * line and column the same. Useful when searching for a mapping with a
   * stubbed out mapping.
   */
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = mappingA.source - mappingB.source;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }

    return mappingA.name - mappingB.name;
  };
  exports.compareByOriginalPositions = compareByOriginalPositions;

  /**
   * Comparator between two mappings with deflated source and name indices where
   * the generated positions are compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same generated line and column, but different
   * source/name/original line and column the same. Useful when searching for a
   * mapping with a stubbed out mapping.
   */
  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }

    cmp = mappingA.source - mappingB.source;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }

    return mappingA.name - mappingB.name;
  };
  exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }

    if (aStr1 > aStr2) {
      return 1;
    }

    return -1;
  }

  /**
   * Comparator between two mappings with inflated source and name strings where
   * the generated positions are compared.
   */
  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }

    return strcmp(mappingA.name, mappingB.name);
  };
  exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

});

},{"amdefine":3}],45:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.2.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-02-22T19:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if ( document.msFullscreenElement && window.top !== window ) {

		// Support: IE11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
		}
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				// Support: IE<11
				// option.value not trimmed (#14858)
				return jQuery.trim( elem.value );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// But now, this "simulate" function is used only for events
				// for which stopPropagation() is noop, so there is no need for that anymore.
				//
				// For the 1.x branch though, guard for "click" and "submit"
				// events is still used, but was moved to jQuery.event.stopPropagation function
				// because `originalEvent` should point to the original event for the constancy
				// with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8+
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	// Stop scripts or inline event handlers from being executed immediately
	// by using document.implementation
	context = context || ( support.createHTMLDocument ?
		document.implementation.createHTMLDocument( "" ) :
		document );

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));

},{}],46:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":47}],47:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],48:[function(require,module,exports){

},{}]},{},[1]);
