const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h2>Mood Mirror (Node.js)</h2>
        <form method="get" action="/mood">
            What's your mood? <input name="mood">
            <input type="submit">
        </form>
    `);
});

app.get('/mood', (req, res) => {
    const mood = (req.query.mood || '').toLowerCase();
    const responses = {
        happy: '😊 Keep smiling!',
        sad: '😢 Sending hugs!',
        tired: '😴 Take a nap!',
        angry: '😠 Breathe in, breathe out...',
        excited: '🤩 So much energy!'
    };
    const message = responses[mood] || '🤔 Unrecognized mood, but you rock!';
    res.send(`
        <h2>Your mood: ${mood}</h2>
        <p>${message}</p>
        <br><a href="/">Try another</a>
    `);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
