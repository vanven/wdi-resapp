$(document).ready(function() {

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
	$('.exp_block_add').click(function() {
		var html = $('.exp_block').first().clone();
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

	// //  Submit education data
	// 	userData.schools = [];

	// 	var education_blocks = $('.education_block');
	// 	//  for (i = 0; i < education_blocks.length; i++) {
	// 	// 	school = {};
	// 	// 	school.name = education_blocks[i].find('input.name').val();
	// 	// 	school.degree = education_blocks[i].find('input.degree').val();
	// 	// 	userData.schools.push(school);
	// 	// }

	// 	education_blocks.each(function(index, item) {
	// 		var startDate 		= $(item).find('.startDate').val();
	// 		var formattedDate 	= startDate.slice(5, 7) + startDate.slice(2, 4);
	// 		console.log(startDate);

	// 		userData.schools.push({
	// 			name 	: $(item).find('.name').val(),
	// 			degree 	: $(item).find('.degree').val(),
	// 			start_month_year : formattedDate
	// 		});
	// 	});
		
	// 	console.log(education_blocks);

	// // Submit work history
	// 	userData.experience = [];
	// 	var exp_blocks = $('.exp_block');
	// 	exp_blocks.each(function(index, item) {
	// 		var startDate 		= $(item).find('.startDate').val();
	// 		var formattedDate 	= startDate.slice(5, 7) + startDate.slice(2, 4);
	// 		console.log(startDate);

	// 		userData.experience.push({

	// 		});

	// 	})


		console.log(userData);
		return false;
	});
});
