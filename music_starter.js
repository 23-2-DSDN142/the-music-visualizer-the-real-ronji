let firstRun = true
let froggy ;
let robot ;
let worm = []
// let drop = new 

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  if (firstRun==true) {
   
    worm.push(loadImage('assets/wormy1.png'))
    worm.push(loadImage('assets/wormy2.png'))
    worm.push(loadImage('assets/wormy3.png'))
    worm.push(loadImage('assets/wormy4.png'))
    worm.push(loadImage('assets/wormy5.png'))
    worm.push(loadImage('assets/wormy6.png'))
    worm.push(loadImage('assets/wormy7.png'))
    worm.push(loadImage('assets/wormy8.png'))
        
    froggy = loadImage('assets/froggy2.png')
    robot = loadImage('assets/robot2.png')
    
    firstRun = false
  }
  
  // background(200)
  let top = color(38, 17, 61)
  let bottom = color(247, 196, 27)

  for (let i=0; i<height; i++){
    n = map(i,0,height+200,0,1)

    let newcolour = lerpColor(top,bottom,n)
    stroke(newcolour)
    line(0,i,width,i)
  }
  
  noStroke()

  let floorboards = 120
  let door = 180
  let roof = 0
  let wall = 30
  let Hs = 110
  // let square = 90

  //  GRASS
  fill(27, 117, 90)
  ellipse(width/2,height,width*2,700)
  
  push()
  scale()
  image(froggy,width/3,height/6)
  pop()

  push()
  scale()
  translate(width-800,200)
  image(robot,width/4,height/8)
  pop()

  //  DOOR
  fill(48, 30, 17) //64, 31, 10
  rect(0,0,0+door,height)

  //  WALL
  fill(48, 30, 17)
  rect(width,0,-wall,height)

  //  SQUARES
  fill(184, 169, 145) //255, 237, 209
  
  
    for (let i=10 ; i<height-floorboards; i=i+Hs){
      rect(10,roof+i,door-110,Hs-10,)
    }
  
  
  //  FLOOR
  fill(138, 105, 54)
  rect(0,height-floorboards,width,floorboards)

  //  ROOF
  fill(27, 117, 90)
  rect(0,0,width,roof)

  fill(79, 47, 9)
  ellipse(180,height-70,400,50)

  let frame = int(map(vocal,0,100,0,8))
  push()
  translate(-300,100)
  scale(.5)
  image(worm[frame],width/3,height/6)
  pop()

  

  // //RAIN
  // let rainX = 30
  // let rainY = 30

  //  fill(225)
  //  noStroke()
  //  ellipse(rainX,rainY,2,10)

  //  for (i=0, i==height, drum )
    
   
}



//   let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);