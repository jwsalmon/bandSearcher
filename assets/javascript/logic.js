var favs = $(".favs");
var tour = $(".tour");
var submit = $(".submitBtn");
var userName = '';
//var location = $("#location").val().trim();
var bandName = $("#bandName").val().trim();

function hideFavs() {
    favs.hide();
}

function hideTour() {
    tour.hide();
}
hideFavs();
hideTour();

$(submit).on('click', function () {
    tour.fadeIn("slow");
    $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated hinge');
    });
    $('.eventEntry').empty();
    searchForBand();
})

$("tr").click(function () {
    addToInten();
})

function addToInten() {
    // this function adds events to itinerary table and firebase
    //when user clicks on them
    favs.fadeIn('slow');
    var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
        $tds = $row.find("td");             // Finds all children <td> elements
    var saveEvent = [];
    $.each($tds, function () {               // Visits every single <td> element
        saveEvent.push($(this).text());   // Prints out the text within the <td>
    });
    console.log(saveEvent);
    var artist = saveEvent[0];
    var venueName = saveEvent[1];
    var venueCity = saveEvent[2];
    var eventDate = saveEvent[3];
    var priceMin = saveEvent[4];
    var priceMax = saveEvent[5];
    var venueLat = $(this).attr("data-lat");
    var venueLong = $(this).attr("data-long");
    userName = $("#newUser").val().trim();
    saveBandToIten(userName, artist, venueName, venueCity, eventDate, priceMin, priceMax, venueLat, venueLong)
    //$("#resultas").append($item); 
    addToIntenTable(saveEvent, venueLat, venueLong)
}
function addToIntenTable(eventArray, venueLat, venueLong) {
    var artist = eventArray[0];
    var venueName = eventArray[1];
    var venueCity = eventArray[2];
    var eventDate = eventArray[3];
    var priceMax = eventArray[4];
    var priceMin = eventArray[5];

    var newRow = $("<tr>").append(
        $("<td>").text(artist),
        $("<td>").text(venueName),
        $("<td>").text(venueCity),
        $("<td>").text(eventDate),
        $("<td>").text(priceMin),
        $("<td>").text(priceMax)
    );
    newRow.attr("data-lat", venueLat);
    newRow.attr("data-long", venueLong);
    newRow.addClass(".btnShow");
    // Do other things.
    $("#bandIteniary-Table > tbody").append(newRow);

}
$("#getUserItin").on("click", function () {
    favs.fadeIn('slow');
    userName = $("#newUser").val();
    if (userName !== "") { //check if user name is entered
        if (loadIten(userName)) { //check if username exits in db
            favs.fadeIn('slow');
        }
    }
    else {
        alert("Please enter user name before clicking get info button");
    }
});

$("#bandIteniary-Table tbody").on("click", "tr", function () {
    // this funtion pop up google map when user clicks on event in Itinerary
    var lat = $(this).attr("data-lat");
    var long = $(this).attr("data-long");
    $("#dialog").dialog({
        modal: true,
        title: "Google Map",
        width: 600,
        hright: 450,
        buttons: {
            Close: function () {
                $(this).dialog('close');
            }
        },
        open: function () {
            var mapOptions = {
                center: new google.maps.LatLng(lat, long),
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map($("#dvMap")[0], mapOptions);
        }
    });
});

$('.funky-animations h4').on('click', function () {
    $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated hinge');
    });
});



$('#fas fa-print').on("click", function () {
    $.window.print();
})


//add code to move artist to "My Band Picks" table and call firebase function