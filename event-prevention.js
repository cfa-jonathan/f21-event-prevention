document.addEventListener('DOMContentLoaded', function(){
    //// The code below is setup and is not to be altered ////
    let characterCounter = document.querySelector("#characterCounter");
    function updateCharacterCounter() {
        characterCounter.innerText = inputPrevention.value.length;
    }
    //// The code above is setup and is not to be altered ////



    // (1) Modify the following code to allow users to type into the input box in index.html
    let inputPrevention = document.querySelector("#inputPrevention");
    inputPrevention.addEventListener('keydown', function(event){
        updateCharacterCounter();
        event.preventDefault();
    });

    // (2) Modify the following code to prevent users from navigating to YouTube when they click
    //     the alert link
    let clickPrevention = document.querySelector("#clickPrevention");
    clickPrevention.addEventListener('click', function(event){
        alert(inputPrevention.value);
    });

    // (3) Which event type is triggered when a form is submitted?
    //     Either use a search engine or find it on this page: https://www.w3schools.com/jsref/dom_obj_event.asp

    // (4) Add an event listener to our form HTML element that listens for the event type from (3)
    //     AND prevent the form from submitting



    //// The code below is setup and is not to be altered ////
    updateCharacterCounter();
    //// The code above is setup and is not to be altered ////
});