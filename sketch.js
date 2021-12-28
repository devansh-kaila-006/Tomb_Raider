var pacman,right,left,up,down;

var A1,A2,A3,A4,A5,A6;
var B1,B2,B3,B4,B5,B6,B7,B8,B9,B10;
var C1,C2,C3,C4,C5,C6,C7;
var D1,D2,D3,D4,D5,D6,D7,D8;
var E1,E2,E3,E4,E5;
var F1,F2,F3,F4,F5;
var G1,G2,G3,G4;

var theCoin;

var PlayerScore;

var START,END,PLAY;

var bg1;

var bb,logo;

function preload(){
  logo = loadImage("BP.png");
  right = loadImage("right.png");
  

}


function setup() {
  createCanvas(600,600);

 //Player
 pacman = createSprite(25,575,20,20);
 pacman.addImage("raider",right);
 pacman.scale = 0.3;


 //Outermost layer.
 A1 = createSprite(5, 322, 10, 550);
 A2 = createSprite(300, 595, 600, 10);
 A3 = createSprite(595, 322, 10, 550);
 A4 = createSprite(300, 45, 600, 10);
 A5 = createSprite(575, 125, 30, 10);
 A6 = createSprite(25, 125, 30, 10);

 //Second layer from outside. 
 B1 = createSprite(190, 555, 300, 10);
 B2 = createSprite(45, 450, 10, 200);
 B3 = createSprite(555, 135, 10, 170);
 B4 = createSprite(465, 555, 190, 10);
 B5 = createSprite(555, 400, 10, 300);
 B6 = createSprite(45, 185, 10, 270);
 B7 = createSprite(530, 255, 40, 10);
 B8 = createSprite(145,70, 10, 40);
 B9 = createSprite(515, 425, 10, 270);
 B10= createSprite(70, 355, 40, 10);

 //Third layer from outside.
 C1 = createSprite(515, 165, 10, 170);
 C2 = createSprite(155, 85, 130, 10);
 C3 = createSprite(85, 215, 10, 190);
 C4 = createSprite(280, 515, 400, 10);
 C5 = createSprite(70, 315, 40, 10);
 C6 = createSprite(85, 440, 10, 160);
 C7 = createSprite(385,85,270,10);

 //Middle layer.
 D1 = createSprite(385, 475, 270, 10);
 D2 = createSprite(125, 180, 10, 120);
 D3 = createSprite(320, 125, 320, 10);
 D4 = createSprite(475, 250, 10, 240);
 D5 = createSprite(495, 175, 30, 10);
 D6 = createSprite(125, 360,10,160);
 D7 = createSprite(170, 475, 100, 10);
 D8 = createSprite(475, 440, 10, 60);

 //Third layer from inside.
 E1 = createSprite(165, 300, 10, 280);
 E2 = createSprite(300, 435, 280, 10);
 E3 = createSprite(320, 165, 240, 10);
 E4 = createSprite(435, 370, 10, 130);
 E5 = createSprite(435, 220, 10, 100);

 //Second layer from inside.
 F1 = createSprite(300, 205, 200, 10);
 F2 = createSprite(400, 300, 10, 200);
 F3 = createSprite(345, 395, 110, 10);
 F4 = createSprite(230, 395, 60, 10);
 F5 = createSprite(205, 300, 10, 120);

 //Innermost Layer.
 G1 = createSprite(300, 245, 120, 10);
 G2 = createSprite(300, 355, 120, 10);
 G3 = createSprite(245, 300, 10, 100);
 G4 = createSprite(360, 265, 10, 50);
 G5 = createSprite(360, 340, 10, 40);



 //TOP layer of coins.
 Coin1 = createSprite(65, 65, 10, 10);
 Coin2 = createSprite(115, 65, 10, 10);
 Coin3 = createSprite(185, 65, 10, 10);
 Coin4 = createSprite(235, 65, 10, 10);
 Coin5 = createSprite(285, 65, 10, 10);
 Coin6 = createSprite(335, 65, 10, 10);
 Coin7 = createSprite(385, 65, 10, 10);
 Coin8 = createSprite(435, 65, 10, 10);
 Coin9 = createSprite(485, 65, 10, 10);
 Coin10 = createSprite(535, 65, 10, 10);

//2nd layer of coins.
Coin11 = createSprite(65, 105, 10, 10);
Coin12 = createSprite(125, 105, 10, 10);
Coin13 = createSprite(185, 105, 10, 10);
Coin14 = createSprite(235, 105, 10, 10);
Coin15 = createSprite(285, 105, 10, 10);
Coin16 = createSprite(335, 105, 10, 10);
Coin17 = createSprite(385, 105, 10, 10);
Coin18 = createSprite(435, 105, 10, 10);
Coin19 = createSprite(485, 105, 10, 10);
Coin20 = createSprite(535, 105, 10, 10);

//3rd layer of coins.
Coin21 = createSprite(25, 145, 10, 10);
Coin22 = createSprite(65, 145, 10, 10);
Coin23 = createSprite(105, 145, 10, 10);
Coin24 = createSprite(145, 145, 10, 10);
Coin25 = createSprite(185, 145, 10, 10);
Coin26 = createSprite(235, 145, 10, 10);
Coin27 = createSprite(285, 145, 10, 10);
Coin28 = createSprite(335, 145, 10, 10);
Coin29 = createSprite(385, 145, 10, 10);
Coin30 = createSprite(435, 145, 10, 10);
Coin31 = createSprite(495, 145, 10, 10);
Coin32 = createSprite(535, 145, 10, 10);
Coin33 = createSprite(575, 145, 10, 10);

//4th layer of coins.
Coin34 = createSprite(25, 185, 10, 10);
Coin35 = createSprite(65, 185, 10, 10);
Coin36 = createSprite(105, 185, 10, 10);
Coin37 = createSprite(145, 185, 10, 10);
Coin38 = createSprite(185, 185, 10, 10);
Coin39 = createSprite(245, 185, 10, 10);
Coin40 = createSprite(295, 185, 10, 10);
Coin41 = createSprite(345, 185, 10, 10);
Coin42 = createSprite(405, 185, 10, 10);
Coin43 = createSprite(455, 185, 10, 10);
Coin44 = createSprite(495, 185, 10, 10);
Coin45 = createSprite(535, 185, 10, 10);
Coin46 = createSprite(575, 185, 10, 10);

//5th layer of coins.
Coin47 = createSprite(25, 225, 10, 10);
Coin48 = createSprite(65, 225, 10, 10);
Coin49 = createSprite(105, 225, 10, 10);
Coin50 = createSprite(145, 225, 10, 10);
Coin51 = createSprite(185, 225, 10, 10);
Coin52 = createSprite(235, 225, 10, 10);
Coin53 = createSprite(305, 225, 10, 10);
Coin54 = createSprite(375, 225, 10, 10);
Coin55 = createSprite(415, 225, 10, 10);
Coin56 = createSprite(455, 225, 10, 10);
Coin57 = createSprite(495, 225, 10, 10);
Coin58 = createSprite(535, 225, 10, 10);
Coin59 = createSprite(575, 225, 10, 10);

//6th layer of coins.
Coin60 = createSprite(25, 265, 10, 10);
Coin61 = createSprite(65, 265, 10, 10);
Coin62 = createSprite(105, 265, 10, 10);
Coin63 = createSprite(145, 265, 10, 10);
Coin64 = createSprite(185, 265, 10, 10);
Coin65 = createSprite(225, 265, 10, 10);
Coin66 = createSprite(380, 265, 10, 10);
Coin67 = createSprite(415, 265, 10, 10);
Coin68 = createSprite(455, 265, 10, 10);
Coin69 = createSprite(495, 265, 10, 10);
Coin70 = createSprite(535, 265, 10, 10);
Coin71 = createSprite(575, 265, 10, 10);

//7th layer of coins.
Coin72 = createSprite(25, 305, 10, 10);
Coin73 = createSprite(65, 305, 10, 10);
Coin74 = createSprite(105, 305, 10, 10);
Coin75 = createSprite(145, 305, 10, 10);
Coin76 = createSprite(185, 305, 10, 10);
Coin77 = createSprite(225, 305, 10, 10);
Coin78 = createSprite(380, 305, 10, 10);
Coin79 = createSprite(415, 305, 10, 10);
Coin80 = createSprite(455, 305, 10, 10);
Coin81 = createSprite(495, 305, 10, 10);
Coin82 = createSprite(535, 305, 10, 10);
Coin83 = createSprite(575, 305, 10, 10);

//8th layer of coins.
Coin84 = createSprite(25, 345, 10, 10);
Coin85 = createSprite(65, 345, 10, 10);
Coin86 = createSprite(105, 345, 10, 10);
Coin87 = createSprite(145, 345, 10, 10);
Coin88 = createSprite(185, 345, 10, 10);
Coin89 = createSprite(225, 345, 10, 10);
Coin90 = createSprite(380, 345, 10, 10);
Coin91 = createSprite(415, 345, 10, 10);
Coin92 = createSprite(455, 345, 10, 10);
Coin93 = createSprite(495, 345, 10, 10);
Coin94 = createSprite(535, 345, 10, 10);
Coin95 = createSprite(575, 345, 10, 10);

//9th layer of coins.
Coin96 = createSprite(25, 375, 10, 10);
Coin97 = createSprite(65, 375, 10, 10);
Coin98 = createSprite(105, 375, 10, 10);
Coin99 = createSprite(145, 375, 10, 10);
Coin100 = createSprite(185, 375, 10, 10);
Coin101 = createSprite(235, 375, 10, 10);
Coin102 = createSprite(285, 375, 10, 10);
Coin103 = createSprite(335, 375, 10, 10);
Coin104 = createSprite(385, 375, 10, 10);
Coin105 = createSprite(455, 375, 10, 10);
Coin106 = createSprite(495, 375, 10, 10);
Coin107 = createSprite(535, 375, 10, 10);
Coin108 = createSprite(575, 375, 10, 10);

//10th layer of coins.
Coin109 = createSprite(25, 415, 10, 10);
Coin110 = createSprite(65, 415, 10, 10);
Coin111 = createSprite(105, 415, 10, 10);
Coin112 = createSprite(145, 415, 10, 10);
Coin113 = createSprite(185, 415, 10, 10);
Coin114 = createSprite(245, 415, 10, 10);
Coin115 = createSprite(295, 415, 10, 10);
Coin116 = createSprite(345, 415, 10, 10);
Coin117 = createSprite(405, 415, 10, 10);
Coin118 = createSprite(455, 415, 10, 10);
Coin119 = createSprite(495, 415, 10, 10);
Coin120 = createSprite(535, 415, 10, 10);
Coin121 = createSprite(575, 415, 10, 10);

//11th layer of coins.
Coin122 = createSprite(25, 455, 10, 10);
Coin123 = createSprite(65, 455, 10, 10);
Coin124 = createSprite(105, 455, 10, 10);
Coin125 = createSprite(145, 455, 10, 10);
Coin126 = createSprite(185, 455, 10, 10);
Coin127 = createSprite(245, 455, 10, 10);
Coin128 = createSprite(295, 455, 10, 10);
Coin129 = createSprite(345, 455, 10, 10);
Coin130 = createSprite(405, 455, 10, 10);
Coin131 = createSprite(455, 455, 10, 10);
Coin132 = createSprite(495, 455, 10, 10);
Coin133 = createSprite(535, 455, 10, 10);
Coin134 = createSprite(575, 455, 10, 10);

//12th layer of coins.
Coin135 = createSprite(25, 495, 10, 10);
Coin136 = createSprite(65, 495, 10, 10);
Coin137 = createSprite(105, 495, 10, 10);
Coin138 = createSprite(145, 495, 10, 10);
Coin139 = createSprite(185, 495, 10, 10);
Coin140 = createSprite(245, 495, 10, 10);
Coin141 = createSprite(295, 495, 10, 10);
Coin142 = createSprite(345, 495, 10, 10);
Coin143 = createSprite(405, 495, 10, 10);
Coin144 = createSprite(455, 495, 10, 10);
Coin145 = createSprite(495, 495, 10, 10);
Coin146 = createSprite(535, 495, 10, 10);
Coin147 = createSprite(575, 495, 10, 10);

//13th layer of coins.
Coin148 = createSprite(25, 535, 10, 10);
Coin149 = createSprite(65, 535, 10, 10);
Coin150 = createSprite(105, 535, 10, 10);
Coin151 = createSprite(145, 535, 10, 10);
Coin152 = createSprite(185, 535, 10, 10);
Coin153 = createSprite(245, 535, 10, 10);
Coin154 = createSprite(295, 535, 10, 10);
Coin155 = createSprite(345, 535, 10, 10);
Coin156 = createSprite(405, 535, 10, 10);
Coin157 = createSprite(455, 535, 10, 10);
Coin158 = createSprite(495, 535, 10, 10);
Coin159 = createSprite(535, 535, 10, 10);
Coin160 = createSprite(575, 535, 10, 10);

theCoin = createSprite(300, 300, 30, 30);


 //Maze COLOURING.
 A1.shapeColor = "purple";
 A2.shapeColor = "purple";
 A3.shapeColor = "purple";
 A4.shapeColor = "purple";
 A5.shapeColor = "purple";
 A6.shapeColor = "purple";

 B1.shapeColor = "purple";
 B2.shapeColor = "purple";
 B3.shapeColor = "purple";
 B4.shapeColor = "purple";
 B5.shapeColor = "purple";
 B6.shapeColor = "purple";
 B7.shapeColor = "purple";
 B8.shapeColor = "purple";
 B9.shapeColor = "purple";
 B10.shapeColor = "purple";

 C1.shapeColor = "purple";
 C2.shapeColor = "purple";
 C3.shapeColor = "purple";
 C4.shapeColor = "purple";
 C5.shapeColor = "purple";
 C6.shapeColor = "purple";
 C7.shapeColor = "purple";

 D1.shapeColor = "purple";
 D2.shapeColor = "purple";
 D3.shapeColor = "purple";
 D4.shapeColor = "purple";
 D5.shapeColor = "purple";
 D6.shapeColor = "purple";
 D7.shapeColor = "purple";
 D8.shapeColor = "purple";

 E1.shapeColor = "purple";
 E2.shapeColor = "purple";
 E3.shapeColor = "purple";
 E4.shapeColor = "purple";
 E5.shapeColor = "purple";

 F1.shapeColor = "purple";
 F2.shapeColor = "purple";
 F3.shapeColor = "purple";
 F4.shapeColor = "purple";
 F5.shapeColor = "purple";

 G1.shapeColor = "purple";
 G2.shapeColor = "purple";
 G3.shapeColor = "purple";
 G4.shapeColor = "purple";
 G5.shapeColor = "purple";

 Coin1.shapeColor = "yellow";
 Coin2.shapeColor = "yellow";
 Coin3.shapeColor = "yellow";
 Coin4.shapeColor = "yellow";
 Coin5.shapeColor = "yellow";
 Coin6.shapeColor = "yellow";
 Coin7.shapeColor = "yellow";
 Coin8.shapeColor = "yellow";
 Coin9.shapeColor = "yellow";
 Coin10.shapeColor = "yellow";

 Coin11.shapeColor = "yellow";
 Coin12.shapeColor = "yellow";
 Coin13.shapeColor = "yellow";
 Coin14.shapeColor = "yellow";
 Coin15.shapeColor = "yellow";
 Coin16.shapeColor = "yellow";
 Coin17.shapeColor = "yellow";
 Coin18.shapeColor = "yellow";
 Coin19.shapeColor = "yellow";
 Coin20.shapeColor = "yellow";

 Coin21.shapeColor = "yellow";
 Coin22.shapeColor = "yellow";
 Coin23.shapeColor = "yellow";
 Coin24.shapeColor = "yellow";
 Coin25.shapeColor = "yellow";
 Coin26.shapeColor = "yellow";
 Coin27.shapeColor = "yellow";
 Coin28.shapeColor = "yellow";
 Coin29.shapeColor = "yellow";
 Coin30.shapeColor = "yellow";

 Coin31.shapeColor = "red";
 Coin32.shapeColor = "yellow";
 Coin33.shapeColor = "yellow";
 Coin34.shapeColor = "yellow";
 Coin35.shapeColor = "yellow";
 Coin36.shapeColor = "yellow";
 Coin37.shapeColor = "yellow";
 Coin38.shapeColor = "yellow";
 Coin39.shapeColor = "yellow";
 Coin40.shapeColor = "yellow";

 Coin41.shapeColor = "yellow";
 Coin42.shapeColor = "yellow";
 Coin43.shapeColor = "yellow";
 Coin44.shapeColor = "yellow";
 Coin45.shapeColor = "yellow";
 Coin46.shapeColor = "yellow";
 Coin47.shapeColor = "yellow";
 Coin48.shapeColor = "yellow";
 Coin49.shapeColor = "yellow";
 Coin50.shapeColor = "yellow";

 Coin51.shapeColor = "yellow";
 Coin52.shapeColor = "yellow";
 Coin53.shapeColor = "yellow";
 Coin54.shapeColor = "yellow";
 Coin55.shapeColor = "yellow";
 Coin56.shapeColor = "yellow";
 Coin57.shapeColor = "yellow";
 Coin58.shapeColor = "yellow";
 Coin59.shapeColor = "yellow";
 Coin60.shapeColor = "yellow";

 Coin61.shapeColor = "yellow";
 Coin62.shapeColor = "yellow";
 Coin63.shapeColor = "yellow";
 Coin64.shapeColor = "yellow";
 Coin65.shapeColor = "yellow";
 Coin66.shapeColor = "yellow";
 Coin67.shapeColor = "yellow";
 Coin68.shapeColor = "yellow";
 Coin69.shapeColor = "yellow";
 Coin70.shapeColor = "yellow";

 Coin71.shapeColor = "yellow";
 Coin72.shapeColor = "yellow";
 Coin73.shapeColor = "green";
 Coin74.shapeColor = "yellow";
 Coin75.shapeColor = "yellow";
 Coin76.shapeColor = "yellow";
 Coin77.shapeColor = "yellow";
 Coin78.shapeColor = "yellow";
 Coin79.shapeColor = "yellow";
 Coin80.shapeColor = "yellow";

 Coin81.shapeColor = "yellow";
 Coin82.shapeColor = "yellow";
 Coin83.shapeColor = "yellow";
 Coin84.shapeColor = "yellow";
 Coin85.shapeColor = "yellow";
 Coin86.shapeColor = "yellow";
 Coin87.shapeColor = "yellow";
 Coin88.shapeColor = "yellow";
 Coin89.shapeColor = "yellow";
 Coin90.shapeColor = "yellow";

 Coin91.shapeColor = "yellow";
 Coin92.shapeColor = "yellow";
 Coin93.shapeColor = "yellow";
 Coin94.shapeColor = "yellow";
 Coin95.shapeColor = "yellow";
 Coin96.shapeColor = "yellow";
 Coin97.shapeColor = "blue";
 Coin98.shapeColor = "yellow";
 Coin99.shapeColor = "yellow";
 Coin100.shapeColor = "yellow";

 Coin101.shapeColor = "yellow";
 Coin102.shapeColor = "yellow";
 Coin103.shapeColor = "yellow";
 Coin104.shapeColor = "yellow";
 Coin105.shapeColor = "yellow";
 Coin106.shapeColor = "yellow";
 Coin107.shapeColor = "yellow";
 Coin108.shapeColor = "yellow";
 Coin109.shapeColor = "yellow";
 Coin110.shapeColor = "yellow";

 Coin111.shapeColor = "yellow";
 Coin112.shapeColor = "yellow";
 Coin113.shapeColor = "yellow";
 Coin114.shapeColor = "yellow";
 Coin115.shapeColor = "yellow";
 Coin116.shapeColor = "yellow";
 Coin117.shapeColor = "yellow";
 Coin118.shapeColor = "yellow";
 Coin119.shapeColor = "yellow";
 Coin120.shapeColor = "yellow";

 Coin121.shapeColor = "yellow";
 Coin122.shapeColor = "yellow";
 Coin123.shapeColor = "yellow";
 Coin124.shapeColor = "yellow";
 Coin125.shapeColor = "yellow";
 Coin126.shapeColor = "yellow";
 Coin127.shapeColor = "yellow";
 Coin128.shapeColor = "yellow";
 Coin129.shapeColor = "yellow";
 Coin130.shapeColor = "yellow";

 Coin131.shapeColor = "yellow";
 Coin132.shapeColor = "yellow";
 Coin133.shapeColor = "yellow";
 Coin134.shapeColor = "yellow";
 Coin135.shapeColor = "yellow";
 Coin136.shapeColor = "yellow";
 Coin137.shapeColor = "yellow";
 Coin138.shapeColor = "yellow";
 Coin139.shapeColor = "yellow";
 Coin140.shapeColor = "yellow";
 
 Coin141.shapeColor = "yellow";
 Coin142.shapeColor = "yellow";
 Coin143.shapeColor = "yellow";
 Coin144.shapeColor = "yellow";
 Coin145.shapeColor = "yellow";
 Coin146.shapeColor = "yellow";
 Coin147.shapeColor = "yellow";
 Coin148.shapeColor = "yellow";
 Coin149.shapeColor = "yellow";
 Coin150.shapeColor = "yellow";

 Coin151.shapeColor = "yellow";
 Coin152.shapeColor = "yellow";
 Coin153.shapeColor = "yellow";
 Coin154.shapeColor = "yellow";
 Coin155.shapeColor = "yellow";
 Coin156.shapeColor = "yellow";
 Coin157.shapeColor = "yellow";
 Coin158.shapeColor = "yellow";
 Coin159.shapeColor = "brown";
 Coin160.shapeColor = "yellow";

 theCoin.shapeColor = "yellow";

PlayerScore = 0;

START = 2;
PLAY = 1;
END = 0;
gameState = START;

bg1 = createSprite(300,300,600,600);
bb = createSprite(300,300,10,10);
bb.addImage("logo",logo);
bb.scale = 0.5;
 
}


