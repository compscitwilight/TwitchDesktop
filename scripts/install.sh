if ! test npm
then
    echo "FAIL: NPM is not installed";
fi

if ! test electron
then
    echo "FAIL: Electron is not installed.";
    echo "Preparing installation..."
    sudo npm install electron -g;
fi

echo "Starting application"
electron .