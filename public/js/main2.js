$(document).ready(function() {

	$('.education_block_add').click(function() {
		var html = $('education_block').first().clone();
		$('.help_block').before(html);
		return false;
	});
});

	//like 'curl' in Terminal
	// $.ajax('api/resumes/51c2082e1b128c84b200000b', {

	// 	complete : function(response){
	// 		var res = response.responseJSON;
	// 		var first = res.name_first;
	// 		var last = res.name_last;
	// 		var fullName = first + ' ' + last;
	// 		$('.name').html(fullName);
	// 		// $('#moniker').html(response.responseJSON.name_first + ' ' + response.responseJSON.name_last);
			
	// 		var addr = res.contact_info.street_address;
	// 		var street = addr.street;
	// 		var city = addr.city;
	// 		var state = addr.state;
	// 		var zip = addr.zip_code;
	// 		var fullAddress = street + ',' + ' ' + city + ',' + ' ' + state + ',' + ' ' + zip;
	// 		$('#address').html(fullAddress);

	// 		$('#phone').html(res.contact_info.phone);
	// 		$('#email').html(res.contact_info.email);

	// 		$('#skillset h4').html(function(0) {
				
	// 		});


	// 		console.log(res);
	// 	}
	// });



// $(document).ready(function() {
// 	$('.education_block_add').click(function() {
// 		var html = $($('education_block')[0]).clone();
// 		$('.help_block').before(html);
// 	});
// });


// function contactInfo() {
// 			complete : function(response){
// 			var res = response.responseJSON;
// 			var first = res.name_first;
// 			var last = res.name_last;
// 			var fullName = first + ' ' + last;
// 			$('.name').html(fullName);
			
// 			var addr = contact_info.street_address;
// 			var street = res.addr.street;
// 			var city = res.addr.city;
// 			var state = res.addr.state;
// 			var zip = res.addr.zip_code;
// 			var fullAddress = street + ',' + ' ' + city + ',' + ' ' + state + ',' + ' ' + zip;
// 			$('#address').html(fullAddress);

// 			$('#phone').html(response.responseJSON.contact_info.phone);
// 			$('#email').html(response.responseJSON.contact_info.email);

// }