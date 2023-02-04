# Script used to install TwitchDesktop from most Linux distributions
# Written by https://github.com/devrusty

if ! [ -d "/usr/share/TwitchDesktop" ] || ! [ -f "/usr/share/applications/Twitch.desktop" ]
then
    echo "You do not have Twitch Desktop installed"
    exit
fi

sudo rm -rf /usr/share/TwitchDesktop
sudo rm /usr/share/applications/Twitch.desktop