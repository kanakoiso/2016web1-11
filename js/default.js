
var number = Math.floor(Math.random()*100);
var answer = parseInt(window.prompt('数あてゲーム。0～99の数字を入力してください!'));



var message;

if(answer === number){
  massege='当たりだよ';
}
  
else if(answer < number){
　message = 'もう少し大きいと思うよ';
}
　
else if(number < answer){
  message = 'そんなに大きな数字じゃないよ';
}
  
else{
  masage = '数字を入力してください　日本語読めないんですか?';
}

// 結果
document.getElementById('choice').textContent = message;