function draw(){
  background(0);

  drawSprites();

  

  if(gameState === START){

    fill("red");
    textSize(80);
    text("TOMB RAIDER", 20, 90);
  
    fill("yellow");
    textSize(40);
    text("Click A to start playing", 110, 580);
    
    bg1.shapeColor = 0;

   }

   if (keyDown("A")) {
    gameState = PLAY;
   
   }
   
 if(gameState === PLAY) {  

    movement();
    points();
  
    fill("red");
    textSize(20);
    text("SCORE : ",460,25);
    text(PlayerScore, 545, 25);

    bg1.visible = false;   
    bb.visible = false;

    if(Coin31.x === -15){
      var w = createSprite(25, 65,15,15);
      w.shapeColor = "blue";
    }
     if(Coin73.x === -15){
     var x = createSprite(25, 105,15,15);
      x.shapeColor = "red";
    }
     if(Coin97.x === -15){
     var y = createSprite(575, 65,15,15);
      y.shapeColor = "green";
    }
     if(Coin159.x === -15){
     var z = createSprite(575, 105,15,15);
      z.shapeColor = "brown";
    }  
 
    }

    //Collider Settings.
 pacman.collide(A1);
 pacman.collide(A2);
 pacman.collide(A3);
 pacman.collide(A4);
 pacman.collide(A5);
 pacman.collide(A6);

 pacman.collide(B1);
 pacman.collide(B2);
 pacman.collide(B3);
 pacman.collide(B4);
 pacman.collide(B5);
 pacman.collide(B6);
 pacman.collide(B7);
 pacman.collide(B8);
 pacman.collide(B9);
 pacman.collide(B10);

 pacman.collide(C1);
 pacman.collide(C2);
 pacman.collide(C3);
 pacman.collide(C4);
 pacman.collide(C5);
 pacman.collide(C6);
 pacman.collide(C7);

 pacman.collide(D1);
 pacman.collide(D2);
 pacman.collide(D3);
 pacman.collide(D4);
 pacman.collide(D5);
 pacman.collide(D6);
 pacman.collide(D7);
 pacman.collide(D8);

 pacman.collide(E1);
 pacman.collide(E2);
 pacman.collide(E3);
 pacman.collide(E4);
 pacman.collide(E5);

 pacman.collide(F1);
 pacman.collide(F2);
 pacman.collide(F3);
 pacman.collide(F4);
 pacman.collide(F5);

 pacman.collide(G1);
 pacman.collide(G2);
 pacman.collide(G3);
 pacman.collide(G4);
 pacman.collide(G5);


}

