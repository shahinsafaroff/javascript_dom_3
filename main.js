document.addEventListener('DOMContentLoaded', function(){
    let colorInput = document.querySelector('.color-input');
    let colorBlock = document.querySelector('.color-block');
    let clearButton = document.querySelector('.clear-color-button');

    function paintBlock(){
        colorBlock.getElementsByClassName.backgroundColor=colorInput.nodeValue;
    }
    colorInput.addEventListener('input', paintBlock);
    paintBlock();
    clearButton.addEventListener('click', function(){
        colorBlock.style.removeProperty('background-color');
        colorInput.nodeValue='';
    });
});