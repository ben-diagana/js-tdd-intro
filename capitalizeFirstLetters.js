//capitalizeFirstLetters.js

const assert = require('assert')


//verifier que c'est une fonction
assert.strictEqual(typeof capitalizeFirstLetters,'function');

// check that fnction accepted String
//assert.strictEqual(typeof capitalizeFirstLetters, 'string')


//Check that transformation is correct for many word
assert.strictEqual(capitalizeFirstLetters('i am Student'), 'I Am Student')

//check that transform is correctfor one word
assert.strictEqual(capitalizeFirstLetters('a'), 'A');


// check when input is empty
assert.strictEqual(capitalizeFirstLetters(''), '');





function capitalizeFirstLetters(input) {

        //conversion des mes entrées en tableau separeé par des espaces avec spli
        let sentence = input.split(' ');

        //Declaration tableau vide
        let output = [];

        //boucler sur le tableau sentace
        sentence.forEach(word => {

        // recperation de la premiere lettre de chaque mot
        let firstLetters = word.charAt(0).toUpperCase();

        //remplacement des minuscules par des majuscules
        let change = word.replace(word.charAt(0), firstLetters);
        output.push(change),
        output.join(' ');
        
    });
};
  
   