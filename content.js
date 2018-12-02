var element = null;

document.addEventListener( "contextmenu", function( event ) {
	element = event.target;
}, true )

chrome.runtime.onMessage.addListener(
	function( request, sender, sendResponse ) {
		if( request == "initiateAPICall" ) {
			var elem =  $( element );
            var imgSrc = elem.prop( "src" );
            console.log( imgSrc );
			setAPICall( imgSrc ).then( 
                ( json ) => {
                    console.log( json );
                    changePicture( elem, json.raw ); 
                });
		}
	}
)

function setAPICall( imageURL ) {
    return fetch(
        "http://localhost:5000/poetica",
        
        {
            method: 'POST',

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify ({
                imageURL: imageURL
            })
        }).then( ( res ) => res.json() );
}
 
function changePicture( domElement, text ) {
    var wrapper = $( "<div class='poetica-container' style='position: relative'></div>" );
    domElement.wrap( wrapper );
    var tmp = $( "<div class=\"overlay\"></div>" );
    tmp.text( text );
    tmp.css( {
        "white-space": "pre-line",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: domElement.height(),
        width: domElement.width(),
        opacity: 0,
        "background-color": "#111111",
        "color": "white",
        "font-size": 24
    } );
    tmp.mouseenter( function() { $( this ).fadeTo( "slow", 0.80 ) } );
    tmp.mouseleave( function() { $( this ).fadeTo( "fast", 0 ) } );
    $( ".poetica-container" ).append( tmp );
}