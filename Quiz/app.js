
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

const markup = 
		`<div class="temp">
		<div class="spurning">${spurningarTemp[0]._spurningar}</div>
		<div class="svar">${spurningarTemp[0]._svor[0]}</div>
		<div class="svar">${spurningarTemp[0]._svor[1]}</div>
		<div class="svar">${spurningarTemp[0]._svor[2]}</div>
		<div class="svar">${spurningarTemp[0]._svor[3]}</div>
		</div>`;

document.body.innerHTML = markup;

const spurn = document.querySelectorAll('.svar');

function toggleYta(e){
	/*const prufa = document.querySelector(`div[data-key="${spurningarTemp[0]._rett}"]`);*/
	if(this.$ == spurningarTemp[0]._rett){
		this.classList.toggle('rett');
	} else{
		this.classList.toggle('vitlaust');
	}
}

spurn.forEach(svar => svar.addEventListener('click', toggleYta));