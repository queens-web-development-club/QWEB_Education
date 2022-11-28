const express = require('express')
const { body, validationResult } = require('express-validator');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

// Setup mailgun
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: 'key',
});

// Get router object (initialized in app.js)
const app = express.Router();

app.post(
    "/",
    body("name").isLength({max: 50}),
    body("email").isEmail(),
    body("message").isLength({max: 300}),
    async (req, res) => {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        await mg.messages
            .create("sandboxef006725118f499a8edcb564dc28c3ef.mailgun.org", {
                from: "Mailgun Sandbox <postmaster@sandboxef006725118f499a8edcb564dc28c3ef.mailgun.org>",
                to: [req.body.email],
                subject: "Hello " + req.body.name,
                text: "You said: " + req.body.message,
            })
        // 204 no content
        return res.status(204).send();
    });

module.exports = app;