function movement() {
  if(keyDown("up")){
    pacman.velocityX=0;
    pacman.velocityY=-6;
  }
  
  if (keyDown("down")) {
      pacman.velocityX=0;
      pacman.velocityY=6;
      }
  
  if (keyDown("RIGHT")) {
      pacman.velocityX=6;
      pacman.velocityY=0;
      }
    
  if (keyDown("LEFT")) {
      pacman.velocityX=-6;
      pacman.velocityY=0;
       } 
    
  if (keyDown(" ")) {
      pacman.velocityX=0;
      pacman.velocityY=0;
      }

}

function points(){

  if (pacman.isTouching(Coin1)) {
    Coin1.x=-15;
    PlayerScore+=1;
   
    }
  if (pacman.isTouching(Coin2)) {
    Coin2.x=-15;
    PlayerScore+=1;
     
    }
  if (pacman.isTouching(Coin3)) {
    Coin3.x=-15;
    PlayerScore+=1;
       
        }
  if (pacman.isTouching(Coin4)) {
    Coin4.x=-15;
    PlayerScore+=1;
         
          }
  if (pacman.isTouching(Coin5)) {
    Coin5.x=-15;
    PlayerScore+=1;
           
            }
  if (pacman.isTouching(Coin6)) {
    Coin6.x=-15;
     PlayerScore+=1;
             
              }    
  if (pacman.isTouching(Coin7)) {
    Coin7.x=-15;
  PlayerScore+=1;            
               
                }
  if (pacman.isTouching(Coin8)) {
    Coin8.x=-15;
    PlayerScore+=1;            
                 
                  }

 if (pacman.isTouching(Coin9)) {
    Coin9.x=-15;
    PlayerScore+=1;
                   
                    }
  if (pacman.isTouching(Coin10)) {
    Coin10.x=-15;
    PlayerScore+=1;

                     
                      }
  if (pacman.isTouching(Coin11)) {
    Coin11.x=-15;
    PlayerScore+=1;
   
    }
  if (pacman.isTouching(Coin12)) {
    Coin12.x=-15;
    PlayerScore+=1;
     
    }
  if (pacman.isTouching(Coin13)) {
    Coin13.x=-15;
    PlayerScore+=1;
       
        }
  if (pacman.isTouching(Coin14)) {
    Coin14.x=-15;
    PlayerScore+=1;
         
          }
  if (pacman.isTouching(Coin15)) {
    Coin15.x=-15;
    PlayerScore+=1;
           
            }
  if (pacman.isTouching(Coin16)) {
    Coin16.x=-15;
    PlayerScore+=1;
             
              }    
  if (pacman.isTouching(Coin17)) {
    Coin17.x=-15;
    PlayerScore+=1;            
               
                }
  if (pacman.isTouching(Coin18)) {
    Coin18.x=-15;
    PlayerScore+=1;            
                 
                  }

 if (pacman.isTouching(Coin19)) {
    Coin19.x=-15;
    PlayerScore+=1;
                   
                    }
  if (pacman.isTouching(Coin20)) {
    Coin20.x=-15;
    PlayerScore+=1;
    
}
if (pacman.isTouching(Coin21)) {
  Coin21.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin22)) {
  Coin22.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin23)) {
  Coin23.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin24)) {
  Coin24.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin25)) {
  Coin25.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin26)) {
  Coin26.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin27)) {
  Coin27.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin28)) {
  Coin28.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin29)) {
  Coin29.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin30)) {
  Coin30.x=-15;
   PlayerScore+=1;
}
if (pacman.isTouching(Coin31)) {
  Coin31.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin32)) {
  Coin32.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin33)) {
  Coin33.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin34)) {
  Coin34.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin35)) {
  Coin35.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin36)) {
  Coin36.x=-15;
 PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin37)) {
  Coin37.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin38)) {
  Coin38.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin39)) {
  Coin39.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin40)) {
  Coin40.x=-15;
  PlayerScore+=1;

                   
                    }
