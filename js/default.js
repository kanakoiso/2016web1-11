console.log('こんにちは世界!');
document.getElementById('choice').textContent = new Date();

var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してたください!'));



var message;

if(answer === number){
  massege='あたり!';
}else if{answer < number){

  message = '残念!もっと大きいです';
}else if{answer < number){
  message = '残念!もっとい小さいです';
}else{
  masage = '0～3'の数字を入力してください
}

// 結果
document.getEfementById('choice').text
