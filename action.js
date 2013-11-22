$(document).ready(function () {


//questions array
    var questions = [{
        question: "Which movie/tv show was based on a graphic novel?",
        choices: ["Watchmen", "Walking Dead", "Hellboy", "None of the above"],
        questionValue: 0,
        correct: 3,
        answerText: "The answer is none of the above. They were all serialized comic books before being collected into trade paperbacks. The term 'graphic novel' traditionally refers to a story relased as a single book."
    }, {
        question: "Which publisher published Neil Gaiman's Sandman series?",
        choices: ["DC", "Marvel", "Image", "Dark Horse"],
        questionValue: 1,
        correct: 0,
        answerText: "The answer is DC. DC comics has an imprint called Vertigo that published Sandman."
    }, {
        question: "Who originally wrote Batman?",
        choices: ["Stan Lee", "Bill Finger", "Bob Kane", "Todd McFarlane"],
        questionValue: 2,
        correct: 1,
        answerText: "The answer is Bill Finger. While Bob Kane typically got all the credit for creating Batman, Bill Finger wrote the stories and co-created Batman with Kane who was responsible for drawing the comic."
    }, {
        question: "How much money did comic sales make in the United States in 2012?",
        choices: ["$5 Billion", "$500 Million", "$20 Million", "None of the above"],
        questionValue: 3,
        correct: 1,
        answerText: "The answer is $500 million. In the US in 2012 comic sales made around $500 million dollars ($474.61 million). To put this in perspective in the same year video games made $14.8 billion and movies made $1.28 billion."
    }];


    var userAnswers = 0;
    var userAnswer = "";
    var i = 0
    console.log("question" + i)

	$("#questionContainer").html(questions[i].question);
    $("#1stChoice").append(questions[i].choices[0]);
    $("#2ndChoice").append(questions[i].choices[1]);
    $("#3rdChoice").append(questions[i].choices[2]);
    $("#4thChoice").append(questions[i].choices[3]);
   
//submit button
    $('body').on('click', 'input:submit', function () {
        var userAnswer = $("input[type='radio']:checked").val();
        
        if (userAnswer == undefined) {
            $("#result").html("Please select an option.");
         }

        else if (userAnswer == questions[i].correct) {
            console.log(userAnswer);
            console.log(questions[i].correct);
            console.log("CORRECT");
            $("#result").html("That's correct! ");
            userAnswers += 1;
            console.log(userAnswers);
            $("#answerContainer").html(questions[i].answerText);
            $("input:submit").hide();
            $("#next").show();
            $("#answersCorrect").show();
            $("#answersCorrect").html("Questions answered correctly: " + userAnswers +" of 4")
                if (i === 3) {
                console.log("complete")
                $("input:submit").hide();
                $("#restart").show();
                $("#next").hide();

                
                } 
            }

            else {
            console.log("incorrect");
            $("#result").html("I'm afraid that's incorrect. ");
            $("#answerContainer").html(questions[i].answerText);
            $("input:submit").hide();
            $("#next").show();
                if (i === 3) {
                console.log("complete")
                $("input:submit").hide();
                $("#restart").show();
                $("#next").hide();
                $
                } 
            }
        
    });


// Next question button
    $('body').on('click', '#next', function () {
        $('input:submit').show();
    	$("#next").hide();
        i = i + 1;
        console.log("question" + i)
        // I wanted to put the code below into a variable, but every time I tried something wonky happened
        // I'm sure with enough time I could figure it out, but this got the job done.
        $("#questionContainer").html(questions[i].question);
        $("#1stChoice").html(questions[i].choices[0]);
        $("#2ndChoice").html(questions[i].choices[1]);
        $("#3rdChoice").html(questions[i].choices[2]);
        $("#4thChoice").html(questions[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
    });





// Play again? button
    $('body').on('click', '#restart', function () {
        $(this).hide();
        $("#next").hide();
        i = 0;
        $("#questionContainer").html(questions[i].question);
        $("#1stChoice").html(questions[i].choices[0]);
        $("#2ndChoice").html(questions[i].choices[1]);
        $("#3rdChoice").html(questions[i].choices[2]);
        $("#4thChoice").html(questions[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
        $('input:submit').show();
        $("#answersCorrect").html("")
    });

	$("#next").hide();
    $("#restart").hide();
    $("#answersCorrect").hide();
});