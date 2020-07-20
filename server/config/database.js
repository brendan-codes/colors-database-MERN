const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/new-colors-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

require('../models/Color');