title = "rs(v)p";

description = ` 
[hold] to wake
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
  WIDTH: 310,
  HEIGHT: 300,

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
  char("a", G.WIDTH/2.5, G.HEIGHT/5 + 20);
  char("b", G.WIDTH/2, G.HEIGHT/5 + 20);
  // text! -> "text(string [what you want text to say], x [x coord of text], y [y coord], options? [see definitions?])"  
  // text(string, x, y, options?); text(string, p, options?); <- from https://kandi.openweaver.com/typescript/abagames/crisp-game-lib#Code-Snippets
  text("are you awake...?", G.WIDTH/4, G.HEIGHT/5);
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