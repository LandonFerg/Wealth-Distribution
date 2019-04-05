
var bars = [];
var icons = [];
var bar;
var x = 0;
var y = 0;
var val;
var pIco;
var num = 20;  /*Number of bars*/

// TODO: Make an increase from 1% lead to less of an increase for poorer people
// Scale for real statistics
// Color people
// Make labels
// Celebtrity dropdown

function preload()
{
  for(let i = 0; i < num; i++)
  {
    icons[i] = loadImage("manIcon.png");
  }
}

function setup()
{
  var padding = 36; /*Dist between bars*/
  //var num = 20;
  cnv = createCanvas(800,800);

  // Add initial padding
  x = 0 + padding;
  y = height/2;

  // Styling
  background(220,214,194);
  fill(0);
  // Initialize an amount of bars & set the positions
  for(let i = 0; i < num; i++)
  {
    bars.push(new Bar());
    // Change X value ONLY IN SETUP so it's not changed later
    bars[i].position();
    //console.log("displaying bar at x: " + x + " and Y of:" + y);

    x += padding;

  }

  // Make sliders
  slide = createSlider(20, 100, 10);
  slide.position(-40, height-100);
  slide.style('rotate', -90);
}

function draw()
{
  background(240,234,214);
  val = slide.value();
  var tintValR = 0;
  var tintValG = 0;
  var counter = 0;

  // Draw the bars
  for(let i = 0; i < bars.length; i++)
  {
    // Draw icons
    tint(0 + tintValR,200-tintValG,0);
    if(counter < bars.length)
    {
      image(icons[i], bars[i].x, height/2 + 5, 20,20); // img, x,y,ix,iy
      tintValR += 20;
      tintValG += 12;
    }
    //image(icons[i], bars[i].x, , 20,20);
    bars[i].display();

    counter++;
  }
}

class Bar{
  constructor(){
    this.w = 20;
    this.h = 20;
    this.x = 0;
    this.c = floor(random(256));
  }

  position(){
    this.x = x;
  }

  display(){
    fill(this.c);
    rect(this.x, y, this.w, val*-1);
  }

}
