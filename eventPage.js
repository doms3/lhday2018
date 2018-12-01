var menuItem = {
    "id": "poem",
    "title": "Create Poem",
    "contexts": ["image"]
};

chrome.contextMenus.create(menuItem);

var theImage;

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "poem"){
        theImage = clickData.srcUrl
        chrome.extension.getBackgroundPage().console.log(clickData);

    }
});
