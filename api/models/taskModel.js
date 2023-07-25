const mongoose = require('mongoose');
// A Mongoose schema defines the structure of the document, 
// default values, validators, etc.
const { Schema } = mongoose;
const taskSchema = new Schema(
  {
    height: {
      type: Number,
      required: 'height cannot be blank'
    },
    weight: {
      type: Number,
      required: 'weight  cannot be blank'
    },
    bmi: {
      type: Number,
      required: 'bmi  cannot be blank'
    }
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);