if (pacman.isTouching(Coin41)) {
  Coin41.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin42)) {
  Coin42.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin43)) {
  Coin43.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin44)) {
  Coin44.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin45)) {
  Coin45.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin46)) {
  Coin46.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin47)) {
  Coin47.x=-15;
   PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin48)) {
  Coin48.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin49)) {
  Coin49.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin50)) {
  Coin50.x=-15;
  PlayerScore+=1;
  
}
if (pacman.isTouching(Coin51)) {
Coin51.x=-15;
PlayerScore+=1;

}
if (pacman.isTouching(Coin52)) {
Coin52.x=-15;
PlayerScore+=1;
 
}
if (pacman.isTouching(Coin53)) {
Coin53.x=-15;
PlayerScore+=1;
   
    }
if (pacman.isTouching(Coin54)) {
Coin54.x=-15;
PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin55)) {
Coin55.x=-15;
PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin56)) {
Coin56.x=-15;
PlayerScore+=1;
         
          }    
if (pacman.isTouching(Coin57)) {
Coin57.x=-15;
PlayerScore+=1;            
           
            }
if (pacman.isTouching(Coin58)) {
Coin58.x=-15;
PlayerScore+=1;            
             
              }

if (pacman.isTouching(Coin59)) {
Coin59.x=-15;
PlayerScore+=1;
               
                }
