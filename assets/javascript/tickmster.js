//event variables
var artist = "";
var venueCity = "";
var venueName = "";
var priceMin, priceMax;
//search events on artist only
function searchBands(artist) {
    var apikey = 'EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G'
    //console.log("inside ticketMaster")
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=24&keyword='" + artist + "'&apikey=" + apikey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            var events = json._embedded.events;
            for (var i = 0; i < events.length; i++) {
                venueName = events[i]._embedded.venues[0].name;
                venueCity = events[i]._embedded.venues[0].city.name;

                if (events[i].priceRanges != undefined) {
                    priceMin = events[i].priceRanges[0].min;
                    priceMax = events[i].priceRanges[0].max;
                }
                else {
                    priceMin = "pay at venue";
                    priceMax = "pay at venue";
                }
                // Create the new row
                var newRow = $("<tr>").append(
                    $("<td>").text(artist),
                    $("<td>").text(venueName),
                    $("<td>").text(venueCity),
                    $("<td>").text(priceMin),
                    $("<td>").text(priceMax)
                );
                // Do other things.
                $("#bandEvents-Table > tbody").append(newRow);
            }
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });

}
//search events on artist and date range
function searchBands(artist, frmDate, toDate) {
    var apikey = 'EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G'
    //console.log("inside ticketMaster")
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=24&keyword='" + artist + "'&startDateTime=" + frmDate + "&endDateTime=" + toDate + "&apikey=" + apikey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            var events = json._embedded.events;
            for (var i = 0; i < events.length; i++) {
                venueName = events[i]._embedded.venues[0].name;
                venueCity = events[i]._embedded.venues[0].city.name;

                if (events[i].priceRanges != undefined) {
                    priceMin = events[i].priceRanges[0].min;
                    priceMax = events[i].priceRanges[0].max;
                }
                else {
                    priceMin = "pay at venue";
                    priceMax = "pay at venue";
                }
                // Create the new row
                var newRow = $("<tr>").append(
                    $("<td>").text(artist),
                    $("<td>").text(venueName),
                    $("<td>").text(venueCity),
                    $("<td>").text(priceMin),
                    $("<td>").text(priceMax)
                );
                // Do other things.
                $("#bandEvents-Table > tbody").append(newRow);
            }
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });

}
//search events on artist, date range and location, radius
//add postalCode and radius
function searchBands(artist, frmDate, toDate, location, radius) {
    var apikey = 'EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G'
    //console.log("inside ticketMaster")
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=24&keyword='" + artist + "'&startDateTime=" + frmDate + "&endDateTime=" + toDate + "&postalCode" + location + "&radius" + radius + "&apikey=" + apikey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            var events = json._embedded.events;
            for (var i = 0; i < events.length; i++) {

                venueName = events[i]._embedded.venues[0].name;
                venueCity = events[i]._embedded.venues[0].city.name;

                if (events[i].priceRanges != undefined) {
                    priceMin = events[i].priceRanges[0].min;
                    priceMax = events[i].priceRanges[0].max;
                }
                else {
                    priceMin = "pay at venue";
                    priceMax = "pay at venue";
                }
                // Create the new row
                var newRow = $("<tr>").append(
                    $("<td>").text(artistName),
                    $("<td>").text(venueName),
                    $("<td>").text(venueCity),
                    $("<td>").text(priceMin),
                    $("<td>").text(priceMax)
                );
                // Do other things.
                $("#bandEvents-Table > tbody").append(newRow);
            }
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });

}
function searchBands(artist, location, radius) {
    var apikey = 'EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G'
    //console.log("inside ticketMaster")
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=24&keyword='" + artist + "&postalCode" + location + "&radius" + radius + "&apikey=" + apikey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            var events = json._embedded.events;
            for (var i = 0; i < events.length; i++) {
                // console.log("We are looking at event: " + i);
                var artistName = events[i].name;
                var venueName = events[i]._embedded.venues[0].name;
                var venueCity = events[i]._embedded.venues[0].city.name;
                var venueCountry = events[i]._embedded.venues[0].country.name;
                var priceMin, priceMax;
                if (events[i].priceRanges != undefined) {
                    priceMin = events[i].priceRanges[0].min;
                    priceMax = events[i].priceRanges[0].max;
                }
                else {
                    priceMin = "pay at venue";
                    priceMax = "pay at venue";
                }
                // Create the new row
                var newRow = $("<tr>").append(
                    $("<td>").text(artistName),
                    $("<td>").text(venueName),
                    $("<td>").text(venueCity),
                    $("<td>").text(venueCountry),
                    $("<td>").text(priceMin),
                    $("<td>").text(priceMax)
                );
                // Do other things.
                $("#bandEvents-Table > tbody").append(newRow);
            }
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });

}

function searchForBand() {
    
    artist = $("#bandName").val();
    var locationZip = $("#location").val();
    var searchRange = $("#radius").val();
    var frmDate = $("#fromDate").val();
    var toDate = $("#toDate").val();

    console.log("you enter a date range from: " + frmDate.toString() + " to: " + toDate.toString()); 
    if ((locationZip === "") && (searchRange === "") && (searchRange === "") && (fromDate === "")) {
        searchBands(artist);
    }
    else if((locationZip === "") && (searchRange === "") && (fromDate !== "")){
        frmDate += "T00:00:00z";
        toDate += "T23:59:59z";
        searchBands(artist, frmDate, toDate);
    }
    else if ((locationZip !== "") && (searchRange !== "") && (fromDate === "")){
        searchBands(artist, location, radius)
    }

    else {
        frmDate += "T00:00:00z";
        toDate += "T23:59:59z";
        searchBands(artist, frmDate, toDate, location, radius); 
    }
});
