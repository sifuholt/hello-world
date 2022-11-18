


















<body>
    <script>
        alert("hey there, how can we help?");
        console.log("choose wisely!");
        let usersName = prompt("who is asking?");
        console.log("it is I: " + usersName);
        document.write("hello and come on in, " + usersName);

        let response = prompt("do you like puerto rican food?")

        if (response == "yes") {
            alert("you are in the right place for sure!");
            document.write("you are in the right place for sure!");
        } else if (response == "no") {
            alert("why would you come here then?");
            document.write("why would you come here then?");
        } else {
            alert("why would you say that?");
            document.write("why would you say that?");
        }
        
    </script>


</body>











function rateMyPage(){
    let rating = prompt("how many stars would you rate my page?");
    for (let i = 0; i < rating; i++){
        document.write(",img src='star.jpg' alt="shiny gold star" />
    }
}


