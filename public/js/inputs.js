$(document).ready(function() {

function clog( input ){
	console.log(input);
};


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
		var html = $('.exp_block').first().clone().find(".resp_block:not(:first)").remove().end();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);

		html.slideDown(600);
		clog('exp'); 	// $$TEMP
		return false;
	});

	// Clone responsibilities input for work experience
		
			$('a.resp_block_add').click(function() {
				var html = $('.resp_block').first().clone();
				html.css('display', 'none');
				html.find('input').val('');

				clog(html);

				$(this).before(html);

				html.slideDown(600);
				// clog('resp'); 	// $$TEMP
				return false;
			});

// Clone input boxes for accomplishments
	$('.acc_block_add').click(function() {
		var html = $('.acc_block').first().clone();
		html.css('display', 'none');
		html.find('input').val('');
		$(this).before(html);

		html.slideDown(600);
		clog('acc'); 	// $$TEMP
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
		clog('skill'); 	// $$TEMP
		return false;
	});


// SUBMIT stuff
	$('#userDataForm').submit(function() {

	// Populate userData for submit
		var userData = {};  	// creates new object userData

		// Submit name and websites
			userData.name_first 	= $('.name_first').val();
			userData.name_last	 	= $('.name_last').val();

			// userData.fullName 			= $('#name').val();

			userData.website			= $('.website').val();
			userData.linked_in			= $('.linkedin').val();
			userData.twitter 			= $('.twitter').val();

		// Submit contact info
			userData.contact_info = {}; 	// creates new object contact_info within userData

			userData.contact_info.email 			= $('.email').val(),
			userData.contact_info.phone				= $('.phone').val(),


			userData.contact_info.street_address = {}; 		// create street_address object under contact_info

			userData.contact_info.street_address.street 	= $('.street').val(),
			userData.contact_info.street_address.city		= $('.city').val(),
			userData.contact_info.street_address.state		= $('.state').val(),
			userData.contact_info.street_address.zip_code	= $('.zip_code').val(),

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
				// clog(startDate);

				// temp = $(item.gpa).find('.gpa').val();
				// clog(temp);

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
			
			clog(edu_blocks);

		// Submit work experience history
			userData.exp = [];
			var exp_blocks = $('.exp_block');
			exp_blocks.each(function(index, item) {
				var startDate 		= $(item).find('.startDate').val();
				var endDate 		= $(item).find('.endDate').val();
				var formattedSDate 	= startDate.slice(5, 7) + startDate.slice(2, 4);
				var formattedEDate 	= endDate.slice(5, 7) + endDate.slice(2, 4);

				resp = [];
				var resp_blocks 	= $('.resp_block');
				resp_blocks.each(function(index, item) {				
								
						resp.push( $(item).find('.resp').val() );	
				});

				// var resp_blocks = $(item).find('.resp_block');
				// 	resp_blocks.each(function(rIndex, rItem) {

				// 	};
				// var workResp = new Array();  // same as var workResp = [];


				var workData = {
					organization 		: $(item).find('.organization').val(),
					project 			: $(item).find('.project').val(),
					role 				: $(item).find('.role').val(),
					start_month_year	: formattedSDate,
					end_month_year 		: formattedEDate,
					location 			: $(item).find('.location').val(),
					responsibilities 	: resp
				};

				userData.exp.push(workData);
			});
			
		// Submit accomplishments
			userData.accomplishments = [];
			var acc_blocks 			= $('.acc_block');
			acc_blocks.each(function(index, item) {
				var monthYear 		= $(item).find('.month_year').val();
				var formattedDate 	= monthYear.slice(5, 7) + monthYear.slice(2, 4);

				var accData			= {
					title 		: $(item).find('.title').val(),
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

			clog(userData);

	// Post userData to JSON
		var JSON_data = JSON.stringify({'resume' : userData});
		clog(JSON_data);

		var PATH = '/'
		$.ajax({
			type : 'POST',
			url : PATH,
			data : JSON_data
		}).done(function() {

			alert( "Data Saved: for " + userData.name_first + " " + userData.name_last );
		});

		return false;
	});
});

// create delete of cloned responsibilities execept one

// create function to bind to click event
