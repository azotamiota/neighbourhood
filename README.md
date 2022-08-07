# Neighbourhood API - MVC architecture - backend and database only

## Installation

- After cloning the repo `cd neighbourhood`
- Make sure you are in `api` folder `cd api` and then install packages `npm install`

## Launch Docker

- Install and launch [Docker Desktop](https://www.docker.com/products/docker-desktop/) 
- Go back to your text editor and make sure you are in the main folder
- Launch Docker containers from the terminal `./scripts/startup.sh`
- The server and the database will be automatically launched by Docker containers
- Open your browser and go to `http://localhost:3000`

## How to use

- When you see the `Server listening on port 3000` message, open your browser.
- `http://localhost:3000/` route to show a welcome message.
- `http://localhost:3000/people` route to show all people in the neighbourhood.
- `http://localhost:3000/people/2` route to show a person with the id of 2. Change the number to see other neighbours.
- `http://localhost:3000/people/age/10/50` route to show people within an age range. `10` is the lowest age `50` is the highest age. Try it with a different range.
- `http://localhost:3000/people/household/2/3` route to show only those people who live in the same household with 2-3 people. Try it with different numbers.
- `http://localhost:3000/houses` route to show all houses in the neighbourhood.
- `http://localhost:3000/houses/2` route to show the house with the id of 2. Change the number to see other houses

## How to stop Docker containers

- Press `Ctrl/CMD + C` to stop the server.
- Run `./scripts/teardown.sh` script.
