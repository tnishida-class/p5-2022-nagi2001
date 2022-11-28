// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      console.log(i, j); // 補足： i,j の変化がわかりやすくなるように入れています
      strokeWeight(0);
      let n=i+j;

      if(n%2 == 1)
        {
            //①jが0から2の時は赤丸
          if(j<=2)
            {
            
            fill(211);//色を灰色にする
            rect(i * size, j * size, size,size);//正方形を描く

            fill(255,0,0);//色を赤色にする
            ellipse(size*i+size*0.5,size*j+size*0.5,25);//四角形に入る円を描く

        
            }

            //②jが3と4の時
          if(j==3||j==4)
            {

              fill(211);//色を灰色にする
              rect(i * size, j * size, size,size);//円を書く

            }

            //③jが5から7の時は黒丸
          if(5<=j&&j<=7)

            {

              fill(211);//色を灰色にする
              rect(i * size, j * size, size,size);//正方形を描く

              fill(0);//色を黒色
              ellipse(size*i+size*0.5,size*j+size*0.5,25);//四角形に入る円を描く


            }

          
        }
      
      else{
        fill(255);//色を白色に
        rect(i * 25, j * 25, 25,25);
      }
  }
  }
  }
