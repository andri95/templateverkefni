

class Spurningar{
	constructor(spurningar, svor, rett){
		this._spurningar = spurningar;
		this._svor = svor;
		this._rett = rett;
	}
}

let spurningEitt = new Spurningar("What is the answer?", ["A", "B", "C", "D"], "C");
let spurningTvo = new Spurningar("True or False?", ["True", "False"], "True");

let spurningarTemp = [spurningEitt, spurningTvo];

let rettSvar = spurningarTemp[0]._rett;

const markup1 = 
		`<section class="temp">
		<div class="spurning">${spurningarTemp[0]._spurningar}</div>
		<div class="svar">${spurningarTemp[0]._svor[0]}</div>
		<div class="svar">${spurningarTemp[0]._svor[1]}</div>
		<div class="svar">${spurningarTemp[0]._svor[2]}</div>
		<div class="svar">${spurningarTemp[0]._svor[3]}</div>
		</section>`;

const markup2 = 
		`<section class="temp">
		<div class="spurning">${spurningarTemp[1]._spurningar}</div>
		<div class="svar">${spurningarTemp[1]._svor[0]}</div>
		<div class="svar">${spurningarTemp[1]._svor[1]}</div>
		</section>`;

document.body.innerHTML = markup1;

const spurn = document.querySelectorAll('.svar');

function toggleYtaTveir(e){
	if(this.innerHTML == spurningarTemp[1]._rett){
		this.classList.toggle('rett');
	} else{
		this.classList.toggle('vitlaust');
	}
}

function toggleYta(e){
	if(this.innerHTML == spurningarTemp[0]._rett){
		this.classList.toggle('rett');

		document.body.innerHTML = markup2;
		const spurn = document.querySelectorAll('.svar');
		spurn.forEach(svar => svar.addEventListener('click', toggleYtaTveir));

	} else{
		this.classList.toggle('vitlaust');
	}
}

spurn.forEach(svar => svar.addEventListener('click', toggleYta));
