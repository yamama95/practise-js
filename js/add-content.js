

var age = prompt("what is your age ");
if (age <18) {
    alert ("we recommend simple books for you");
} else {
    alert ("we recommend mental books for you");
}

var showOrder = function(){
    var userOrder; 

var orderImage = '';
while(userOrder !=="mental book" && userOrder !== "healthy book"){
    userOrder = prompt("please choose one of both!");

}
var numberofbooks;
numberofbooks = prompt("how many books you want to buy?");
for(var i =0 ; i < numberofbooks ; i++ ){
    console.log("index is" + i);
    if (userOrder === "mental book"){
        orderImage  = orderImage + '< img src = "https://tse3.mm.bing.net/th?id=OIP.WB56G3InZtgmoCrUmcy4ZQHaDq&pid=Api&H=78&W=160">'
    }
        
     else if (userOrder === "healthy book"){
        orderImage = orderImage + '<img src= "https://tse4.mm.bing.net/th?id=OIP.RJJskbrU41DZ_Zcpc9aknwAAAA&pid=Api&H=205&W=160">'
    } 
}
    
    
    return orderImage;
}

document.write('<p>'+ showOrder() +'</p>');
