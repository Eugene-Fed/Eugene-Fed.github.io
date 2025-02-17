const json = {
  title: "Опрос 'Отзыв о продукте'",
  // showProgressBar: "top",  // Добавляет к опроснику блок `номер текущей страницы / количество страниц`
  pages: [ // Разбивка на страницы реализуется через список объектов `pages`
    {
      questions: [  // Разбивка на блоки / вопросы -- через список объектов `questions`
        {
          type: "rating",
          name: "satisfaction",
          isRequired: true,
          defaultValue: 4,
          "rateCount": 4,
          "rateMax": 4,
          title: "На сколько Вас устраивает наш Продукт?",
          mininumRateDescription: "Не устраивает",
          maximumRateDescription: "Полностью устраивает",
        },
        {
          type: "radiogroup",
          name: "recommended",
          visibleIf: "{satisfaction} > 3",
          title:
            "Кому бы Вы порекомендовали наш Продукт? (один вариант)",
          choices: [
            "family|Семье",
            "friends|Друзьям",
            "fools|Коллегам",
          ],
        },
        {
          type: "checkbox",
          name: "troubles",
          visibleIf: "{satisfaction} <= 3",
          isRequired: true,
          title:
            "Что Вам больше всего не понравилось?",
          choices: [
            "product|Продукт",
            "price|Цена",
            "placement|Размещение",
            "promotion|Продвижение",
          ],
        },
        {
          type: "comment",  // `type: "text"` -- для однострочного поля ввода
          name: "comment",
          title:
            "Чего не хватает нашему Продукту? (опционально)",
        },
      ],
    },
  ],
}

var survey = new Survey.Model(json)

survey.onComplete.add(function (result) {
  document.querySelector("#result").innerHTML = "result: " + JSON.stringify(result.data)
})

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyContainer"));
});
