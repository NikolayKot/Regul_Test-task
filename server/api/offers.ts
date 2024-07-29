import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  return [
    {
      id: 1,
      image: "/offer1.png",
      views: 750,
      daysAgo: 2,
      price: 450500,
      title: "Сlavia Nord Grand сценическое цифровое пианино",
    },
    {
      id: 2,
      image: "/offer2.png",
      views: 255,
      daysAgo: 4,
      price: 3285000,
      title: "Hyundai Sonata 2.0 AT, 2023, 30 км",
    },
    {
      id: 3,
      image: "/offer3.png",
      views: 255,
      daysAgo: 2,
      price: 4800000,
      title: "2-к. квартира, 46 м², 1/5 эт.",
    },
    {
      id: 4,
      image: "/offer4.png",
      views: 255,
      daysAgo: 2,
      price: 7500,
      title: "Старые барабаны",
    },
    {
      id: 5,
      image: "/offer5.png",
      views: 255,
      daysAgo: 2,
      price: 7500,
      title: "DMX сплиттер RJ45 to 4x XLR Stairville",
    },
    {
      id: 6,
      image: "/offer6.png",
      views: 255,
      daysAgo: 2,
      price: 217500,
      title: "Мотоцикл honda",
    },
    {
      id: 7,
      image: "/offer7.png",
      views: 255,
      daysAgo: 2,
      price: 17900,
      title: "Иж юпитер 5",
    },
    {
      id: 8,
      image: "/offer8.png",
      views: 115,
      daysAgo: 3,
      price: 7500,
      title: "Пылесос кёрхер с водяным мешком для сбора пыли",
    },
  ];
});
