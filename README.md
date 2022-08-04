# Neighbourhood API - MVC approach

## Installation

- After cloning the repo `cd neighbourhood`
- Install packages `npm install`

## Run the server

- Enter the `server` folder `cd server`
- Launch the server `npm run dev`
- Open your browser and go to `http://localhost:3000`

## How to use

- `http://localhost:3000/houses` to show all houses in the neighbourhood
- `http://localhost:3000/houses/2` to show the house with the id of 2. You can choose an arbitrary id number.
- `http://localhost:3000/people` to show all people in the neighbourhood.
- `http://localhost:3000/people/10/50` to show people within an age range. `10` is the lowest age `50` is the highest age. Try with a different range.
- `http://localhost:3000/people/household/1/3` to show only those people who live in the same household with 1-3 people. Try with different numbers.
