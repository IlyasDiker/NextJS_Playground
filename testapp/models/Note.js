const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxLength: [40, 'Title cannot be more than 40 char'],
    },
    description: {
        type: String,
        required: true,
        maxLength: [225, 'Title cannot be more than 225 char'],
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);