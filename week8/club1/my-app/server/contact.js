const express = require('express')
const { body, validationResult } = require('express-validator');
const email = require("@emailjs/nodejs")

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

        try {
            await email.send(
                "service_1vldr1v",
                "template_5ajo4q6",
                { name: req.body.name, message: req.body.message },
                {
                    publicKey: "",
                    privateKey: "",
                }
            );
        } catch (e) {
            console.log("ERR", e)
        }

        // 204 no content
        return res.status(204).send();
    });

module.exports = app;