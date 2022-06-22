function addUser(){

    player_1_var = document.getElementById("player_1_name").value;
    player_2_var = document.getElementById("player_2_name").value;

    localStorage.setItem("player_1_name", player_1_var);
    localStorage.setItem("player_2_name", player_2_var);

    window.location.replace("quiz_game_page.html");

}