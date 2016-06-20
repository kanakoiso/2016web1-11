
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください!'));



var message;

if(answer === number){
  massege='ｱﾀﾘﾀﾞﾖｰ';
}
  
else if(answer < number){
　message = 'ﾓｳﾁｮｯﾄｵｵｷｲﾄｵﾓｳﾝﾀﾞｹﾞﾄﾞﾅｰ';
}
　
else if(number < answer){
  message = 'ｿﾝﾅﾆｵｵｷｲｽｳｼﾞｼﾞｬﾅｲﾖ';
}
  
else{
  masage = 'ｻｲｼｮﾉﾌﾞﾝｼｮｳﾁｬﾝﾄﾖﾝﾃﾞﾈ';
}

// 結果
document.getElementById('choice').textContent = message;
