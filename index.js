const express = require('express')
const app = express()
const port = 4000
// api
app.get('/data', (req, res) => {
    res.send(
        {
            message: 'data retrived successfully', status: 200,
            data: [
                {
                    name: 'cedrick',
                    age: 10,
                }]
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})