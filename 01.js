const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTUyYjM1M2RlZjU0MzU2MjI5YjAyZDkxZWE5ZjVmZSIsInN1YiI6IjY1OWE1MzU1N2UxMmYwMDI1MzM3YzhjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J68Fx1-7kjNt-HrwqVJnCOothbvmu-1wKczIXxPyfLY'
    }
  };

  //영화 정보들 저장하여 카드로 만들 구역 불러옴
  const movies = document.getElementById("movies");
  console.log(movies);


  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
   .then(response => response.json())
   // api 가져온 값에서 필요한 4가지 요소 골라서 저장 (화살표 함수로)
   // api 값들 중 필요한 내용 들어있는 results 값들만 따로 저장
   .then((response) => {
    let results = response["results"];
    // 다시 results 값들 중 필요한 4가지 요소들(title, overview, poster_path, vote_average) 따로 저장
    // for문으로 반복문 돌면서 각각 따로 저장, 출력
    for(let i=0;i<results.length;i++){
    let tt = results[i]["title"];
    let ov = results[i]["overview"];
    let pp = results[i]["poster_path"];
    let va = results[i]["vote_average"];

    //영화 정보 적을 부분 속성 만들기
   let title = document.createElement('h2');
   let overview = document.createElement('p');
   let image = document.createElement('img');
   let vote_average = document.createElement('p');

    //영화 정보들을 만들었던 movies 구역 안에 하위 요소로 추가
   movies.appendChild(title);
   movies.appendChild(overview);
   movies.appendChild(image);
   movies.appendChild(vote_average);

   //내용 추가
   title.textContent = tt;
   overview.textContent = ov;
   image.src = `https://image.tmdb.org/t/p/w500${pp}`;
   vote_average.textContent = va;


    }
})
   .catch(err => console.error(err));

   window.alert("message?");