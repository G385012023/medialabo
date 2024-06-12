// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // テキストボックスに指定された数値を yoso に代入する
  let yoso = Number(document.getElementById('yoso').value);

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  kaisu = kaisu + 1;

  let kaisuElement = document.getElementById('kaisu');
  let answerElement = document.getElementById('answer');
  let resultElement = document.getElementById('result');

  kaisuElement.textContent = kaisu + '回目の予想:';
  answerElement.textContent = yoso;

  if (kotae === yoso && kaisu <= 3) {
    resultElement.textContent = '正解です．おめでとう!';
  } else if (kotae > yoso && kaisu < 3) {
    resultElement.textContent = 'まちがい．答えはもっと大きいですよ';
  } else if (kotae < yoso && kaisu < 3) {
    resultElement.textContent = 'まちがい．答えはもっと小さいですよ';
  } else if (kaisu === 3 && kotae !== yoso) {
    resultElement.textContent = 'まちがい．残念でした答えは' + kotae + 'です．';
  } else if (kaisu >= 4) {
    resultElement.textContent = '答えは' + kotae + 'でした．すでにゲームは終わっています';
  }
}

document.getElementById('submit').addEventListener('click', hantei);