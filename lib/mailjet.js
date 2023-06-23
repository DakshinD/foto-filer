const Mailjet = require('node-mailjet');

MJ_APIKEY_PUBLIC='your API key'
MJ_APIKEY_PRIVATE='your API secret'
MJ_API_TOKEN='your API token'

const mailjet = Mailjet.apiConnect(
    MJ_APIKEY_PUBLIC,
    MJ_APIKEY_PRIVATE,
);
