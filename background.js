// const startButton = document.getElementbyId('startButton');

// Common event listeners: 
// onClick
// onScroll
// onDOMContentLoaded
// onReady(?)
// onAlert

//TODO make the variables laid out for the object{}

const getTabs = async () => {
    const tabs = await chrome.tabs.query({
    url: [
        'https://*/*'
    ]
    });
    
    console.log("tabs", tabs);
    return tabs; 
}; 
chrome.tabs.onRemoved.addListener(() =>{
    getTabs();
    getLastAccessedTime();
});

chrome.tabs.onCreated.addListener(() => {
    getTabs();
    getLastAccessedTime();
});


// chrome.tabs.query({}, (tabs) =>{
//     console.log(tabs);
// })

//TODO use the chrome api to find the tabs information

// This can be done - after using the tabs.query with an event listener we are able to see all the information on the tab.

//next we need to figure out how to call the lastAccessed as date.toTimeString

const getLastAccessedTime = async () => {
    const tabs = await chrome.tabs.query({});
        tabs.forEach(tab => {
            if (tab.lastAccessed) {
                const lastAccessedTime = tab.lastAccessed;
                const date = new Date(lastAccessedTime);
                const idleTime = date.toTimeString();

                console.log('Tab ID: ${tab.id} - Time since last used: ${idleTime}')
            } else {
                console.log('I have no clue whats going on')
            };
        });
};

chrome.tabs.o

//TODO Put the tabs information into the object{}

//TODO Get information to use and compare against the object{}

//TODO figure out the code to close down tabs 

//TODO find out how to trigger them when older than a time

//TODO set up a listener to monitor the timers

//TODO have the close function close when an active timer gets larger than X

//TODO close tab and move active tab to first position