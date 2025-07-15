const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE)
  .then(() => console.log('MongoDB connection established..'))
  .catch(err => console.error('MongoDB connection error:', err));
