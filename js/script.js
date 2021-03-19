function getRnd(min,max){

  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var rnd = Math.floor(Math.random()*maxRnd) + minRnd;
  return rnd;
}
//  Generazione di N numeri casuali
function numPc(rangeMax) {
  var arrPc = [];

  while (arrPc.length < 5) {

    var rnd = getRnd(1,rangeMax);

      if (!arrPc.includes(rnd)) {
        arrPc.push(rnd);
      }
   }
   console.log(arrPc);
   return arrPc;
}

function numUtente(rangeMax, arrPc) {
  //numeri da inserire per vincere
  var numDaInserire = rangeMax - arrPc;
  var arrUtente = [];
  while (arrUtente.length<numDaInserire) {
   var numeriInseriti = parseInt(prompt('inserisci un numero'));

   if (arrUtente.includes(numeriInseriti) || numeriInseriti < 0 || numeriInseriti > 100) {
     alert('numero non valido')
   } else {
     if (arrPc.includes(numeriInseriti)) {
       console.log('game over')
       return false;
     } else {
       arrUtente.push(numeriInseriti);
     }
   }
   console.log(arrUtente);
  }
  return true;
  }

function livello() {
  var lvl = parseInt(prompt('scegli un livello'))
  switch(lvl){
    case 0 :
    var rangeMax = 15;
    break;
    case 1 :
    var rangeMax = 20;
    break;
    case 2 :
    var rangeMax = 25;
    break;
  }
  return rangeMax;
}
function es1() {
  var rangeMax = livello();
  var mine = numPc(rangeMax);
  var utente = numUtente(rangeMax, mine);
  if (utente) {
    console.log('hai vinto');
  } else {
    console.log('hai perso');
  }

}

es1()

// // calcola num random compreso [min, max]
// function getRandomValue(min, max) {
//   var localMin = min;
//   var localMax = max - min + 1;
//   return Math.floor(Math.random() * localMax) + localMin
// }
// // calcolo array di numeri casuali compresi [1, rangeMax]
// function getRandomArray(rangeMax) {
//   var randomValues = [];
//   // finche' array non ha dimensione suff
//   while (randomValues.length < 16) {
//     var rnd = getRandomValue(1, rangeMax);
//     if (!randomValues.includes(rnd)) { // se il valore non e' pres.
//                                        // nell'array
//       randomValues.push(rnd);          // allora lo inserisco
//     }
//   }
//   return randomValues;
// }
// function playGame(rangeMax, randomValues) {
//   // num. valori richiesti per vincere
//   var requestedValue = rangeMax - randomValues.length;
//   // array di valori forniti dall'utente
//   var userValues = [];
//   // finche' l'utente non ha inserito abbastanza valori buoni
//   while (userValues.length < requestedValue) {
//     var newValue = parseInt(prompt('Dammi numero'));
//     // valuto se il valore e' fuori range o gia' inserito
//     if (newValue < 1
//       || newValue > 100
//       || userValues.includes(newValue)) {
//       // notifico e permetto di continuare
//       console.log('Valore non utilizzabile. Si prega di riprovare');
//     } else {
//       // valuto se il valore e' minato
//       if (randomValues.includes(newValue)) {
//         // fine del gioco (perso)
//         console.log('End of game');
//         return false;
//       } else {
//         // inserisco valore fornito dall'utente
//         userValues.push(newValue);
//       }
//     }
//     console.log(userValues);
//   }
//   // fine del gioco (vinto)
//   return true;
// }
// // BONUS: calcolo range a partire da livello utente
// function getLevel() {
//   var lvl = parseInt(prompt('A che livello vuoi giocare?'));
//   // defin. rangeMax in base a lvl scelto dall'utente
//   switch (lvl) {
//     case 0:
//       var rangeMax = 30;
//     break;
//     case 1:
//       var rangeMax = 25;
//     break;
//     case 2:
//       var rangeMax = 20;
//     break;
//   }
//   return rangeMax;
// }
// function init() {
//   // ottengo rangeMax a partire dal lvl chiesto all'utente
//   var rangeMax = getLevel();
//   // ottengo array di mine
//   var pcValues = getRandomArray(rangeMax);
//   // loggo array di mine
//   console.log(pcValues);
//   // inizio il gioco
//   var res = playGame(rangeMax, pcValues);
//   // stampo risultato partita
//   if (res) {
//     console.log('Hai vinto');
//   } else {
//     console.log('Hai perso');
//   }
// }
// init();
