import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      firstName: "Дмитрий",
      lastName: "Хитрый",
      photo: "/agent1.png",
      rating: 4.3,
      reviews: 19,
      description:
        "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      documentsVerified: true,
    },
    {
      id: 2,
      firstName: "Апполинарий",
      lastName: "Землеперекопский",
      photo: "/agent2.png",
      rating: 0,
      reviews: 0,
      description:
        "Помог справиться с потерей и организовать похороны для 126 семей.",
      documentsVerified: true,
    },
    {
      id: 3,
      firstName: "Фёдор",
      lastName: "Сумкин",
      photo: "/agent3.png",
      rating: 4.3,
      reviews: 19,
      description:
        "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      documentsVerified: false,
    },
    {
      id: 4,
      firstName: "Василий",
      lastName: "Копушин",
      photo: "/agent4.png",
      rating: 4.3,
      reviews: 19,
      description:
        "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      documentsVerified: true,
    },
    {
      id: 5,
      firstName: "Феофан",
      lastName: "Кусакин",
      photo: "/agent5.png",
      rating: 4.3,
      reviews: 19,
      description:
        "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      documentsVerified: false,
    },
    {
      id: 6,
      firstName: "Василиса",
      lastName: "Землеперекопская",
      photo: "/agent6.png",
      rating: 4.3,
      reviews: 19,
      description:
        "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться, и ещё описание чтобы проверить как будет работать модальное окно, кстати как прошёл ваш день?",
      documentsVerified: true,
    },
  ];
});
