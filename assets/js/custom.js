!function ($) {

  var layers = $("#layers");
  var canvas = $("#canvas");

  var current_layer = false;

  $("#add").click(function(){
  	
  	next = layers.find("li").size() + 1;
  	
  	layers.append("<li><a href=\"#\" rel=\"layer" + next+ "\"><span id=\"sample" + next +"\"></span>Layer " + next + "</a></li>").find("a").popover({
	  	animation: false,
	  	title: "Layer Options",
	  	trigger: "manual",
      content: $("#form").html()
	});
	canvas.append("<div id=\"layer" + next + "\" class=\"layer\">" + next + "</div>");

  });

  $(layers).on("click","a",function(){
    current_layer = false;
  	layers.find("a[rel!=" + $(this).attr("rel")+ "]").popover("hide").parent().removeClass("active");	
  	$(this).popover("toggle").parent().toggleClass("active");	
    if($(this).parent().hasClass("active")) current_layer = $("#"+$(this).attr("rel"));
  	return false;
  });

  $(document).on("keyup","form input",function(){
    console.log($(this).attr("rel")+", "+$(this).val());
    current_layer.css($(this).attr("rel"), $(this).val());
  });

}(window.jQuery);