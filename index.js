const opengraph = require('open-graph')
const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', async (req, res) => {
    try {
        const { url } = req.body
        opengraph(url, (err, meta) => {
            console.log(meta)
            res.status(200).json({
                success: true,
                data: meta
            })
        })
    } catch (error) {
        res.status(418).json({
            success: false,
            error: error.message,
            usage: "url",
            sent: req.body
        })

    }
})

app.listen(8080, () => {
	console.log('Uploader listning on port 8080')
});