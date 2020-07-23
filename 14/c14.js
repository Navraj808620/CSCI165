add = function() {
	result = parseInt(jQuery('#operand_1').html()) + parseInt(jQuery('#operand_2').html());
	text = jQuery('#operand_1').html() + " + " + jQuery('#operand_2').html() + " = ";
	jQuery('#result').html(text + result);
}

sub = function() {
	result = parseInt(jQuery('#operand_1').html()) - parseInt(jQuery('#operand_2').html());
	text = jQuery('#operand_1').html() + " - " + jQuery('#operand_2').html() + " = ";
	jQuery('#result').html(text + result);
}

multiple = function() {
	result = parseInt(jQuery('#operand_1').html()) * parseInt(jQuery('#operand_2').html());
	text = jQuery('#operand_1').html() + " * " + jQuery('#operand_2').html() + " = ";
	jQuery('#result').html(text + result);
}

divide = function() {
	result = parseInt(jQuery('#operand_1').html()) / parseInt(jQuery('#operand_2').html());
	text = jQuery('#operand_1').html() + " / " + jQuery('#operand_2').html() + " = ";
	jQuery('#result').html(text + result);
}

setup = function() {
	jQuery('#divide_button').click(divide)
	jQuery('#multiple_button').click(multiple)
	jQuery('#add_button').click(add)
	jQuery('#sub_button').click(sub)
}
jQuery(document).ready(setup)
