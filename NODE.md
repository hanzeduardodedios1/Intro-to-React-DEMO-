# How to Install NodeJS
Here is how to install NodeJS based on your system.

## Ubuntu/Debian Linux users:
``` 
# Update package index
sudo apt update

# Install Node.js
sudo apt install nodejs

# Install npm (Node Package Manager)
sudo apt install npm

# Verify installation
node --version
npm --version
 ```

## Windows users
1. Download the Installer: 

    Go to the official Node.js website and download the Windows Installer (.msi). It's recommended to choose the LTS (Long Term Support) version, as it is the most stable and tested release. Make sure to select the correct version for your system architecture (64-bit or 32-bit).

2. Run the Installer:

    - Locate the downloaded .msi file and double-click it to launch the installation wizard.

    - Click Next on the Welcome screen.

    - Accept the license agreement by checking the box, and click Next.

    - Select the destination folder for the installation (the default location is usually fine), and click Next.

    - On the Custom Setup screen, keep the default components selected, and click Next. The installer includes Node.js runtime, npm, and will automatically add Node.js to your system's PATH environment variable.

    - The installer may offer to "Automatically install the necessary tools" for compiling native modules. It's often helpful to check this box, then click Next and finally Install.

3. Complete the Installation:

    - Once the installation is complete, click Finish.

    - If you chose to install the necessary tools, a new command prompt window may open to download and install additional tools like Python and Visual Studio Build Tools. Press any key to start this process and let it run until it finishes.

4. Verify the Installation:

    - Open a new Command Prompt or PowerShell window (do not use one that was open before the installation).

    - Run the following commands to confirm that Node.js and npm were successfully installed and added to your PATH:
    ``` 
    Bash

    node -v
    npm -v
    ```
## MacOS users
1. Install Homebrew (if you haven't already):

    - Open Terminal.

    - Paste and run the Homebrew installation command (found on the official Homebrew website). It will typically look like this:
    ``` 
    Bash

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    Follow the instructions in the Terminal to complete the installation.
    ```

2. Install Node.js:

    - In the Terminal, run the following command to update Homebrew and then install Node.js:
    ``` 
    Bash

    brew install node
    ```
    
    - Homebrew will download and install the latest stable version of Node.js and npm.

3. Verify Installation:

    - Check the installed versions in your Terminal:
    ``` 
    node -v

    npm -v
    ```



