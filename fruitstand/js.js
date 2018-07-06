window.onload = function() {
    var fruits = {
        'oranges': document.getElementById('orangeCounter').innerHTML,
        'bananas': document.getElementById('bananaCounter').innerHTML,
        'mangosteens': document.getElementById('mangosteenCounter').innerHTML,
        'pears': document.getElementById('pearCounter').innerHTML
    }
   


    document.getElementById('orangeButton').onclick = function() {
        if (fruits['oranges'] > 0) {
            fruits['oranges'] --;
            document.getElementById('orangeCounter').innerHTML = fruits['oranges']; 
        }
    }

    document.getElementById('orangeAddOne').onclick = function() {
             fruits['oranges'] ++;
            document.getElementById('orangeCounter').innerHTML = fruits['oranges']; 
         }

    document.getElementById('bananaButton').onclick = function() {
        if (fruits['bananas'] > 0){
        fruits['bananas'] --;
        document.getElementById('bananaCounter').innerHTML = fruits['bananas'];
        }
    }

    document.getElementById('bananaAddOne').onclick = function() {
        fruits['bananas'] ++;
       document.getElementById('bananaCounter').innerHTML = fruits['bananas']; 
    }

    document.getElementById('mangosteenButton').onclick = function() {
        if (fruits['mangosteens'] > 0) {
        fruits['mangosteens'] --;
        document.getElementById('mangosteenCounter').innerHTML = fruits['mangosteens'];
        }
    }

    document.getElementById('mangosteenAddOne').onclick = function() {
        fruits['mangosteens'] ++;
       document.getElementById('mangosteenCounter').innerHTML = fruits['mangosteens']; 
    }

    document.getElementById('pearButton').onclick = function() {
        if (fruits['pears'] > 0) {
        fruits['pears'] --;
        document.getElementById('pearCounter').innerHTML = fruits['pears'];
        }
    }

    document.getElementById('pearAddOne').onclick = function() {
        fruits['pears'] ++;
       document.getElementById('pearCounter').innerHTML = fruits['pears']; 
    }



}