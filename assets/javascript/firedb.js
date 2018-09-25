/**
 * implementaion of Firebase api for BandSearch project
 * funciton:
 * saveBandToIten - saves user date into firebase dabase as tree under user
 *   Parameters:
 *       user - name of user to store event under
 *       artist - name of artist performing in event
 *       venueName - Place event is at
 *       venueCity - City venue is in
 *       eventDate - starting date of event
 *       priceMax - highest price for tickets
 *       priceMin - lowest price for tickets
 *       venueLat - latitude of venue
 *       venueLong - longitude of venue
 * 
 * loadIten - retrieves data for user and loads into itinerary table
 *    Parameters:
 *        user - name of user to retrieve from firebase database         
 */

var config = {
    apiKey: "AIzaSyCwBkD1a9nm9CqM2w15tCv6Tf0HvJcmNaw",
    authDomain: "project1-14a42.firebaseapp.com",
    databaseURL: "https://project1-14a42.firebaseio.com",
    projectId: "project1-14a42",
    storageBucket: "",
    messagingSenderId: "950709385156"
};
firebase.initializeApp(config);

var database = firebase.database();
function saveBandToIten(user, artist, venueName, venueCity,eventDate, priceMin, priceMax, venueLat, venueLong) {
    
    
    var userData = {
        artist: artist,
        venueName: venueName,
        venueCity: venueCity,
        venueDate:eventDate,
        priceMax: priceMax,
        priceMin: priceMin,
        lat: venueLat,
        long: venueLong

    };
    // get a key for new user event
    var newEventKey = database.ref().child(user).push().key;
    var updates = {};
    updates[user + "/" + newEventKey] = userData

    // Uploads artist data to user in database
    database.ref().update(updates);
}

//add code to load iteniary from firebase for given user
function loadIten(user) {
    database.ref(user).once('value').then(function (snapshot) {
        var userIten = snapshot.val();
        if( userIten === null){ //check if user name exists in db 
            //if not alert and return 0;
            alert("No Itiniary data found for: " + user);
            return 0;
        }
        console.log("in loadIten: " + userIten);
        console.log(Object.entries(userIten));
        eventArray = Object.entries(userIten)
        /*  for (var i = 0; i < userIten.length; i++) {*/
            eventArray.forEach(function(element) {
                
            
             var artist = element[1].artist;
             var venueName = element[1].venueName;
             var venueCity = element[1].venueCity;
             var priceMax = element[1].priceMax;
             var priceMin = element[1].priceMin;
             var lat = element[1].lat;
             var long = element[1].long;
 
             var newRow = $("<tr>").append(
                 $("<td>").text(artist),
                 $("<td>").text(venueName),
                 $("<td>").text(venueCity),
                 $("<td>").text(priceMin),
                 $("<td>").text(priceMax)
             );
             newRow.attr("data-lat",lat);
             newRow.attr("data-long",long);
             // Do other things.
             $("#bandIteniary-Table > tbody").append(newRow);
            });
            return 1;
    });
}