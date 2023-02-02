float time = 0;
float a;
float offset = PI/24.0;
color backColor = color(0, 100, 200);
int num = 1;
int num2 = 10;
float rand1 = random(10);
float rand2 =random(10);
void setup() {
  size(100, 100, P3D);
  colorMode(RGB, 400);
  smooth();
  background(backColor);
}



void draw() {
  fill(0, 0, 0, 1);
  noStroke();
  translate(width/2, height/2);

  float x = 0;
  color randColor = color ((time/150), 0, (time/150), 1);

  for (int i = 0; i< num; i++) {
    for (int j = 0; j<num2; j++) {
      scale(rand1);
      stroke(time/8, 255, time/rand1, time/45);
      fill(randColor);
      rotateX(rand1);
      rotateY(rand2);
      rotateZ(rand1/rand2);
      line(x*rand1, time/4, time/rand2, time/4);
      line(x*rand1, -time/4, time/rand2, -time/4);
      line(-x*rand1, time/4, -time/rand2, time/4);
      line(-x*rand1, -time/4, -time/rand2, -time/4);
      line(-x, -time/4, -time/4, time/4);
       line(-x, -time/4, time/4, time/4);
      line(-x, (-time/4), time/4, 1/(time/4));
       line((x), (time/4), (time/4), 1/(time/4));
       line((x), (time/4), (-time/4), 1/(-time/4));
       line((x), (-time/4), (-time/4), 1/(time/4));

      color(randColor);
      x= x+1;
    }
  }
  a += 0.01;
  time += 1;
}