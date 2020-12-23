const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var backgroundImg

function setup(){
createCanvas(1300,790)
background("aqua")
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
    
    d=new striker(600,600,43,43)
    dr=new rope(d.body,{x:600,y:600})
    p1=new platform(1000,365,300,20)
    p2=new platform(1000,365+400,300,20)
    b1 = new box(280+600,275,30,40);  
    b2 = new box(310+600,275,30,40);
    b3 = new box(340+600,275,30,40);
    b4 = new box(370+600,275,30,40);
    b5 = new box(400+600,275,30,40);
    b6 = new box(430+600,275,30,40);
    b7 = new box(460+600,275,30,40);
    b8 = new box(490+600,275,30,40);
    b9 = new box(310+600,235,30,40);
    b10 = new box(340+600,235,30,40);
    b11= new box(370+600,235,30,40);
    b12 = new box(400+600,235,30,40);
    b13 = new box(430+600,235,30,40);
    b14 = new box(460+600,235,30,40);
    b15 = new box(340+600,195,30,40);
    b16 = new box(370+600,195,30,40);
    b17 = new box(400+600,195,30,40);
    b18 = new box(430+600,195,30,40);
    b19 = new box(370+600,155,30,40);
    b20 = new box(400+600,155,30,40);
    b21 = new box(385+600,115,30,40);
    br1 = new box(280+600,275+500,30,40);  
    br2 = new box(310+600,275+500,30,40);
    br3 = new box(340+600,275+500,30,40);
    br4 = new box(370+600,275+500,30,40);
    br5 = new box(400+600,275+500,30,40);
    br6 = new box(430+600,275+500,30,40);
    br7 = new box(460+600,275+500,30,40);
    br8 = new box(490+600,275+500,30,40);
    br9 = new box(310+600,235+500,30,40);
    br10 = new box(340+600,235+500,30,40);
    br11 = new box(370+600,235+500,30,40);
    br12 = new box(400+600,235+500,30,40);
    br13 = new box(430+600,235+500,30,40);
    br14 = new box(460+600,235+500,30,40);
    br15 = new box(340+600,195+500,30,40);
    br16 = new box(370+600,195+500,30,40);
    br17 = new box(400+600,195+500,30,40);
    br18 = new box(430+600,195+500,30,40);
    br19 = new box(370+600,155+500,30,40);
    br20 = new box(400+600,155+500,30,40);
    br21 = new box(385+600,115+500,30,40);
    
    getbackgroundImg ();

}


function draw(){
if(backgroundImg)
  background(backgroundImg)
Engine.update(engine);
d.display();
dr.display();
p1.display();
p2.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
br1.display();
br2.display();
br3.display();
br4.display();
br5.display();
br6.display();
br7.display();
br8.display();
br9.display();
br10.display();
br11.display();
br12.display();
br13.display();
br14.display();
br15.display();
br16.display();
br17.display();
br18.display();
br19.display();
br20.display();
br21.display();
b1.score();
b2.score();
b3.score();
b4.score();
b5.score();
b6.score();
b7.score();
b8.score();
b9.score();
b10.score();
b11.score();
b12.score();
b13.score();
b14.score();
b15.score();
b16.score();
b17.score();
b18.score();
b19.score();
b20.score();
b21.score();
br1.score();
br2.score();
br3.score();
br4.score();
br5.score();
br6.score();
br7.score();
br8.score();
br9.score();
br10.score();
br11.score();
br12.score();
br13.score();
br14.score();
br15.score();
br16.score();
br17.score();
br18.score();
br19.score();
br20.score();
br21.score();
//if(b11.body.speed>0){
  //  b11.display();
//}


console.log(frameCount)
if(frameCount<=150){
score=0;
}
//if(b11.body.speed>0){
  //  b11.display();
//}





textSize(30)
text("Drag the striker and release to shoot Press Space for another try",200,50)
text("Score:"+score,200,100)
//line(p1x,p1y,p2x,p2y)
//getbackgroundImg ();
}

function mouseDragged(){
Matter.Body.setPosition(d.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){  
dr.fly();
}

function keyPressed(){
  if(keyCode === 32){
      dr.attach(d.body);
      
  }

}

async function getbackgroundImg (){
  var time=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var time1=await time.json();
  console.log(time1);
  var dt=time1.datetime;
  console.log(dt);
  var hour=dt.slice(11,13);
  console.log(hour);

  if(hour>=6 && hour<=18){
      bg=("bruh.jpg")
      
      
  }
  else{
      bg=("dude1.png")
  }
  backgroundImg=loadImage(bg);
  console.log(backgroundImg);
}

