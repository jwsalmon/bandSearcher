//this is sample code need to modify
var $detailWin,
    dialogInitialized,
    map;

function getDialogContent() {
    if (dialogInitialized) return;
    dialogInitialized = true;//Well, at least initializing.
    $.get('p2.php').done(function (html) {
        $detailWin.html(html);
        var cord = new google.maps.LatLng(28.545078, -81.377196);
        var mapOptions = {
            zoom: 15,
            center: cord,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var marker = new google.maps.Marker({
            position: cord,
            map: map,
            title: 'Test'
        });
    }).error(function (jqXHR, textStatus, errorThrown) {
        $detailWin.text(textStatus);
    });
}

$detailWin = $("#detailWin").dialog({
    autoOpen: false,
    modal: true,
    width: 700,
    height: 600,
    show: "fade",
    close: "fade",
    open: getDialogContent
});

//this will be moved to logic and triggered from click of venuename
$("#cc").on('click', function () {
    $detailWin.dialog("open");
});