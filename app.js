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
		menuContent.style.background = 'transparent';
		//Ocultar Go Top 
		goTop.style.right = '-100px';
	}else{ 
		menuContent.style.background = 'var(--fondo)';
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

//slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .img');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 6000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 6000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
//fin slider

//boton compartir
const boton = document.querySelector('#compartir');
if ('share' in navigator) {
	boton.addEventListener('click', share)
	function share() {
		navigator.share({
			title: 'Christian Jhulino Ortiz Cholán',
			text: 'Soy técnico en Computación e Informática, Diseñador Gráfico, Desarrollador de software y mucho más ...',
			url: 'https://christian-ortiz.github.io/Tarjeta-Digital/',
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

