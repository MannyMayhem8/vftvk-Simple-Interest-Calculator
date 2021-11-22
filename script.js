function compute() {
    //This computes the numbers input
    var principal = (document.getElementById("principal").value);
    var rate = (document.getElementById("rate").value);
    var years = (document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + parseInt(years);
    //This alerts the result after inputting the numbers
    document.getElementById("result").innerHTML = 
        "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

}
    //This changes the value of the slider
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}
    //This is for validation and for alert
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}