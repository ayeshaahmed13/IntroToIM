## Assignment 6(April 5)
### Using digital and analog sensors

#### Description:
The program is largely cntrolled by the sensors, both digital and analog.Depending uponn the intensity of light in the environment a specific has benn programmed
to glow.The red led glows at low light intensity, the yellow glows at moderate light intensity whereas the green light glows only when the intemsity of light is very high.
The switch or the digital sensor in this program largely monitors the rate at which the LED's flicker.I tried to experimnent with different speeds of flickerig.
In case of the Red LED the flickering becomes more delayed however in the case of green, it becomes faster and in the yellow LED we don't really see an apparent
change.

#### Development process:
- I faced a lot of troouble developing this because intially my idea was to create something in which the analog part would still do the same thing but the digital sensors would behave differently. With a single press, I wanted the red LED to glow, with two presses I wanted the yellow to glow, and with three presses I wanted the green to glow and with four presses all the LED'S would illuminate.I even wrote the code for this part of the program but was unable to compile it with the analog part.These analog and the digital aspects seem to always contradict each other insated of complementing it so I went ahead and tweaked it a bit.

- Intially, I was very confused as too which sensor should I even use because all around me people were using a potentiometer and i genuniley wanted to try something new.The unltrasound and the light sensor where the next two option and I picked the light sensor I felt it woudl esier to wrok with and plus it looks more aesthetically appealing.

- Then taking inspiration from what was done in class and from a couple of videos and desigend the basic circutiry.This largely involved setting up the LED'S along with a resistor and finally connected all of that to a switch.

- Then I extensively worked on the code to  set a range for every LED that is conducive for our evironment on the basis of trial and error.I ran into a lot of issues of wiring because the breadboard had become super crowded so then I tried spread it out as much as possible.

- I also played around a lot with the delay aspect which goeverns the flickering of the LED'S. This was largely done agian through a series of trial and error.

#### Pictures:
![Image 1](https://user-images.githubusercontent.com/98395837/169257060-52595c6d-504c-4bdd-9d90-d812c4245aa8.jpeg)

[Image 2](https://user-images.githubusercontent.com/98395837/169254515-0f34b058-2be7-43f1-b476-235cf64b91d0.jpeg)


#### Video:
https://user-images.githubusercontent.com/98395837/169254624-646bdd06-0dea-453a-a068-4f66123e0488.mp4

#### Problems:
- The breadboard was really small so following the schematic and doing the wiring was really hard.
- Often I used to run the code, check the wiring and do a through testing to understand the problem however m often than not the polarity of the LED'S OR the LED would be at fault.
- Another issue was the sensitivity of tHE light sensor in different environmnets was different.A light source would usually flicker red in my room didnt flicker the same when taken to lab, so the ambiant conditions really mattered.

#### Discovery:
My biggest discovery while doing this project was that whenveer you are taking input from two diiferent sensors and genrating an output utilising a common medium( lights in this case) them we need to make sur ethat teh digital and the analog aspects complement each other instead of interfering with each other.

#### Schematic:

![Schematic](https://user-images.githubusercontent.com/98395837/169256842-efa7a99a-a225-4ab9-acc0-ed966178b559.jpeg)

