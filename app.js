const request = require('request')


const url="https://api.darksky.net/forecast/ad8c5cb3cfe4b081aa9a316704d39154/37.8267,-122.4233"

request({url:url, json:true},(error, response)=>{
    console.log(response.body.currently)
})