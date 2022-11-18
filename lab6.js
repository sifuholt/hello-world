

function question1() {
    let input = prompt("what is your name?");
    if(input.length === 0) {
        input = prompt("no really, what is your name?");
    }
    document.write("hello and welcome to my place in the universe " + input);
    return input;
}

function question2() {
    let input = prompt("why do you need my name?");
    document.write("because i like to know who i am speaking to." + input);
    return input;
}

function question3() {
    let input = prompt("well, what kind of food do you like?");
    document.write("well, i like anything that is tasty." + input);
    return input;
}

// function question4() {
    // if (window.confirm("are you happy?")){
        // document.write("depends on how you define happy.")
    // }
// }



function rateMyPage(){
    let rating = prompt("how many stars would you rate my page?");
    for (let i = 0; i < rating; i++){
        // document.write("<img src='star.jpg' alt='shiny gold star' />");
        document.write("STAR ")
    }
}


