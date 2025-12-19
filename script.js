function scrollToHeading(heading){
	var navbar = document.getElementsByClassName("navbar")[0];
	for (var i=0; i<navbar.children.length; i++) {
		navbar.children[i].id = "";
	}

	var target_position;
	if(heading=="top"){
		target_position = 0;
	} else {
		target_position = document.getElementById(heading).offsetTop;
	}
	window.scroll({"top": target_position, "behavior": "smooth"});
}

function mousedown(button){
	button.parentNode.id = "selected";
}

function getRandomItem(array){
	return array[Math.floor(Math.random()*array.length)]
}

function updateFunFact(){
	var fun_fact = getRandomItem(fun_facts)
	document.getElementById("funFact").innerHTML = fun_fact;
}

const fun_facts = [
	"once had a ring-tailed lemur sit on his head at the zoo",
	"has three cats, but (important!) likes dogs too",
	"went to the Glastonbury music festival once and didn't like it",
	"is really really good at the missing vowels round on Only Connect",
	"has an uncanny savant-like knowledge of the James Bond movies",
	"once had his ankle nipped lightly by Sheridan Smith's dog",
	"has still never seen Jaws",
	"adapted Dr Strangelove for the stage when he was at school; it was bad",
	"doesn't like using capital letters or punctuation if he can help it",
	"has, as of last count, all four of his limbs still attached",
	"once reviewed Edinburgh Fringe shows for ScotsGay magazine, despite being neither",
	"has visited the former set of Luke's moisture farm on Tatooine (it's a hotel now)",
	"communicates mostly in an idiosyncratic patois of Simpsons references and vines",
	"is mostly vegetarian but will eat any fish that he personally dislikes",
	"once let a helium balloon go into the sky and then had it posted back to him from France",
	"had an English teacher who went on to become producer at GB News",
	"wanted to propose to his wife on Arthur's Seat, but someone else was already proposing there",
	"once missed the same hourly train three times in a row",
	"is technically a multiinstrumentalist, but not good at most of them",
]