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
    url: ["https://*/*"],
  });

  ////TODO pick which keys go into an object - shorten the process and space used
  console.log("tabs", tabs);
  return tabs;
};
chrome.tabs.onRemoved.addListener(() => {
  getTabs();
});

chrome.tabs.onCreated.addListener(() => {
  getTabs();
});

//TODO Put the tabs information into the object{} ( But why....?)
// const getTabId = async () => {
//   const tabs = await chrome.tabs.query({});
//   tabs.forEach((tab) => {
//     if (tab.Id) {
//       const tabId = tab.Id;
//     }
//   });
// };

//create an array then push the tabid into the array then return array
//grab id && something?

//TODO use the chrome api to find the tabs information
//TODO Get information to use and compare against the object{}

const getLastAccessedTime = async () => {
  const tabs = await chrome.tabs.query({});
  tabs.forEach((tab) => {
    if (tab.lastAccessed) {
      const lastAccessedTime = tab.lastAccessed;
      const date = new Date(lastAccessedTime);
      const idleTime = date.toTimeString();
      return idleTime;
      console.log("Tab ID: ", tab.id, "This hasn't been used since", idleTime);
      // maybe return the time here! 
    } else {
      console.log("I have no clue whats going on");
    }
  });
};

//look into set interval timer for JS may need to add it to the eventListener,

// This runs the function every 2 seconds
// setInterval(getLastAccessedTime, 2000);



//TODO find out how to trigger them when older than a time
//TODO set up a listener to monitor the timers
// This can be done - after using the tabs.query with an event listener we are able to see all the information on the tab.
//next we need to figure out how to call the lastAccessed as date.toTimeString

const getTimeChange = async () => {
  const tabs = await chrome.tabs.query({});
  tabs.forEach(tab =>{
    tabId = tab.id;
    if (tab.lastAccessed) {
      const lastAccessedTime = new Date(tab.lastAccessed);
      const currentTime = new Date();
      const elapsedTime = currentTime - lastAccessedTime;
      const trueElapsedTime = Math.floor(elapsedTime / 1000/ 60);
      // console.log("Tab ID:", tabId);
      // console.log('Last used:', lastAccessedTime.toTimeString);
      // console.log('Current Time:', currentTime.toTimeString);
      // console.log('Time Difference:', trueElapsedTime);
      return trueElapsedTime;
    };
  });
};

getTimeChange();

setInterval(getTimeChange, 6000); 
  if (trueElapsedTime > 1) { 
    chrome.tabs.update(tabId, { highlighted: true }, () =>{
      console.log(tab.id, 'is now highlighed!');
    });
  };

//TODO figure out the code to close down tabs





//TODO have the close function close when an active timer gets larger than X

//TODO close tab and move active tab to first position
