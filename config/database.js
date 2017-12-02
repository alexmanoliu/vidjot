if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURL: 'mongodb://alxmnl88:vidjotapp@ds129156.mlab.com:29156/vidjotapp'}
} else {
 module.exports = {mongoURL: 'mongodb://localhost/vidjot-dev'}
}