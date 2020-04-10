# COVID-19-Complete-Protection

**Description**

So this is a code for the device we had made to prevent completely from COVID-19. We have made a wrist band which will alert you whenever your hand comes in front of your face, it will help you to avoid touching your eyes, mouth and nose which are the main entry point of Corona Virus in our body. It also contains temperature sensor which will continuosly monitor your temperature and will alert you as well as doctor doctors nearby whenever temperature goes beyond threshold value.
The ESP32 is a microcontroller having inbuilt bluetooth which is used to connect our device with the phone. MPU6050 is used to get the position of the hand. By checking the value of the angles when our hand comes near to the face the inbuilt led of esp32 starts glowing. The temperature sensor sense the body temperature sends the value to the phone and as soon as the temperature goes above the 102 Fahrenheit then the device sends an alert to the phone.
We have also made an android app using MIT App Inventor to monitor. We are using geolocation sensors of your Mobile only so it will help to reduce cost of wrist band and it also contains feature of check status to know if there is any COVID-19 patient within 100 meter of your range. Also a website for Administrator to control all the information of citizens. They can check status of any person at any time, including his/her travel history. If they found some with COVID-19 positive they can change thier status so that other person in that coordinate will remain alert. If administrator wants to track travel history at particular coordinates they can check it, it will give complete details with Mobile number of person, date and time of travel to that coordinate.


So comlpete details of person and complete details of every coordinate can be found easily. And no need to go outside for treatment or checking, knowing your health status and checking they can give you mobile treatment from their mobile vehicles as well. And it will help you to leave an unwanted habit of touching your face.

Further we can make it to sense the further characteristics of the body which are used to detect the symptoms of the Corona.


**Hardware Requirements**

- ESP32  a microcontroller having inbuilt bluetooth which is used to connect our device with the phone.

- MPU6050 is used to get the position of the hand

- temperature sensor(LM35)


**Software Requirements**

- npm (Node Package Manager)

- Node JS

- MongoDB

- Editor (example : Atom, Sublime Text, Visual Studio Code)

- Ardunio IDE

Steps to Install Arduino IDE:

    • Visit website arduino.cc. 	
    • On the opened webpage, click on ‘Software’ tab followed by ‘Downloads’ from the drop down menu. 
    
![image](https://user-images.githubusercontent.com/34127674/78974913-a54aa280-7b30-11ea-930e-2442ab5f0b4c.png)

    • Click on ‘Windows Installer, for Windows XP and up’.    
    • Download the zipped file for Arduino IDE from the next window opened.
    
![image](https://user-images.githubusercontent.com/34127674/78975027-e0e56c80-7b30-11ea-9dc3-aac7c9c2a0bb.png)

    The user interface of the software looks like: 
    
![image](https://user-images.githubusercontent.com/34127674/78975100-02465880-7b31-11ea-8845-f7e537700e23.png)
    
    Now, we need to install ESP8266 board into Arduino IDE since our project uses the same as our main microcontroller.
    
    • Open Arduino IDE. 
    • Select File > Preferences. The Preferences dialogue box opens. 

    • In the Preferences dialogue box, under ‘Additional Boards Manager URLs’, add the following URL and click on ‘OK’.
https://dl.espressif.com/dl/package_esp32_index.json

    • Now, select Tools > Board > Board Manager. In the Board Manager dialog box, search for ESP8266 and install.
    
![image](https://user-images.githubusercontent.com/34127674/78975153-22761780-7b31-11ea-8f22-6cdd82fb600f.png)


**Process FLow**

Hardware

![hardware](https://user-images.githubusercontent.com/34127674/78975498-d7103900-7b31-11ea-9a0b-ca74c9209993.png)

Software

Start MongoDB Server

(I prefer don't change port number only change IPv4 address only)

For DOCTOR SERVER

1. So first of all clone this repository.
2. cd COVID-19-Complete-Protection.
3. cd DOC_SERVER (No need to install any package, we have uploaded all the modules for convience).
4. Open another terminal, type ipconfig and not your ipv4 address.
5. Open app.js and at bottom paste your IPV4 address in app.listern after port number, port number for DOC_SERVER is 3001 by default
6. In terminal run command : node app.js, and your server started
7. You app will run on ipv4:3001

FOR USER SERVER

1. Open another terminal
2. cd COVID-19-Complete-Protection.
3. cd User_Server (No need to install any package, we have uploaded all the modules for convience).
4. Open app.js and at bottom paste your IPV4 address in app.listern after port number, port number for USER_SERVER is 3000 by default
5. In terminal run command : node app.js, and your server started
6. User Server Started

FOR Application

1. Open http://ai2.appinventor.mit.edu/
2. Import COVID_19_Release.aia file given
3. Go to blocks
4. Change IPv4 address where ip address are given. Make sure please check the port number please.
5. Then download that .apk using their companion app or in PC. You are good to go.

![Untitled presentation](https://user-images.githubusercontent.com/34127674/78975648-26ef0000-7b32-11ea-93fb-088638390ac7.png)


**Data Flow Diagram**


Hardware

![Hardware flow diagram](https://user-images.githubusercontent.com/34127674/78975743-6584ba80-7b32-11ea-93f2-9341254a814f.png)

Software

For User
![user_data_flow](https://user-images.githubusercontent.com/34127674/78975868-b1376400-7b32-11ea-9b94-1f79dd2efacb.png)

For Doctor
![doctor_data_flow](https://user-images.githubusercontent.com/34127674/78975910-c57b6100-7b32-11ea-9b64-8628163a4781.png)

