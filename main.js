title = "rs(v)p";

description = ` 
[hold] wake
`;

characters = [
  `y  y
  yyyyyy
   yyyy 
  yyyyyy
   yyyy 
   y  y`
  ,
  `P  P
  PPPPPP
  PPPPPP
   PPPP
  PPPPPP
  p    p`
  ,
];

const G = {
  WIDTH: 100,
  HEIGHT: 150,
};

options = {
  viewSize: {x: G.WIDTH, y: G.HEIGHT},
  isPlayingBGM: true,
  isReplayEnabled: true,
};

function update() {
  if (!ticks) {
    // text! -> "text(string [what you want text to say], x [x coord of text], y [y coord], options? [see definitions?])"  
    // text(string, x, y, options?); text(string, p, options?); <- from https://kandi.openweaver.com/typescript/abagames/crisp-game-lib#Code-Snippets
    text("are you awake...?", 10, 20);
    // draw characters! 
    // char(string, x, y, options?);
    // char(string, p, options?);
    char("a", 30, 40);
}
    
  }


addEventListener("load", onLoad);