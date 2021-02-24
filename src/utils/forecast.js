const request= require('postman-request')
const forecast=(lati,longi,callback)=>{
     const url='http://api.weatherstack.com/current?access_key=3a9dcebf760f277e143a21f978010dc8&query='+ lati+ ','+longi+'&units=m'
     request({url,json:true},(error,{body})=>{
            if(error)
            {
                  callback('Low level error, pass string for error',undefined)
            }
            else
            {
                 if(body.error)
                 {
                       callback('Coordinate error, pass string for error',undefined)
                 }
                 else
                 {
                 /*
                       const data=`${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degrees out.It feels like ${response.body.current.feelslike} degrees. There is a ${response.body.current.precip}% chances of rain`
                       callback(undefined,data)
                 */
                                                  //Or
                  let str=''
                  str+=body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature +' degrees out. ' + 'It feels like ' +body.current.feelslike+' degrees. There is a '+body.current.precip+'% chances of rain'
                  callback(undefined,str)
                 }
            }
     }) 
     
}
module.exports=forecast

