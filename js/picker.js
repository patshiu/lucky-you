var goButton = document.getElementById('go-button');

var classList = document.getElementById('list-of-names').getElementsByTagName("li");

var rando;

function pickRandom(){
  rando = Math.floor(Math.random() * Math.floor(15));
  highlightWinner(rando);
  console.log(rando);
}

function highlightWinner(num){
  for(var i = 0, len = classList.length; i < len; i++){
    classList[i].classList.remove('selected');
  };
  classList[num].classList.add('selected');
}
