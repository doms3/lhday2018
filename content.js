var element = null;

document.addEventListener( "contextmenu", function( event ) {
	element = event.target;
}, true )

chrome.runtime.onMessage.addListener(
	function( request, sender, sendResponse ) {
		if( request == "initiateAPICall" ) {
			var elem =  $( element );
			var imgSrc = elem.src;
			setAPICall(imgSrc);
		}
	}
)

setAPICall  = function(imageURL){
    return fetch(
        "http://localhost:5000/",
        {
            method: 'POST'
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: {
                imageURL: imageURL
            }
        })
}