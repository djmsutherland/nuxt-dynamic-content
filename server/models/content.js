const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
        required: false
      }
    ],
    text: {
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

const Content = mongoose.model('Content', schema)

module.exports = Content
