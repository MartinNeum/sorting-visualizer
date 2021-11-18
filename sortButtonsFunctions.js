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

function sleep(ms) {
    return new Promise((accept) => {
        setTimeout(() => {
            accept();
        }, ms);
    })
}

function turnBoxRed(box) {
    box.style.backgroundColor = 'red';
}

function turnBoxOrange(box) {
    box.style.backgroundColor = 'orange';
}