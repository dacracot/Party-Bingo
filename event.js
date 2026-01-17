//======================================================================
var notBingo = "";
var hasBingo = "";
//======================================================================
// common hits
var hits = new Array
	(
	"audible burp",
	"phone rings",
	"awkward silence",
	"audible flatulence",
	"laughter",
	"non-english language spoken",
	"cursing"
	);
// meal hits
var food = new Array
	(
	"dog fed scraps",
	"food on the floor",
	"cat steals food",
	"seating arrangement issues",
	"tablecloth stained",
	"someone is on a diet",
	"someone leaves table",
	"dirty silverware",
	"burnt food",
	"cold food"
	);
// gifting hits
var gifts = new Array
	(
	"regifted present",
	"wrong wrapping paper",
	"presents are not opened",
	"preserve paper unwrapping"
	);
// guest hits
var guests = new Array
	(
	"early guest",
	"insulted guest",
	"late guest",
	"intoxicated guest"
	);
//======================================================================
function chooseEvent(select) {
	if(select.options[select.selectedIndex].value != "none") {
		switch (select.options[select.selectedIndex].value) {
			case "Anniversary":
				notBingo = "grfx/AnniversaryX.svg";
				hasBingo = "grfx/Anniversary.svg";
				// unique hits to Anniversary
				hits = hits.concat(
					[
					"spouse forgot date",
					"couple arguing",
					"play silly game",
					"how we met story",
					"happy couple kiss",
					"sappy story",
					"over 20 years",
					"over 40 years",
					"renew vows",
					"clergy attending",
					"crying"
					]).concat(gifts).concat(guests);
				break;
			case "Baby Shower":
				notBingo = "grfx/BabyShowerX.svg";
				hasBingo = "grfx/BabyShower.svg";
				// unique hits to Birthday
				hits = hits.concat(
					[
					"sex is unknown",
					"sex is known",
					"play silly game",
					"party at a venue",
					"party in a home",
					"party has a theme",
					"mother is showing",
					"not mother\'s first",
					"baby is attending",
					"over 3 babies attending",
					"grandparent attending"
					]).concat(gifts).concat(guests);
				break;
			case "Birthday":
				notBingo = "grfx/BirthdayX.svg";
				hasBingo = "grfx/Birthday.svg";
				// unique hits to Birthday
				hits = hits.concat(
					[
					"writing on cake",
					"candle lit after blowing",
					"balloon pops",
					"party at a venue",
					"party in a home",
					"not actually born today",
					"Happy Birthday sung",
					"birthday cake is not a cake",
					"help blowing out candles",
					"can\'t find matches or lighter",
					"age is secret"
					]).concat(gifts).concat(guests);
				break;
			case "Christmas":
				notBingo = "grfx/ChristmasX.svg";
				hasBingo = "grfx/Christmas.svg";
				// unique hits to Christmas
				hits = hits.concat(
					[
					"xmas light malfunction",
					"unmarked gift",
					"carols sung",
					"batteries not included",
					"\"Just what I always wanted.\"",
					"gift for a pet"
					]).concat(food).concat(gifts).concat(guests);
				break;
			case "Halloween":
				notBingo = "grfx/HalloweenX.svg";
				hasBingo = "grfx/Halloween.svg";
				// unique hits to Halloween
				hits = hits.concat(
					[
					"bought too much candy",
					"run out of candy",
					"spilled candy bowl",
					"candy into pillow case",
					"lemon drops",
					"rasins",
					"religious message",
					"trick or treaters without costume",
					"popcorn ball",
					"costume malfunction",
					"full sized candy bar",
					"no peanutbutter cups",
					"ghost story",
					"adult trick or treaters",
					"TP'd",
					"screams",
					"less than 10 trick or treaters",
					"more than 30 trick or treaters",
					"first trick or treaters before dark",
					"stomach ache"
					]);
				break;
			case "Superbowl":
				notBingo = "grfx/SuperbowlX.svg";
				hasBingo = "grfx/Superbowl.svg";
				// unique hits to Superbowl
				hits = hits.concat(
					[
					"fourth down conversion",
					"go for 2 failed",
					"go for 2 success",
					"military fly over",
					"interception",
					"roughing the passer",
					"play over 60 yards",
					"50+ yard field goal",
					"blocked kick",
					"second string QB",
					"fight",
					"official review",
					"overtime",
					"last minute score",
					"two minute warning not at 2:00"
					]).concat(food).concat(guests);
				break;
			case "Thanksgiving":
				notBingo = "grfx/ThanksgivingX.svg";
				hasBingo = "grfx/Thanksgiving.svg";
				// unique hits to Thanksgiving
				hits = hits.concat(
					[
					"awkward grace",
					"under cooked turkey",
					"football on TV",
					"ran out of something",
					"family feud"
					]).concat(food).concat(guests);
				break;
			default:
				// this is not reachable?
				alert("Select an event from the list.");
			}
		draw();
		}
	}
//======================================================================
