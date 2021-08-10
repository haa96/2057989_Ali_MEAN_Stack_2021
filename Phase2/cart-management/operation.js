function add(name, price) {
    var localStg = localStorage.getItem('myArray');
    var myArray;
    if (localStg === null) {
        myArray = [];
    }
    else {
        myArray = JSON.parse(localStg);
    }
    var data = {
        "Name": name,
        "Price": price
    };
    myArray.push(data);
    localStorage.setItem('myArray', JSON.stringify(myArray));
    var x = "<h4> Items: ";
    var y = myArray.length;
    var z = "</h4>";
    document.getElementById("items").innerHTML = x + y + z;
}
function checkIfEmpty() {
    if (localStorage.getItem("myArray") == null) {
        var empty = "<h4> Items: 0 </h4>";
        document.getElementById("items").innerHTML = empty;
    }
    var itmesArray = localStorage.getItem("myArray");
    var itemsJson = JSON.parse(itmesArray);
    var x1 = "<h4> Items: ";
    var y1 = itemsJson.length;
    var z1 = "</h4>";
    document.getElementById("items").innerHTML = x1 + y1 + z1;
}
function emptyData() {
    localStorage.clear();
    var x = "<h4 style=color: aliceblue> Items: 0 </h4>";
    document.getElementById("items").innerHTML = x;
}
function checkout() {
    if (localStorage.getItem("myArray") == null) {
        var empty = "Your cart is empty!";
        document.getElementById("total").innerHTML = empty;
    }
    else {
        var itmesArray = localStorage.getItem("myArray");
        var itemsJson = JSON.parse(itmesArray);
        var tableContent = "";
        var startTable = "\n    <table class=table>\n    <thead class=thead-dark>\n        <tr>\n            <th scope=col>Name</th>\n            <th scope=col>Price</th>\n        </tr>\n    </thead>\n    \n   ";
        var i2 = 0;
        var sum = 0;
        var i1 = 0;
        var str = "";
        var num = 0;
        while (i1 < itemsJson.length) {
            str = JSON.stringify(itemsJson[i1].Price);
            num = Number(str);
            sum += num;
            i1++;
        }
        while (i2 < itemsJson.length) {
            tableContent += "<tr><td>" + itemsJson[i2].Name + "</td><td>" + itemsJson[i2].Price + "</td></tr>";
            i2++;
        }
        //let total:string = "<th styles=color:red> <td> Total: </td> <td>"+sum+"</td></th>";
        tableContent = startTable + tableContent + endTable;
        document.getElementById("main").innerHTML = tableContent;
        var endTable = "</table>";
        var total = " Total = " + sum;
        document.getElementById("total").innerHTML = total;
    }
}
