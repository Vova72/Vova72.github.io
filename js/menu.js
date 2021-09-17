var name = "#floatMenu";
var shapka = "#shapka";
var menuYloc = null;
var shapkaYloc = null;
 
$(document).ready(function(){
    menuYloc = parseInt(0);
    shapkaYloc = parseInt($(name).css("top").substring(0, $(name).css("top").indexOf("px")));

    $(window).scroll(function () {
   		if ($(window).scrollTop() < shapkaYloc)
	    {
	       	var offset = shapkaYloc+"px";
			$(name).animate({top:offset},{duration:150,queue:false});
	    }
	    else
	    {
	        var offset = menuYloc+$(document).scrollTop()+"px";
			$(name).animate({top:offset},{duration:150,queue:false});
	    }
   });
});