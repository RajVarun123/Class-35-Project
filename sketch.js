var database;
var canvas;
var gameState = 0;
var peopleCount;
var backgroundImage;
var survey, people, game;

function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);

  game = new Game();
  game.getstate();
  game.start();
}

function draw(){

}