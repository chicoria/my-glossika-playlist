# glossika-playlist
A script to generate glossika language course playlists using the data from the glossika schedules



Thats make easy to place the Playlist file into my glossika "root" folder (ie: /Fluency) and import the playlist to my player:

    /German
    /Fluency
      *ENDE_18-weeks.m3u*   
      /ENDE-F1-GMS
        /GMS-A
          ENDE-F1-GMS-A-0001.mp3
        /GMS-B
        /GMS-C  
      /ENDE-F2-GMS
        /GMS-A
        /GMS-B
        /GMS-C  
      /ENDE-F3-GMS
        /GMS-A
        /GMS-B
        /GMS-C      
      /ENDE-GSR


The available Glossika Schedules Source files(copied from Glosskia Schedule Guide downloaded from Glossika Learning Guide (PDF) https://glossika.com/home/library :

- 4-Month-Intensive-Training-18weeks.txt
- 9-Month-Relaxed-Training-43weeks.txt

How can I run the script
- download and install node from https://nodejs.org/en/download/
- download https://github.com/chicoria/my-glossika-playlist/archive/master.zip or clone the git repository
- go the folder downloaded via terminal (DOS, linux, mac command prompt)
- run the command : npm install
- run the command : node index.js
i.e:
node index.js EN DE 9-Month-Relaxed-Training-43weeks.txt

where :
node index.js [source language] [target language] [scheduleFileSource]
EN is the glossika language code for English [source language]
DE is the glossika language code for Deutsche(German) [target language]
9-Month-Relaxed-Training-43weeks.txt is the Glossika Schedule Source [scheduleFileSource]

available commands:

node index.js EN DE 9-Month-Relaxed-Training-43weeks.txt
//will generate a playlist for the schedule 9-Month-Relaxed-Training-43weeks from English(EN) to German (DE)

node index.js EN DE 4-Month-Intensive-Training-18weeks.txt
//will generate a playlist for the schedule 4-Month-Intensive-Training-18weeks.txt from English(EN) to German (DE)

node index.js ZS ARE 9-Month-Relaxed-Training-43weeks.txt
//will generate a playlist for the schedule 9-Month-Relaxed-Training-43weeks from Chinese Mandarin to Egipyt Arabic

node index.js ZS ARE 4-Month-Intensive-Training-18weeks.txt
//will generate a playlist for the schedule 4-Month-Intensive-Training-18weeks.txt from Chinese Mandarin to Egipyt Arabic

node index.js EN ESIT 9-Month-Relaxed-Training-43weeks.txt
//will generate a playlist for the schedule 9-Month-Relaxed-Training-43weeks from Triangulation Package from English(EN) to Spanish(ES) and Italian(IT)

node index.js EN ESIT 4-Month-Intensive-Training-18weeks.txt




If you know your Glossika Language Code ( The prefix for all glossika audio and book files) you can generate the MP3 Playlist for the Glossika Schedules Source files available.
