# Project: NestAway-FrontEnd

*NestAway-FrontEnd* is Front-End repo for NestAway.

## First Time Setup


- #### Installing Node

    mac usres:
    ```sh
    brew install node
    ```
    <br />
    Linux/Ubuntu users:
    Go to [Node.js](https://nodejs.org/en/download/) and download and install the setup

- #### Check if npm is installed
    in console, try:
    ```sh
    npm -v
    ```
    you will see npm version if everything goes right.

- #### Clone Repo
    ```sh
    cd ~/Documents
    git clone https://github.com/NestAway/nestaway-frontend.git
    cd nestaway-frontend
    ```

- #### Install Dependencies
    ````sh
    npm i
    ````
<br />
        First Time setup is completed 👍 

<br/>
<br/>

## Running Server

- #### Dev server
    ```sh
    npm run start
    ```
    Front-End is using it's own server, it points to Staging(configurable).

- #### Production Build
    ```sh
    npm run production
    ```