# electron-youtube-tv-client

This is a simple application made in Electron that opens up a TV-optimized version of YouTube that is completely ad-free. It is made possible by spoofing the User-Agent request header, making it seem like you're visiting from a smart TV, and then filtering the traffic with the help of the "@cliqz/adblocker-electron" module.

The reason that I had to use specifically Electron for this project has to do with the way YouTube delivers ads. It is not possible to reliably block ads on YouTube by DNS-level filtering, without blocking the videos themselves. Using Electron, we can instead utilize the chromium engine and more specifically target the ads.

The end goal of this project is to stream an instance of "mainWindow" through my local network, making it accessible to every device in my network. This could be accomplished with the help of Express.js for example. As of right now, the application works perfect locally.

# To run:
Simply clone the repo, open a terminal and type "npm install". Afterwards type "npm start".
The program is not made into an executable since it is still being worked on
