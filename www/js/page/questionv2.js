var json_test = {
  "id": "uuid",
  "type": "checkbox",
  "text": "Descripción de la pregunta",
  "instructions": "Instrucciones de la pregunta",
  "minimum_select": 1,
  "options": [
    {
    "id": 2,
    "text": "Opción 1"
    },
	{
    "id": 3,
    "text": "Opción 2"
    },
	{
    "id": 4,
    "text": "Opción 3"
    },
	{
    "id": 5,
    "text": "Opción 4"
    }
  ],
  "skip_rules": [
    {
    "value": "rule_value",
    "option": "option",
    "default": true
    }
  ],
  "other_options": {
    "placeholder": "text",
    "min_length": 12,
    "max_length": 35,
    "regex": "regular_expression"
  }
}

function createQuestion(question){
	question = json_test; // Para pruebas
	surveyDOM = $("[section-name=survey]")
	surveyDOM.find(".nav2").html("Pregunta "+question.id) // Temporal, iría # de pregunta
	surveyDOM.find(".question").html(question.text)
	surveyDOM.find(".instructions").html(question.instructions)
	surveyDOM.find(".options").html("")
	switch(question.type){
		case "checkbox":
			question.options.forEach(function(option){
				var optionsDom = $('<div class="questionOption"><div class="checkbox"></div><label></label></div>')
				optionsDom.attr("id","option"+option.id)
				optionsDom.find("label").html(option.text)
				surveyDOM.find(".options").append(optionsDom)
			})	
		break;
		
		case "radio":
			question.options.forEach(function(option){
				// POR CAMBIAR var optionsDom = $('<div class="questionOption"><div class="checkbox"></div><label></label></div>')
				optionsDom.attr("id","option"+option.id)
				optionsDom.find("label").html(option.text)
				surveyDOM.find(".options").append(optionsDom)
			})	
		break;
		
		case "yes-no":
			question.options.forEach(function(option){
				// POR CAMBIAR var optionsDom = $('<div class="questionOption"><div class="checkbox"></div><label></label></div>')
				optionsDom.attr("id","option"+option.id)
				optionsDom.find("label").html(option.text)
				surveyDOM.find(".options").append(optionsDom)
			})	
		break;
		
		case "images":
			question.options.forEach(function(option){
				// POR CAMBIAR var optionsDom = $('<div class="questionOption"><div class="checkbox"></div><label></label></div>')
				optionsDom.attr("id","option"+option.id)
				optionsDom.find("label").html(option.url)
				surveyDOM.find(".options").append(optionsDom)
			})	
		break;
		
		default:
		break;
	}
}                    