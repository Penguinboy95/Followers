"use strict";

var slider = document.getElementById('slider');
var sliderHeight = slider.offsetHeight;

var fullDocumentHeight = window.innerHeight;

var buttonGroup = document.getElementById("buttonGroup");
var buttonGroupHeight = buttonGroup.offsetHeight;

var freeSpace = fullDocumentHeight - sliderHeight;
if (freeSpace > buttonGroupHeight) {
    fixToBottom(buttonGroup);
}

var slide = document.getElementsByClassName('slider__slide');
StyleChange(slide);

/*
$(".slider__point_wrapper").on("click", ".slider__point", function(){
	$(".slider_control .slider__point").removeClass("slider__point-active");
	$(this).addClass("slider__point-active");
});
*/