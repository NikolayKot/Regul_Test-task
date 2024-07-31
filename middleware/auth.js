import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  // Список защищенных маршрутов
  const protectedRoutes = ["/offers", "/offer/:id"];

  // Проверяем, является ли текущий маршрут защищенным
  const isProtectedRoute = protectedRoutes.some((route) => {
    if (route.includes(":id")) {
      return to.path.startsWith(route.split(":")[0]);
    }
    return to.path === route;
  });

  if (!authStore.isAuthenticated && isProtectedRoute) {
    return navigateTo("/login");
  }
});
