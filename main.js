title = "rs(v)p";

description = ` 
[hold] wake
`;

characters = [
`
 y  y 
yyyyyy
 yyyy  
yyyyyy
 yyyy  
 y  y 
`
,
`
 P  P 
PPPPPP
PPPPPP
 PPPP 
PPPPPP
P    P
`
,

];

const G = {
  WIDTH: 100,
  HEIGHT: 110,

  //TALK_SPEED: 3
};

options = {
  viewSize: {x: G.WIDTH, y: G.HEIGHT},
  isPlayingBGM: true,
  isReplayEnabled: true,
  isShowingScore: false,
};

function update() {
  if (!ticks) {
    
  }
  // draw characters! 
  // char(string, x, y, options?);
  // char(string, p, options?);
  char("a", 30, 40);
  char("b", 60, 40);
  // text! -> "text(string [what you want text to say], x [x coord of text], y [y coord], options? [see definitions?])"  
  // text(string, x, y, options?); text(string, p, options?); <- from https://kandi.openweaver.com/typescript/abagames/crisp-game-lib#Code-Snippets
  text("are you awake...?", 10, 20);
}

/**
 * @typedef {{
 * pos: Vector,
 * }} Player
 */

/**
 * @type { Player }
 */
let player;


addEventListener("load", onLoad);