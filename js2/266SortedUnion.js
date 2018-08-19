
function uniteUnique(arr) {


    var arr = arguments[0];

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr.length + ' length!!!');
  //var arr = arr.join(',');


  console.log('hello');

  var myArray = [];
  var winners = [];
  var testValue = '';

  myArray = arr.join(',');
  myArray = myArray.sort();

  //console.log(myArray);

  for(var i = 0; i < myArray.length; i++)
  {
    testValue = myArray.pop();
    if(myArray.indexOf(testValue) < 1)
      winners.push(testValue);
  }

  console.log('hello');
  //console.log(winners);

  return winners;
}

var myArray = [[1, 3, 2], [5, 2, 1, 4], [2, 1]];

console.log(uniteUnique(myArray) + ' wins!!!');
//console.log(uniteUnique(myArray));



/*
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/
