
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // background(20)
  // textFont('Helvetica'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);

  background(200)
  
  let floorboards = 120
  let door = 180
  let roof = 30
  let wall = 30
  let Hs = 110
  // let square = 90

  //  DOOR
  fill(48, 30, 17) //64, 31, 10
  rect(0,0,0+door,height)

  //  WALL
  fill(27, 117, 90)
  rect(width,0,-wall,height)

  //  SQUARES
  fill(184, 169, 145) //255, 237, 209
  
  for (let ii=0 ; ii=2 ; ii++){
    for (let i=10 ; i<height-door-floorboards; i=i+Hs){
      rect(10,roof+i,door-110,Hs-10)
    }
  }
  
  //  FLOOR
  fill(138, 105, 54)
  rect(0,height-floorboards,width,floorboards)

  //  ROOF
  fill(27, 117, 90)
  rect(0,0,width,roof)
  



   
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