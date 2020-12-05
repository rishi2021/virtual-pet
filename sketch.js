var database
var dog 
var item 

function preload(){
 dog_img1 = loadImage("Happy.png")
 dog_img2 = loadImage("Dog.png")
}

function setup(){
  database = firebase.database();
  canvas = createCanvas(900,900);
  var food_left = database.ref('Food')
  food_left.on("value",readFood)
dog = createSprite(200,200,50,50)
dog.addImage(dog_img2);
dog.scale = 0.2;

 
}

function draw(){
background("blue");
if(keyWentDown(UP_ARROW)){
  writeFood(item)
  dog.addImage(dog_img1)
}
drawSprites()
fill("white");
text ("Food left:"+item,800,100)
}
 function writeFood(x){
database.ref('/').update({
  Food:x
})
 }

 function readFood (data){
    item = data.val()
 }

