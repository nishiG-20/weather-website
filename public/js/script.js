let weatherForm=document.querySelector('form')
let search=document.querySelector('input')
let message1=document.querySelector('#message1')
let message2=document.querySelector('#message2')

weatherForm.addEventListener('submit',(e)=>{
     e.preventDefault()
     message1.textContent='Loading......'
     const location=search.value
     fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
      response.json().then((data)=>{
           if(data.error){
               message1.textContent=data.error
           }
           else
           {
                message1.textContent= data.location
                message2.textContent= data.forecast
           }
      })

})
     
})






























