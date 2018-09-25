/**
 * test code for launching google map in dialog
 * this code has been moved to logic.js under
 * click handler for Itinerary table
 */

var lat, long;
$(function () {
    $(".btnShow").click(function () {
        lat = $(this).attr("data-latitude");
        long = $(this).attr("data-longitude");
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
});

