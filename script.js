//your JS code here. If required.
let btn = document.getElementById("enterBtn");
let text = document.getElementById("status");
btn.addEventListener("click",()=>{
	//text.innerHTML = `<h1>Entered Metaverse</h1>`
	let heading = document.createElement("h1");
	heading.innerText = "Entered Metaverse"
	text.innerText = null;
	text.appendChild(heading);
	
})