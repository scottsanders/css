!function ($) {

  var layers = $("#layers");
  var canvas = $("#canvas");

  $("#add").click(function(){
  	
  	next = layers.find("li").size() + 1;
  	
  	layers.append("<li><a href=\"#\" rel=\"layer" + next+ "\">Layer " + next + "</a></li>").find("a").popover({
	  	animation: false,
	  	title: "Layer Options",
	  	trigger: "manual",
	});
	canvas.append("<div id=\"layer" + next + "\">" + next + "</div>");

  });

  $(layers).on("click","a",function(){
  	layers.find("a[rel!=" + $(this).attr("rel")+ "]").popover("hide").parent().removeClass("active");	
  	$(this).popover("toggle").parent().toggleClass("active");	
  	return false;
  });

}(window.jQuery);