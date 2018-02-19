window.onload = function() {

    // score
    var score = 0;

    // category
    var mountains = ['copper','everest','fuji','rushmore','rocky','okemo'];

    // wrong letters list
    var letterArray = [];

    // choose random index # from var mountains
    var randomNumber = Math.floor(Math.random() * (mountains.length - 1));

    // create string from chosen index # 
    var gameWord = mountains[randomNumber];

    // divide chosen string into its letters as individual strings
    var wordSplit = gameWord.split('');
    console.log(wordSplit);

    // make gameWord display as _ _ _ _ (gW.length)
    var underscore = [];

    for (var i = 0; i < wordSplit.length; i++) {
        underscore[i] = "_";
    }

    document.getElementById('game-word').innerHTML = (underscore.join(' '));

    // listen for users keystroke
    var keyPressTimes = 0;

    addEventListener('keyup', function(event) {    

        document.getElementById('start-text').innerHTML = '';

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
     
        keyPressTimes++;

        for (var i = 0; i < wordSplit.length; i++) {
                
        // if user keystroke is in the random string, replace underscore[i] with userGuess
            if (wordSplit[i] === userGuess) {
                console.log(i + ' Yes');
                underscore[i] = userGuess;
            }
                
        };
            
        document.getElementById('game-word').innerHTML = (underscore.join(' '));

        // if userGuess is not in the random string, record wrong guess letter, do not replace _
        if (wordSplit[i] != userGuess) {
            document.getElementById('already-guessed').innerHTML = 'Already Guessed:';
            console.log(' No');
            letterArray.push(' ' + userGuess);
            document.getElementById('letters-guessed').innerHTML = letterArray;

        }
        
        // max # of Guesses
        if (keyPressTimes > 10) {
            alert('Too Many Guesses. Try Again!');
            document.getElementById('guesses-left').innerHTML = 'Out of Guesses!';
        }

        if (keyPressTimes === 8) {
            document.getElementById('guesses-left').innerHTML = '3 Guesses Left!';
        } else if (keyPressTimes === 9) {
            document.getElementById('guesses-left').innerHTML = '2 Guesses Left!';
        } else if (keyPressTimes === 10) {
            document.getElementById('guesses-left').innerHTML = '1 Guess Left!';
        }

        // Win        

        // var 
        // if (  === wordSplit) {
        //     alert('You Win! Congratulations, Play Again')
        // }
        

    });

// score 
    // if userGuess === gameWord : 'you win' score++

    // if userGuess != gameWord : 'you lose'

    // if # of guesses > 10 : 'you lose'

};