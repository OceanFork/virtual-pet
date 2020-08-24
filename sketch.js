//Create variables here
var dog, HappyDog,foodS;
var foodStock;
var database;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.1;
  database = firebase.database();
  foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(46,136,87);
  textSize(20);
  fill("white");
  text("press up arrow to feed me", 250, 50);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
      dog.addImage(dogImg1);

  }
  drawSprites();
}
  //add styles here
function readStock(data){
foodS = data.val();


}
function writeStock(x){
  if(x<0){
    x=0;
  }else{
    x=x-1;
  }
foodStock = database.ref('/').update({

Food:x
})



}

