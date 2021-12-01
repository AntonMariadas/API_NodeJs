const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    alternance: {
        type: Boolean,
    },
    boosted: {
        type: Boolean,
    },
    city: {
        type: String,
        required: true
    },
    contact_mode: {
        type: String,
    },
    headcount_text: {
        type: String,
    },
    lat: {
        type: Number,
    },
    lon: {
        type: Number,
    },
    matched_rome_code: {
        type: String,
    },
    matched_rome_label: {
        type: String,
    },
    matched_rome_slug: {
        type: String,
    },
    naf: {
        type: String,
    },
    naf_text: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    siret: {
        type: String,
    },
    social_network: {
        type: String,
    },
    stars: {
        type: Number,
    },
    url: {
        type: String,
    },
    website: {
        type: String,
    },
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
