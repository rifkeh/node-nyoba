
// file entrypoint, dimana nanti server API bakal jalan
const express = require('express');
const { pool } = require('./config/database');
const { pendaftaranRoute } = require('./routes/pendaftaran.routes')
const cors = require('cors');

const app = express();
const PORT = 3002;


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rute untuk mahasiswa
// rute untuk campus
app.use("/pendaftaran", pendaftaranRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})