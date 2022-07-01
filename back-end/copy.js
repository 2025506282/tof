const fs = require('fs-extra');
console.log(__dirname)
fs.copy(__dirname + '/public', __dirname + '/build/public')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))
