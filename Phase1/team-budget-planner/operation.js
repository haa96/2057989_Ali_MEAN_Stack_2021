
function saveData(){
	const localStg = localStorage.getItem('myArray');
	let myArray;
	if (localStg===null){
		myArray=[];
	 }
	else{
	 	myArray = JSON.parse(localStg);
	 }

	var data = { 
        "client": document.getElementById("c_name").value,
        "project": document.getElementById("p_name").value,
        "budget": document.getElementById("budget").value
    };
    
	myArray.push(data);
	localStorage.setItem('myArray',JSON.stringify(myArray));
}

function showData() {

	var empObj = localStorage.getItem("myArray");
    var empJson = JSON.parse(empObj);
    //alert(empJson.length);
    
	var tableContent="";
	var startTable ="<table><tr><th>Client</th><th>Project</th><th>Budget</th></tr>";
 	var i=0;
 	while(i < empJson.length){
    tableContent +="<tr><td>"+empJson[i].client+"</td><td>"+empJson[i].project+"</td><td>"+empJson[i].budget+"</td></tr>"
    
    
    i++;
 	}
 	tableContent = startTable+tableContent+endTable
 	document.getElementById("main").innerHTML =tableContent;
 	var endTable="</table>"
    
}
	