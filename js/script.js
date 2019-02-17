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
 * Actions
 */
// makeCounterBtn.addEventListener('click', function() {
//     createCounter.init();
// });

/**
 * Functions
 */

let createCounter = {
    init: function () {
        this.counterElem    = document.querySelectorAll('.counter');;
        this.counterClass   = `counter-${this.counterElem.length}`;
        this.makeCounterBtn = document.getElementById('make-counter-btn');
        this.countersElem   = document.getElementById('counters');
    
        this.events();
    },

    events: function () {
        this.makeCounterBtn.addEventListener('click', this.addElement.bind(this) );
    },

    addElement: function () {
        let elem = document.createElement('div');
        elem.className= `counter ${this.counterClass}`;
        elem.innerHTML = `
            <button class="btn btn-round">-</button>
            <input type="number">
            <button class="btn btn-round">+</button>
            `;
        this.countersElem.appendChild(elem);
    }
}

createCounter.init();