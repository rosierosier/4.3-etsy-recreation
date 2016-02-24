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
