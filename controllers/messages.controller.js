const path = require('path');
const friends = require('../models/friends.model');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk',
  })
  // res.sendFile( path.join(__dirname, '..', 'public','images', 'skimountain.jpg'));
}

function postMessage(req, res){
  res.send('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};