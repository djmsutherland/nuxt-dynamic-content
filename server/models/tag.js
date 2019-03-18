const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const Tag = mongoose.model('Tag', schema)

module.exports = Tag
