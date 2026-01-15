//======================================================================
var hitsChristmas = new Array
	(
		"early guest",
		"food on the floor",
		"insulted guest",
		"bad tasting food",
		"dog fed scraps",
		"awkward grace",
		"cat fighting",
		"audible burp",
		"cat steals food",
		"seating arrangement issues",
		"football on TV",
		"tablecloth stained",
		"phone rings during dinner",
		"dirty silverware",
		"late guest",
		"someone is on a diet",
		"awkward silence",
		"intoxicated guest",
		"visible dog poop",
		"someone leaves table",
		"audible flatulence",
		"laughter",
		"burnt food",
		"foreign language spoken",
		"racial slur spoken",
		"regifted present",
		"xmas light malfunction",
		"wrong holiday wrapping paper",
		"preserve paper unwrapping",
		"unmarked gift"
	);
//----------------------------------------------------------------------
var hitsAnniversary = hitsChristmas; 
var hitsBirthday = hitsChristmas; 
var hitsHalloween = hitsChristmas; 
var hitsThanksgiving = hitsChristmas; 
//======================================================================
function chooseEvent(select) {
	if(select.options[select.selectedIndex].value == "none") {
		alert("Select an event from the list.");
		}
	else {

console.log("selected:"+select.options[select.selectedIndex].value);

		switch (select.options[select.selectedIndex].value) {
			case "Anniversary":
				hits = hitsAnniversary;
				notBingo = "bingox.png";
				hasBingo = "bingo.png";
				break;
			case "Birthday":
				hits = hitsBirthday;
				notBingo = "bingox.png";
				hasBingo = "bingo.png";
				break;
			case "Christmas":
				hits = hitsChristmas;
				notBingo = "bingox.png";
				hasBingo = "bingo.png";
				break;
			case "Halloween":
				hits = hitsHalloween;
				notBingo = "bingox.png";
				hasBingo = "bingo.png";
				break;
			case "Thanksgiving":
				hits = hitsThanksgiving;
				notBingo = "bingox.png";
				hasBingo = "bingo.png";
				break;
			default:
				// this is not reachable?
				alert("Select an event from the list.");
			}
		draw();
		}
	}
//======================================================================
