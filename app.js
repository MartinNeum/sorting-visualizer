function addBox() {

    for(var i=0; i<10; i++) {
        var randomNumber = Math.floor(Math.random()*11);
        document.getElementById("app").innerHTML += `<div class="box_container">` + randomNumber + `</div>`;
    }

}
