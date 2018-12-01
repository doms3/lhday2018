var menuItem = {
    "id": "poem",
    "title": "Create Poem",
    "contexts": ["image"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "poem"){
        theImage = clickData.srcUrl
        chrome.extension.getBackgroundPage().console.log(clickData);

    }
});
