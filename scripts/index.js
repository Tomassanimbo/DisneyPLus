fetch('https://api.themoviedb.org/3/movie/550?api_key=6f56d66e41488508222adb14d14f39c5')
.then(response => response.json())
.then(data =>{
  console.log(data)
})