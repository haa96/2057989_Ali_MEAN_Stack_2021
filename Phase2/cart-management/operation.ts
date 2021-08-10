function add(name:string, price:number){
    const localStg = localStorage.getItem('myArray');
	let myArray:any[];
	if (localStg===null){
		myArray=[];
	 }
	else{
	 	myArray = JSON.parse(localStg);
	 }

	var data = { 
        "Name": name,
        "Price": price
    };
    
	myArray.push(data);
	localStorage.setItem('myArray',JSON.stringify(myArray));

  let x:any = "<h4> Items: ";
  let y:any = myArray.length;
  let z:any = "</h4>";
  document.getElementById("items").innerHTML= x+y+z;
}

function checkIfEmpty(){

    if(localStorage.getItem("myArray")==null)
    {
        let empty:string="<h4> Items: 0 </h4>";
        document.getElementById("items").innerHTML =empty;
    }
    let itmesArray:any = localStorage.getItem("myArray");
    let itemsJson:any = JSON.parse(itmesArray);
    
    let x1:any = "<h4> Items: ";
    let y1:any = itemsJson.length;
    let z1:any = "</h4>";
    document.getElementById("items").innerHTML= x1+y1+z1;
}

function emptyData(){
    localStorage.clear();
    let x:any = "<h4 style=color: aliceblue> Items: 0 </h4>";
    document.getElementById("items").innerHTML= x;

}
function checkout() {

	if(localStorage.getItem("myArray")==null)
    {
        let empty:string="Your cart is empty!";
        document.getElementById("total").innerHTML =empty;
    }
    else{
    let itmesArray:any = localStorage.getItem("myArray");
    let itemsJson:any = JSON.parse(itmesArray);
	let tableContent:string="";
	var startTable:string =`
    <table class=table>
    <thead class=thead-dark>
        <tr>
            <th scope=col>Name</th>
            <th scope=col>Price</th>
        </tr>
    </thead>
    
   `;
 	let i2:number=0;
    let sum:number=0;
    let i1:number=0
    let str:string="";
    let num:number=0;

    while (i1<itemsJson.length) {
        str = JSON.stringify(itemsJson[i1].Price);
        num = Number(str);
        sum += num;
        i1++;
    }

 	while(i2 < itemsJson.length){
    tableContent +="<tr><td>"+itemsJson[i2].Name+"</td><td>"+itemsJson[i2].Price+"</td></tr>";
    i2++;
 	}
    
    //let total:string = "<th styles=color:red> <td> Total: </td> <td>"+sum+"</td></th>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("main").innerHTML =tableContent;
 	var endTable:string="</table>"
    
    let total:string = " Total = "+sum;
    document.getElementById("total").innerHTML =total;
}
}