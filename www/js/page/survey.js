// Receives the timestamp in milliseconds of the end date and time of the survey
// Returns the days, hours and minutes from NOW until that datetime
function shelfTime(timestamp){

  var d = new Date();
  var nowDate = d.getTime();

  //console.log('nowDate: '+nowDate)
  //console.log('timestamp: '+timestamp)
  var delta = Math.abs(timestamp - nowDate) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  return days+"d " + hours+"h " + minutes+"m"
}

// Receives a survey object
// Builds the HTML of the survey and appends it to the survey list
function createSurvey(survey){

  recommendedDOM = $("[tab-name=recommended]") // Recommended surveys tab

	var surveyBody = $('<div class="survey_card" section-target="survey" section-title="" section-fx=""><div class="survey_card_header"><div class="survey_card_header_logo"></div><div class="survey_card_header_name">Nombre de encuesta</div></div><div class="survey_card_body"><div class="fa fa-clock-o fa-fw" aria-hidden="true"><div class="shelfTime survey_data">shelfTime</div></div><div class="fa fa-usd fa-fw" aria-hidden="true"><div class="surveyEarnings survey_data">earnings</div></div><div class="fa fa-user fa-fw" aria-hidden="true"><div class="surveyUsers survey_data">progress</div></div></div></div>')

	surveyBody.attr("id","survey"+survey.id)
	surveyBody.attr("section-title",survey.surveyName)
  surveyBody.find(".survey_card_header").attr("style", "background-color:"+survey.surveyColor+";")
	surveyBody.find(".survey_card_header_logo").attr("style", "background-image:url(img/surveys/"+survey.imageSurvey+");")
  surveyBody.find(".fa").attr("style", "color:"+survey.surveyColor+";")
	surveyBody.find(".survey_card_header_name").html(survey.surveyName)
	surveyBody.find(".shelfTime").html(shelfTime(survey.shelfTime))
	surveyBody.find(".surveyUsers").html(survey.progressSurvey)
	surveyBody.find(".surveyEarnings").html(survey.earnings)

	recommendedDOM.find(".nice-wrapper").append(surveyBody) // .nice-wrapper is the subcontainer of the survey list
}

// Receives an array with the surveys
// Resets the surveys list and adds each survey of the array to the list
function loadSurveys(surveys){
  recommendedDOM = $("[tab-name=recommended]")
  recommendedDOM.find(".nice-wrapper").html("")

  surveys.forEach(function(survey){
    createSurvey(survey)
  })
}
