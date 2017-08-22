//Main menu
$("#header_menu_btn").tapend(function(){
	if(true){
		$("#main_menu").animate({"left": "0px"});
		$("#modal").show();
	}
})

$("#modal").tapend(function(){
	$("#main_menu").animate({"left": "-250px"});
	$("#modal").hide();
	$("#user_config").hide();
})

// Close survey
$("#header_close_survey").tapend(function(){
	if(true){
		$("#survey_profile").hide();
		$("[section-name=home]").addClass("section_active");
	}
})

$(document).on("tapend","[section-target]",function(ev){
		if(checkPress(ev)){
			var title = $(this).hasAttr("section-title") ? $(this).attr("section-title") : $(this).text();
			$(".nav_li_selected").removeClass("nav_li_selected");
			$(this).addClass("nav_li_selected");
			$("#header_section_description").html(title);
			$("#main_menu").animate({"left": "-250px"});
			$("#modal").hide();
			$(".section_active").removeClass("section_active");
			$("[section-name="+$(this).attr("section-target")+"]").addClass("section_active");


		if($(this).hasAttr("section-fx")){
			eval($(this).attr("section-fx")+"(this"+($(this).hasAttr("section-fx-parameters")?","+ $(this).attr("section-fx-parameters") : "")+")")
		}else if(eval('typeof '+$(this).attr("section-target")+'.init == "function"')){
			eval($(this).attr("section-target")+".init(this"+($(this).hasAttr("section-fx-parameters")?","+ $(this).attr("section-fx-parameters") : "")+")")
		}
	}

});

// Codigo de prueba para mostrar el perfil de una encuesta
$(document).on("tapend","[section-id]",function(ev){
	if(checkPress(ev)){
		//loadSurveyProfile($(this.attr("id")))
		var title = $(this).hasAttr("section-title") ? $(this).attr("section-title") : $(this).text();
		$("#survey_profile_name").html(title);
		$(".section_active").removeClass("section_active");
		$(".section_active").hide();
		$("[section-name="+$(this).attr("section-id")+"]").addClass("section_active");
		$("#survey_profile").show();
		survey.init()
	}
});

// Codigo de prueba para mostrar las preguntas de una encuesta
$(document).on("tapend","[survey-id]",function(ev){
	if(checkPress(ev)){

		var title = $(this).hasAttr("section-title") ? $(this).attr("section-title") : $(this).text();
		$(".section_active").removeClass("section_active");
		$("[section-name="+$(this).attr("survey-id")+"]").addClass("section_active");

	}
});

//tab menu
$(document).on("tapend",".tablist>li:not(.active)",function(){
	$(".tablist[tab-group="+$(this).parent().attr("tab-group")+"]>li.active").removeClass("active");
	$(this).addClass("active");

	$(this).parent().parent().parent().find("[tab-name]").hide();
	$("[tab-name="+$(this).attr("tab-target")+"]").show();
})

$("#slide_menu").swipe({
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
       if(distance> 125){
		   $("#main_menu").animate({"left": "0px"});

	   }else{
		   $("#main_menu").animate({"left": "-250px"});
		   $("#modal").hide();
		   //console.log("here")
	   }
    },
   	swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection){
		console.log(distance)
		if(direction=="right" && distance <250){
			 $("#modal").show();
			$("#main_menu").css({"left": (-250+distance)+"px"})
		}else{
			return 0
		}
    },
	threshold: 0
});
