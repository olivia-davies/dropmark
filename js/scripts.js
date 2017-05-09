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
//  console.log(data.items[1].link); 
//  console.log(data.items[1].name); 
//  console.log(data.items[1].thumbnails.large);
//  console.log(data.items[1].preview); 
  
  // What do you want to do? Show (display on page) data? 
      showStuff(data);
  
};
              
              
//GET JSON FROM API

$.getJSON(getStuff, setStuff, doStuff);

// Display stuff

var showStuff = function(data) {
  
  //Put on page
    $('h1').text(data.name);
    $('p a').attr('href', data.url);
  
  // Child Objects. May have many children. 
  // Loop or cycle through all the data
  // Display data at each loop
    
    $.each(data.items, function(i){
        
        // loop
        var stuff = '<p>' + data.items[0].name + '</p>';
        
        // put onto the page
        $('#items').append(stuff);
        
    });
    
};