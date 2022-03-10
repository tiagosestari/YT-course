// document.getElementById("count-el").innerText = 5;



// console.log(count)

let countEl = document.getElementById("count-el")
let count = 0;

//Increment function to increase our counter as we click it
const increment = () => {
    count++;
    countEl.innerText = count;
}


//Save functions that logs out the current counter
let savedCounters = ""
const save = () => {
    savedCounters+= ` ${count} -`
    console.log(savedCounters)
}

//Reset function to make our counter goes back to zero
const reset = () => {
    count = 0;
    countEl.innerText = count;
}
 

//Counter function test:
    // const raceCounter = (time) => {
    //     for(;time >= 0; time--) {
    //         console.log(time);

    //     }
    //     console.log("GO!")
    // }
    // raceCounter(5);