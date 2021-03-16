function getRnd(min,max){

  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var rnd = Math.floor(Math.random()*maxRnd) + minRnd;
  return rnd;
}

function es1() {


  var arr = []
  for (var i = 0; i < 8; i++) {
  var rnd = getRnd(1,8)

    arr.push(rnd);
    console.log(arr)
}
}

es1()
