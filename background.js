var menuItem = {
    "id": "poem",
    "title": "Create Poem",
    "contexts": [ "image" ]
};

chrome.runtime.onInstalled.addListener( () => chrome.contextMenus.create( menuItem ) );

chrome.contextMenus.onClicked.addListener( 
    ( clickInfo, tab ) => {
        chrome.tabs.sendMessage( tab.id, "initiateAPICall" );
    }
);
