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

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}