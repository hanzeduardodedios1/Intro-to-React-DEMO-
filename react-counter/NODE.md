Here's how to install NodeJS based on your system if you do not have it already.

### Ubuntu/Debian Linux users
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
### MacOS users

### Windows users
1. Download the Windows Installer
Go to the official Node.js website.

Download the LTS (Long Term Support) version Windows Installer (.msi) for your system architecture (usually 64-bit). The LTS version is recommended for most users as it is the most stable.

2. Run the Installer
Locate the downloaded .msi file and double-click it to launch the setup wizard.

Click Next on the welcome screen.

Accept the terms in the License Agreement and click Next.

Choose the Destination Folder for the installation (the default is usually fine), and click Next.

On the Custom Setup screen, it's recommended to keep the default selections, which include:

Node.js runtime

npm package manager

Add to PATH

Click Next.

The installer may prompt you to "Automatically install the necessary tools" (like Python and Visual Studio Build Tools for native modules). Check this box and click Next and then Install. This extra step will run in a separate command prompt after the main installation and is often necessary for compiling certain npm packages.

Click Finish to complete the setup.

3. Verify the Installation
After the installation is complete, you should verify that both Node.js and npm are installed correctly:

Open your Command Prompt or PowerShell (search for it in the Start Menu).

Type node -v and press Enter. This command should display the installed Node.js version number.

Type npm -v and press Enter. This command should display the installed npm version number.