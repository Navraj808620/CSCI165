add =  function() {
result = parseInt(jQuery( '#op1' ).val()) + parseInt(jQuery( '#op2' ).val());

text= jQuery( '#op1' ).val() +  " + "   + jQuery( '#op2 ' ).val() + "  =  ";
result = text + result;
jQuery ( '#result' ).html (result);

old_div_content = jQuery('#history').html();
result ="<span id='addstyle'>" + result + "</span>";
new_div_content = old_div_content + result + '<br>';
jQuery('#history').html(new_div_content);
}
sub =  function() {
result = parseInt(jQuery( '#op1' ).val()) - parseInt(jQuery( '#op2' ).val());

text= jQuery( '#op1' ).val() +  " - "   + jQuery( '#op2 ' ).val() + "  =  ";
result = text + result;
jQuery ( '#result' ).html  (result);

result = "<span id='substyle'>" + result + "</span>";
old_div_content = jQuery('#history').html();
new_div_content = old_div_content + result + '<br>';
jQuery('#history').html(new_div_content);
}
mul =  function() {
result = parseInt(jQuery( '#op1' ).val()) * parseInt(jQuery( '#op2' ).val());

text= jQuery( '#op1' ).val() +  " * "   + jQuery( '#op2 ' ).val() + "  =  ";
result = text + result;
jQuery ( '#result' ).html (result);

result ="<span id='mulstyle'>" + result + "</span>";
old_div_content = jQuery('#history').html();
new_div_content = old_div_content + result + '<br>';
jQuery('#history').html(new_div_content);
}
div =  function() {
result = parseInt(jQuery( '#op1' ).val()) / parseInt(jQuery( '#op2' ).val());

text= jQuery( '#op1' ).val() +  " / "   + jQuery( '#op2 ' ).val() + "  =  ";
result = text + result;
jQuery ( '#result' ).html (result);

result ="<span id='divstyle'>" + result + "</span>";
old_div_content = jQuery('#history').html();
new_div_content = old_div_content + result + '<br>';
jQuery('#history').html(new_div_content);
}

show = function(){
jQuery('#history').show();
}

hide = function(){
jQuery('#history').hide();
}

setup= function() {
jQuery( '#addbutton' ).click(add);
jQuery( '#subbutton' ).click(sub);
jQuery( '#mulbutton' ).click(mul);
jQuery( '#divbutton' ).click(div);
jQuery( '#show_button' ).click(show);
jQuery( '#hide_button' ).click(hide);
}
jQuery(document).ready(setup);