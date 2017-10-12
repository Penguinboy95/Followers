function fixToBottom(elem) {
    elem.style.position = "absolute";
    elem.style.bottom = "0";
}


function StyleChange(arrOfElems) {
    for (var index = 0; index < arrOfElems.length; index++) {
        arrOfElems[index].style.width = window.innerWidth + "px";
    }
}




