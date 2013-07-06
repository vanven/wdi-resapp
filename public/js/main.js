$(document).ready(function() {

	function clog( input ){
	console.log(input);
	}

	$.ajax('/', {

		complete : function(response){
			// var res 		= response.responseJSON;
			var resume 		= response.responseJSON[0];
			clog(resume.id);

			$('h1').attr('data-id', resume.id).html(resume.name_first + ' ' + resume.name_last);
			$('p').append('<div>'+resume.contact_info.email+'</div>');
			$('p').append('<div>'+resume.contact_info.phone+'</div>');
			$('p').append('<div>'+resume.contact_info.street_address.street+'</div>');
			$('p').append('<div>'+resume.contact_info.street_address.city+' '+resume.contact_info.street_address.state+' '+resume.contact_info.street_address.zip_code+'</div>');



			// var first 		= res.name_first;
			// var last 		= res.name_last;
			// var fullName 	= first + ' ' + last;
			// $('.name').html(fullName);
		clog('whut');
		// clog(res);
		}
	});

	// this will execute the function below when the '.delete' link is submitted
	$('.delete').click(function() {
		// read the 'data-id' attribute of the h1
		var id = $('h1').data('id');
		clog(id); // log the id just to make sure
		// send an ajax request to delete the resume
		$.ajax({
			url : '/'+id,
			type : 'DELETE'
		});
		window.location = window.location; // this will refresh the page
	});
});


