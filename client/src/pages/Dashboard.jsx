// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../lib/supabaseClient';
// import { DashboardLayout } from '../components/DashboardLayout';

// export default function DashboardPage() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Cek apakah user sudah login
//     const checkUser = async () => {
//       const { data: { session } } = await supabase.auth.getSession();
//       if (!session) {
//         navigate('/login');
//       } else {
//         setUser(session.user);
//       }
//     };

//     checkUser();

//     // Listen perubahan auth state
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         if (!session) navigate('/login');
//         else setUser(session.user);
//       }
//     );

//     return () => subscription.unsubscribe();
//   }, [navigate]);

//   if (!user) return null;

//   return (
// DashboardLayout
//     // <div className="p-6">
//     //   <h1 className="text-2xl font-bold">Dashboard</h1>
//     //   <p>Selamat datang, {user.email}!</p>
//     //   <button
//     //     onClick={async () => {
//     //       await supabase.auth.signOut();
//     //       navigate('/login');
//     //     }}
//     //     className="mt-4 text-red-600"
//     //   >
//     //     Keluar
//     //   </button>
//     // </div>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const getIcon = (index) => {
  if (index === 0) return <InboxIcon />;
  if (index === 1) return <MailIcon />;
  if (index === 2) return <MailIcon />;
  if (index === 3) return <InboxIcon />;
  return null; // fallback jika index tidak dikenali
};

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Sales Order', 'Material Inbound', 'Production', 'Finish Goods'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {getIcon(index)}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Settings', 'Logout'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* Konten halaman anak akan muncul di sini */}
        <Typography paragraph>
          Selamat datang di dashboard manufaktur!
        </Typography>
        <Outlet />
      </Box>
    </Box>
  );
}