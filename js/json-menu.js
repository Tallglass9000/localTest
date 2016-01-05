$(document).ready(function () {

});$.getJSON('/api/businesses', function (data) {
	var businessList = function (data) {
		$.each(data, function (key, val) {
			$(".city").text(val.city + ", " + val.state);
			$(".distance").text(val.distance);
			$(".subtitle").text(val.category);
			$(".buttonText").text(val.businessname);
			$(".tab").text(val.coupons[0].title);
		});

	}
});