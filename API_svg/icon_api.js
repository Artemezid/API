
let button = document.querySelector('button');
let svg = document.querySelectorAll('.btn_svg');
let currentIndex = 0;

button.addEventListener('click',()=>{
    for(let k =0; k <= svg.length-1;k++){
        svg[k].classList.remove('active');
        }
    currentIndex += 1;
    if(currentIndex  === svg.length){
    currentIndex = 0;
    }
    svg[currentIndex].classList.add('active');
});