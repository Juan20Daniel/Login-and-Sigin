const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/routes'));

app.listen(PORT, () => {
    console.log("The server is running on the port: "+PORT);
});