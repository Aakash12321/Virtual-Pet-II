//Create variables here
var dogImg,dog;
var database;
var foodS,foodStock;
var milk;
var lastFed;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
  milk=loadImage("images/Milk.png")
}

function setup() {
  database=firebase.database();
  createCanvas(1000, 400);
  foodObj=new Food()
  dog=createSprite(800,200,150,150);
  dog.addImage(dogImg)
  dog.scale=0.3
  input=createInput("Enter your dog's name")
  input.position(500,95)
  feed=createButton("Feed your dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)
  addFood=createButton("Add food to storage")
  addFood.position(800,95)
  addFood.mousePressed(addFood)
  foodStock=database.ref("Food");
  foodStock.on("value",readStock)
}


function draw() {  
  background(255,203,44)
  foodObj.display();
  fedTime=database.ref('FeedTime'); 
  fedTime.on("value",function(data)
  { 
    lastFed=data.val(); 
  }); 
    fill(255,255,254); 
    textSize(15); 
    if(lastFed>=12){ 
      text("Last Feed : "+ lastFed%12 + " PM", 350,30); 
    }
      else if(lastFed==0){ 
        text("Last Feed : 12 AM",350,30); 
      }
        else{ text("Last Feed : "+ lastFed + " AM", 350,30); 
      }

  drawSprites();
  //add styles here
  
}

function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS)
}
function feedDog(){ 
  dog.addImage(dogImg1); 
  foodObj.updateFoodStock(foodObj.getFoodStock()-1); 
  database.ref('/').update({ 
    Food:foodObj.getFoodStock(), 
    FeedTime:hour() }) } //function to add food in stock 
function addFoods(){ 
  foodS++; 
  database.ref('/').update({
     Food:foodS }) }
