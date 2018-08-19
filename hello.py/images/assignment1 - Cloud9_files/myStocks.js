var myListOfStocks = [];
var strStocks = '';

function myFunction() {
    var myTicker, myName, myPrice, myChange, myMarketCap;

    // Get the value of the input field with id="ticker"
    myTicker = document.getElementById("ticker").value;
    myName = document.getElementById("name").value;
    myPrice = document.getElementById("price").value;
    myChange = document.getElementById("change").value;
    myMarketCap = document.getElementById("marketCap").value;

    function stock(ticker, name, price, change, marketCap) {

        this.ticker = ticker;
        this.name = name;
        this.price = price;
        this.change = change;
        this.marketCap = marketCap;
    }
    var s = new stock(myTicker, myName, myPrice, myChange, myMarketCap);

    myListOfStocks.push(s);
    
    for(var i = myListOfStocks.length - 1; i < myListOfStocks.length; i++)
        {
            strStocks += myListOfStocks[i].name + " " + myListOfStocks[i].ticker  + " " +  myListOfStocks[i].price  + "<br>";
        }    
        
    document.getElementById("demo").innerHTML =strStocks;    
        
    //document.getElementById("demo").innerHTML = s.ticker + myName + myPrice + myChange + myMarketCap;
    //document.getElementById("demo").innerHTML = myTicker + myName + myPrice + myChange + myMarketCap;
}
