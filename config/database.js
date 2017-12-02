if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://alexmnl:parola@ds129156.mlab.com:29156/vidjot'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
