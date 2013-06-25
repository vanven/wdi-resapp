$(document).ready(function() {

	// $.ajax('api/resumes/51c2082e1b128c84b200000b', {

	// 	complete : function(response){
	// 		var res = response.responseJSON;
	// 		var first = res.name_first;
	// 		var last = res.name_last;
	// 		var fullName = first + ' ' + last;
	// 		$('#name').html(fullName);
	// 		// $('#moniker').html(response.responseJSON.name_first + ' ' + response.responseJSON.name_last);
	// 	}
	// });

	$('.education_block_add').click(function() {
		var html = $('.education_block').first().clone();
		html.css('display', 'none');

		$(this).before(html);


		// $('.help_block').before(html);
		html.slideDown(600);
		console.log('here');
		return false;
	});

	$('.work_block_add').click(function() {
		var html = $('.work_block').first().clone();
		html.css('display', 'none');
		$(this).before(html);

		html.slideDown(600);
		console.log('here');
		return false;
	});

	$('.skill_block_add').click(function() {
		var html = $('.skill_block').first().clone();
		html.css('display', 'none');
		$(this).before(html);

		html.slideDown(600);
		console.log('here');
		return false;
	});

	$('#userDataForm').submit(function() {
		var userData = {};
		userData.fullName = $('#name').val();

		userData.schools = [];
		var education_blocks = $('.education_block');
		// for (i = 0; i < education_blocks.length; i++) {
		// 	school = {};
		// 	school.name = education_blocks[i].find('input.name').val();
		// 	school.degree = education_blocks[i].find('input.degree').val();
		// 	userData.schools.push(school);
		// }

		education_blocks.each(function(index, item) {
			userData.school.push({
				name : item.find('.name').val(),
				degree : item.find('.degree').val();
			})
		});
		console.log(education_blocks);

		console.log(userData);
		return false;
	});
});
