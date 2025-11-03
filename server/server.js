require('dotenv').config();
const express = require('express');
const cors = require('cors');
const supabase = require('./config/supabaseClient');

const app = express();
app.use(cors());
app.use(express.json());

// Contoh endpoint: ambil semua sales order
app.get('/api/sales-orders', async (req, res) => {
  const { data, error } = await supabase.from('sales_orders').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});