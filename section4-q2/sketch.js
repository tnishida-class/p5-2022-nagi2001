function setup(){
  createCanvas(400, 400);
  background(255,0,0);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = int(random(20, 100)); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){
   total += scores[i];
    }
 
 let sum=0;
 let z=0;
 for(let i=0; i < scores.length; i++){
 sum +=scores[i];
 let r=sum/total;
 let R=scores[i]/total;
 let l=PI*2*r;
 let m=PI*2*R;
 let n=l-m;
 strokeWeight(1);
 arc(200,200,300,300,n,PI*r*2);
 strokeWeight(1);
 line(200+150*cos(PI*r*2),200+150*sin(PI*r*2),200,200);
 

//balloon(scores[i]);

  }


for(let i=0; i < scores.length; i++){
  sum +=scores[i];

  balloon(scores[i])

  function balloon(t){
    let r =sum/total;

 let R=scores[i]/total;
 let l=PI*2*r;
 let m=PI*2*R;
 let n=l-m;

    let dx =200+75*cos(PI*2*sum/total);
    let dy =200+75*sin(PI*2*sum/total);
    text(t,dx,dy);
   }
}
}