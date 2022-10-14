title = "rs(v)p";

description = ` 
[hold] to stay awake
`;

characters = [
`
 y  y 
 yyyy
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


// options = {
//   viewSize: {x: G.WIDTH, y: G.HEIGHT},
//   isPlayingBGM: true,
//   isReplayEnabled: true,
//   isShowingScore: false,
// };

// function update() {
//   if (!ticks) {
    
//   }
//   
//   // text! -> "text(string [what you want text to say], x [x coord of text], y [y coord], options? [see definitions?])"  
//   // text(string, x, y, options?); text(string, p, options?); <- from https://kandi.openweaver.com/typescript/abagames/crisp-game-lib#Code-Snippets
//   text("are you awake...?", G.WIDTH/4, G.HEIGHT/5);
// }


// addEventListener("load", onLoad);
// http://localhost:4000/?rsvp

let story;

// -GLOBAL-CONSTANTS-----------------------------------
const G = {
	// Screen Size
	WIDTH: 200,
	HEIGHT: 200,
};
// ----------------------------------------------------


options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
	isShowingScore: false,
	theme: "simple",
	seed: 71,
	
	isCapturing: true,
	isCapturingGameCanvasOnly: true,
	captureCanvasScale: 1,
};

/**
 * @typedef {{
 * text: string
 * }} Story
 */

/**
 * @type { Story []}
 */
let stories;

let count;
let prev;
let cur;
let next;

let sec;
let sec2;
let time;
let pause;

let y1;
let y2;
let y3;
let y4;
let y5;

function update() {
	if (!ticks) {
		count = 0
		sec = 0;
		sec2 = 0;
		time = 0;

		prev = "";
		cur = "";
		next = "";

		y1 = G.HEIGHT;
		y2 = y1 + 24;
		y3 = y2 + 24;
		y4 = y3 + 24;
		y5 = y4 + 24;

		pause = false;

		story = []
		story[0] = "still awake...?";
		story[1] = "";
		story[2] = "";
		
		story[3] = "haha sweet";
		story[4] = "This is the story of William";
		story[5] = "";
		
		story[6] = ""
		story[7] = "what's the worst thing";
		story[8] = "you've ever said to someone..?";
		
		story[9] = "children of Bradford.The";
		story[10] = "children loved him, and everyday";
		story[11] = "the streets were filled with";
		story[12] = "cries for Humbug Billy and his";
		story[13] = "peppermint humbugs.";

		story[14] = "How their faces were filled";
		story[15] = "with joy and candy and laughs";
		story[16] = "and screams.But those Humbugs";
		story[17] = "had to come from somewhere.";
		story[18] = "Somewhere with many ingredients."
		story[19] = "It was the day before All";
		story[20] = "Hallow\’s Eve.";

		story[21] = "A new batch was bought to be";
		story[22] = "sold to the kids.Money from";
		story[23] = "small hands in exchange for the";
		story[24] = "man\’s confections.Halloween,";
		story[25] = "afterall, is the perfect time";
		story[26] = "for humbugs.Then the sickness";
		story[27] = "came.";

		story[28] = "First one, then ten, then 100,";
		story[29] = "until more 200 fell ill.";
		story[30] = "Everyone loved Billy\’s sweets.";
		story[31] = "Everyone ate Billy\’s sweets";
		story[32] = "But Billy didn\’t make his";
		story[33] = "sweets.";
		story[34] = "";

		story[35] = "If he did, maybe he how arsenic";
		story[36] = "had been mistaken for filler";
		story[37] = "daff.Five pounds of poisoned";
		story[38] = "candy were given that day.";
		story[39] = "were dead.";
		story[40] = "";
		story[41] = "";

		story[42] = "Humbug Billy now lives on as"
		story[43] = "a legend. The one that tells";
		story[44] = "you to always check your candy"
		story[45] = "on Halloween.";
		story[46] = "";
		story[47] = "";
		story[48] = "";

	}

	// -END-OF-INIT-----------------------------------

	// draw characters! 
	// char(string, x, y, options?);
	// char(string, p, options?);
	char("a", G.WIDTH/2.5, G.HEIGHT/5 + 20);
	char("b", G.WIDTH/2, G.HEIGHT/5 + 20);

	// Timer - 60 ticks --> 1 second
	if(sec%60 == 0){
		time++;
	}
	if(sec == 180){ // If change is x (60 * 10 seconds) amount of seconds, then switch text
		count += 3;
		sec = 0;
	} else{ // Otherwise display the current text
		if(count < 43){
			// text(time.toString(), 4, 4);
			text(story[count], 12, G.WIDTH/3 + 5);
			text(story[count + 1], 12, G.WIDTH/3 + 13);
			text(story[count + 2], 12, G.WIDTH/3 + 21);
			// text(story[count + 3], 12, G.WIDTH/3 + 29);
			// text(story[count + 4], 12, G.WIDTH/3 + 37);
			// text(story[count + 5], 12, G.WIDTH/3 + 45);
			// text(story[count + 6], 12, G.WIDTH/3 + 53);
		}
	}
	
	// 	// idea for text rising to top of screen
	// text(story[count], 12, y1);
	// text(story[count + 1], 12, y2);
	// text(story[count + 2], 12, y3);
	// text(story[count + 3], 12, y4);
	// text(story[count + 4], 12, y5);
	// y1 -= 0.5;
	// y2 -= 0.5;
	// y3 -= 0.5;
	// y4 -= 0.5;
	// y5 -= 0.5;

	// Debugging Pausing
	if(input.isJustReleased){
		end("good night.");

	}
}
// -END-OF-UPDATE-------------------------------------