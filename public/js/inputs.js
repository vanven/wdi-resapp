$(document).ready(function() {

function clog( input ){
	console.log(input);
}

// Clone input boxes for education block
	$('.edu_block_add').click(function() {
		var html = $('.edu_block').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);


		// $('.help_block').before(html);
		html.slideDown(600);
		clog('edu'); 	// $$TEMP
		return false;
	});

// Clone input boxes for work experience
	$('.exp_block_add').click(function() {
		var html = $('.exp_block').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);

		html.slideDown(600);
		console.log('exp'); 	// $$TEMP
		return false;
	});

	// Clone responsibilities input for work experience
		$('.resp_block_add').click(function() {
			var html = $('.resp_block').first().clone();
			html.css('display', 'none');
			html.find('input').val('');
			$(this).before(html);

			html.slideDown(600);
			console.log('resp'); 	// $$TEMP
			return false;
		})

// Clone input boxes for accomplishments
	$('.acc_block_add').click(function() {
		var html = $('.acc_block').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);

		html.slideDown(600);
		console.log('acc'); 	// $$TEMP
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
		console.log('skill'); 	// $$TEMP
		return false;
	});


// SUBMIT stuff
	$('#userDataForm').submit(function() {

	// Submit contact info
		var userData = {};

		first 	= $('.name_first').val();
		last 	= $('.name_last').val();

		userData.name_first = first;
		userData.name_last = last;

		// userData.fullName 			= $('#name').val();

		userData.email 				= $('.email').val();
		userData.phone				= $('.phone').val();
		userData.street_address		= $('.street_address').val();
		userData.zip_code			= $('.zip_code').val();
		userData.city				= $('.city').val();
		userData.state				= $('.state').val();

	// Submit education data
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

			var schoolData = {
				name 	: $(item).find('.name').val(),
				degree 	: $(item).find('.degree').val(),
				major	: $(item).find('.major').val(),
				minor 	: $(item).find('.minor').val(),
				gpa 	: $(item).find('.gpa').val() * 1.0,
				start_month_year	: formattedSDate,
				end_month_year 		: formattedEDate,
			};

			// can add validator here to check each entry in schoolData

			userData.schools.push(schoolData);
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

			userData.experience.resp = [];
			var resp_blocks 	= $('.resp_block');
			resp_blocks.each(function(index, item) {
				userData.experience.resp.push({
					responsibility 	: $(item).find('.resp').val()
				});
			});

			var workData = {
				organization 		: $(item).find('.organization').val(),
				location 			: $(item).find('.location').val(),
				role 				: $(item).find('.role').val(),
				project 			: $(item).find('.project').val(),
				responsibilities 	: userData.experience.resp,

				start_month_year	: formattedSDate,
				end_month_year 		: formattedEDate,
			};

			userData.experience.push(workData);
		});
		
	// Submit accomplishments
		userData.accomplishments = [];
		var acc_blocks = $('.acc_block');
		acc_blocks.each(function(index, item) {
			var monthYear 		= $(item).find('.month_year').val();
			var formattedDate 	= monthYear.slice(5, 7) + monthYear.slice(2, 4);

			var accData			= {
				description : $(item).find('.description').val(),
				month_year 	: formattedDate
			};

			userData.accomplishments.push(accData);
		});

	// Submit skills
		userData.skills = [];
		var skill_blocks = $('.skill_block');
		skill_blocks.each(function(index, item) {
			var skillData = {
				title 		: $(item).find('.title').val(),
				experience 	: $(item).find('.experience').val() * 1.0,
			};
			userData.skills.push(skillData);
		});

		console.log(userData);

		// $.ajax({
		// 	type : "POST",
		// 	url : "api/resumes",
		// 	data : JSON.stringify(userData)
		// }).done(function() {
		// 	alert( "Data Saved: for " + first + " " +last );
		// });


		return false;
	});
});
