const mongoose = require('mongoose');
// A Mongoose schema defines the structure of the document, 
// default values, validators, etc.
const { Schema } = mongoose;
const taskSchema = new Schema(
  {
    height: {
      type: Number,
      required: 'task1 cannot be blank'
    },
    weight: {
      type: Number,
      required: 'task2  cannot be blank'
    }
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);