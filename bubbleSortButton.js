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