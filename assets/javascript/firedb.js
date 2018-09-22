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

function saveBandToIten(user, artist, venueName, venueCity, priceMin, priceMax,venueLat,venueLong) {

    user = {
        artist: artist,
        venueName: venueName,
        venueCity: venueCity,
        priceMax: priceMax,
        priceMin: priceMin,
        lat: venueLat,
        long: venueLong

    };

    // Uploads artist data to user in database
    database.ref().push(user);
}

//add code to load iteniary from firebase for given user
function loadIten(user) {
    database.ref(user).once('value').then(function (snapshot) {
        var userIten = snapshot.val();
        for (var i = 0; i < userIten.length; i++) {
            var artist = userIten[i].artist;
            var venueName = userIten[i].venueName;
            var venueCity = userIten[i].venueCity;
            var priceMax = userIten[i].priceMax;
            var priceMin = userIten[i].priceMin;
            var lat = userIten[i].venueLat;
            var long = userIten[i].venueLong;

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
        }
        
    });
}