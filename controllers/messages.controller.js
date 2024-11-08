function getMessages(req, res) {
  res.send('<ul><li>First</li></ul>');
}

function postMessage(req, res){
  res.send('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};