var canvas =new fabric.Canvas('myCanvas');
player_x=10
player_y=10
block_image_width = 30;
block_image_height = 30;
var player_object=""
var block_image_object=""
function player_update()
{
    fabric.Image.fromURL("car2.png",function(Img) {
player_object=Img;
player_object.scaleToWidth(150)
player_object.scaleToHeight(140)
player_object.set({
    top:player_y,
    left:player_x
})
canvas.add(player_object)
    
 });
}
  
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed = e.keyCode


if(keypressed == "38"){
    up();
    console.log("Up");

}


if(keypressed == "40"){
    down();
    console.log("down");

}


if(keypressed == "37"){
    left();
    console.log("left");

}


if(keypressed == "39"){
    right();
    console.log("right");

}
}
function up()
{
    if(player_y >0)
    {
        player_y = player_y-10
       
console.log(" x =" + player_x + ", y =" + player_y);
canvas.remove(player_object);
player_update()
        
    }
}


function down()
{
    if(player_y <=456)
    {
        player_y= player_y+10
       
console.log(" x =" + player_x + ", y =" + player_y);
canvas.remove(player_object);
player_update()
        
    }
} 


function left()
{
    if(player_x >0)
    {
        player_x= player_x-10
       
console.log(" x =" + player_x + ", y =" + player_y);
canvas.remove(player_object);
player_update()
        
    }
}


function right()
{
    if(player_x <=850)
    {
        player_x= player_x+10
        
console.log(" x =" + player_x + ", y =" + player_y);
canvas.remove(player_object);
player_update()
        
    }
}