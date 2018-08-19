function myReplace(str, before, after) {

    var myArray = str.split(" ");

    for(var words in myArray){
        if (myArray[words] == before)
        {
            if(myArray[words][0] !=  myArray[words][0].toLowerCase())
            {
                after = after[0].toUpperCase() + after.substring(1, after.length);
            }


            myArray[words] = after;
        }
        //console.log(myArray[words]);
     }


    var res = myArray.join(" ");

    return res;

}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");




//myString = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

myString = myReplace("A quick brown fox A over the lazy dog", "A", "b");


console.log(myString);