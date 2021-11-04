function mergeSort(box_containers) {
    // Starts Merge Sort Algorithm.
    // First, all boxes are splitted until they stand alone. Secondly, the boxes get sorted while merging them

    // Split up the box-array to single pieces into 'left'-array and 'right'array
    if(box_containers.length > 1) {
        let middle = Math.floor(box_containers.length / 2);
        const left = [];
        const right = [];

        // Save 'left' boxes
        for (let i = 0; i < middle; i++) {
            left.push(box_containers[i]);
        }

        // Save 'right' boxes
        for (let i = middle; i < box_containers.length; i++) {
            right.push(box_containers[i]);
        }

        // Recursive split until only one box remains
        mergeSort(left);
        mergeSort(right);

        // Recursive merge until all boxes are sorted and merged together
        merge(left, right);
    }

    applyStyle(box_containers);
}

function merge(left, right) {
    let pointerLeft = 0;
    let pointerRight = 0;

    // Lookup, if value form 'right' is higher as value from 'left'.
    // If its true, set the lower value on right array-position.
    while (pointerLeft < left.length && pointerRight < right.length){
        if(Number(left[pointerLeft].textContent) < Number(right[pointerRight].textContent)) {
            pointerLeft++;
        } else {
            insertHigherValueOnCorrectPosition(pointerLeft, pointerRight, left, right);
            pointerRight++;
            pointerLeft++;
        }
    }

    // Double check, if all values on 'right' are in order (left side check not needed)
    let newRightPointer = 0;
    while(pointerRight < right.length && newRightPointer != pointerRight) {
        if(Number(right[newRightPointer].textContent) < Number(right[pointerRight].textContent)) {
            newRightPointer++;
        } else {
            let old_value = Number(right[pointerRight].textContent);
            for (let i = pointerRight; i > newRightPointer; i--) {
                right[i].textContent = Number(right[i-1].textContent);
            }
            right[newRightPointer].textContent = old_value;
            pointerRight++;
            newRightPointer++;
        }
    }
}

function insertHigherValueOnCorrectPosition(pointerLeft, pointerRight, left, right) {
    // Move remaining boxes between pointers one position to the right.

    let move_value = Number(right[pointerRight].textContent);

    for (let i = pointerRight; i > 0; i--) {
        right[pointerRight].textContent = Number(right[pointerRight-1].textContent);
    }
    right[0].textContent = Number(left[left.length-1].textContent);

    for (let i = left.length-1; i > pointerLeft ; i--) {
        left[i].textContent = Number(left[i-1].textContent);
    }
    left[pointerLeft].textContent = move_value;
}

function quickSort(box_containers) {
    console.log("Quick Sort");

}

function heapSort(box_containers) {
    console.log("Heap Sort");
}

function bubbleSort(box_containers) {
    let length = box_containers.length - 1;
    let swapped;

    do {
        swapped = false; // Repeat algorithm while boxes were swapped at least once

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

    applyStyle(box_containers);
}

function applyStyle(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.fontSize = 'xxx-large';
    }
}