function mergeSort(box_containers) {
    /**
     * Starts the Merge-Sort Algorithm. First, all boxes are splitted recursively until they stand alone.
     * Secondly, the boxes get merged together recursively while sorting them.
     *
     * @param box_containers Array with all boxes on the website
     */

    if(box_containers.length > 1) {
        const splitted = split(box_containers);
        const left = [...splitted[0]];
        const right = [...splitted[1]];

        mergeSort(left); // Recursive split
        mergeSort(right);

        merge(left, right); // Recursive merge
    }

    applyStyle(box_containers); // Setup style for changed boxes
}

function split(box_containers) {
    /**
     * Split up the box-array to single pieces into 'left'-array and 'right'array.
     * Is called recursively from mergeSort().
     *
     * @param box_containers Array with boxes which should get splitted
     * @return Array Returns a 2-dimensional Array with left- and the right- side
     */

    let middle = Math.floor(box_containers.length / 2);
    const left = [];
    const right = [];

    for (let i = 0; i < middle; i++) {
        left.push(box_containers[i]);
    }

    for (let i = middle; i < box_containers.length; i++) {
        right.push(box_containers[i]);
    }

    return [left, right];
}

function merge(left, right) {
    /**
     * Merges boxes to one Array, which are provided in the 'left' and 'right' Array. The algortihm starts with the
     * first box in each array. If the right box.value is higher than the left box.value, it will get moved behind
     * position of the left box. Is called recursively by mergeSort().
     *
     * @param left,right Arrays with boxes included, which should get merged together
     */

    let pointerLeft = 0;
    let pointerRight = 0;

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
    /**
     * Puts the boxes in the right position during the merge-process. The right box gets to the position of the left
     * box. All boxes, rangeing from the left box.position to right box.position get moved one position to the right.
     *
     * @param pointerLeft Position of the left box.
     * @param pointerRight Position of the right box.
     * @param left Array with all boxes on the left side
     * @param right Array with all boxes on the right side
     */

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