//「→」と「↑」を押すと大きくなって、「←」と「↓」を押すと小さくなる円
let x, y, z;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  z =10
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, z);
  // キーの処理（else ifにすると同時押しできなくなってしまうので要注意）
  if(keyIsDown(LEFT_ARROW)){ z -= 10; }//左キーを押すと半径マイナス
  if(keyIsDown(RIGHT_ARROW)){ z += 10; }//右キーを押すと半径プラス
  if(keyIsDown(UP_ARROW)){ z += 10; }//上キーを押すと半径プラス
  if(keyIsDown(DOWN_ARROW)){ z -= 10; }//下キーを押すと半径マイナス
  z = constrain(z, 10, height);
}