function createSurvey(survey){

  recommendedDOM = $("[tab-name=recommended]")

	var surveyBody = $('<div class="survey_card" section-target="survey" section-title="" section-fx=""><div class="survey_card_header"><div class="survey_card_header_logo"></div><div class="survey_card_header_name">Nombre de encuesta</div></div><div class="survey_card_body"><div class="fa fa-clock-o fa-fw" aria-hidden="true"><div class="shelfTime survey_data">shelfTime</div></div><div class="fa fa-usd fa-fw" aria-hidden="true"><div class="surveyEarnings survey_data">earnings</div></div><div class="fa fa-user fa-fw" aria-hidden="true"><div class="surveyUsers survey_data">progress</div></div></div></div>')

	surveyBody.attr("id","survey"+survey.id)
	surveyBody.attr("section-title",survey.surveyName)
  surveyBody.find(".survey_card_header").attr("style", "background-color:"+survey.surveyColor+";")
	surveyBody.find(".survey_card_header_logo").attr("style", "background-image:url(img/surveys/"+survey.imageSurvey+");")
  surveyBody.find(".fa").attr("style", "color:"+survey.surveyColor+";")
	surveyBody.find(".survey_card_header_name").html(survey.surveyName)
	surveyBody.find(".shelfTime").html(survey.shelfTime)
	surveyBody.find(".surveyUsers").html(survey.progressSurvey)
	surveyBody.find(".surveyEarnings").html(survey.earnings)

	recommendedDOM.find(".nice-wrapper").append(surveyBody)
}

function loadSurveys(surveys){
  recommendedDOM = $("[tab-name=recommended]")
  recommendedDOM.find(".nice-wrapper").html("")

  surveys.forEach(function(survey){
    createSurvey(survey)
  })
}

/* test de aqui para abajo */

function printRemaning(endTime,nowDate){

    var delta = Math.abs(endTime - nowDate) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;


    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    return days+"d " + hours+"h" + minutes+"m"
}


function getimage(img){
    return img
}
function printHeaderSurvey(survey){
	survey = json_testv2; // Para pruebas
	console.log(survey)
    var dom = $(`
        <div id="`+survey.id+`" class="card" section-target="survey" section-title="`+survey.name+`(1/`+survey.qty+`)" section-fx="">
            <div class="card_resource_id" style="background-image:url(`+getimage(survey.image)+`);"></div>
            <div class="card_resource_info">
                <table>
                    <tbody>
                        <tr><th>`+survey.name+`/th></tr>
                        <tr><td><i class="fa fa-clock-o"></i><time end="`+survey.timeEnd+`"> `+printRemaning(survey.timeEnd)+`</time></td></tr>
                        <tr><td><i class="fa fa-user"><i><user>`+survey.userRemaning+`</user></i></i></td></tr>
                        <tr><td><i class="fa fa-usd"></i><usd>`+survey.payment+`</usd></td></tr>
                    </tbody>
                </table>
                </div>
        </div>`)

	recommendedDOM = $("[section-name=home]")
	recommendedDOM.find(".nice-wrapper").html("")

	recommendedDOM.find(".nice-wrapper").append(dom)

}
