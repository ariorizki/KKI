import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Halaman Auth
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

// Layout Dashboard (berisi sidebar + outlet)
import DashboardLayout from './components/DashboardAppLayout';

// Halaman-halaman di dalam dashboard
import SalesOrderPage from './pages/SalesOrder';
import MaterialInboundPage from './pages/Materialinbound';
import ProductionPage from './pages/Production';
import FinishGoodsPage from './pages/FinishGood';

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  
  // Route utama dashboard dengan nested routes
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <SalesOrderPage /> }, // default: /dashboard
      { path: 'sales-orders', element: <SalesOrderPage /> },
      { path: 'material-inbound', element: <MaterialInboundPage /> },
      { path: 'production', element: <ProductionPage /> },
      { path: 'finish-goods', element: <FinishGoodsPage /> },
    ],
  },
  
  { path: '/', element: <LoginPage /> },
]);

// Render aplikasi 
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);