# Musical Instrument:
## Banana Piano:

### Description:

We attempted to make a very innovative and green version of a normal piano that utilizes bananas.  We utilized seven bananas that replicate the seven distinct musical notes and a combination of all of these can be utilized to produce a variety of music.Each banana behaves as a capacitive sensor that produces a distinct note as soon as the pressure exceeds a certain limit.The piano incorporates both an analog sensor( which in this case is pressing the banana) and a digital sensor(switch). The piano also has a LED light to indicate whether the circuit is complete or not.

![image](https://user-images.githubusercontent.com/98395837/162841472-ed3c316e-ee7b-4b63-b64c-bb38d5b16585.png)

### Overview of the Development process:

- The prospect of making a musical instrument excited  both of us a lot and both of us were flooded with a lot of ideas. We thought of making a drum with perhaps a tin box or  a musical flick or even a guitar pedal. However subsequently we realized that in order to materialize these ideas, we needed a lot more time and adequate materials on our hands owing to which we weren’t able to go ahead with it.

- While looking for inspiration, we were focussed on making something from waste. We were largely inclined towards an idea where we could incorporate junk items to generate something meaningful. After hours of brainstorming and surfing through the net we came across the idea of making a banana piano which basically utilizes freshly/ overly ripe bananas as a capacitive means to generate different frequencies.

- We initially met on Thursday where we  brainstormed  and finalized the idea.In our following meeting on Friday we tried to finish the circuit so that we could work on the documentation the subsequent days however we ran into several problems.

- Initially we tried to assemble the circuit according to the schematic, however in the presence of a really small breadboard we kept running into a lot of wiring problems so we had to improvise by minimizing the use of wires and making direct connections.

- We encountered several problems while working on the code. Firstly, despite several attempts the code simply wouldn’t compile and even after successful compilation, despite everything working properly, the buzzer simply wouldn’t beep.Secondly, the presence of a lot of wiring on  a small board made it difficult to keep track of which pin was connected where.After a lot of tries, we decided that perhaps a larger section of the problem was because we lacked a 1 million ohm resistor.Even though we had improvised the circuit to fit the needs of a 10K resistor, the circuit simply wouldn’t work.

- We met again on Monday, where we first dropped by the IM lab to collect the 1 million ohm resistor and then reassembled the circuit again. We also discovered that by changing the touch sensitivity from “long” to “float” we were able to get more distinct frequencies with a gentle touch.We also changed the frequency of each tone corresponding to each  banana to incorporate every note.However despite, this struggle the notes would work for all of them except one banana . After rewiring the entire thing, we discovered that  the problem was in the banana.( it perhaps wasn’t ripe enough)

- The next obstacle was incorporating a toggle switch into the circuit. Since it has about three pins, its working was quite different from a normal switch. After loads of trial and error and surfing the internet for probable solutions, we finally realized that the toggle switch requires the use of only two pins while we were trying to connect all three to make it work.


### Pictures:

![IMG_0131](https://user-images.githubusercontent.com/98395837/162844108-30b7e5ae-886e-4576-b264-d94076b86919.jpg)
![IMG_0132](https://user-images.githubusercontent.com/98395837/162844133-a1f7704c-a6ad-4c0b-b468-653feb61f6fe.jpg)

### Video:

https://youtube.com/shorts/2fhxjYQAqfI

### Problems:
- The presence of a small breadboard made wiring really difficult and confusing.
- The lack of conducting paint prevented us from creating an actual piano.
- The lack of properly ripe bananas at the convenience store made us remove an additional note that we wanted to incorporate.
- Due to lack of time we weren’t able to materialize our initial ideas.
- The inability of the code to compile due to file size errors despite everything being well within the limit.

 ### Discoveries:
- The biggest discovery that we made is that the ripeness of the banana significantly affects the capacitive sensor. The ripeness of the bananas needs to be just adequate for the buzzer to beep.( too raw or ripe bananas can significantly hamper the circuit)
- The change in the code from “long” to “ float” helped us get more distinct notes.
- The beep persists even after the finger is removed for sometime until unless the pressure doesn’t completely diminish.

 ### Schematic diagram:
 ![IMG_0138](https://user-images.githubusercontent.com/98395837/162844189-d6ed9ea6-ea53-48df-bf6e-0283337e50fb.jpg)


 ### References:
https://playground.arduino.cc/Main/CapacitiveSensor/

https://www.youtube.com/watch?v=sqQzIN7G6Oc&t=21s

https://www.mrelectrouino.com/2019/08/arduino-piano-diy-conductive-paint.html

