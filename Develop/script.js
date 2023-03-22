var nineEl = $('#hour-9');
var tenEl = $('#hour-10');
var elevenEl = $('#hour-11');
var twelveEl = $('#hour-12');
var oneEl = $('#hour-13');
var twoEl = $('#hour-14');
var threeEl = $('#hour-15');
var fourEl = $('#hour-16');
var fiveEl = $('#hour-17');
var block = [nineEl, tenEl, elevenEl, twelveEl, oneEl, twoEl, threeEl, fourEl, fiveEl]; 

$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM DD, YYYY: H:mA'));
});
var toDos;
var item;
$("button").click(function () {
  toDos = ($(this).siblings('.description').val()); 
  item = ($(this).parents().attr("id")); 
  localStorage.setItem(item, toDos)
});

$(document).ready(function () {
  $(".description").each(function() { 
  savedData = ($(this).parents().attr("id").toString()); 
    $("#"+savedData+" .description").val(localStorage.getItem(savedData));
  })
  });

// var time = dayjs().hour();;
//   if(nineEl == time){
//     nineEl.style.color = 'grey';
//   }
//   else if (nineEl < time){
//     nineEl.style.color = 'green';
//   } else {
//     nineEl.style.color = 'red';
//   };