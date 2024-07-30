import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  return {
    logo: "/company-logo.png",
    name: "Наследие",
    rating: 4.7,
    agentsCount: 6,
    reviews: 19,
    phoneNumber: "+1 234 567 8900",
    documentsVerified: true,
    description:
      "Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой.",
    address: "Ростов на Дону, Воронежская ул., 42А корп. 1",
    workingHours: {
      monday: "8:00-23:00",
      tuesday: "8:00-23:00",
      wednesday: "8:00-23:00",
      thursday: "8:00-23:00",
      friday: "8:00-23:00",
      saturday: "10:00-20:00",
      sunday: "10:00-18:00",
    },
  };
});
