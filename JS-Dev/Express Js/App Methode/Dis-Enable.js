// Node js - Express js
// disable and enable methode set the setting to false or true

const print = (data)=> console.log(data)
const express = require('express')

// const index_path = 'C:\\Users\\abhay\\Documents\\code-book\\node_env\\public\\index.html'
// const index = './public/index.html'
const app =  express()

app.disable('user')
print(app.get('user'))

app.enable('user')
print(app.get('user'))

// app.listen(8080,function(err){
//     print('error: '+err)
// })