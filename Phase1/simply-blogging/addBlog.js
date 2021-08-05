var count = 0;

function addBlog(){

  document.getElementById("emptyp").innerHTML = ""; // empty p tag {oops, no blogs}

  
  var t = document.getElementById("title").value;
  var a = document.getElementById("article").value;
  var img = document.getElementById("image").value;
  if (document.getElementById("title").value =="")
    t = "No Title";
  if (document.getElementById("article").value=="")
    a= "No Article!";
  if (document.getElementById("image").value=="")
    img = "https://i0.wp.com/post.healthline.com/wp-content/uploads/2018/06/fruit-1296x728-header.jpg?w=1155&h=1528"
    var x1 = "<div class= card style= width: 18rem margin-bottom: 35px> <img class= card-img-top src="
    var x2 = img;
    var x3 = "alt=Card image cap> <div class=card-body><h1 class=card-title style=font-family: Times New Roman, Times, serif>";
    var x4 = t;
    var x5 = "</h5><p class=card-text style=font-family: Times New Roman, Times, serif>";
    var x6 = a;
    var x7 = "</p><input type=button value=Read class= btn-info></div></div>";
   
    var g;
    g= document.createElement('div');
    g.id = count;
    g.className = 'col-4';
    document.getElementById("row").appendChild(g);
    var abc = x1+x2+x3+x4+x5+x6+x7;
    document.getElementById(g.id).innerHTML=abc; 
    count++;
}