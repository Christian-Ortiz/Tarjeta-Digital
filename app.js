let menuContent = document.querySelector('.cabecera');
let desplegables = document.querySelectorAll('.boton');
let listShow = document.querySelectorAll('.texto p');

//Scroll Efect 
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top'); 
window.onscroll = () => { 
	//Hide & Show - Scroll Menu (Function) 
	let currentScrollPos = window.pageYOffset; 
	if (prevScrollPos > currentScrollPos) { 
		menuContent.style.transition = '0.5s'; 
	}else{ 
		menuContent.style.transition = '0.5s'; 
	} 
	prevScrollPos = currentScrollPos;
	//Scoll Menu & Go Top & See Down (Styles) 
	let arriba = window.pageYOffset; 
	//Conditions 
	if(arriba <= 60){ 
		menuContent.style.top = '-60px';
		//Ocultar Go Top 
		goTop.style.right = '-100px';
	}else{ 
		menuContent.style.top = '0';
		//Mostrar Go Top 
		goTop.style.right = '15px'; 
	} 
} 
//Go Top Click 
goTop.addEventListener('click', () => { 
	document.body.scrollTop = 0; 
	document.documentElement.scrollTop = 0;
}); 


desplegables.forEach(desplegable => {
    desplegable.addEventListener('click', ()=>{
        desplegable.classList.toggle('arrow');

        let height = 0;
		let op = 0;
		let width = 0;
        let menu = desplegable.nextElementSibling;
        if (menu.clientHeight == "0"){
			width=100;
			menu.style.width = `${width}%`;
            height = menu.scrollHeight;
			op=1;
        }
        menu.style.height = `${height}px`;
		menu.style.width = `${width}%`;
		menu.style.opacity = `${op}`;
		
    })
});

function rain() {
	let amount = 200;
	let body = document.querySelector('#fondo');
	let i = 0;
	while (i < amount){
		let drop = document.createElement('i');

		let size = Math.random() * 5;
		let posX = Math.floor(Math.random() * body.clientWidth);

		let delay = Math.random() * -20;
		let duration = Math.random() * 5;

		drop.style.width = 0.2 + size + 'px';
		drop.style.left = posX + 'px';
		drop.style.animationDelay = delay + 's';
		drop.style.animationDuration = 1 + duration + 's';

		body.appendChild(drop);
		i++
	}
}
rain();


//slider
const $slider = document.getElementById("list");
let sliderSection = document.querySelectorAll(".list .img");
let sliderSectionLast = sliderSection[sliderSection.length -1];
let dots = document.querySelectorAll('.slider .dots li');

const $btnRight = document.getElementById("next");
const $btnLeft = document.getElementById("prev");

let lengthItems = sliderSection.length - 1;
let active = 1;
function next() {
    let $sliderSectionFirst = document.querySelectorAll(".list .img")[0];

    $slider.style.marginLeft = "-200%";
    $slider.style.transition = "margin-left .5s";
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("beforeend", $sliderSectionFirst)
        $slider.style.marginLeft = "-100%"
    }, 500);

	let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active')
}

function prev() {
    let sliderSection = document.querySelectorAll(".list .img");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    $slider.style.marginLeft = "0";
    $slider.style.transition = "margin-left .5s";
    setTimeout(() => {
        $slider.style.transition = "none";
        $slider.insertAdjacentElement("afterbegin", sliderSectionLast)
        $slider.style.marginLeft = "-100%"
    }, 500);

	let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active')
}

$btnRight.addEventListener("click", function () {
	active = active < lengthItems ? active + 1 : 0;
    next()
})

$btnLeft.addEventListener("click", function () {
	active = active > 0 ? active - 1 : lengthItems;
    prev()
})

setInterval(() => {
	active = active < lengthItems ? active + 1 : 0;
    next()
	
}, 6000);

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
		let anterior = active;
		active = key;
		 if (anterior < active){
			anterior = ((active - anterior) + 1);

			let i = 1;
			while (i < anterior){
				let $sliderSectionFirst = document.querySelectorAll(".list .img")[0];
				$slider.insertAdjacentElement("beforeend", $sliderSectionFirst)
				i++
			}
			let last_active_dot = document.querySelector('.slider .dots li.active');
			last_active_dot.classList.remove('active');
			dots[active].classList.add('active')
		 }else if (anterior > active){
			anterior = ((anterior - active) + 1);

			let i = 1;
			while (i < anterior){
				let sliderSection = document.querySelectorAll(".list .img");
   			 let sliderSectionLast = sliderSection[sliderSection.length -1];
				$slider.insertAdjacentElement("afterbegin", sliderSectionLast)
				i++
			}

			let last_active_dot = document.querySelector('.slider .dots li.active');
			last_active_dot.classList.remove('active');
			dots[active].classList.add('active')	

		 }
    })
})
//fin slider

//boton compartir
const boton = document.querySelector('#compartir');
if ('share' in navigator) {
	boton.addEventListener('click', share)
	function share() {
		navigator.share({
			title: 'Christian Jhulino Ortiz Cholán',
			text: 'Técnico en Computación e Informática, Diseñador Gráfico, Desarrollador de software y mucho más ...',
			url: 'https://christian-ortiz.github.io/Tarjeta-Digital/',
			files: './imagenes/qr.jpg'
		})
		.then(()=>{

		})
		.catch(()=>{
			alert('No se compartió.');
		})
	}
}else{
	alert('Abre esta tarjea digital en tú movíl para poder compartir.');
}