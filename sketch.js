//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload(){
dog = loadImage("images/dogImg.png")
happyDog = loadImage("images/happy.png")

}


  
  


function setup() {
  createCanvas(500,500)
  database = firebase.database();
dog = createSprite(250,250,200,200)
foodStock=database.ref('Food');
foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)
  drawSprites();
  text('DOGGIE TREATS LEFT',125,33);
  //add styles here
  if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happyDog);


  }

}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({

    Food:x
  })
}


