var bookName=document.getElementById("text1")
var bookLink=document.getElementById("text2")
var searchWeb=document.getElementById("searchProduct")
var arrayList=[];
if(localStorage(arrayList)!=null){
   arrayList=JSON.parse(localStorage.getItem("korya"))
   design()
}
else{
    arrayList=[]
}
function addProduct(){
    if(validName()&&validLink()){
    var addProduct={
        Name:bookName.value,
        Link:bookLink.value
    }
    arrayList.push(addProduct)
    
    localStorage.setItem("korya",JSON.stringify(arrayList))
    document.getElementById("searchProduct").style.display="block";
    design()
}
}
function design(){
    var temp=""
    for(var i=0;i<arrayList.length;i++){
        temp+=`<table id="tableDesign" class="table table-dark table-striped">
        <tr>
            <td>`+arrayList[i].Name+`</td>
            <td><a href="`+arrayList[i].Link+`" target="_blank"><button class="btn btn-warning btn-lg">visit</button></td></a>
            <td><button class="btn btn-warning btn-lg" onclick="deleteProduct(`+i+`)">delete</button></td>
        </tr>
    </table>`

    }
    document.getElementById("tableDesign").innerHTML=temp
    
}
function deleteProduct(index){
    arrayList.splice(index,1) 
    
    localStorage.setItem("korya",JSON.stringify(arrayList))
    design()
}
function validName(){
    var y=false
var x=/^[A-Z][a-z]{1,10}$/
if(x.test(bookName.value)){
    document.getElementById("validBookName").style.display="none" ;
    y=true
}
else{
    document.getElementById("validBookName").style.display="block";
    document.getElementById("audio1").innerHTML= `<audio autoplay class="koryadis2" src="WhatsApp Audio 2022-05-20 at 2.08.13 PM.mp4"></audio>`
    y=false
}
return y ;
}
function validLink(){
    var y=false
var x=/^(https)[:][/][/](www)[\.][a-z]{1,15}[\.][a-z]{2,3}$/
if(x.test(bookLink.value)){
    document.getElementById("validBookLink").style.display="none" ;
    y=true
}
else{
    document.getElementById("validBookLink").style.display="block";
   document.getElementById("audio2").innerHTML= `<audio autoplay class="koryadis2" src="WhatsApp Audio 2022-05-20 at 2.08.13 PM.mp4"></audio>`
    y=false
}
return y ;
}
function clearProduct(){
    bookName.value="";
    bookLink.value="";
}

function searchProduct(){
    var temp=""
    for(var i=0;i<arrayList.length;i++){
        if(arrayList[i].Name.toLowerCase().includes(searchWeb.value.toLowerCase())){
            temp+=`<table id="tableDesign" class="table table-dark table-striped">
            <tr>
                <td>`+arrayList[i].Name+`</td>
                <td><a href="`+arrayList[i].Link+`" target="_blank"><button class="btn btn-warning btn-lg">visit</button></td></a>
                <td><button class="btn btn-warning btn-lg" onclick="deleteProduct(`+i+`)">delete</button></td>
            </tr>
        </table>`
        }
    }
    document.getElementById("tableDesign").innerHTML=temp
}
