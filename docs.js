const explain_me = require("explain_me")

// make sure all your files are in src/

// this generates read me from src folder
explain_me.readme("array_helperz")

// this generates docs (html pages)
explain_me.html("array_helperz")

// this adds scripts to your package.json file - test and docs
explain_me.addScript()