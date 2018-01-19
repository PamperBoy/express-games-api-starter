// models/game.js
const mongoose = require('../config/database')
const { Schema } = mongoose

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' }
});

const gameSchema = new Schema({
  players: [playerSchema],
  boardHistory: {type: Array},
  stepNumber: { type: Number, default: 0 },
  gameRunning: { type: Boolean, default: false },
  joinable: { type: Boolean, default: true },
  gameDraw: { type: Boolean, default: false },
  playerTurn: { type: Schema.Types.ObjectId, ref: 'users' },
  winnerId: { type: Schema.Types.ObjectId, ref: 'users' },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('games', gameSchema)
