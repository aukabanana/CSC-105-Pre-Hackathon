import { type RouteObject } from 'react-router-dom';
import ElectricChargePage from '../pages/electricChargePage';

export const electricChargeRouter: RouteObject[] = [
  {
    path: '/electric-charge', // วางไว้แบบนี้ถูกต้องแล้วครับ คอมพิวเตอร์จะต่อยอดให้อัตโนมัติ
    element: <ElectricChargePage />
  }
];