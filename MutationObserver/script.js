// catch changes in DOM 

const targetNode = document.getElementById('some-id');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) { // mutationList: MutationRecord
    // Use traditional 'for loops' for IE 11
    console.log(mutationsList);
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        } 
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();



(function(){
    var getDiv = document.getElementById("some-id");
    var getBody = document.querySelector('body');
    let htmlElement = document.createElement('div');
    htmlElement.innerText = 'hi I am modified div'
    setTimeout(() => {
        getDiv.innerText = 'this is my alexa'; // trigger childList
        getDiv.style.width = "200px"; // trigger attributes

        getBody.appendChild(htmlElement);

    }, 2000);
})();