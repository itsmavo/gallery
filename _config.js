var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://marvinosolo:UuydK61tWTPvgjcl@mocluster.itlo7mj.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://marvinosolo:UuydK61tWTPvgjcl@mocluster.itlo7mj.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://marvinosolo:<UuydK61tWTPvgjcl@mocluster.itlo7mj..mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
