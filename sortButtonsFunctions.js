function quickSort(box_containers) {
    console.log("Quick Sort");
}

function heapSort(box_containers) {
    console.log("Heap Sort");
}

function applyStyle(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.fontSize = 'xxx-large';
    }
}

function applyBoxStyle(box) {
    box.style.fontSize = 'xxx-large';
}

function sleep(ms) {
    return new Promise((accept) => {
        setTimeout(() => {
            accept();
        }, ms);
    })
}

function turnBoxRed(box) {
    box.style.backgroundColor = 'red';
    applyStyle(box);
}

function turnBoxOrange(box) {
    box.style.backgroundColor = 'orange';
}

function turnBoxGreen(box) {
    box.style.backgroundColor = 'green';
}

function turnBoxGrey(box) {
    box.style.backgroundColor = 'grey';
}

function turnBoxesRed(box_array) {
    for (let i = 0; i < box_array.length; i++) {
        box.style.backgroundColor = 'red';
        applyStyle(box);
    }
}

function turnBoxesOrange(box_array) {
    for (let i = 0; i < box_array.length; i++) {
        box.style.backgroundColor = 'orange';
    }
}