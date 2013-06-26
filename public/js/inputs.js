$(document).ready(function() {

	$.ajax('api/resumes/51c2082e1b128c84b200000b', {

		complete : function(response){
			var res = response.responseJSON;
			var first = res.name_first;
			var last = res.name_last;
			// var fullName = first + ' ' + last;
			$('.name_first').html(first);
			$('.name_last').html(last);
			// $('#moniker').html(response.responseJSON.name_first + ' ' + response.responseJSON.name_last);
		}
	});

// Clone input boxes for education block
	$('.education_block_add').click(function() {
		var html = $('.education_block').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);


		// $('.help_block').before(html);
		html.slideDown(600);
		console.log('here');
		return false;
	});

// Clone input boxes for work experience
	$('.work_block_add').click(function() {
		var html = $('.work_block').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);

		html.slideDown(600);
		console.log('here');
		return false;
	});

// Clone input boxes for skills
	$('.skill_block_add').click(function() {
		var html = $('.skill_block').first().clone();
		html.css('display', 'none');

		// to clear out values from cloned inputs
		// html here means nothing. it's just a variable.
		html.find('input').val('');

		$(this).before(html);
		html.slideDown(600);
		console.log('here');
		return false;
	});


// SUBMIT stuff
	$('#userDataForm').submit(function() {

	// Submit contact info
		var userData = {};

		userData.name_first 		= $('.name_first').val();
		userData.name_last 			= $('.name_last').val();

		// userData.fullName 			= $('#name').val();

		userData.email 				= $('.email').val();
		userData.phone				= $('.phone').val();
		userData.street_address		= $('.street_address').val();
		userData.zip_code			= $('.zip_code').val();
		userData.city				= $('.city').val();
		userData.state				= $('.state').val();

	//  Submit education data
		userData.schools = [];

		var education_blocks = $('.education_block');
		//  for (i = 0; i < education_blocks.length; i++) {
		// 	school = {};
		// 	school.name = education_blocks[i].find('input.name').val();
		// 	school.degree = education_blocks[i].find('input.degree').val();
		// 	userData.schools.push(school);
		// }

		education_blocks.each(function(index, item) {
			var startDate = $(item).find('.startDate').val();
			var formattedDate = startDate.slice(5, 7) + startDate.slice(2, 4);
			console.log(startDate);

			userData.schools.push({
				name 	: $(item).find('.name').val(),
				degree 	: $(item).find('.degree').val(),
				start_month_year : formattedDate
			});
		});
		
		console.log(education_blocks);

	// Submit work history
		userData.work = [];
		


		console.log(userData);
		return false;
	});
});
