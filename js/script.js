// changing city
var active_city = document.querySelector(".menu__active-city");
var city_list = document.querySelector(".menu__sub-list");
var all_cities = document.querySelectorAll(".menu__sub-item");
var body = document.querySelector("body");

function hide_city_list(){
	try{
		active_city.classList.remove('active');
		city_list.classList.remove("active");
	}catch{}
}
function show_city_list(){
	try{
		active_city.classList.add('active');
		city_list.classList.add("active");
	}catch{}
}
function change_city(city){
	hide_city_list();
	setTimeout(() => {
		active_city.innerText = city;
	},300);
}
function element_in_list(list, element){
	var response = false;
	for (var i = 0; i < list.length; i++) {
		if(list[i] == element){
			response = true;
			break;
		}
	}
	return response;
}

active_city.addEventListener("click",() => {
	if(active_city.classList.contains("active")){
		hide_city_list();
	}else{
		show_city_list();
	}
})

all_cities.forEach((city) => {
	city.addEventListener("click", () =>{
		change_city(city.innerText);
	})
})

body.addEventListener("click",(event) => {
	if(!element_in_list(all_cities,event.target) && event.target != active_city){
		try{
			hide_city_list();
		}catch{}
	}
})



// moving menu elements
function hide_menu(){
	if(window.innerWidth<=1230){
	        $(".menu__list").appendTo(".header__mobile-body");
	    }else{

	    	$(".menu__list").appendTo(".menu__body");
	    }
	if(window.innerWidth<=950){
	        $(".menu__contacts").appendTo(".header__mobile-body");
	    }else{

	    	$(".menu__contacts").prependTo(".menu__body");
	    }
}

hide_menu();
window.onresize = hide_menu;
if(window.onorientationchange){
    window.onorientationchange=hide_menu;
}


// burger
try{
	var burger = document.querySelector(".header__burger");
	var mobile_menu = document.querySelector(".header__mobile-menu");
	var body = document.body;
	burger.addEventListener('click', () => {
		hide_menu();
		burger.classList.toggle("active");
		mobile_menu.classList.toggle("active");
		body.classList.toggle("block_overflow");
	});
}catch{}

