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
        'https://developer.chrome.com/docs/webstore/*',
        'https://developer.chrome.com/docs/extensions/*'
    ]
    });
    
    console.log("tabs", tabs);
    return tabs; 
}; 


getTabs();

chrome.tabs.onCreated.addListener(() => {
    getTabs();
});

document.getElementById('startButton').addEventListener('click', async () => {
    try {
      const tabs = await chrome.tabs.query({});
      const autoDiscardableTabs = tabs.filter(tab => tab.autoDiscardable);
      const tabIdsToClose = autoDiscardableTabs.map(tab => tab.id);
      if (tabIdsToClose.length > 0) {
        chrome.tabs.remove(tabIdsToClose, () => {
          console.log('Auto-discardable tabs closed.');
        });
      } else {
        console.log('No auto-discardable tabs found.');
      }
    } catch (error) {
      console.error('Failed to take out the trash:', error);
    }
  });

// chrome.tabs.query({}, (tabs) =>{
//     console.log(tabs);
// })

//TODO use the chrome api to find the tabs information

//TODO Put the tabs information into the object{}

//TODO Get information to use and compare against the object{}

//TODO figure out the code to close down tabs 

//TODO find out how to trigger them when older than a time

//TODO set up a listener to monitor the timers

//TODO have the close function close when an active timer gets larger than X

//TODO close tab and move active tab to first position