var canvas;
var music;
var box;
var g1,g2,g3,g4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,600);

    g1 = createSprite(350,580,93,10);
    g1.shapeColor="pink";
    g2 = createSprite(250,580,100,10);
    g2.shapeColor="green";
    g3 = createSprite(140,580,100,10);
    g3.shapeColor="blue";
    g4 = createSprite(40,580,85,10);
    g4.shapeColor="yellow";
    edges=createEdgeSprites();

    //create 4 different surfaces

  box = createSprite(300,80,20,20);
  box.x=Math.round(random(10,390));
  box.shapeColor="white";
  box.velocityY=6;
  box.velocityX=3;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

 

    music.play();

    box.bounceOff(edges);
   if(g1.isTouching(box)&&box.bounceOff(g1)){
       box.shapeColor="pink";
   }
   if(g2.isTouching(box)&&box.bounceOff(g2)){
    box.shapeColor="green";
   }
   if(g3.isTouching(box)&&box.bounceOff(g3)){
    box.shapeColor="blue";
    }
     if(g4.isTouching(box)){
        box.shapeColor="white";
        box.velocityY=0;
        box.velocityX=0;
        music.stop();
      }


    //create edgeSprite

    

    drawSprites();
    //add condition to check if box touching surface and make it box
}
