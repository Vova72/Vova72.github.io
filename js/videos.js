var videosCount = 6;
var videosNow = 0;
var videosMax = 18;

var videosUrl = ["https://www.youtube.com/embed/yN_ksgf9Tso", "https://www.youtube.com/embed/EbzrnDGBsEA", "https://www.youtube.com/embed/nRrfP_oBXPc", "https://www.youtube.com/embed/KrffI0HjlEE", "https://www.youtube.com/embed/qCLs3FazzIg", "https://www.youtube.com/embed/gW22vh8zrcE", "https://www.youtube.com/embed/MsB1AcQFQK0", "https://www.youtube.com/embed/V8HtP7lKyOw", "https://www.youtube.com/embed/TlxKaETbz0c", "https://www.youtube.com/embed/tOrtm_nhyjk", "https://www.youtube.com/embed/rBrJimgTy8w", "https://www.youtube.com/embed/acC-ETzupQk", "https://www.youtube.com/embed/OEuaLrZpsJI", "https://www.youtube.com/embed/-nEXq5RZvnM", "https://www.youtube.com/embed/NMM1l53EyMY", "https://www.youtube.com/embed/U_WiaNYBtiE", "https://www.youtube.com/embed/Do1XM7kkeKE", "https://www.youtube.com/embed/NQRiXr_T888"];

$(document).ready(function () {
	parseVideos();
	newVideos();
})

function parseVideos() {
	for(var i = 0; i < videosCount; i++) {
		$("#videodiv").append("<iframe width='30%' height='300' src='" + videosUrl[videosNow] + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
		videosNow++;
	}
}

function newVideos() {
	$("#loadmore").click(function () {
		parseVideos();
		if (videosNow + 1 >= videosMax) {
			$("#loadmore").remove();
			$("#videobuttons").css("margin-left", "45%");
		}
	});
}