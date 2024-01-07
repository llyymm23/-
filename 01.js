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
    console.log(results[0]["title"]);
    console.log(typeof results[0]);
    // 다시 results 값들 중 필요한 4가지 요소들(title, overview, poster_path, vote_average) 따로 저장
    // forEach, 화살표 함수 사용
    let arr = new Array();
    results.forEach((elements) => {
        arr = elements["title"];
        // console.log(elements["title"]);
     });
     console.log(arr);
})
   .catch(err => console.error(err));
  

//   getTitle();

    //   {
    //     "adult": false,
    //     "backdrop_path": "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
    //     "genre_ids": [
    //       18,
    //       10749
    //     ],
    //     "id": 11216,
    //     "original_language": "it",
    //     "original_title": "Nuovo Cinema Paradiso",
    //     "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    //     "popularity": 30.507,
    //     "poster_path": "/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
    //     "release_date": "1988-11-17",
    //     "title": "Cinema Paradiso",
    //     "video": false,
    //     "vote_average": 8.45,
    //     "vote_count": 4068
    //   }
