async function bubbleSort(box_containers) {
    /**
     * Starts the Bubble-Sort Algorithm. Starting from the right side, two boxes are compared by their value.
     * If the right box.value is higher than the left box.value, the boxes switch position, and 'swapped' gets
     * turned TRUE. This algorithm continues until no boxes were swapped.
     *
     * @param box_containers Array with all boxes on the website.
     */

    let length = box_containers.length - 1;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < length; i++) {

            const box1 = box_containers[i];
            const box2 = box_containers[i+1];

            turnBoxRed(box1); //Visual Effect: Color boxes and wait
            turnBoxRed(box2);
            await sleep(250);

            if(Number(box_containers[i].textContent) > Number(box_containers[i+1].textContent)) {
                let old = Number(box_containers[i].textContent);
                box_containers[i].textContent = Number(box_containers[i+1].textContent);
                box_containers[i+1].textContent = old;
                swapped = true;
            }

            turnBoxOrange(box1); //Visual Effect: Color boxes and wait
            turnBoxOrange(box2);
            await sleep(250);

        }
    } while(swapped);
}