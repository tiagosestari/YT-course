// document.getElementById("count-el").innerText = 5;



// console.log(count)

let countEl = document.getElementById("count-el")
let count = 0;

//Increment function to increase our counter as we click it
const increment = () => {
    count++;
    countEl.textContent = count;
}


//Save functions that logs out the current counter
let savedCounters = ""
let savedP = document.getElementById("saved-counters")
const save = () => {
    savedCounters = count + " - "; //`${count} - `;
    //Here you can use the string literal that is commented in the line above
    //with .innerText or use textContent and count + " - ". If you use the latter
    //with .innerText, it will result in some lost blank spaces since innerText 
    //does not handle non human readable elements (like spaces, css styling or scripts)
    //in consideration
    savedP.textContent += savedCounters;
    count = 0;
    countEl.textContent = count;
}

//Reset function to make our counter goes back to zero
const reset = () => {
    count = 0;
    countEl.textContent = count;
    savedP.textContent = "Saved:";
}
 

//Counter function test:
    // const raceCounter = (time) => {
    //     for(;time >= 0; time--) {
    //         console.log(time);

    //     }
    //     console.log("GO!")
    // }
    // raceCounter(5);