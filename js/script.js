'use strict'

/**
 * General function
 */

var makeCounter = function() {
    var privateCounter = 0;
    var changeBy = function(val) {
        privateCounter += val;
    }

    return {
        increment: function() {
            changeBy(1)
        },
        decrement: function() {
            changeBy(-1)
        },
        value: function() {
            return privateCounter;
        }
    }
};

var Counter1 = makeCounter();

/**
 * Work with DOM
 */


/**
 * Variables
 */
let makeCounterBtn = document.getElementById('make-counter-btn');
let countersElem = document.getElementById('counters');

/**
 * Actions
 */
makeCounterBtn.addEventListener('click', function() {
    addElement();
});

/**
 * Functions
 */

function addElement() {
    let counterElem = document.querySelectorAll('.counter');
    let counterClass = `counter-${counterElem.length}`;

    let elem = document.createElement('div');
    elem.className= `counter ${counterClass}`;
    elem.innerHTML = '<button>-</button><input type="number"><button>+</button>';
    countersElem.appendChild(elem);
};

/**
 * TODO: Split on different functions. Create function with object.
 */

