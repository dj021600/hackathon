$(document).ready(function(){
   
//bar function
$("body").keydown(function(event){


    var left = 37;
    var right = 39; 
    var keyDirection = event.which;
    
    console.log('hello')
    
   
    if (keyDirection === left) {
        if ($("#small").offset().left > 14){
            $("#small").css("left", $("#small").offset().left - 30);
        }
    }
    else if (keyDirection === right) {
        if ($("#small").offset().left<1230){
        $("#small").css("left", $("#small").offset().left + 30);
        }
    }
}); 

setTimeout(function(){
    var params = window.location.href.split('?');
    params = params[1];
    window.location.href="end-page.html?" + params;
    
},10000);
    
})// THIS IS WHERE THE GAME STARTS 


