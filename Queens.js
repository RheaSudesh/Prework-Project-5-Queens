// Checkpoint 1 | Creating the queen object

var queen = new Object();
queen.direction = "S";


// Checkpoint 2 | Turning the queen
function changeDirection(newDirection,queenObj)
{
    switch(newDirection)
    {

        case "N":
            queenObj.direction="N";
            break;
        case "S":
            queenObj.direction="S";
            break;
        case "E":
            queenObj.direction="E";
            break;
        case "W":
            queenObj.direction="W";
            break;
        case "NE":
            queenObj.direction="NE";
            break;
        case "NW":
            queenObj.direction="NW";
            break;
        case "SE":
            queenObj.direction="SE";
            break;
        case "SW":
            queenObj.direction="SW";
            break;
    }
}
// Checkpoint 3 | Moving the queen
var pos = new Object();
pos.x = 4;
pos.y = 0;
queen.position = pos;
function moveForward(queenObj)
{
    switch(queenObj.direction)
    {

        case "N":
            newy = (queenObj.position).y - 1;
            newx = (queenObj.position).x;
            break;
        case "S":
            newy = (queenObj.position).y + 1;
            newx = (queenObj.position).x;
            break;
        case "E":
            newy = (queenObj.position).y;
            newx = (queenObj.position).x + 1;
            break;
        case "W":
            newy = (queenObj.position).y;
            newx = (queenObj.position).x - 1;
            break;
        case "NE":
            newy = (queenObj.position).y - 1;
            newx = (queenObj.position).x + 1;
            break;
        case "NW":
            newy = (queenObj.position).y - 1;
            newx = (queenObj.position).x - 1;
            break;
        case "SE":
            newy = (queenObj.position).y + 1;
            newx = (queenObj.position).x + 1;
            break;
        case "SW":
            newy = (queenObj.position).y + 1;
            newx = (queenObj.position).x - 1;
            break;
    }
    if(validatePosition(newx,newy))
    {
        (queenObj.position).x = newx;
        (queenObj.position).y = newy;
    }
}


// Checkpoint 4 | Jump move the queen
function jumpMoveForward(numberOfSteps,queenObj)
{
    switch(queenObj.direction)
    {

        case "N":
            newy = (queenObj.position).y - numberOfSteps;
            newx = (queenObj.position).x;
            break;
        case "S":
            newy = (queenObj.position).y + numberOfSteps;
            newx = (queenObj.position).x;
            break;
        case "E":
            newy = (queenObj.position).y;
            newx = (queenObj.position).x + numberOfSteps;
            break;
        case "W":
            newy = (queenObj.position).y;
            newx = (queenObj.position).x - numberOfSteps;
            break;
        case "NE":
            newy = (queenObj.position).y - numberOfSteps;
            newx = (queenObj.position).x + numberOfSteps;
            break;
        case "NW":
            newy = (queenObj.position).y - numberOfSteps;
            newx = (queenObj.position).x - numberOfSteps;
            break;
        case "SE":
            newy = (queenObj.position).y + numberOfSteps;
            newx = (queenObj.position).x + numberOfSteps;
            break;
        case "SW":
            newy = (queenObj.position).y + numberOfSteps;
            newx = (queenObj.position).x - numberOfSteps;
            break;
    }
    if(validatePosition(newx,newy))
    {
        (queenObj.position).x = newx;
        (queenObj.position).y = newy;
    }
}
// Checkpoint 5 |  Tracking the position
queen.whereabouts = [];
positionLog =
[["a8","b8","c8","d8","e8","f8","g8","h8"],
 ["a7","b7","c7","d7","e7","f7","g7","h7"],
 ["a6","b6","c6","d6","e6","f6","g6","h6"],
 ["a5","b5","c5","d5","e5","f5","g5","h5"],
 ["a4","b4","c4","d4","e4","f4","g4","h4"],
 ["a3","b3","c3","d3","e3","f3","g3","h3"],
 ["a2","b2","c2","d2","e2","f2","g2","h2"],
 ["a1","b1","c1","d1","e1","f1","g1","h1"]];
function updatePosition(queenObj)
{
    queenObj.whereabouts.push(positionLog[queenObj.position.y][queenObj.position.x]);
}

// Bonus 1 - Gotta keep her in the battle!
function validatePosition(x,y)
{
    if(x >7 || x <0 || y>7 || y<0)
    {
       console.log("The Queen can't move out of the board!");
       return false;
    }
    return true;
}

// Bonus 2 - The queen is more powerful than what you think!
function moveBackward(queenObj)
{
    switch(queenObj.direction)
    {

        case "N":
            newy = (queenObj.position).y + 1;
            newx = (queenObj.position).x;
            break;
        case "S":
            newy = (queenObj.position).y - 1;
            newx = (queenObj.position).x;
            break;
        case "E":
            newy = (queenObj.position).y;
            newx = (queenObj.position).x - 1;
            break;
        case "W":
            newy = (queenObj.position).y;
            newx = (queenObj.position).x + 1;
            break;
        case "NE":
            newy = (queenObj.position).y + 1;
            newx = (queenObj.position).x - 1;
            break;
        case "NW":
            newy = (queenObj.position).y + 1;
            newx = (queenObj.position).x + 1;
            break;
        case "SE":
            newy = (queenObj.position).y - 1;
            newx = (queenObj.position).x - 1;
            break;
        case "SW":
            newy = (queenObj.position).y - 1;
            newx = (queenObj.position).x + 1;
            break;
    }
    if(validatePosition(newx,newy))
    {
        (queenObj.position).x = newx;
        (queenObj.position).y = newy;
    }
}
function jumpMoveBackward(numberOfSteps,queenObj)
{
    switch(queenObj.direction)
    {

        case "N":
            newy = (queenObj.position).y + numberOfSteps;
            newx = (queenObj.position).x;
            break;
        case "S":
            newy = (queenObj.position).y - numberOfSteps;
            newx = (queenObj.position).x;
            break;
        case "E":
            newy = (queenObj.position).y;
            newx = (queenObj.position).x - numberOfSteps;
            break;
        case "W":
            newy = (queenObj.position).y;
            newx = (queenObj.position).x + numberOfSteps;
            break;
        case "NE":
            newy = (queenObj.position).y + numberOfSteps;
            newx = (queenObj.position).x - numberOfSteps;
            break;
        case "NW":
            newy = (queenObj.position).y + numberOfSteps;
            newx = (queenObj.position).x + numberOfSteps;
            break;
        case "SE":
            newy = (queenObj.position).y - numberOfSteps;
            newx = (queenObj.position).x - numberOfSteps;
            break;
        case "SW":
            newy = (queenObj.position).y - numberOfSteps;
            newx = (queenObj.position).x + numberOfSteps;
            break;
    }
    if(validatePosition(newx,newy))
    {
        (queenObj.position).x = newx;
        (queenObj.position).y = newy;
    }
}


//Test running 
//moves from(4,0) to SE ->so position is F7

changeDirection("SE",queen);
moveForward(queen);
updatePosition(queen);

//moves from(5,1) to SW by 9paces -> invalid position

changeDirection("SW",queen);
jumpMoveForward(9,queen);
updatePosition(queen);

//priting the final result on console

console.log(queen.whereabouts)
console.log(queen.direction + " " + queen.position.x + " " + queen.position.y);