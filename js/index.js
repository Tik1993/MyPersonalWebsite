(()=>{
const loadText = document.querySelector('.loading-text');
const loadHeading = document.querySelector('.loading-heading');
let load = 0;
let blurringText = setInterval(blurring, 15);

function blurring(){
    load++;
    if(load>99){
        clearInterval(blurringText);
    }

    loadText.innerHTML=`${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    if(load===100){
        loadHeading.style.display='none'
        document.querySelector('#wholePage').classList.remove("wholePageNone");
        AOS.init();
    }
    
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

})()