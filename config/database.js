if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://alexvid:vidjotapp@ds129156.mlab.com:29156/vidjotapp'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}