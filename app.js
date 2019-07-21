/*
Pravidla hry:
- Hra je určeno pro 2 hráče, hraje se na kola.
- Hráč hází kostkami pomocí tlačítka ROLL DICE. Každý další hod se přičítá do jeho momentálního skóre za dané kolo.
- Hráč si může vybrat, že si dané skóre ponechá stisknutím tlačítka HOLD, což znamená, že se jeho momentální skóre z daného kola uloží do celkového skóre. Poté je na řadě další hráč.
- ALE, jakmile hráč hodí 1, veškeré jeho skóre získané v tomto kole je ztraceno. Poté je automaticky na řadě další hráč
- Pokud hráč hodí na obou kostkách 1, tak ztrácí veškeré své skóre(celkové i momentální za dané kolo).
- Vyhrává hráč, který jako první získá skóre 100 bodů.
- Pro další hru stiskněte tlačítko NEW GAME
*/

let scores, roundScore, activePlayer, gamePlaying;

// set all properties
init();

function setDicesVisibility(visibility) {
  const value = visibility ? "block" : "none";
  document.getElementById("dice-1").style.display = value;
  document.getElementById("dice-2").style.display = value;
}

function setCurrentScore() {
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}

function showWarning() {
  document.querySelector(".warning").style.display = "block";
  setTimeout(function() {
    document.querySelector(".warning").style.display = "none";
  }, 3000);
}

//attach click event listener for roll dice button
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // 1. Random number
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    setDicesVisibility(true);
    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice1 === 1 && dice2 === 1) {
      //if two 1s are rolled, the player’s entire score is lost, and the turn ends
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = "0";
      setDicesVisibility(true);
      document.querySelector(".warning").textContent ="You rolled double 1. Losing score";
      showWarning();
      nextPlayer();
    } else if (dice1 === 1 || dice2 === 1) {
      //Next player
      setDicesVisibility(true);
      document.querySelector(".warning").textContent ="You rolled a 1. Switching players";
      showWarning();
      nextPlayer();
    } else {
      //Add score
      roundScore += dice1 + dice2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    setDicesVisibility(false);

    // Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      setDicesVisibility(false);
      setCurrentScore();
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //Next player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  //Next player
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  roundScore = 0;
  setCurrentScore();

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  setDicesVisibility(false);

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  setCurrentScore();

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
