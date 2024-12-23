const express = require('express');
   const app = express();
   const axios = require('axios');

   // Middleware
   app.use(express.json());
   app.set('view engine', 'ejs');

   // Endpoint to fetch mock exchange rates
   app.get('/rates', async (req, res) => {
       // Mock data or API call to infobank.az
       const rates = [
           { bank: "Bank A", rate: 1.7 },
           { bank: "Bank B", rate: 1.68 },
           { bank: "Bank C", rate: 1.65 }
       ];
       res.render('rates', { rates });
   });

   // Start server
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));