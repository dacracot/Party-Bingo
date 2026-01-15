//======================================================================
var buts = new Array("b1","b2","b3","b4","b5","i1","i2","i3","i4","i5","n1","n2","n3","n4","n5","g1","g2","g3","g4","g5","o1","o2","o3","o4","o5");
var card = [[false,false,false,false,false],[false,false,false,false,false],[false,false,true,false,false],[false,false,false,false,false],[false,false,false,false,false]];
//======================================================================
function shuffle(o)
	{
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
	};
//======================================================================
function init()
	{
	var choice = document.getElementById("chooseEvent");
	choice.value = "none";
	chooseEvent(choice);
	var numOfButs = 25; // counting the free space
	var randHits = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25);
	var randHits = shuffle(randHits);
	for (var i=0; i<numOfButs; i++)
		{
		if (i != 12) // free space
			document.getElementById(buts[i]).value = hits[randHits[i]];
		}
	}
//======================================================================
function toggle(b)
	{
	var c = document.getElementById(b);
	var ndx = buts.indexOf(b);
	var row = Math.floor(ndx/5);
	var col = ndx%5;
	if ((c.className == "ButtonOn"))
		{
		card[row][col] = false;
		c.className = "ButtonOff";
		}
	else if (c.className == "ButtonOff")
		{
		card[row][col] = true;
		c.className = "ButtonOn";
		}
	isBingo();
	}
//======================================================================
function isBingo()
	{
	// rows
	if (card[0][0] && card[0][1] && card[0][2] && card[0][3] && card[0][4])
		bingo();
	else if (card[1][0] && card[1][1] && card[1][2] && card[1][3] && card[1][4])
		bingo();
	else if (card[2][0] && card[2][1] && card[2][2] && card[2][3] && card[2][4])
		bingo();
	else if (card[3][0] && card[3][1] && card[3][2] && card[3][3] && card[3][4])
		bingo();
	else if (card[4][0] && card[4][1] && card[4][2] && card[4][3] && card[4][4])
		bingo();
	// columns
	else if (card[0][0] && card[1][0] && card[2][0] && card[3][0] && card[4][0])
		bingo();
	else if (card[0][1] && card[1][1] && card[2][1] && card[3][1] && card[4][1])
		bingo();
	else if (card[0][2] && card[1][2] && card[2][2] && card[3][2] && card[4][2])
		bingo();
	else if (card[0][3] && card[1][3] && card[2][3] && card[3][3] && card[4][3])
		bingo();
	else if (card[0][4] && card[1][4] && card[2][4] && card[3][4] && card[4][4])
		bingo();
	// diagonals
	else if (card[0][0] && card[1][1] && card[2][2] && card[3][3] && card[4][4])
		bingo();
	else if (card[0][4] && card[1][3] && card[2][2] && card[3][1] && card[4][0])
		bingo();
	else
		document.getElementById("free").src = notBingo;
	}
//======================================================================
function bingo()
	{
	var s = new Audio("bingo.m4a");
	s.play();
	document.getElementById("free").src = hasBingo;
	}
//======================================================================
