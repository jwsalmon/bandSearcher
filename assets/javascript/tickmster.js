/**
 * implementation of ticket master api
 * for BandSearch project
 * functions:
 *   searchBands - this is the core code for looking artist events this fuction is overloaded
 *      artist - name of artist to look up events for
 *   searchBands  - same as above function but takes two more parameters
 *      artist - name of artist to look up events for
 *      frmDate - start date to search for events
 *      toDate - end date to search for events
 *   searchBands - same as above this one takes location(zip code) and radius to search on
 *      artist - name of artist to look up events for
 *      frmDate - start date to search for events
 *      toDate - end date to search for events
 *      location - postal code to search for events(zip code)
 *      radius - radius to search in
 *   searchBands - same as above only remove frmDate and toDate
 *      artist - name of artist to look up events for
 *      location - postal code to search for events(zip code)
 *      radius - radius to search in
 *   searchForBand - entry point to tickmster implementation
 *                   this function check to see which elements
 *                   have been enter on main(index) page when submit
 *                   is clicked. Based on this it calls the appropreate
 *                   implementation of searchBands
 *     
 */

//event variables
var artist = "";
var venueCity = "";
var venueName = "";
var radius = "";
var priceMin, priceMax, venueDate;
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
                venueDate = events[i].dates.start.localDate

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
                    $("<td>").text(venueDate),
                    $("<td>").text(priceMin),
                    $("<td>").text(priceMax)
                );
                newRow.attr("data-lat", events[i]._embedded.venues[0].location.latitude);
                newRow.attr("data-long", events[i]._embedded.venues[0].location.longitude);
                newRow.addClass("eventEntry");
                // Do other things.
                $("#bandEvents-Table > tbody").prepend(newRow);
            }
            $(".eventEntry").click(addToInten);
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
                venueDate = events[i].dates.start.localDate

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
                    $("<td>").text(venueDate),
                    $("<td>").text(priceMin),
                    $("<td>").text(priceMax)
                );
                newRow.attr("data-lat", events[i]._embedded.venues[0].location.latitude);
                newRow.attr("data-long", events[i]._embedded.venues[0].location.longitude);
                newRow.addClass("eventEntry");
                // Do other things.
                $("#bandEvents-Table > tbody").prepend(newRow);
            }
            $(".eventEntry").click(addToInten);
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
                venueDate = events[i].dates.start.localDate

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
                    $("<td>").text(venueDate),
                    $("<td>").text(priceMin),
                    $("<td>").text(priceMax)
                );
                newRow.attr("data-lat", events[i]._embedded.venues[0].location.latitude);
                newRow.attr("data-long", events[i]._embedded.venues[0].location.longitude);
                newRow.addClass("eventEntry");
                // Do other things.
                $("#bandEvents-Table > tbody").prepend(newRow);
            }
            $(".eventEntry").click(addToInten);
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
                venueName = events[i]._embedded.venues[0].name;
                venueCity = events[i]._embedded.venues[0].city.name;
                venueDate = events[i].dates.start.localDate

                if (events[i].priceRanges != undefined) {
                    priceMin = events[i].priceRanges[0].min;
                    priceMax = events[i].priceRanges[0].max;
                }
                else {
                    priceMin = "pay at venue";
                    priceMax = "pay at venue";
                }
                // Create the new row
                var newRow = $("<tr>").prepend(
                    $("<td>").text(artist),
                    $("<td>").text(venueName),
                    $("<td>").text(venueCity),
                    $("<td>").text(venueDate),
                    $("<td>").text(priceMin),
                    $("<td>").text(priceMax)
                );
                newRow.attr("data-lat", events[i]._embedded.venues[0].location.latitude);
                newRow.attr("data-long", events[i]._embedded.venues[0].location.longitude);
                newRow.addClass("eventEntry");
                // Do other things.
                $("#bandEvents-Table > tbody").prepend(newRow);
            }
            $(".eventEntry").click(addToInten);
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
    if ((locationZip === "") && (searchRange === "") && (frmDate === "")) {
        searchBands(artist);
    }
    else if ((locationZip === "") && (searchRange === "") && (frmDate !== "")) {
        frmDate += "T00:00:00z";
        toDate += "T23:59:59z";
        searchBands(artist, frmDate, toDate);
    }
    else if ((locationZip !== "") && (searchRange !== "") && (frmDate === "")) {
        searchBands(artist, location, radius)
    }

    else {
        frmDate += "T00:00:00z";
        toDate += "T23:59:59z";
        searchBands(artist, frmDate, toDate, location, radius);
    }
}
