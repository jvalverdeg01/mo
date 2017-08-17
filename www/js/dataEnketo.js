/* Surveys */
var dataSurvey = {
  "id":"uuid",
  "imageSurvey": "starbucks.jpg",
  "surveyColor": "#026433",
  "surveyName": "Starbucks",
  "shelfTime": 1503119207000,
  "progressSurvey":"4000/5000",
  "earnings":"6"
};

var dataSurveys = [{
  "id":"uuid",
  "imageSurvey": "starbucks.jpg",
  "surveyColor": "#026433",
  "surveyName": "Starbucks",
  "shelfTime": 1503119207000,
  "progressSurvey":"4000/5000",
  "earnings":"6"
},
{
  "id":"uuid",
  "imageSurvey": "tacobell.jpg",
  "surveyColor": "#3A167E",
  "surveyName": "Tacobell",
  "shelfTime": 1503119207000,
  "progressSurvey":"2000/2500",
  "earnings":"5"
},
{
  "id":"uuid",
  "imageSurvey": "macdonald.png",
  "surveyColor": "#DF142A",
  "surveyName": "Mac Donalds",
  "shelfTime": 1503119207000,
  "progressSurvey":"400/500",
  "earnings":"6"
}];

/* Questions */
var dataQuestionCheckbox = {
  "id": "uuid",
  "type": "checkbox",
  "text": "Pregunta checkbox cargada",
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
