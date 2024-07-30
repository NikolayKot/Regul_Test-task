import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  // В реальном приложении здесь была бы проверка JWT
  return {
    logo: "/company-logo.png",
    name: "Наследие",
    rating: 4.7,
    agentsCount: 6,
    reviews: 19,
    phoneNumber: "+1 234 567 8900",
    documentsVerified: true,
  };
});
