'use strict'

/**
 * increment and decrement
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
 * createCounter
 */

let createCounter = {
    init: function () {
        this.makeCounterBtn = document.getElementById('make-counter-btn');
        this.countersElem   = document.getElementById('counters');
    
        this.events();
    },

    events: function () {
        this.makeCounterBtn.addEventListener('click', this.addElement.bind(this) );
    },

    addElement: function () {
        this.classCounter();

        let elem = document.createElement('div');
        elem.className = `counter counter-${this.classCounter()}`;
        elem.innerHTML = `
            <button class="btn btn-round">+</button>
            <input type="number" value="0">
            <span>:</span>
            <input type="number" value="0">
            <button class="btn btn-round">+</button>
            `;
        this.countersElem.appendChild(elem);

        let finishButton = document.createElement('div');
        finishButton.className = 'finish-button';
        finishButton.innerHTML = '<button>Finish</button>';
        this.countersElem.appendChild(finishButton);
    },

    classCounter: function() {
        this.counterElements = document.querySelectorAll('.counter');
        return this.classCount    = this.counterElements.length;
    }
}

createCounter.init();


/**
 * TODO: Add finish button. Wrap each result in accordion.
 */