// 答え
let kotae = Math.floor(Math.random() * 10) + 1;

// 入力回数（予想回数）
let kaisu = 0;

// 初回の0回目の予想をコンソールに表示
console.log(kaisu + '回目の予想:');

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // テキストボックスを取得してその値を yoso に代入する
  let inputElement = document.querySelector('#yoso');
  let yoso = Number(inputElement.value);

  // 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  kaisu += 1;

  let feedbackElement = document.querySelector('#feedback');

  if (kaisu <= 3) {
    console.log(kaisu + '回目の予想: ' + yoso);
  }

  if (kotae === yoso && kaisu <= 3) {
    feedbackElement.textContent = '正解です．おめでとう!';
    console.log('正解です．おめでとう!');
  } else if (kotae > yoso && kaisu < 3) {
    feedbackElement.textContent = 'まちがい．答えはもっと大きいですよ';
    console.log('まちがい．答えはもっと大きいですよ');
  } else if (kotae < yoso && kaisu < 3) {
    feedbackElement.textContent = 'まちがい．答えはもっと小さいですよ';
    console.log('まちがい．答えはもっと小さいですよ');
  } else if (kaisu === 3 && kotae !== yoso) {
    feedbackElement.textContent = 'まちがい．残念でした答えは' + kotae + 'です．';
    console.log('残念でした。答えは' + kotae + 'です。');
  } else if (kaisu >= 4) {
    feedbackElement.textContent = '答えは' + kotae + 'でした．すでにゲームは終わっています';
    console.log(kaisu + '回目の予想: 答えは' + kotae + 'でした．すでにゲームは終わっています。');
  }

  // コンソールにデバッグ用の答えを表示する
  console.log('答え（デバッグ用）: ' + kotae);
}

document.querySelector('#submit').addEventListener('click', hantei);