/*
 Arduino Light Sensor
 
 Created: 05/04/2022
 By Ayesha Ahmed
 
Refrenced from: https://arduinomylifeup.com/arduino-light-sensor
*/
// this constant won't change:
const int buttonPin = 7;       // the number of the pushbutton pin
const int greenLedPin = 2;           // Pin Green LED is connected to
const int yellowLedPin = 3;          // Pin Yellow LED is connected to
const int redLedPin = 4;             // Pin Red LED is connected to
 
// variables will change:
int brightness = 0;            // how bright the LED is
int lightSensorPin = A0;        // PIN Light Sensor is connected to
int analogValue = 0;
int buttonPushCounter = 0;   // counter for the number of button presses
int buttonState = 0;         // variable for reading the pushbutton status
int lastButtonState = 0;

int firstdelay = 20;        //delay to slow down flikering of red LED
int lastdelay = 50;
bool isPressed = false; // when the button is not pressed
 
 
void setup() {
 
   // initialize the button pin as a input:
 pinMode(buttonPin, INPUT);
 
 //Set pins to outputs
 pinMode(greenLedPin, OUTPUT);
 pinMode(yellowLedPin,OUTPUT);
 pinMode(redLedPin,OUTPUT);
}
 
void loop(){
   // read the pushbutton input pin:
 buttonState = digitalRead(buttonPin); 
 lastButtonState = buttonState;
 // compare the buttonState to its previous state
 if (buttonState  != lastButtonState) {
   // if the state has changed, increment the counter
   if (buttonState == HIGH) {
     isPressed = true;
     // if the current state is HIGH then the button went from off to on:
     buttonPushCounter++;
     Serial.println("on");
     Serial.print("number of button pushes: ");
     Serial.println(buttonPushCounter);
   } else {
     // if the current state is LOW then the button went from on to off:
     Serial.println("off");
   }
   // Delay a little bit to avoid bouncing
   delay(50);
 }
 // save the current state as the last state, for next time through the loop
 lastButtonState = buttonState;
 
  /*Checks the modulo of buttonPushCounter by dividing it with 4,
 increases delay of  redLED  when the modulo is 1 and decrease the delay of the green 
 with the subsequent increase in modulo
 */
 if (buttonPushCounter % 4 == 0 && isPressed == true) {
   firstdelay -= 10;
     lastdelay += 10;
   isPressed = false;
 }
 else if (buttonPushCounter % 4 ==1 && isPressed == true){
   firstdelay -= 20;
    lastdelay += 20;
   isPressed = false;
   }
 else if (buttonPushCounter % 4 == 2 && isPressed == true) {
    firstdelay -= 30;
    lastdelay += 30;
    isPressed = false;
 }
 
 else if (buttonPushCounter % 4 == 3 && isPressed == true){
   firstdelay -= 40;
    lastdelay += 40;
   isPressed = false;
 }
 
 
 // setting up a range for all the LED's so that tehy flicker only at a praticular intensity
 analogValue = analogRead(lightSensorPin);
 if(analogValue < 50){           
   digitalWrite(redLedPin, HIGH);
 }
 else if(analogValue >= 50 && analogValue <= 100){
   digitalWrite(yellowLedPin, HIGH);
 }
 else{
   digitalWrite(greenLedPin, HIGH);
 }
  // manages teh delay when the button is pressed for each of teh LED's
 delay(firstdelay);
 digitalWrite(greenLedPin, LOW);
 
  delay(70);
 digitalWrite(yellowLedPin, LOW);
 
  delay(lastdelay); 
 digitalWrite(redLedPin, LOW);

}
