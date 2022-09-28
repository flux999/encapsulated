const s = (sketch) => {

let img;
let imgCornerx;
let imgCornery;
let counter = 0;
let privacy = Math.random(1);

coverImage = ["https://uc738c17bbe5b930e9893ff6413d.dl.dropboxusercontent.com/cd/0/inline/Btw9VJx8CEEBDPMoqFUV1Qwyb2I86JQSJx8UZD6tCkzFVxZUdKJF3x6y_WHxiRBmnid4cjMhrMnA5sYY71Nx094VGjm73QMHqWYxVmBKRs21qHCeMychCqYxYcBcKzAvAJ6AmypIMqNCd2A0s54Lt_UmJnBptHLAAjFZREb9cLSoRg/file#",
              "https://ucf946258f4b35d82102674f4ea2.dl.dropboxusercontent.com/cd/0/inline/BtzMXUTius1yxRX9XCKV9xxiq6rMtkOMU8BD8nmITB74-IABSVGIWMzXYQtj_O5A_I2c0DPpSt1caxzf1JfLxGZMXsif4dQ9Mu4J60HRz7c7_Xwi9KeyJbu21JtF4RB7OpL8jA_r2G4oLMTiR4gy3pWX3sMt1RyD4BXkG-JSzASCYQ/file#",
              "https://uc10a3f6921334c49dae601e9362.dl.dropboxusercontent.com/cd/0/inline/Bty5yNwsmDSocxZGVTlG0s2rEWJoolAtiltjYVVaZwS09x6ErtIT_HBfVoD7UuYhq2M56L8QwB0RjkR4rWrkXgsxJQ5u5R5PzmnxiS7x0hrgi97J8Hm_peolIPhzq3JrotjPDPA6TTp0TbXnxtBy_0tHJba3QBmt-21a_ph5o_Dx7w/file#",
              "https://uc4926a192a5f3ac13f89297b43c.dl.dropboxusercontent.com/cd/0/inline/BtxvEmvq4BmLIlPQhApm2JrWlvLhIUGXzTIoIGAPXozwrtHwuJ_I3Rb3djxGgGsPPurVLqTnGulUGAzOXV4v2kC25XfB9Xo0rfvNffTlKJt3_P6E0QW7s9V0tuq7_4Muy4g9W1eUYT6kiQh_7YoRTNsxpKFcJhn-4VIh8e8xWWjP2w/file#",
              "https://uc719c71ccde28115f1fb7bd2118.dl.dropboxusercontent.com/cd/0/inline/BtzZwTH3f8TK0GEyHcnN7Wc4Fed12O8jrEJ_9c1_fJ1LEdQdufUvhg9REHBLFceB_rQ_pfuVjn2BbcPYs5BUmuE3a9L8OykefBryXQNPN0o0aMMfaruA1uRGF_XyGsGGz911FRnZED5ZpQcUTOj2szaYyMF1Dppx3_XD2ygeTpRTAQ/file#",
              "https://uc99ea6f0f90f05c883e496b5104.dl.dropboxusercontent.com/cd/0/inline/BtxZlP4zUqlCfGGROEsfHbzyDkS2RN7ivfQdIanqZAnd82KLU3qhosCgVWwleawF9SLGvYsTrETQbMeJwTSWXj2Kq0bjd3W370-I8PVDUsKLTEXUCVktmhrxAcHJNlAOO1TyVaWFcsDcnBqs2gy6uaZIiKNnExUwJYtg67l_0S1rZw/file#",
              "https://ucb4a5b39a67ecb4a67120cb01f7.dl.dropboxusercontent.com/cd/0/inline/BtxNdQ5-gnIvBHmp5QJDIItWeZMGN6UyEQQbU6Yg2s5aw5DCeu-L3fOBmHxRJOOeLSHLyCzOnGsOxdiiUDc12DbDDYNQ7d__JAvD7jN8k00zGxiN10gpt0FL9qI9DKVjNWNNbvqsaQwIlTxEjwTtACI9i2aO5LQdevZZF1VCYsEU5A/file#",
              "https://uc15a5da65f078f3021e63accc7c.dl.dropboxusercontent.com/cd/0/inline/BtwbRyllzW2mnXS7Ua9jTwCWcZHd_SFHBF0LKl4CrTXv2C7QL0j7NJNGxKSf6bPE9gera8DXr_knvq3hVtRLjsccjjycm2ExvJNR29eO4RN4CiJDe6veo9Fbb_ysjg-9298h74US98FE2sPNpPb2w4HN11iL3LC-pO0bRb2QC4vqsg/file#",
              "https://uc819aa1b21c561961c4a8e8b2a9.dl.dropboxusercontent.com/cd/0/inline/Bty2ysF9vcQLxinDrW2AIxBfi4-h-ZBR-BcKxR-U77fvKwGSH4XbPHQWM1rACImRugppacV9hcBuqUtLy8TREKViSvuH8N6mv_1fA4IBWJQyJyvFVRhLWKF9ZnCe24xZx0Qqw_Apwf-_92fRcAjpmgegNJozTe4c0ARiU-I_eY3UNg/file#",
              "https://ucb87020d4d33022a29592632c69.dl.dropboxusercontent.com/cd/0/inline/BtwW0-evrKEFYzx5B8UuAXbSbcGfFhoLLXmlTR0nTedg1FPnOKWccAl-FUlAbcUGK9PM9k_5x0J-KRKnxnZmISocQyqy5wzJIDgq4RWdJfCW2CQfAP2OkxADRyFRv_r4hGWeh8f7unEjTrcs8Gp3sI_0q2bQSIPqsp-Or2px5cF8aw/file#",
              "https://uc06647029af8b92ae75784d462d.dl.dropboxusercontent.com/cd/0/inline/Btwp-3fdP4jGomyRDeMinVkYfgLGB2e7X4_3ZfUjzutnbGW55CYDj31KQrG8q5qlwgHfnkq9YWbz-mG0JuoyDBgGmYCiOOUUCs7MGkp0WrQGmUTv_yLliKJcBsiRVYRx40FLd2zmlW--rztTivXGrtCFPBaIfOEvZqNxfz09bbFYkQ/file#",
            ]

sketch.preload = () =>  {
  // img = sketch.loadImage("cover/cover" + Math.floor(sketch.random(1,12)) + ".jpeg");
  //img = sketch.loadImage("https://uc9c72427b6559d440373f323971.dl.dropboxusercontent.com/cd/0/inline/Btu9_20yci35etvz4HhmNIvoQNGKQW1UtOE3QPfG9MquEPuXUI3EJXkSItfVy9M7LWntIuVU-XrfhR-LUkwamtValqCMoG-GlXF5UhZDHSf8XHS9sHXBC1cO9APYNJSBXc8GDU89FXjiDnpEdipnw1bVerxTEqpMMLm2aZWZNpYwwA/file#");

  img = sketch.loadImage(sketch.random(coverImage));

}



sketch.setup = () => {

  
  img.resize(0, 700);
  const myCanvas = sketch.createCanvas(img.width, img.height);
  myCanvas.parent("visual-1")
  sketch.pixelDensity(1);
  
  imgCornerx = 400;// (sketch.windowWidth-img.width)/2;
  imgCornery = 0; //(windowHeight-img.height)/2;

  sketch.frameRate(1000);
}


sketch.draw = () => {


  img.loadPixels();
  
  for (let i = 0; i < img.width - 1; i++) {
    for (let j = 0; j < img.height - 1; j++) {

       if (sketch.random(2)<1) {
        sketch.vmovePixels(i, j);
       } else {
        sketch.hmovePixels(i, j);
         }
        
      counter++; //not to change every pixel during the process. 
        
      if (counter<img.width*img.height*50) {
     
        sketch.randomColor(parseInt(sketch.random(img.width)), parseInt(sketch.random(img.height)));
      } else {
        //console.log(counter);
        }
    }
  }

  img.updatePixels();

  sketch.background(0);
  
  sketch.image(img, 0,0);
  
  /* if ( privacy<0.5) {
    filter(INVERT);
  } */

  
}

// assign random colors to random pixels on the canvas
sketch.randomColor = (i, j, density="low") => {
  
  if (density == "high") {
    randomValue= sketch.random(50);
    
  } else {
    randomValue = sketch.random(100);
  }  
  
  if(randomValue<0.05) {
    const index5 = 4 * (j * img.width +i);
    img.pixels[index5]= sketch.random(200);
    img.pixels[index5+1]= sketch.random(200);
    img.pixels[index5+2]= sketch.random(200);      
  }
}

sketch.hmovePixels = (x, y) =>{ 
  let neighbour;
  let pix;
  
  //locating the pixel values in the array of values
  const index = 4 * (y * img.width + x); 
  const index3 = 4 * (y * img.width + (x+1)); 
  neighbour = [img.pixels[index3], img.pixels[index3+1], img.pixels[index3+2]];
  pix = [img.pixels[index], img.pixels[index+1], img.pixels[index+2]];
   
  //bubble sort algorithm to first check the values of the pixels inside if condition,
  if (sketch.hue(pix) < sketch.hue(neighbour)) {
     temp = [];
     
     temp[0]= img.pixels[index]; //then displacement by putting the first index to the temporary position in a new array and,
     img.pixels[index] = img.pixels[index3]; //exchanging the locations according to the if condition.
     img.pixels[index3] = temp[0]; 
     
     //repeating it for all r,g,b values of the pixels.
     temp[1]= img.pixels[index+1];
     img.pixels[index+1] = img.pixels[index3+1];
     img.pixels[index3+1] = temp[1];
     
     temp[2]= img.pixels[index+2];
     img.pixels[index+2] = img.pixels[index3+2];
     img.pixels[index3+2] = temp[2];
     
    
  }
}

sketch.vmovePixels = (x, y) => { 
  let neighbour;
  let pix;
  
  const index = 4 * (y * img.width + x); 
  const index3 = 4 * ((y+1) * img.width + x); 
  neighbour = [img.pixels[index3], img.pixels[index3+1], img.pixels[index3+2]];
  pix = [img.pixels[index], img.pixels[index+1], img.pixels[index+2]];
   
  //let a = sketch.random([sketch.hue.name, sketch.brightness.name]);

  
  let r = Math.floor(sketch.random() * 2)
  if (r == 0) {
    if (sketch.hue(pix) < sketch.hue(neighbour)) {
      temp = [];
      
      temp[0]= img.pixels[index3];
      img.pixels[index3] = img.pixels[index];
      img.pixels[index] = temp[0];
      
      temp[1]= img.pixels[index+1];
      img.pixels[index+1] = img.pixels[index3+1];
      img.pixels[index3+1] = temp[1];
      
      temp[2]= img.pixels[index+2];
      img.pixels[index+2] = img.pixels[index3+2];
      img.pixels[index3+2] = temp[2];
      
   }
  }

  if (r == 1) {
    if (sketch.brightness(pix) < sketch.hue(neighbour)) {
      temp = [];
      
      temp[0]= img.pixels[index3];
      img.pixels[index3] = img.pixels[index];
      img.pixels[index] = temp[0];
      
      temp[1]= img.pixels[index+1];
      img.pixels[index+1] = img.pixels[index3+1];
      img.pixels[index3+1] = temp[1];
      
      temp[2]= img.pixels[index+2];
      img.pixels[index+2] = img.pixels[index3+2];
      img.pixels[index3+2] = temp[2];
      
   }

  }
  if (r == 2) {
    if (sketch.brightness(pix) < sketch.brightness(neighbour)) {
      temp = [];
      
      temp[0]= img.pixels[index3];
      img.pixels[index3] = img.pixels[index];
      img.pixels[index] = temp[0];
      
      temp[1]= img.pixels[index+1];
      img.pixels[index+1] = img.pixels[index3+1];
      img.pixels[index3+1] = temp[1];
      
      temp[2]= img.pixels[index+2];
      img.pixels[index+2] = img.pixels[index3+2];
      img.pixels[index3+2] = temp[2];
      
   }

  }

  if (r == 3) {
    if (sketch.hue(pix) < sketch.brightness(neighbour)) {
      temp = [];
      
      temp[0]= img.pixels[index3];
      img.pixels[index3] = img.pixels[index];
      img.pixels[index] = temp[0];
      
      temp[1]= img.pixels[index+1];
      img.pixels[index+1] = img.pixels[index3+1];
      img.pixels[index3+1] = temp[1];
      
      temp[2]= img.pixels[index+2];
      img.pixels[index+2] = img.pixels[index3+2];
      img.pixels[index3+2] = temp[2];
      
   }

  }


}
}


let myp5 = new p5(s, 'visual-1')