if (pacman.isTouching(Coin60)) {
Coin60.x=-15;
PlayerScore+=1;
}
if (pacman.isTouching(Coin61)) {
  Coin61.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin62)) {
  Coin62.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin63)) {
  Coin63.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin64)) {
  Coin64.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin65)) {
  Coin65.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin66)) {
  Coin66.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin67)) {
  Coin67.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin68)) {
  Coin68.x=-15;
   PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin69)) {
  Coin69.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin70)) {
  Coin70.x=-15;
  PlayerScore+=1;

                   
                    }
if (pacman.isTouching(Coin71)) {
  Coin71.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin72)) {
  Coin72.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin73)) {
  Coin73.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin74)) {
  Coin74.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin75)) {
  Coin75.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin76)) {
  Coin76.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin77)) {
  Coin77.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin78)) {
  Coin78.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin79)) {
  Coin79.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin80)) {
  Coin80.x=-15;
  PlayerScore+=1;
  
}
if (pacman.isTouching(Coin81)) {
Coin81.x=-15;
PlayerScore+=1;

}
if (pacman.isTouching(Coin82)) {
Coin82.x=-15;
PlayerScore+=1;
 
}
if (pacman.isTouching(Coin83)) {
Coin83.x=-15;
PlayerScore+=1;
   
    }
