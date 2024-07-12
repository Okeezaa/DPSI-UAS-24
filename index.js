const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js');

const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(cookieParser());
connectDB();
const siswaRoutes = require('./routes/siswa');
const scheduleRoutes = require('./routes/schedule');
const orderRoutes = require('./routes/order');
const guruRoutes = require('./routes/guru');

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/siswa', siswaRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/order', orderRoutes);
app.use('/guru', guruRoutes);

app.listen(5000, () => {
    console.log("Server berjalan di http://localhost:5000");
});