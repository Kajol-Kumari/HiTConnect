require("dotenv").config();

var db = {
	prod: {
		DATABASE_HOST_URL: "mongodb://mongodb:27017/hitconnectdb",
		DATABASE_PORT: parseInt(process.env.DATABASE_PORT),
	},

	staging: {
		DATABASE_HOST_URL: "mongodb://localhost:27017/hitconnectdb",
		DATABASE_PORT: parseInt(process.env.DATABASE_PORT)
	},

	dev: {
		DATABASE_HOST_URL: "mongodb://localhost:27017/hitconnectdb",
		DATABASE_PORT: 27017,
	},
};

var config = {

	dialect: "mongo",

	node_env: process.env.NODE_ENV || "dev",

	variables: {},

	app: {
		jwtKey: process.env.JWT_SECRET_KEY || "insert-a-secret-key-here",
		jwtExpiryTime: process.env.JWT_EXPIRY_TIME || "1h",
		port: process.env.PORT ? parseInt(process.env.PORT) : 4000,
		env: process.env.NODE_ENV,
		name: "hitconnectdb Backend APIs",
		local_domain: "http://localhost:" + (process.env.PORT || "3999") + "/api/v1",
	},

	pagination: {
		limit: 10,
	},
};

if (process.env.NODE_ENV == "prod") {
	config.db = db.prod;
} else if (process.env.NODE_ENV == "stage") {
	config.db = db.staging;
} else {
	config.db = db.dev;
}

module.exports = config;

// To convert js config to json

if (require.main == module) {
	var fs = require("fs");
	var path = require("path");

	console.log("The current config is \n\n\n");

	var config_string = JSON.stringify(config, null, 4);
	console.log(config_string);
	console.log("\n\n\n");

	// Write the config string to a file here, most preferably app_config.json
	var file_path = path.join(__dirname, "app_config.json");
	console.log("Saving the config file at:  " + file_path);
	console.log("\n\n\n");

	fs.writeFile(file_path, config_string, function (err) {
		if (err) {
			console.log("There is an error in writing the data to the file");
			console.log(err);
		} else {
			console.log("config file saved");
		}
	});
}