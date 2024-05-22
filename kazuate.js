// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;


document.getElementById("your-button-id").addEventListener("click", hantei);

function hantei() {

  let yoso = parseInt(document.getElementById("your-input-id").value);
  
  kaisu++;
  
  if (kaisu >= 4) {
    console.log("答えは " + kotae + " でした。すでにゲームは終わっています");
    return; // ゲーム終了
  }

  if (yoso === kotae) {
    console.log("正解です。おめでとう！");
  } else if (yoso > kotae) {
    console.log("まちがい。答えはもっと小さいですよ");
  } else if (yoso < kotae) {
    console.log("まちがい。答えはもっと大きいですよ");
  }
}

