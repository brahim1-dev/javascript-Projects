/*
we are using randomuser.me, if its not working use their github,  
*/

// const api = "https://randomuser.me/api/"

// let button = document.querySelector('button')
// button.addEventListener('click', getRandomUser)

// function getRandomUser(){

//     axios.get(api)
//     .then(response =>{
//         console.log(response.data.results[0])
//         const  data = response.data.results[0]
//         randomUser(data)
//     })
//     .catch(error =>{
//         console.log(error)
//     })

// }

// function randomUser(data)
//  {
//      const image = document.querySelector('img'),
//          name = document.querySelector('h1'),
//          email = document.querySelector('h3');
//          let gender =""

//          image.src= data.picture.large 
//          name.innerHTML = `${data.name.title}. ${data.name.first} ${data.name.last}`
//          email.textContent = data.email

//          gender = data.gender

//          if(gender ==='female')
//          {   
//              image.classList.add('female')
//              button.classList.add('female')
//          }else{
//              image.classList.remove('female')
//              button.classList.remove('female')
//              image.classList.add('male')
//              button.classList.add('male')
//          }
//  }

const api = "https://randomuser.me/api/"

let button = document.querySelector('button')
button.addEventListener('click', getRandomUser)

function getRandomUser(){

 axios.get(api)
 .then(response =>{
     console.log(response.data.results[0])
     const data = response.data.results[0]
     randomUser(data)
 })
 .catch(error =>{
     console.log(error)
 })
}

function randomUser(data){
 const image = document.querySelector('img'),
       name = document.querySelector('h1'),
       email = document.querySelector('h3');

       let gender = data.gender
       
       image.src= data.picture.large
       name.innerHTML = `${data.name.title} ${data.name.first} ${data.name.last}`
       email.textContent = data.email

       if(gender === 'female'){
           image.classList.add('female')
           button.classList.add('female')
       }
       else{
           image.classList.remove('female')
           button.classList.remove('female')
           image.classList.add('male')
           button.classList.add('male')
       }
}