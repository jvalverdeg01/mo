/* Surveys */
var dataSurvey = {
  "id":"uuid",
  "imageSurvey": "starbucks.jpg",
  "surveyColor": "#026433",
  "surveyName": "Starbucks",
  "shelfTime": 1508047200000,
  "progressSurvey":"4000/5000",
  "earnings":"6",
  "description": "Descripción de prueba. Encuesta cargada con éxito.",
  "rules": [
    {
      "type": "close",
      "value": true
    },
    {
      "type": "time",
      "value": "8:00"
    },
    {
      "type": "questions",
      "value": "15"
    }
  ]
};

var dataSurveys = [{
  "id":"1234",
  "imageSurvey": "starbucks.jpg",
  "surveyColor": "#026433",
  "surveyName": "Starbucks",
  "shelfTime": 1504245600000,
  "progressSurvey":"4000/5000",
  "earnings":"6",
  "description": "introduction text of the survey",
  "rules": [
    {
      "type": "close",
      "value": true
    },
    {
      "type": "order",
      "value": "random"
    },
    {
      "type": "length",
      "value": "20"
    }
  ]
},
{
  "id":"5678",
  "imageSurvey": "tacobell.jpg",
  "surveyColor": "#3A167E",
  "surveyName": "Tacobell",
  "shelfTime": 1505455200000,
  "progressSurvey":"2000/2500",
  "earnings":"5",
  "description": "introduction text of the survey",
  "rules": [
    {
      "type": "close",
      "value": true
    },
    {
      "type": "order",
      "value": "random"
    },
    {
      "type": "length",
      "value": "20"
    }
  ]
},
{
  "id":"9123",
  "imageSurvey": "macdonald.png",
  "surveyColor": "#DF142A",
  "surveyName": "Mac Donalds",
  "shelfTime": 1503119207000,
  "progressSurvey":"400/500",
  "earnings":"6",
  "description": "introduction text of the survey",
  "rules": [
    {
      "type": "close",
      "value": true
    },
    {
      "type": "order",
      "value": "random"
    },
    {
      "type": "length",
      "value": "20"
    }
  ]
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
