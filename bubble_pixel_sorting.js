const s = (sketch) => {

let img;
let imgCornerx;
let imgCornery;
let counter = 0;
let privacy = Math.random(1);

coverImage = ["https://i.ibb.co/ygPYV7q/cover1.jpg",
              "https://i.ibb.co/mvx2Cy5/cover2.jpg",
              "https://i.ibb.co/c2xVwQR/cover3.jpg",
              "https://i.ibb.co/MRbPbBm/cover4.jpg",
              "https://i.ibb.co/QMQfQKJ/cover5.jpg",
              "https://i.ibb.co/wC3C7tp/cover6.jpg",
              "https://i.ibb.co/b6K99XS/cover7.jpg",
              "https://i.ibb.co/wgsRPT7/cover8.jpg",
              "https://i.ibb.co/W31B5kg/cover9.jpg",
              "https://i.ibb.co/p1xgHCr/cover10.jpg",
              "https://i.ibb.co/XZYr59x/cover11.jpg",
            ];

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
