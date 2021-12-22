function guessGame() {
  let randomNr = Math.floor(Math.random() * 11);
  //console.log(randomNr);
  let guess;

  do {
    guess = prompt("番号を当ててね。1-10の間です");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("もっと大きいよ");
    } else {
      console.log("もっと小さいよ");
    }
  } while (guess != randomNr);

  alert("あたり！！！！！！");
}

guessGame();
