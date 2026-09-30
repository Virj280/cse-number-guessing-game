window.onload = function() {
    alert('Player 2 gets 5 guesses to find a number between 1 and 100.');
    alert('Lowkey fried lmao');
}

//   that number as been set
function setNumber() {
    let answerInput = document.getElementById('p1Number').value; 
    let answer = Number(answerInput); 
    
    // Don't worry about this one :)
    if (answer == 67) { 
        alert('Hmmm.'); 
        alert('Nice joke.'); 
        alert('"67??"'); 
        alert('Really?'); 
        alert('...Why?'); 
        alert('Do you think this is funny?'); 
        alert('Do you feel accomplished with what you have done?'); 
        alert('You should not be.'); 
        alert('Tell me, player...'); 
        alert('What drives you to do these things?'); 
        alert('...'); 
        alert("Why do you choose to perform such void and meaningless actions?"); 
        alert('...'); 
        alert("What did you think was going to happen?"); 
        window.close(); 
    } 
    else if (answerInput.trim() === "" || isNaN(answer) || !Number.isInteger(answer) || answer < 1 || answer > 100) { 
        alert('PLEASE just put an integer within the range I beg of you'); 
    } else { 
        localStorage.setItem("setNum", answer); 
        alert('Your number is: ' + answer + '!'); 
        alert('Tell player 2 to get ready to guess!'); 
        window.location.replace("indexP2.html"); 
    } 
}

// Hint Sender
function sendHint() {
    let epicHint = document.getElementById('hint').value; 
    let coolHint = String(epicHint);
    if (coolHint == 67) { 
        alert('Well well well.'); 
        alert('You thought you were slick with using the hint function, right?');
        alert('Think again.');
        window.close();
    }
    else {
        let hintInput = document.getElementById("hint").value;
        localStorage.setItem('hint', hintInput);
        alert("Hint sent!");
    }
}