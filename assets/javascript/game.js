//pseudo coding
//game has 4 cyrstals that will have random numbers between 1-12 (will only change if player wins or loses)
// crystals have buttons connected to them
//computer guessing number will be generated randomly between 19-120 - will only change if player wins or loses
//player total score will show when player starts clicking on crystals - will then add each click
//if player numbers equals computer number player wins
//else if player number is higher than computer number, player loses
//wins/losses value will update when player wins/loses and add a message: "Player Wins" when player wins

$(document).ready(function () {
    // computer generates random numbers for each play between 19-120 - I added 101 and 19 because it adds up to 120
    var computerRandom = Math.floor(Math.random() * 101) + 19;
    console.log("computer random pick: ", computerRandom);

    // the code below adds the computer random number to my html page - using the id #computerNumbers
    $('#computerNumber').text(computerRandom);


    // random number for each crystal - between 1-12 -  we write 11 + 1 bc it add to 12
    var crystal1 = Math.floor(Math.random() * 11) + 1;
    var crystal2 = Math.floor(Math.random() * 11) + 1;
    var crystal3 = Math.floor(Math.random() * 11) + 1;
    var crystal4 = Math.floor(Math.random() * 11) + 1;
    console.log("crystals random numbers: ", crystal1, crystal2, crystal3, crystal4);



    var totalScore = 0; //total score for the addition of clicked crystals
    var userWins = 0; //total score for number of wins
    var userLoss = 0; // total score for the number of losses


    // $('#win').text(userWins);
    // $('#loss').text(userLoss);


    function reset() {
        computerRandom = Math.floor(Math.random() * 101 + 19);
        $('#computerNumber').text(computerRandom);
        console.log("computer random pick after reset: ", computerRandom)
        crystal1 = Math.floor(Math.random() * 11 + 1);
        crystal2 = Math.floor(Math.random() * 11 + 1);
        crystal3 = Math.floor(Math.random() * 11 + 1);
        crystal4 = Math.floor(Math.random() * 11 + 1);
        console.log("crystals random numbers reset: ", crystal1, crystal2, crystal3, crystal4);

        totalScore = 0;
        $('#finalScore').text(totalScore);

    };

    //add the wins to the playerTrack
    function winner() {
        userWins++;
        $('#win').text(userWins);
        $('#winLossAlert').text("You Won!!!")
        reset();
    }
    //add the losses to the playerTrack
    function loss() {
      
        userLoss++;
        $('#loss').text(userLoss);
        $('#winLossAlert').text("You Lost!!!")
        reset();
    }

    // jQuery function for clicks for the crystals and the conditionals for each crystal
    $('#crystal1').on('click', function () {
        totalScore = totalScore + crystal1;
        console.log("New total score: " + totalScore);

        $('#finalScore').text(totalScore);
      
        if (totalScore === computerRandom) {
            winner();
            
        }
        else if (totalScore > computerRandom) {
           loss();
        }
    });
    $('#crystal2').on('click', function () {
        totalScore = totalScore + crystal2;
        console.log("New total score: " + totalScore);

        $('#finalScore').text(totalScore);

        if (totalScore === computerRandom) {
            winner();
        }
        else if (totalScore > computerRandom) {
            loss();
        }
    });
    $('#crystal3').on('click', function () {
        totalScore = totalScore + crystal3;
        console.log("New total score: " + totalScore);

        $('#finalScore').text(totalScore);
 
        if (totalScore == computerRandom) {
            winner();
        }
        else if (totalScore > computerRandom) {
           loss();
        }
    });
    $('#crystal4').on('click', function () {
        totalScore = totalScore + crystal4;
        console.log("New total score: " + totalScore);

        $('#finalScore').text(totalScore);

        if (totalScore == computerRandom) {
            winner();
        }
        else if (totalScore > computerRandom) {
            loss();
        }
    });

});
