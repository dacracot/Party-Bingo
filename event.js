//======================================================================
var hits = new Array
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
notBingo = "bingox.png";
hasBingo = "bingo.png";
//======================================================================
function chooseEvent(select) {
	if(select.options[select.selectedIndex].value == "none") {
		alert("Select an event from the list.");
		}
	else {

console.log("selected:"+select.options[select.selectedIndex].value);

		document.getElementById("before").style.display = "none";
		document.getElementById("during").style.display = "";
		}
	}
//======================================================================
