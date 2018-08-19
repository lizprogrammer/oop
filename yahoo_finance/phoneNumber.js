function telephoneCheck(str) {


isNumber = function(obj, strict) {
    var strict = strict === true ? true : false;
    if (strict) {
        return !isNaN(obj) && obj instanceof Number ? true : false;
    } else {
        return !isNaN(obj - parseFloat(obj));
    }
}


    var pass = false;
    var myArray = str.split('');

    print(myArray);

   /* if(Number.isInteger(1))
    print("It's an integer!");
    */


 if
    (isNumber(myArray[0]) && isNumber(myArray[1]) && isNumber(myArray[2]) && myArray[3] == '-' && isNumber(myArray[4]) && isNumber(myArray[5]) && isNumber(myArray[6]) && myArray[7]== '-'
    && isNumber(myArray[8]) && isNumber(myArray[9]) && isNumber(myArray[10]) && isNumber(myArray[11]))
    {
        pass = true;
        print("true!!!")
    }



/*    if(
        isNumber(myArray[0]) &&
        isNumber(myArray[1]) &&
        isNumber(myArray[2]) &&
        isNumber(myArray[3]) == '-' &&
        isNumber(myArray[4]) &&
        isNumber(myArray[5]) &&
        isNumber(myArray[6]) &&
        isNumber(myArray[7])  == '-' &&
        isNumber(myArray[8]) &&
        isNumber(myArray[9]) &&
        isNumber(myArray[10]) &&
        isNumber(myArray[11])
    )
    {
        pass = true;
        print("true!!!")
    }*/


    print(pass);




   /* ||
    ||
    ||
    ||
    ||*/

  // Good luck!
  return true;
}



telephoneCheck("555-555-5555");


