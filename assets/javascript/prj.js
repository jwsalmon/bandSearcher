function ticketCost(venue){
//EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G , EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G
var apikey = 'EEAFHQsgoEyLU0ADnSWmpE4DA5UOOR8G'
$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=" +apikey,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
}
function searchBandsInTown(artist) {
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
          $("<td>").text("$27.50"),
          $("<td>").text("$273")
        );
        $("#BandEvents > tbody").append(newRow);
      }

      // Empty the contents of the artist-div, append the new artist content
      

    });
  }