# How to Install NodeJS
Here is how to install NodeJS based on your system.

## Ubuntu/Debian Linux users:
``` 
# Update package index
sudo apt update

# Install Curl
sudo apt install curl

# Download and install nvm (Node Version Manager):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Load NVM: Close and reopen your terminal, or run the following command to load NVM into your session:
source ~/.bashrc  # or ~/.zshrc or ~/.profile depending on your shell

# Install NodeJS (Latest LTS version)
nvm install --lts

# Verify installation
node --version # or node -v
npm --version # or npm -v
 ```

## Windows users

1. Install Chocolatey on Windows
   Chocolatey requires an administrative shell (Command Prompt or PowerShell) for installation. We'll use PowerShell.

   1. Open PowerShell as Administrator:
   
   Press the Windows key, type **"PowerShell"**, right-click on **"Windows PowerShell"** or **"PowerShell,"** and select **"Run as administrator."**
   
   Click Yes if prompted by User Account Control (UAC).
   
   2. Ensure Execution Policy is Set Correctly:
   
   The installation script requires the PowerShell execution policy to be less restrictive than Restricted.
   
   Run the following command to temporarily bypass the execution policy for the current process (which is safer than a permanent change):
   
   PowerShell
   ```
   Set-ExecutionPolicy Bypass -Scope Process -Force
   ```

   3. Run the Chocolatey Installation Command:
   
   Copy and paste the entire command below into the administrative PowerShell window and press Enter:
   
   PowerShell
   ```
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```
   Wait for the command to complete. You should see output indicating that Chocolatey is being installed.
   
   4. Verify the Installation:

   Close and reopen your administrative PowerShell window to ensure the choco command is available on your system's PATH.
   
   Run the command:
   
   PowerShell
   ```
   choco  # or choco --version
   ```
   If Chocolatey is installed correctly, it will display its version information and usage instructions.

2. Install Node.js using Chocolatey
Once Chocolatey is successfully installed, you can use the choco install command to install Node.js.

   1. Open a new administrative shell (PowerShell or Command Prompt as administrator) if you closed it.

   2. Install the latest stable Node.js version:
      
      Run the command:
      ```
      choco install nodejs
      ```
      You may be prompted to confirm the installation and running of scripts. Press Y and Enter to proceed.
      
      Alternatively, you can specifically install the Long Term Support (LTS) version:
      
      PowerShell
      ```
      choco install nodejs-lts
      ```
      
   3. Verify Node.js Installation:
      
      After the installation finishes, close and reopen your shell again to make sure Node.js is on your PATH.
      
      Run the following commands to check the installed versions of Node.js and npm (Node Package Manager, which is included with Node.js):
      
      PowerShell
      ```
      node -v
      npm -v
      ```

## MacOS users
1. Install Homebrew (if you haven't already):

   Open Terminal.

   Paste and run the Homebrew installation command (found on the official Homebrew website). It will typically look like this:
    ``` 
    Bash

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    Follow the instructions in the Terminal to complete the installation.

2. Install Node.js:

   In the Terminal, run the following command to update Homebrew and then install Node.js:
    ``` 
    Bash

    brew install node
    ```
    
   Homebrew will download and install the latest stable version of Node.js and npm.

3. Verify Installation:

   Check the installed versions in your Terminal:
    ``` 
    node -v

    npm -v
    ```



