const { Client } = require('@elastic/elasticsearch')

const elasticUrl = process.env.ELASTIC_URL || "http://localhost:9200";
const esclient   = new Client({ node: elasticUrl });
const index      = "title";
const type       = "title";
const log        = "info";

const elasticsearchClient = new Client.Client({
    host: elasticUrl,
    log: 'info',
    cloud: { id: '<cloud-id>' },
    auth: { apiKey: 'base64EncodedKey' }
});

export default elasticsearchClient;