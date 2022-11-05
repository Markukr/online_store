import Admin from "./pages/Admin";
import { ADMIN_ROUTE } from "./utils/consts";

export const authRoutes = [
   {
      path: ADMIN_ROUTE,
      component: Admin
   },
   {
      path: BASKET_ROUTE,
      component: Basket
   }
]

export const publicRoutes = [
   {
      path: SHOP_ROUTE,
      component: Shop
   },
   {
      path: LOGIN_ROUTE,
      component: Auth
   },
   {
      path: REGISTRATION_ROUTE,
      component: Auth
   },
   {
      path: DEVICE_ROUTE + '/:id',
      component: DevicePage
   }
]