if (pacman.isTouching(Coin84)) {
Coin84.x=-15;
PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin85)) {
Coin85.x=-15;
PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin86)) {
Coin86.x=-15;
PlayerScore+=1;
         
          }    
if (pacman.isTouching(Coin87)) {
Coin87.x=-15;
PlayerScore+=1;            
           
            }
if (pacman.isTouching(Coin88)) {
Coin88.x=-15;
PlayerScore+=1;            
             
              }

if (pacman.isTouching(Coin89)) {
Coin89.x=-15;
PlayerScore+=1;
               
                }
if (pacman.isTouching(Coin90)) {
Coin90.x=-15;
PlayerScore+=1;
}
if (pacman.isTouching(Coin91)) {
  Coin91.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin92)) {
  Coin92.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin93)) {
  Coin93.x=-15;
   PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin94)) {
  Coin94.x=-15;
 PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin95)) {
  Coin95.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin96)) {
  Coin96.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin97)) {
  Coin97.x=-15;
 PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin98)) {
  Coin98.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin99)) {
  Coin99.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin100)) {
  Coin100.x=-15;
  PlayerScore+=1;

                   
                    }
if (pacman.isTouching(Coin101)) {
  Coin101.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin102)) {
  Coin102.x=-15;
  Coin102.y=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin103)) {
  Coin103.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin104)) {
  Coin104.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin105)) {
  Coin105.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin106)) {
  Coin106.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin107)) {
  Coin107.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin108)) {
  Coin108.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin109)) {
  Coin109.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin110)) {
  Coin110.x=-15;
  PlayerScore+=1;
  
}
if (pacman.isTouching(Coin111)) {
  Coin111.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin112)) {
  Coin112.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin113)) {
  Coin113.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin114)) {
  Coin114.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin115)) {
  Coin115.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin116)) {
  Coin116.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin117)) {
  Coin117.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin118)) {
  Coin118.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin119)) {
  Coin119.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin120)) {
  Coin120.x=-15;
  PlayerScore+=1;
  
}
if (pacman.isTouching(Coin121)) {
  Coin121.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin122)) {
  Coin122.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin123)) {
  Coin123.x=-15;
 PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin124)) {
  Coin124.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin125)) {
  Coin125.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin126)) {
  Coin126.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin127)) {
  Coin127.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin128)) {
  Coin128.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin129)) {
  Coin129.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin130)) {
  Coin130.x=-15;
  PlayerScore+=1;
  
}
if (pacman.isTouching(Coin131)) {
  Coin131.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin132)) {
  Coin132.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin133)) {
  Coin133.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin134)) {
  Coin134.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin135)) {
  Coin135.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin136)) {
  Coin136.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin137)) {
  Coin137.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin138)) {
  Coin138.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin139)) {
  Coin139.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin140)) {
  Coin140.x=-15;
  PlayerScore+=1;
  
}
if (pacman.isTouching(Coin141)) {
  Coin141.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin142)) {
  Coin142.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin143)) {
  Coin143.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin144)) {
  Coin144.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin145)) {
  Coin145.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin146)) {
  Coin146.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin147)) {
  Coin147.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin148)) {
  Coin148.x=-15;
  PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin149)) {
  Coin149.x=-15;
  PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin150)) {
  Coin150.x=-15;
  PlayerScore+=1;
  
}
if (pacman.isTouching(Coin151)) {
  Coin151.x=-15;
  PlayerScore+=1;
 
  }
if (pacman.isTouching(Coin152)) {
  Coin152.x=-15;
  PlayerScore+=1;
   
  }
if (pacman.isTouching(Coin153)) {
  Coin153.x=-15;
  PlayerScore+=1;
     
      }
if (pacman.isTouching(Coin154)) {
  Coin154.x=-15;
  PlayerScore+=1;
       
        }
if (pacman.isTouching(Coin155)) {
  Coin155.x=-15;
  PlayerScore+=1;
         
          }
if (pacman.isTouching(Coin156)) {
  Coin156.x=-15;
  PlayerScore+=1;
           
            }    
if (pacman.isTouching(Coin157)) {
  Coin157.x=-15;
  PlayerScore+=1;            
             
              }
if (pacman.isTouching(Coin158)) {
  Coin158.x=-15;
 PlayerScore+=1;            
               
                }

if (pacman.isTouching(Coin159)) {
  Coin159.x=-15;
   PlayerScore+=1;
                 
                  }
if (pacman.isTouching(Coin160)) {
  Coin160.x=-15;
  PlayerScore+=1;
  
}

if (pacman.isTouching(theCoin)) {
  theCoin.x=-15;
  PlayerScore+=40;
  
}

}
