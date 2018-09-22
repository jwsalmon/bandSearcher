var favs = $(".favs");
var tour = $(".tour");
var submit = $(".submitBtn");
var userName = $("#newUser").val().trim();
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
    searchForBand();
})

$("tr").click(function () {
    addToInten();
})

function addToInten() {
    favs.fadeIn('slow');
    var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
        $tds = $row.find("td");             // Finds all children <td> elements
    var saveEvent =[];
    $.each($tds, function () {               // Visits every single <td> element
            saveEvent.push($(this).text());   // Prints out the text within the <td>
    });
    console.log(saveEvent);
    var artist = saveEvent[0];
    var venueName = saveEvent[1];
    var venueCity = saveEvent[2];
    var priceMax = saveEvent[3];
    var priceMin = saveEvent[4];
    var venueLat = $(this).attr("data-lat");
    var venueLong = $(this).attr("data-long");
    saveBandToIten(userName, artist, venueName, venueCity, priceMin, priceMax,venueLat,venueLong)
    //$("#resultas").append($item); 
}

//   var newRow = $("<tr>").append(
//     $("<td>").text("#bandName"),
//     $("<td>").text("#city"),
//     $("<td>").text("#date"),
//     $("<td>").text("#cost")

// );
// $("#entry > tbody").append(newRow);
$('.funky-animations h4').on('click', function () {
    $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated hinge');
    });
});

//add code to move artist to "My Band Picks" table and call firebase function