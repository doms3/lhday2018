var clickedEl = null;

document.addEventListener("contextmenu", function(event){
	clickedEl = event.target;
}, true)

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request == "getPoemGeneration") {
		sendResponse({value: clickedEl.value});
	}
})