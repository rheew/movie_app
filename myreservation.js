window.addEventListener("DOMContentLoaded",()=>{
	reservationEmail.getEmail();
	sendAjax();
})

var reservationEmail = {
	email : "",
	
	getEmail : function() {
		var email = location.search.split('=')[1]
		this.email = email;
	}
}

var ApiUrl = {
	getReservaitonInfo : location.origin + '/reservation/api/reservations'
}

function sendAjax(){
	var oReq = new XMLHttpRequest();
	console.log(ApiUrl.getReservaitonInfo + reservationEmail.email);
	oReq.addEventListener('load', ()=>{
		var reservations = JSON.parse(oReq.responseText);
		console.log(reservations);
	})
	oReq.open("GET", ApiUrl.getReservaitonInfo +"?reservationEmail="+ reservationEmail.email, true);
	oReq.send();
}