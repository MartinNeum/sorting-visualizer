function mergeSort(box_containers) {
    for (let i = 0; i < box_containers.length-1; i++) {

        if(box_containers[i+1].textContent < box_containers[i].textContent) {
            console.log(box_containers[i].textContent + ", " + box_containers[i+1].textContent);
        }

    }
}

function quickSort(box_containers) {
    console.log("Quick Sort");

    for (let i = 0; i<10; i++) {
        console.log(box_containers[i].textContent + ", " + box_containers[i+1].textContent);
        console.log(Number(box_containers[i].textContent) > Number(box_containers[i+1].textContent));
    }
}

function heapSort(box_containers) {
    console.log("Heap Sort");
}

function bubbleSort(box_containers) {
    let length = box_containers.length - 1;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < length; i++) {
            if(Number(box_containers[i].textContent) > Number(box_containers[i+1].textContent)) {
                // Swapp, if value of next box is smaller
                let old = Number(box_containers[i].textContent);

                box_containers[i].textContent = Number(box_containers[i+1].textContent);
                box_containers[i+1].textContent = old;
                swapped = true;
            }
        }
    } while(swapped);
}