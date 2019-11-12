zeroo = true;
cinquantee = true;
centt = true;

function zero(){
		document.getElementById("barre").classList.remove("cinquante");
		document.getElementById("barre").classList.remove("cent");
}

function cent(){
	zero();
	if (centt === true) {
		document.getElementById("barre").classList.add("cent");
	}
	else{
		document.getElementById("barre").classList.remove("cent");
	}
	centt = !centt;
}