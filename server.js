const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route pour le formulaire de contact
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Configurer le transporteur d'email (exemple avec Gmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'contact.tiegoquenum@gmail.com', // Remplace par ton email
            pass: 'Jesuismoi123!' // Remplace par ton mot de passe
        }
    });

    const mailOptions = {
        from: email,
        to: 'contact.tiegoquenum@gmail.com',
        subject: `Nouveau message de contact de ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message envoyé avec succès');
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port}`);
});
