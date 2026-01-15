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
	"visible dog poop",
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
				// unique hits to Anniversary (2+3+4)+8=17
				hits = hits.concat(
					[
					"sappy story",
					"crying"
					]).concat(gifts).concat(guests);
				break;
			case "Birthday":
				notBingo = "grfx/BirthdayX.png";
				hasBingo = "grfx/Birthday.png";
				// unique hits to Birthday (2+3+4)+8=17
				hits = hits.concat(
					[
					"candle lit after blow",
					"age is secret"
					]).concat(gifts).concat(guests);
				break;
			case "Christmas":
				notBingo = "grfx/ChristmasX.png";
				hasBingo = "grfx/Christmas.png";
				// unique hits to Christmas (3+10+3+4)+8=28
				hits = hits.concat(
					[
					"xmas light malfunction",
					"unmarked gift",
					"gift for a pet"
					]).concat(food).concat(gifts).concat(guests);
				break;
			case "Halloween":
				notBingo = "grfx/HalloweenX.png";
				hasBingo = "grfx/Halloween.png";
				// unique hits to Halloween (7)+8=15
				hits = hits.concat(
					[
					"lemon drops",
					"rasins",
					"religious message",
					"costume malfunction",
					"full sized candy bar",
					"no peanutbutter cups",
					"stomach ache"
					]);
				break;
			case "Superbowl":
				notBingo = "grfx/SuperbowlX.png";
				hasBingo = "grfx/Superbowl.png";
				// unique hits to Superbowl (14+10+4)+8=32
				hits = hits.concat(
					[
					"fourth down conversion",
					"go for 2 fail",
					"go for 2 success",
					"military fly over",
					"interception",
					"roughing the passer",
					"play over 60 yards",
					"50+ yard field goal",
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
				// unique hits to Thanksgiving (1+10+4)+8=23
				hits = hits.concat(
					[
					"awkward grace"
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
