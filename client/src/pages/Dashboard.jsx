// import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// // Halaman Auth
// import LoginPage from './Login';
// import RegisterPage from './Register';

// // Layout Dashboard (berisi sidebar + outlet)
// import DashboardLayout from '../components/Dashboardlayout';

// // Halaman-halaman di dalam dashboard
// import SalesOrderPage from './Datagrid1';
// import MaterialInboundPage from './Datagrid1';
// import ProductionPage from './Datagrid1';
// import FinishGoodsPage from './Datagrid1';

// const router = createBrowserRouter([
//   { path: '/login', element: <LoginPage /> },
//   { path: '/register', element: <RegisterPage /> },
  
//   // Route utama dashboard dengan nested routes
//   {
//     path: '/dashboard',
//     element: <DashboardLayout />,
//     children: [
//       { index: true, element: <SalesOrderPage /> }, // default: /dashboard
//       { path: 'sales-orders', element: <SalesOrderPage /> },
//       { path: 'material-inbound', element: <MaterialInboundPage /> },
//       { path: 'production', element: <ProductionPage /> },
//       { path: 'finish-goods', element: <FinishGoodsPage /> },
//     ],
//   },
  
//   { path: '/', element: <LoginPage /> },
// ]);

// // Render aplikasi
// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );

// Ini adalah KOMPONEN dashboard, bukan router!
export default function Dashboard() {
  return (
    <div>
      <h1>Selamat datang di Dashboard</h1>
      <p>Pilih menu di sidebar untuk melihat data.</p>
    </div>
  );
}