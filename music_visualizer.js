let firstRun = true
let froggy 
let robot 
let worm = []
let frogHeight = 30
let floorboards = 180
let wall = 30

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  let Fglow = [80+bass,50+bass,20+bass]   //frog stomach glow
  let ReyeGlow = [30+other,0+other]       //robot eye glows
  let RglowX = 50 + other                 //robot body glow in x direction
  let RglowY = drum                       //robot body glow in y direction
  let wFrame = int(map(vocal,0,100,0,9))  //worm image sequence

  //  GRADIENT SKY BACKGROUND
  let top = color(38, 17, 61)       //dark purplish blue
  let bottom = color(247, 196, 27)  //faint light orange
  for (let i=0; i<height; i++){
    n = map(i,0,height+100,0,1)

    let newcolour = lerpColor(top,bottom,n)
    stroke(newcolour)
    line(0,i,width,i)
  }
  
  noStroke()  

  //  LOADING IN IMAGES
  if (firstRun==true) {
    push()
    worm.push(loadImage('assets/wormy1.png'))
    worm.push(loadImage('assets/wormy2.png'))
    worm.push(loadImage('assets/wormy3.png'))
    worm.push(loadImage('assets/wormy4.png'))
    worm.push(loadImage('assets/wormy5.png'))
    worm.push(loadImage('assets/wormy6.png'))
    worm.push(loadImage('assets/wormy7.png'))
    worm.push(loadImage('assets/wormy8.png'))
    froggy = loadImage('assets/froggy.png')
    robot = loadImage('assets/robot.png')    
    firstRun = false
    pop()
  }
  
  // RAINBOW FIREFLIES
  fill(245, 233, 66,30) //yellow
  drawFirefly(100,350-other,40)

  fill(232, 151, 179,30)  //pink
  drawFirefly(440,300-drum,60)

  fill(138, 237, 204,30)  //blue
  drawFirefly(800,250-vocal,70)

  fill(237, 152, 62,30) //orange
  drawFirefly(1180,350-other,50)

  fill(160, 247, 136,30)  //green
  drawFirefly(640,180-bass,30)

  fill(255, 103, 69,30) //red
  drawFirefly(985,100+drum,30)

  fill(185, 132, 245,30)  //purple
  drawFirefly(295,120+vocal,50)

  //  GRASS
  fill(27, 117, 90) //forest green
  ellipse(width/2,height,width*2,700)
  
  //  FROG SHADOW
  push()
  fill(8, 36, 27, 50+bass)  //dark green
  translate(0,frogHeight+40)
  ellipse(width/2,height/2,350,150)
  pop()

  //  FROGGY
  push()
  imageMode(CENTER)
  translate(0,-frogHeight)
  image(froggy,width/2,height/2)
  pop()

  //  FROG TUMMY GLOW
  fill(197,223,133, 80)  //honeydew green
  ellipse(width/2,(height/2)-frogHeight,Fglow[0]) 
  ellipse(width/2,(height/2)-frogHeight,Fglow[1])
  ellipse(width/2,(height/2)-frogHeight,Fglow[2])

  //  ROBOT SHADOW
  push()
  fill(8, 36, 27, 50+drum)  //dark green
  translate(430,200)
  ellipse(width/2,height/2,400,120)
  pop()

  //  ROBOT 
  push()
  imageMode(CENTER)
  translate(410,50)
  
  image(robot,width/2,height/2)
  pop()

  //   ROBOT EYE GLOW
  push()
  fill(33, 172, 196,100)  //electric blue
  translate(325,25)
  ellipse(width/2,height/2,ReyeGlow[0])
  ellipse(width/2,height/2,ReyeGlow[1])
  pop()

  push()
  fill(33, 172, 196,100)  //electric blue
  translate(425,-5)
  ellipse(width/2,height/2,ReyeGlow[0])
  ellipse(width/2,height/2,ReyeGlow[1])
  pop()

  //  ROBOT TUMMY GLOW
  push()
  fill(255,255,255,40)  //white
  translate(342,335)
  rotate(-16)
  rectMode(CENTER)
  rect(width/2,height/2,RglowX,RglowY,10)
  rect(width/2,height/2,RglowX+20,RglowY+20,10)
  rect(width/2,height/2,RglowX+40,RglowY+40,10)
  pop()


  //  WALL
  fill(48, 30, 17) //dark spruce brown
  rect(0,0,0+wall,height)
  rect(width,0,-wall,height)

  //  FLOOR
  fill(107, 78, 34) //lighter oak brown
  push()
  ellipse(width/2,height+floorboards,width*4,650)
  pop()


  //  WORM  SHADOW
  fill(79, 47, 9,100+vocal) //medium brown
  ellipse(180,height-70,400,50) 

  //  WORM
  push()
  imageMode(CENTER)
  translate(-400,120)
  image(worm[wFrame],width/2,height/2)
  pop()

}

function drawFirefly(x,drum,size){
  y = drum
  
  ellipse(x,y,size/2)
  ellipse(x,y,size+10)
  ellipse(x,y,size+20)
  ellipse(x,y,size+30)
}