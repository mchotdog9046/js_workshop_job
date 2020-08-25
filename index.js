window.addEventListener('DOMContentLoaded', function (){
  const burger = document.getElementById('navbar-burger');
  const menu = document.getElementById('navbar-menu');
//   const form = document.form['#search-job']
  burger.addEventListener('click', function (){
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active')
  })


//   form.addEventListener('submit', function (e){
//     e.preventDefault();
//     if (form.Element[2].checked)
//     fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=✓&description=${form.elements[0]}&location=${form.elements[1]}&full_time=on`)
//     .then(request => request.json())
//     .then(posts => console.log(posts))

//     else
//     fetch(`https://still-spire-37210.herokuapp.com/positions.json?utf8=✓&description=${form.elements[0]}&location=${form.elements[1]}&full_time=on`)
//     .then(request => request.json())
//     .then(posts => console.log(posts))
//   })
})
