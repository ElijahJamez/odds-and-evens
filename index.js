// TODO: this file! :)
//--------------------------------------------The goal is to create an app that allows a user to enter a number--------------------------------------
//--------------------------------------------------which gets stored into a number bank (variable---------------------------------------------------
//--------------------------------- --The user can then sort the numbers in the bank into one of two categories: odd or even---------------------------




const form = document.querySelector(`form`);                        //  variable for the entire <form> on the page.
const input = document.querySelector(`#input`);                     //  declares the values the user inputs.
const bank = document.querySelector(`#bankOut`);                     //  represents the `Number Bank` value before the sorting stage.
const evens = document.querySelector(`#evensOut`);
const odds = document.querySelector(`#oddsOut`)



form.addEventListener(`submit`, (event) => {                        // activates `submit` event on the form so we can begin storing values.
    event.preventDefault();                                         // prevents page from refreshing.
    bank.innerText = input.value                                    // stores the numbers in the 2nd box (i guessed my way here)
    if (bank % 2)  {                                    
     evens.innerText = input.value
    } else {
        odds.innerText = input.value
    }
});


/*                             I didn't get to finsih this but my logic was i was going to see if they were devisible by 2 or not 
                                      if they were - then i was trying to get them to appear in the `evens` query
                                               else go to the odds - but i wasnt able to get it properly work
                                            


*/





