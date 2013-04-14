var $cd = $('.countdown'),
	$days = $cd.find('.days'),
	$hours = $cd.find('.hours'),
	$minutes = $cd.find('.minutes'),
	$seconds = $cd.find('.seconds');

var updateTime = function() {
	var partyTime = moment(new Date(2013,3,27,18).getTime()),
		nowTime = new Date(),
		days = partyTime.diff(moment(), "days");
	partyTime.subtract("days", days);

	var hours = partyTime.diff(moment(), "hours");
	partyTime.subtract("hours", hours);

	var	minutes = partyTime.diff(moment(), "minutes");
	partyTime.subtract("minutes", minutes);

	var	seconds = partyTime.diff(moment(), "seconds");

	$days.text(days);
	$hours.text(hours);
	$minutes.text(minutes);
	$seconds.text(seconds);
	setTimeout(updateTime, 1000);
};

updateTime();

function getMap() {
    var image = document.createElement('img'),
		url = "http://maps.google.com/maps/api/staticmap?center=59.320875,18.044057&size=600x300&sensor=true&zoom=15&markers=color:green|label:R|59.320875,18.044057";
    image.src = url;
    return image;
}

function googleMap() {
	var ragvaldPos = new google.maps.LatLng(59.320875, 18.044057),
		mapOptions = {
		center: ragvaldPos,
		zoom: 15,
		zoomControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		backgroundColor: "#1F050D",
		disableDefaultUI: true
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
		position: ragvaldPos,
		map: map,
		title:"Ragvald",
		animation: google.maps.Animation.DROP
	});

    return map;
}

var gMap = googleMap();
// var map = getMap();
// document.getElementById('map').appendChild(map);