const app = require('express')()
const PORT = 3220

app.post("/rappi/webhook", function (_req,_res) {
    console.log(_req.body)
    _res.send("webhook of rappi")
})

app.post("/uber/webhook", function (_req,_res) {
    console.log(_req.body)
    _res.send("webhook of uber")
})

app.post("/didi/webhook", function (_req,_res) {
    console.log(_req.body)
    _res.send("webhook of didi")
})

app.post("/okana/webhook", function (_req,_res) {
    console.log(_req.body)
    _res.send("webhook of okana")
})


app.listen(PORT, () => {
    console.log(`server listening in port:${PORT}`)
})