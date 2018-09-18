function ticketCost(eventID, newRow) {
    //EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G , EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G
    // var url="https://app.ticketmaster.com/discovery/v2/events/" + eventID + ".json?size=1&apikey=" + apikey;
    var apikey = 'EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G'
    console.log("inside ticketMaster")
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=24&keyword='paul mccartney'&apikey=" + apikey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            // Parse the response.
            // Do other things.
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });

}
function searchBandsInTown(artist) {//switch this to use ticket master api
    var frmDate = $("#fromDate").val();
    var toDate = $("#toDate").val();

    console.log("you enter a date range from: " + frmDate + " to: " + toDate);

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=" + frmDate + "%2C" + toDate;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Printing the entire object to console
        console.log(response);

        // Constructing HTML containing the artist information
        for (var i = 0; i < response.length; i++) {
            var artistName = response[i].lineup[0];
            var venueName = response[i].venue.name;
            var venueCity = response[i].venue.city;
            var venueCountry = response[i].venue.country;
            // Create the new row
            var newRow = $("<tr>").append(
                $("<td>").text(artistName),
                $("<td>").text(venueName),
                $("<td>").text(venueCity),
                $("<td>").text(venueCountry),
            );
            // ticketCost(response[i].id,newRow);
        }

        // Empty the contents of the artist-div, append the new artist content


    });

}

function searchBands(artist) {
    var frmDate = $("#fromDate").val();
    var toDate = $("#toDate").val();

    console.log("you enter a date range from: " + frmDate + " to: " + toDate); var apikey = 'EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G'
    console.log("inside ticketMaster")
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=24&keyword='" + artist + "'&startDateTime=" + frmDate + "&endDateTime=" + toDate + "&apikey=" + apikey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
            var events = json._embedded.events;
            for (var i = 0; i < events.length; i++) {
                var artistName = events[i].name;
                var venueName = events[i]._embedded.venues[0].name;
                var venueCity = events[i]._embedded.venues.city.name;
                var venueCountry = events[i]._embedded.venues.country.name;
                var priceMin = events[i].priceRanges[0].min;
                var priceMax = events[i].priceRanges[0].max;
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
            }
        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });

}
//searchBandsInTown("paul mccartney");
searchBands('paul mccartney');
var test = $("<tr>");
ticketCost(1, test);
