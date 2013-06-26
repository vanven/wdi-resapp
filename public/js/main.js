$(document).ready(function() {

	$.ajax('api/resumes/51c2082e1b128c84b200000b', {

		complete : function(response){
			var res = response.responseJSON;
			var first = res.name_first;
			var last = res.name_last;
			var fullName = first + ' ' + last;
			$('.name').html(fullName);
			// $('#moniker').html(response.responseJSON.name_first + ' ' + response.responseJSON.name_last);
		console.log('whut');
		console.log(res);
		}
	});
});
