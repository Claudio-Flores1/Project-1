# Project-1 Outline
Based on the infinite runners that were so rampant ages ago, “Highflier” will follow the tale of Jet-pack Guy in his quest to outrun the endless hordes of enemies that are *mysteriously* being thrown his way. Along his journey, JPG (Jet-pack Guy) will have the opportunity to collect several “Infinity Stone” looking crystals. These crystals will enable him to fly far out of danger and live a peaceful life elsewhere, maybe with a Cat or something.

# Technologies that will be used:
- HTML
- CSS
- JS
- Canvas

# User story: 
  - As a user, I want to be able to start the game when pressing “Start”.
  - As a user, I want the ability to move in all directions (Left/Right, Up/Down, Diagonal) to avoid foes.
  - As a user, I want the ability to collect all 25 “stones” in order to win the game.
  - As a user, I want the ability to see a Win/Lose message appear on the screen.
  - As a user, I want the ability to restart the game if JPG gets hit by too many obstacles and gets K.O’d.
  - As a user, I want the ability to view the amount of stones I have captures
  - As a user, I want the ability to pause the game. 
  
  # Wireframes
  
  ![Start Up](https://user-images.githubusercontent.com/111713666/190927490-a14657c9-5ad7-4610-86a5-72b63fb761e3.png)
  ![Gameplay](https://user-images.githubusercontent.com/111713666/190927482-212be7c6-0dd0-49ac-a76a-b96cbe835073.png)
  
  # Entity Relationship Diagram
```  
 JPG : { 
  x: (x location on the canvas)
  y: (y location on the canvas)
  height: (should be smaller than the Cloud)
  width: (should be smaller than Cloud)
  alive: (a boolean that determines if game is in progress)
  render: (a method that displays the hero on the screen)
 }
```
```
 The-Cloud : {
  x: (x location on the canvas)
  y: (y location on the canvas)
  height: (should be larger than hero)
  width: (should be wider than hero)
  color: Grey
  render: (a method that displays the ogre on the screen)
}
```
```
 Gem : {
  x: (x location on the canvas)
  y: (y location on the canvas)
  height: (should be smaller than jpg)
  color: Purple
  render: (a method that displays the ogre on the screen)
}
```
- function - gameLoop - Holds the entire logic that runs the game.
- function - detectHit - Used to see if JPG has collided with a Blob or a Gem.
- function - movementHandler - Used to move JPG around the Blobs, should be attached to WASD keys.
- function - droppingFast - If JPG is not moving then he will descend until the player uses the ‘W’ key to move up.
- function - pauseGame - Allows the player to pause the game to go and retrieve important snacks.
