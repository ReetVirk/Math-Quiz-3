function send(){

    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;

    full_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4 id = 'question_'>" + number1 + " x " + number2 + "</h4>";
    input_box = "<br> <label id = 'label_answer'> Answer: </label> <input type = 'text' id = 'input_answer'>";
    check_button = "<br> <br> <button onclick = 'check()'> Check </button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";

}