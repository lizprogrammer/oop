
function translatePigLatin(str) {


    function isConsonant(myLetter) {

    if (!(myLetter == 'a' ||
      myLetter == 'e' ||
      myLetter == 'i' ||
      myLetter == 'o' ||
      myLetter == 'u')) {

      return true;

    }

      return false;
    };


    var firstLetters = '';

    for(letter in str)
    {
        if (isConsonant(str[letter])){
        firstLetters += str[letter];

        }
        else{
            break;
        }
    }

    var after = str.substring(firstLetters.length, str.length) + firstLetters + "ay";

    console.log(after.length)

  return after;
}

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));