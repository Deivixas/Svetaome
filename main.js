const dogeImg = document.querySelectorAll('.nav_logo');

console.log(dogeImg);

dogeImg[0].addEventListener('click', function () {
    if (dogeImg[0].classList.contains('element_moves_up')){
        dogeImg[0].classList.add('element_moves_down')
        dogeImg[0].classList.remove('element_moves_up')
    }else{
        dogeImg[0].classList.remove('element_moves_down')
        dogeImg[0].classList.add('element_moves_up')
    }
})