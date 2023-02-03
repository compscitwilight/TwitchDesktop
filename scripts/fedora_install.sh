#!/bin/sh
# Written by https://github.com/jacob24068 & https://github.com/devrusty
sudo -s -H
if [ -d "/usr/share/TwitchDesktop" ] 
then
    rm -rf /usr/share/TwitchDesktop
fi

git clone --quiet https://github.com/devrusty/TwitchDesktop.git /usr/share/TwitchDesktop

if [ -f /usr/share/applications/Twitch.desktop ]
then
    rm /usr/share/applications/Twitch.desktop
fi

sudo touch /usr/share/applications/Twitch.desktop
echo "[Desktop Entry]" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Name=Twitch" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Path=/usr/share/TwitchDesktop/" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Exec=npm run start" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Terminal=false" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Type=Application" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Icon=/usr/share/TwitchDesktop/icon.png" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "StartupWMClass=Twitch" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Comment=TWITCH TV WATCH STRAEMERS" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "GenericName=Streamer Watcher" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "StartupNotify=true" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "Categories=Entertainment" | tee -a /usr/share/applications/Twitch.desktop > /dev/null
echo "MimeType=x-scheme-handler/twitch" | tee -a /usr/share/applications/Twitch.desktop > /dev/null

npm run install --prefix /usr/share/TwitchDesktop/ &> /dev/null