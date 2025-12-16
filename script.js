function navigate(button){
	var navbar = document.getElementById("navbar");
	for (var i = 1; i<navbar.children.length; i++) {
		navbar.children[i].id = "unselected"
	}
	button.id = "selected"
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
	"went to Glastonbury once and didn't like it",
	"is really really good at the missing vowels round on Only Connect",
	"has an uncanny savant-level knowledge of the James Bond movies",
	"once had his ankle nipped lightly by Sheridan Smith's dog",
	"still has never seen Jaws",
	"adapted Dr Strangelove for the stage when he was at school; it was bad",
	"doesn't like using capital letters or punctuation if he can help it",
	"has, as of last count, all four of his limbs still attached",
]