function aleatoire(){
	var myNumber = document.getElementById('myNumber').value;
	var numberCroupier = Math.floor(Math.random()*11);
	var result = document.getElementById('resultat');
	var final = document.getElementById('phrase');
	result.innerHTML= numberCroupier;

if (myNumber>numberCroupier) {
	phrase.innerHTML ="vous avez gagné";
 }else{
 	phrase.innerHTML ="vous avez perdu";
 }

}

function chiffre(){
	var firstNumberUser = Math.floor(Math.random()*11);
	var resultatMyNumber = document.getElementById('resultUser');
	resultUser.innerHTML = firstNumberUser;
	var firstNumberCroupier = Math.floor(Math.random()*11);
}

function yes(){
	var twoNumberUser = Number(firstNumberUser) + Math.floor(Math.random()*22);
	var twoNomberCroupier = firstNumberCroupier + Math.floor(Math.random()*22);
	var resultatTwoNumber = document.getElementById('resultTwo');
	resultTwo.innerHTML = twoNomberUser;
}

function no(){
	document.getElementById('resultfirst').innerHTML = firstNumberCroupier
}




//exemple convertir une chaine en nombre:
//Number("non variable");

//si plusieur random:
//function random(){
//return math.floor(Math.random()*11);}

//ex: var uneVarialble ="test";
//console.log(uneVariable);
//function mafunctionTest(){
//	console.log(test);
//}

//ex: playerNumb += ramdom;
// racourcis de : playerNum  = playerNum + ramdom
// player++ (player = player + 1)

// if(document.getElementByid().disable){
	//document.getElementByid().disable = false;
//}.  disable renvoi des booleens
// 
//function num(parametre ex: text)



