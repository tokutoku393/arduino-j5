function toggelClass(){
    $bulb.classList.toggle("light_up");
}

function removeClass(){
    if(flag === 0)return;
    $bulb.style.background = '#bbb';
    $bulb.style.boxShadow = '';
    $bulb.classList.remove("light_up");
}

function addClass(color){
    $bulb.style.background = color;
    $bulb.style.boxShadow = `0 -10px 100px ${color}`;
    $bulb.classList.add("light_up");
}

let $light = document.querySelector('#light');
let $bulb = document.querySelector('.bulb');
$light.addEventListener("click", toggelClass, false);

const app_id = '<your-app-id>';
const milkcocoa = new MilkCocoa(`${app_id}.mlkcca.com`);
const ds = milkcocoa.dataStore('data');

let flag = 0;
ds.on('push',(pushed) => {
  if (pushed.value.flag === 1) {
    addClass('#0FACF4');
    flag = 1;
  } else {
    removeClass();
    flag = 0;
  }
});
