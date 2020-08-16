var first=0;
var second=0;

add = function() 
{ 
    first = $('#operand_1').val();
    second = $('#operand_2').val();    
    result= parseInt(first)+parseInt(second);
    if(first & second){
        jQuery('#result').html(first+"+"+second+ "=" + (result));
        jQuery('#history').append("<br>"+first+"+"+second+ "=" + (result));
    }
    
    
}
sub = function() 
{   first = $('#operand_1').val();
    second = $('#operand_2').val();    
    result= parseInt(first)-parseInt(second);

    if(first & second){
    jQuery('#result').html(first+"-"+second+ "=" + (result));
    jQuery('#history').append("<br>"+first+"-"+second+ "=" + (result)+ "\n");
    }
}
mul = function() 
{   first = $('#operand_1').val();
    second = $('#operand_2').val();    
    result= parseInt(first)*parseInt(second);

    if(first & second){
    jQuery('#result').html(first+"*"+second+ "=" + (result));
    jQuery('#history').append("<br>"+first+"*"+second+ "=" + (result)+ "\n");
    }
}
div = function() 
{   first = $('#operand_1').val();
    second = $('#operand_2').val();    
    result= parseInt(first)/parseInt(second);
    if(first & second){
    jQuery('#result').html(first+"/"+second+ "=" + (result));
    jQuery('#history').append("<br>"+first+"/"+second+ "=" + (result)+ "\n");
    }
}
clear=function()
{
    result=" ";
    jQuery('#result').html(result);
    jQuery('#history').html(result);
}
show = function()
{
jQuery('#history').show();
}

hide = function()
{
jQuery('#history').hide();
}

setup = function() {    
    jQuery('#add_button').click(add)
    jQuery('#add_button').mouseover(add)
    jQuery('#sub_button').click(sub)
    jQuery('#sub_button').mouseover(sub)
    jQuery('#mul_button').click(mul)
    jQuery('#mul_button').mouseover(mul)
    jQuery('#div_button').click(div)
    jQuery('#div_button').mouseover(div)
	jQuery('#show_button').click(show)
	jQuery('#hide_button').click(hide)
}
jQuery(document).ready(setup)