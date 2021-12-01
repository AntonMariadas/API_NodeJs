const express = require('express');
const router = express.Router();
const CompanyModel = require('../models/company');

const romeCodes = new Map();
romeCodes.set("administration", "M1801");
romeCodes.set("consultant", "M1806");
romeCodes.set("defense", "K1903");
romeCodes.set("direction", "M1803");
romeCodes.set("developpement", "M1805");
romeCodes.set("support", "M1802");
romeCodes.set("maintenance", "I1401");
romeCodes.set("production", "M1810");
romeCodes.set("redaction", "H1207");


router.get("/companies", async (req, res) => {
    try {
        let companies = await CompanyModel.find();
        res.status(200).send(companies);

    } catch (error) {
        console.log(error);
        res.status(500);
    }
});


router.get("/companies/:id", async (req, res) => {
    let id = req.params.id;

    try {
        companies = await CompanyModel.findById(id);
        res.status(200).send(companies);

    } catch (error) {
        console.log(error);
        res.status(500);
    }
});


router.get("/rome/:label", async (req, res) => {
    let label = req.params.label;
    let romeCode = romeCodes.get(label);
    let departement = req.query.departement;

    try {
        companies = departement ?
            await CompanyModel.find({
                matched_rome_code: romeCode,
                address: new RegExp(' ' + departement)
            }) :
            await CompanyModel.find({ matched_rome_code: romeCode });

        res.status(200).send(companies);

    } catch (error) {
        console.log(error);
        res.status(500);
    }
});


module.exports = router;