# Assignment - Three Tasks
## Description:

Worked with Mishel to complete 3 in-class exercises.

1. Control an ellipse on the x-axis using an analog sensor
2. Control the brightness of an LED on arduino using p5js
3. Editing the wind example to:
    - Wind changes according to analog sensor input.
    - Light blinks when ball touches the ground.

## First Task:

 Using an analog sensor (potentiometer), we change the ellipse on the horizontal axis.
- Used Jack's code from class to make edits to it. 
- Instead of two analog sensors (potentiometer and LDR), we just used one: Potentiometer.
- The analog readings are read in p5js, mapped between 0 and the width of the canvas, and then these values were used as the x axis of the ellipse (center of ellipse).
- Refer to the code for mapping process mentioned above.

## Second Task:

No sensors used here. We just needed an LED on the Arduino and used input from the user to control the brightness.
- There are 4 levels of brightness: off, dim, medium, and high. 
- As the user presses keys (between 0 and 3), these changes are made.

## Third Task:

Making the LED turn on when the ball bounces, and controlling the wind from an analog sensor.
- This was a combination of the previous two tasks.
- Edited both Jack's and AarOn Sherwood's example to make this work 
- Took reading from the analog sensor (potentiometer), mapped it between -1 and 1, and adjusted wind according to this value 
- There was already a condition in the example that checked whether the ball was touching the ground or not. 
- We just added an additional statement in this block of code to send a value of "1" to the arduino if it was touching the ground and "0" otherwise. 
- The arduino code handled these values of 1 and 0 to control the LED. -If the value received from p5js was 1, the LED turns on. 
- -If 0, turn the LED off.

https://user-images.githubusercontent.com/98395837/163927624-b86d6e84-90da-4058-b10d-1d1c71b9aa6d.mp4

