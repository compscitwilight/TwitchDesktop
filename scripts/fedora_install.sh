#!/bin/sh
# Written by https://github.com/jacob24068 & https://github.com/devrusty
if [ -d "/usr/share/TwitchDesktop" ] 
then
    sudo rm -rf /usr/share/TwitchDesktop
fi

if ! [ -d "/usr/share/nodejs" ]
then
    sudo dnf install nodejs
fi

if ! [ -d "/usr/share/git" ]
then
    sudo dnf install git
fi

sudo git clone --quiet https://github.com/devrusty/TwitchDesktop.git /usr/share/TwitchDesktop

if [ -f /usr/share/applications/Twitch.desktop ]
then
    sudo rm /usr/share/applications/Twitch.desktop
fi

sudo touch /usr/share/applications/Twitch.desktop
echo "[Desktop Entry]" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Name=Twitch" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Path=/usr/share/TwitchDesktop/" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Exec=npm run start:electron" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Terminal=false" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Type=Application" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Icon=/usr/share/TwitchDesktop/icon.png" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "StartupWMClass=Twitch" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Comment=TWITCH TV WATCH STRAEMERS" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "GenericName=Streamer Watcher" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "StartupNotify=true" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Categories=Entertainment" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "MimeType=x-scheme-handler/twitch" | sudo tee -a /usr/share/applications/Twitch.desktop > /dev/null

sudo npm install --prefix /usr/share/TwitchDesktop/ &> /dev/null