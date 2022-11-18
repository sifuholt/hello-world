
/* 
function rateMyPage(){
    let rating = prompt("how many stars would you rate my page?");
    for (let i = 0; i < rating; i++){
        document.write(",img src='star.jpg' alt="shiny gold star" />
    }
} */

function first(){
alert('Halt!, who goes there??');
console.log('this is my first attempt at this!');
let usersName = prompt("Who is it that wishes to enter?");
console.log("The user's name is: ", usersName);
document.write("Hello and welcome to my first attempt at this, " + usersName);
}
first();


function userName() {
    let user=prompt ("what is your name??");

    if (user === ""){
        user=prompt ("but seriously give me");
    }
    else {
        console.log(user);
        document.write("let's begin adv" + user);
    }

    return user;

}

function exp() {
    document.write("get ready for fun");

if (response == "yes"){
    alert("youve come here");
}

}


function userName(){
    let user=prompt ("what is name");

    while (user=== "") {
        user=prompt ("but serisolky");
    }

    console.log(user);
    document.write("lets begin adcventure" + user);

    return user;
}


function myCount() {
    let count = prompt("pick a number 1-5");
    for (i = 0; i < count; i++) {
        console.log(i);
    }
}

myCount();






