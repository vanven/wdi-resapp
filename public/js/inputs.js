$(document).ready(function() {

// Clone input boxes for education block
	$('.edu_block_add').click(function() {
		var html = $('.edu_block').first().clone();
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

	//  Submit education data
		userData.schools = [];

		var edu_blocks = $('.edu_block');
		//  for (i = 0; i < edu_blocks.length; i++) {
		// 	school = {};
		// 	school.name = edu_blocks[i].find('input.name').val();
		// 	school.degree = edu_blocks[i].find('input.degree').val();
		// 	userData.schools.push(school);
		// }

		edu_blocks.each(function(index, item) {
			var startDate 		= $(item).find('.startDate').val();
			var endDate 		= $(item).find('.endDate').val();
			var formattedSDate 	= startDate.slice(5, 7) + startDate.slice(2, 4);
			var formattedEDate 	= endDate.slice(5, 7) + endDate.slice(2, 4);
			// console.log(startDate);

			// temp = $(item.gpa).find('.gpa').val();
			// console.log(temp);

			userData.schools.push({
				name 	: $(item).find('.name').val(),
				degree 	: $(item).find('.degree').val(),
				major	: $(item).find('.major').val(),
				minor 	: $(item).find('.minor').val(),
				gpa 	: $(item).find('.gpa').val() * 1.0,
				start_month_year	: formattedSDate,
				end_month_year 		: formattedEDate,
			});
		});
		
		console.log(edu_blocks);

	// Submit work history
		userData.experience = [];
		var exp_blocks = $('.exp_block');
		exp_blocks.each(function(index, item) {
			var startDate 		= $(item).find('.startDate').val();
			var endDate 		= $(item).find('.endDate').val();
			var formattedSDate 	= startDate.slice(5, 7) + startDate.slice(2, 4);
			var formattedEDate 	= endDate.slice(5, 7) + endDate.slice(2, 4);

			// var responsibilities

			userData.experience.push({
				organization 		: $(item).find('.organization').val(),
				location 			: $(item).find('.location').val(),
				role 				: $(item).find('.role').val(),
				project 			: $(item).find('.project').val(),
				// responsibilities 	: $(item).find('.responsibilities')val(),
				start_month_year	: formattedSDate,
				end_month_year 		: formattedEDate,
			});
		});


		console.log(userData);
		return false;
	});
});
