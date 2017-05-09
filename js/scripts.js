// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";


// Configure JSON Call


// The API feed
var getStuff = 'https://oliviadavies.dropmark.com/420953.json';

// Optional settings for private collections. This is public, no settings needed. 
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

  console.log(data.items);
  console.log(data.items[0].link); 
  console.log(data.items[0].name); 
  console.log(data.items[0].thumbnails.cropped); 
  
  // What do you want to do? Show (display on page) data? 
    //  showStuff(data);
  
};
              
              
//GET JSON FROM API

$.getJSON(getStuff, setStuff, doStuff);
