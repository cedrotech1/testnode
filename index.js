const express = require('express')
const app = express()
const port = 4000
// api

const userRoutes = require("./routes/urserRoute");

app.use(express.json()); // Middleware to parse JSON
app.use("/api", userRoutes); // Prefix all routes with "/api"



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})