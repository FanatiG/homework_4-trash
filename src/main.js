"use strict";
    var max = document.getElementById('progress').max;
    var i = 0;

    function addProgress() { ////////////////////////////////////////////
        if (document.getElementById('progress').value <
            max) {
            document.getElementById('progress').value++;
        }
        if (document.getElementById('progress').value == 100) {
            // document.getElementById('progress').value = 0;
            return;
        }
        if (i != 0) {
            console.log('00000000000000000000000000000000000000');
            return;
        }
        setTimeout(addProgress, 50);
        console.log("boop!");
    }; //////////////////////////////////

    function startButton() {
        i--;
        document.getElementById('progress').max = max;
        console.log("GO!");
        addProgress();
    }
    /////////////////////////////////////////////////////////////////////
    function stopButton() {
        i++;
        console.log("HALT!");
        let currVal = document.getElementById('progress').value;
        document.getElementById('progress').max = currVal;
        // addProgress = function () {};
        console.log(max);
    }