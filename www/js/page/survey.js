var json_test = {
  "id":"uuid",
  "primaryColor": "color principal",
  "imageSurvey": "survey1.png",
  "surveyName": "Encuesta de prueba",
  "shelfTime": 11651511,
  "progressSurvey":"4000/5000",
  "earnings":"6" 
};

function createSurvey(survey){
	survey = json_test; // Para pruebas
	recommendedDOM = $("[section-name=home]")
	recommendedDOM.find(".nice-wrapper").html("")
	
	var surveyBody = $('<div class="card" section-target="survey" section-title="" section-fx=""><div class="card_resource_id"></div><div class="card_resource_info"><div class="card_title"></div><div class="card_element"><i class="fa fa-clock-o"></i><div class="shelfTime"></div></div><div class="card_element"><i class="fa fa-users"></i> <div class="surveyUsers"></div></div><div class="card_element"><i class="fa fa-usd"></i><div class="surveyEarnings"></div></div></div></div>')
	
	surveyBody.attr("id","survey"+survey.id)
	surveyBody.attr("section-title",survey.surveyName)
	surveyBody.find(".card_resource_id").attr("style", "background-image:url(img/"+survey.imageSurvey+");")
	surveyBody.find(".card_title").html(survey.surveyName)
	surveyBody.find(".shelfTime").html(survey.shelfTime)
	surveyBody.find(".surveyUsers").html(survey.progressSurvey)
	surveyBody.find(".surveyEarnings").html(survey.earnings)
	
	recommendedDOM.find(".nice-wrapper").append(surveyBody)
}         