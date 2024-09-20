const express = require('express');
const app = express();
const PORT = 3000;  // Or any other port you are using

app.get('/', (req, res) => {
    res.send('mk World!');
});

// Start the server and log the URL in the terminal
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
