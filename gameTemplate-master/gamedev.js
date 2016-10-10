$( document ).ready(function() {

$("#goLeft").hide();

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/rightroom.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").hide();
		$("#goRight-Right2").show();
		$("#s1").hide();
		$("#goLeft1").hide();
		$("#goLeft").show();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight2.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
	});

	$("#s1").click(function() {
		$("#exploreBody").css("background-image", "url('img/straightroom.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
		$("#s1").hide();
		$("#goRight1").hide();
		$("#goLeft1").hide();
	});
	
	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/stairs.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
		$("#goRight1").show();
		$("#goLeft1").show();
		$("#s1").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/r3.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
		$("#goLeft1").hide();
		$("#goLeft").hide();
		$("#exploreBody").css("marginBottom", "1800px");
	});

 $("#goLeft1").click(function() {
 		$("#exploreBody").css("background-image", "url('img/left.jpg')");
 		$("#goLeft1").hide();
 		$("#goLeft2").show();
 	});

  $("#goLeft2").click(function() {
 		$("#exploreBody").css("background-image", "url('img/leftleft.jpg')");
 		$("#goLeft1").hide();
 		$("#goLeft2").hide();
 		$("#goBack").show();
 		$("#s1").hide();
 		$("#goRight1").hide();
 		$("#exploreBody").css("marginBottom", "1800px");
 	});

	$("#goLeft").click(function() {
		$("#exploreBody").css("background-image", "url('img/corridorfin.jpg')");
		$("#exploreBody").css("background-size", "2000px 1000px");
		$("#goLeft1").hide();
		$("#goLeft").hide();
		$("#goLeft2").show();
		$("#goRight-Right2").hide();
		$("#obj").html("You've reached the exit!");
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft2.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/stairs.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
		$("#s1").show();
	});



});