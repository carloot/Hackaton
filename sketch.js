var mic;
var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage6;
var myImage7;
var myImage8;
var myImage9;
var myImage10;
var myImage11;
var myImage12;
var myImage13;
var myImage14;
var myImage15;
var myImage16;
var myImage17;
var myImage18;
var myImage19;
var myImage20;
var myImage21;
var myImage22;
var myImage23;
var myImage24;
var myImage25;





function preload() {
    
    myImage1 =  loadImage('./assets/wutang-01.png');
     myImage2 =  loadImage('./assets/wutang-02.png');
    myImage3 =  loadImage('./assets/wutang-03.png');
     myImage4 =  loadImage('./assets/wutang-04.png');
      myImage5 =  loadImage('./assets/wutang-05.png');
     myImage6 =  loadImage('./assets/wutang-06.png');
    myImage7 =  loadImage('./assets/wutang-07.png');
     myImage8 =  loadImage('./assets/wutang-08.png');
       myImage9 =  loadImage('./assets/wutang-09.png');
     myImage10 =  loadImage('./assets/wutang-10.png');
    myImage11 =  loadImage('./assets/wutang-11.png');
     myImage12 =  loadImage('./assets/wutang-12.png');
      myImage13 =  loadImage('./assets/wutang-13.png');
     myImage14 =  loadImage('./assets/wutang-14.png');
    myImage15 =  loadImage('./assets/wutang-15.png');
     myImage16 =  loadImage('./assets/wutang-16.png');
 myImage17 =  loadImage('./assets/wutang-17.png');
     myImage18 =  loadImage('./assets/wutang-18.png');
       myImage19 =  loadImage('./assets/wutang-19.png');
     myImag20 =  loadImage('./assets/wutang-20.png');
    myImage21 =  loadImage('./assets/wutang-21.png');
     myImage22 =  loadImage('./assets/wutang-22.png');
      myImage23 =  loadImage('./assets/wutang-23.png');
     myImage24 =  loadImage('./assets/wutang-24.png');
    myImage25 =  loadImage('./assets/wutang-25.png');
    
}




function setup() {
  createCanvas (1185.25,830.75);

    mic = new p5.AudioIn();
    
    mic.start();
     
}




function draw() {


    
 var vol = mic.getLevel();

 vol = map(vol,0,1,0,60);

 console.log(vol);
     
 image(myImage1,0,0,1185.25,830.75);
    

    if (vol >= 1) { 
 image(myImage2,0,0,1185.25,830.75);
} ;
    
  if (vol >= 2) { 
 image(myImage3,0,0,1185.25,830.75);
} 
    
    if (vol >= 3) { 
 image(myImage4,0,0,1185.25,830.75);
} ;
   
    if (vol >= 4) { 
 image(myImage5,0,0,1185.25,830.75);
} ;
       if (vol >= 5) { 
 image(myImage6,0,0,1185.25,830.75);
} ;
    
    if (vol >= 6) { 
 image(myImage7,0,0,1185.25,830.75);
} ;
    
    if (vol >= 7) { 
 image(myImage8,0,0,1185.25,830.75);
} ;
    if (vol >= 7.5) { 
 image(myImage9,0,0,1185.25,830.75);
} ;
    if (vol >= 8) { 
 image(myImage10,0,0,1185.25,830.75);
} ;
    if (vol >= 8.5) { 
 image(myImage11,0,0,1185.25,830.75);
} ;
    if (vol >= 9) { 
 image(myImage12,0,0,1185.25,830.75);
} ;
    if (vol >= 9.5) { 
 image(myImage13,0,0,1185.25,830.75);
} ;
    if (vol >= 10) { 
 image(myImage14,0,0,1185.25,830.75);
} ;
    if (vol >= 10.5) { 
 image(myImage15,0,0,1185.25,830.75);
} ;
       if (vol >= 11) { 
 image(myImage16,0,0,1185.25,830.75);
} ;
       if (vol >= 11.5) { 
 image(myImage17,0,0,1185.25,830.75);
} ;
    
    if (vol >= 12) { 
 image(myImage18,0,0,1185.25,830.75);
} ;
    
    if (vol >= 12.5) { 
 image(myImage19,0,0,1185.25,830.75);
} ;
    if (vol >= 13) { 
 image(myImage20,0,0,1185.25,830.75);
} ;
    if (vol >= 13.5) { 
 image(myImage21,0,0,1185.25,830.75);
} ;
    if (vol >= 14) { 
 image(myImage22,0,0,1185.25,830.75);
} ;
    if (vol >= 14.5) { 
 image(myImage23,0,0,1185.25,830.75);
} ;
    if (vol >= 15) { 
 image(myImage24,0,0,1185.25,830.75);
} ;
    if (vol >= 16) { 
 image(myImage25,0,0,1185.25,830.75);
} ;
    
    
if (vol >= 17) { 
myImage25.filter("invert");
    
} ;    


}

