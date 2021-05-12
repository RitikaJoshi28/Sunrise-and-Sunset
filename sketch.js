const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg ;


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    {
        backgroundImg(backgroundImg);
    }

    



    Engine.update(engine);
  

    // write code to display time in correct format here
    noStroke();
    textSize(25);
    fill(255);
    text("Time",width-300,50);


    



async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");


    //change the data in JSON format
    var responseJSON=await response.json();
    console.log(responseJSON)

    // write code slice the datetime
    var datetime=responseJSON.datetime;
     hour=datetime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06)
    {
        bg="sunrise1.png";

    }
          else if(hour>=06 && hour<=08)
          {
              bg="sunrise2.png"
          }
               else if(hour>=23 && hour<03)
               {
                   bg="sunset10.png";
               }
                  else if(hour==0 && hour>=03)
                  {
                      bg="sunset12.png";
                  }
                      else{
                          bg="sunset12.png";
                      }
    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
    console.log(backgroundImg);
}
}