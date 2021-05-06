const opengraph = require('open-graph');
const express = require('express');

const api = express();

api.get('/', async (req, res) => {
    try {
        const { url } = req.query;

        if (!url) return res.status(400).json({
            success: false,
            error: 'Failed to provide url'
        });

        opengraph(url, (err, meta) => {
            res.status(200).json({
                success: true,
                data: meta
            });
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});

api.listen(8080, () => {
    console.clear();
	console.log('LISTENING ON PORT 8080');
});