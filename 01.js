const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTUyYjM1M2RlZjU0MzU2MjI5YjAyZDkxZWE5ZjVmZSIsInN1YiI6IjY1OWE1MzU1N2UxMmYwMDI1MzM3YzhjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J68Fx1-7kjNt-HrwqVJnCOothbvmu-1wKczIXxPyfLY'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
   .then(response => response.json())
   // api 가져온 값에서 필요한 4가지 요소 골라서 저장 (화살표 함수로)
   // api 값들 중 필요한 내용 들어있는 results 값들만 따로 저장
   .then((response) => {
    let results = response["results"];
    // 다시 results 값들 중 필요한 4가지 요소들(title, overview, poster_path, vote_average) 따로 저장
    // for문으로 각 배열에 따로 저장
    for(let i=0;i<results.length;i++){
    let title = results[i]["title"];
    let overview = results[i]["overview"];
    let poster_path = results[i]["poster_path"];
    let vote_average = results[i]["vote_average"];
    }
})
   .catch(err => console.error(err));