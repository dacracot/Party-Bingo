//======================================================================
var notBingo = "";
var hasBingo = "";
//======================================================================
// common hits (8)
var hits = new Array
	(
	"audible burp",
	"phone rings",
	"awkward silence",
	"audible flatulence",
	"laughter",
	"foreign language spoken",
	"cursing"
	);
// meal hits (10)
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
// gifting hits (3)
var gifts = new Array
	(
	"regifted present",
	"wrong wrapping paper",
	"preserve paper unwrapping"
	);
// guest hits (4)
var guests = new Array
	(
	"early guest",
	"insulted guest",
	"late guest",
	"intoxicated guest"
	);
//======================================================================
function chooseEvent(select) {
	if(select.options[select.selectedIndex].value == "none") {
		alert("Select an event from the list.");
		}
	else {
		switch (select.options[select.selectedIndex].value) {
			case "Anniversary":
				notBingo = "grfx/AnniversaryX.png";
				hasBingo = "grfx/Anniversary.png";
				// unique hits to Anniversary
				hits = hits.concat(
					[
					"sappy story",
					"crying"
					]).concat(gifts).concat(guests);
				break;
			case "Birthday":
				notBingo = "grfx/BirthdayX.png";
				hasBingo = "grfx/Birthday.png";
				// unique hits to Birthday
				hits = hits.concat(
					[
					"candle lit after blowing",
					"balloon pops",
					"age is secret"
					]).concat(gifts).concat(guests);
				break;
			case "Christmas":
				notBingo = "grfx/ChristmasX.png";
				hasBingo = "grfx/Christmas.png";
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
				notBingo = "grfx/HalloweenX.png";
				hasBingo = "grfx/Halloween.png";
				// unique hits to Halloween
				hits = hits.concat(
					[
					"lemon drops",
					"rasins",
					"religious message",
					"trick or treaters without costume",
					"costume malfunction",
					"full sized candy bar",
					"no peanutbutter cups",
					"ghost story",
					"lost phone reception",
					"stomach ache"
					]);
				break;
			case "Superbowl":
				notBingo = "grfx/SuperbowlX.png";
				hasBingo = "grfx/Superbowl.png";
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
				notBingo = "grfx/ThanksgivingX.png";
				hasBingo = "grfx/Thanksgiving.png";
				// unique hits to Thanksgiving
				hits = hits.concat(
					[
					"awkward grace",
					"under cooked turkey",
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
