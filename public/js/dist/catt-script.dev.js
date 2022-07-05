"use strict";

//================
// 手機版 PC版 menu nav
//================
// 定義視窗寬度的變數
var windowWidth = $(window).width(); // 進網頁直接執行一次 判斷

$('#btn-nav-switch').on('click', function () {
  $('.nav2').toggleClass('active');
}); // btn-nav-switch end
// windowWidth>=768 end
// 每一次縮放視窗的時候執行

$(window).resize(function () {
  // widthWidth 在每次縮放視窗寬度時，換上當前的視窗寬度的數值
  // 小於768執行
  $('#btn-nav-switch').on('click', function () {
    $('.header').toggleClass('active');
  }); // btn-nav-switch end
}); // windowWidth>=768 end

new WOW().init();