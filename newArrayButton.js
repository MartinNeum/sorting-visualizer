function createNewArray() {
    deleteArray();

    for(let i=0; i<10; i++) {
        let randomNumber = Math.floor(Math.random()*11);
        document.getElementById("app").innerHTML += `<div class="box_container"><span class="box_container_text">` + randomNumber + `</span></div>`;
    }
}

function deleteArray() {
    const boxCollection = document.getElementsByClassName("box_container");
    let length = boxCollection.length;

    for (let i = 0; i < length; i++) {
        boxCollection[0].parentNode.removeChild(boxCollection[0]);
    }
}