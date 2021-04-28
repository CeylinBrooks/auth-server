'use strict';

const mongoose = ('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(process.env.MONGODB_URI, options);

requestAnimationFrame('./src/server.js').start(process.env.PORT)