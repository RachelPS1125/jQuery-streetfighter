$(document).ready(function(){
	function wireRyu(selector, actionKey){
		var $ryu = $(selector);
		$ryu.mouseenter(function(){
			$(this).children('.ryu-still').hide();
			$(this).children('.ryu-ready').show();
		})
		.mouseleave(function() {
			$(this).children('.ryu-still').show();
			$(this).children('.ryu-ready').hide();
		})
		.mousedown(function(){
			playHadouken();
			$(this).children('.ryu-ready').hide();
			$(this).children('.ryu-throwing').show();
			$('h2').hide();
			if (selector=='.ryu'){
				$('.hadouken').finish().show().animate(
				{'left':'775px'},
				800,
				function(){
					$(this).hide();
					$(this).css('left', '500px');
				}
				);
			} else {
				$('.hulk-hadouken').finish().show().animate(
				{'left':'350px'},
				800,
				function(){
					$(this).hide();
					$(this).css('left', '625px');
				}
				);
			}
		})
		.mouseup(function() {
			$(this).children('.ryu-throwing').hide();
			$(this).children('.ryu-ready').show();
			$('h2').show();
		});
		$(document).keydown(function(event) {
			if (event.which === actionKey) {
				$ryu.children('.ryu-throwing').hide();
				$ryu.children('.ryu-ready').hide();
				$ryu.children('.ryu-still').hide();
				$ryu.children('.ryu-cool').show();
				$('h2').hide();
			}
		})
		.keyup(function(event) {

			if (event.which === actionKey) {
				$ryu.children('.ryu-cool').hide();
				$ryu.children('.ryu-still').show();
				$('h2').show();
			};
		});
	}
	wireRyu('.ryu', 88);
	wireRyu('.hulk-ryu', 89);
	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
})



