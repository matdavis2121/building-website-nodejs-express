const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req, resp) => {
    resp.send('Hello Express :)');

})

app.listen(port, () => {
    console.log(`Express server listening on  http://localhost:${port} - ${new Date()}!`)
})
