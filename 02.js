const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTUyYjM1M2RlZjU0MzU2MjI5YjAyZDkxZWE5ZjVmZSIsInN1YiI6IjY1OWE1MzU1N2UxMmYwMDI1MzM3YzhjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J68Fx1-7kjNt-HrwqVJnCOothbvmu-1wKczIXxPyfLY'
    }
};

//영화 정보들 저장하여 카드로 만들 구역 불러옴
const movie = document.getElementById("movie");

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    // api 가져온 값에서 필요한 4가지 요소 골라서 저장 (화살표 함수로)
    .then((response) => {
        //필요한 내용 들어있는 results 값들만 따로 저장
        let results = response["results"];
        // 다시 results 값들 중 필요한 4가지 요소들(title, overview, poster_path, vote_average) 따로 저장
        // for문으로 반복문 돌면서 각각 따로 저장, 출력
        for (let i = 0; i < results.length; i++) {
            let id = results[i]["id"];
            let tt = results[i]["title"];
            let ov = results[i]["overview"];
            let pp = results[i]["poster_path"];
            let va = results[i]["vote_average"];

            // //영화 정보 적을 부분 속성 만들기
            // let title = document.createElement('h2');
            // let overview = document.createElement('p');
            // let image = document.createElement('img');
            // let vote_average = document.createElement('p');

            // // movie 구역 안에 새로운 card라는 구역 만들어 영화 정보 저장
            // const card = document.createElement('div');
            // movie.appendChild(card);
            // card.id = "card";

            // //영화 정보 내용 추가
            // title.textContent = tt;
            // overview.textContent = ov;
            // image.src = `https://image.tmdb.org/t/p/w500${pp}`;
            // vote_average.textContent = `영화 평점 : ${va}`;

            // //영화 정보들을 만들었던 card 구역 안에 하위 요소로 추가
            // card.appendChild(title);
            // card.appendChild(overview);
            // card.appendChild(image);
            // card.appendChild(vote_average);



            let movieCards = `
                          <div class="card" id="${id}">
                            <img src="https://image.tmdb.org/t/p/w500${pp}" class="img" alt="${tt}">
                            <ul>
                              <li>제목: ${tt}</li>
                              <li>내용 요약: ${ov}</li>
                              <li>평점: ${va}</li>
                            </ul>
                          </div>

                        `;

            // api에 연동된 영화들 추가
            let movies = document.getElementById("movie");
            movies.append(movieCards);


            //이미지 클릭시 아이디값 나오는 창 만들기
            //이미지클릭하면 영화 id값 보여주는 alert창 만들기
            //화살표 함수 이용
            const imgclick = () => {
                alert("영화 id : " + id);

            }

            //image에 addEventListener 사용해서 클릭하면 imgclick 행동 일어남
            let image = document.getElementsByClassName("img");
            image.addEventListener('click', imgclick);



            //검색한 문자값 포함한 영화만 화면에 나오게 하기
            //검색한 문자값 input으로 받아와서 저장
            document.getElementById("btn").onclick = function (event) {
                event.preventDefault();
                const input = document.getElementById("input").value;
                //입력받은 문자값 모두 소문자로 변환
                const l_input = input.toLowerCase();
                card.style.display = "none";
                console.log(l_input);
            }


            // btn.addEventListener("click", function () {
            //     card.style.display = "none"
            //     if (tt.toLowerCase().includes(l_input)) {
            //         card.style.display = "block"
            //     }
            // })

            // // // //입력한 문자값대로 영화 검색하는 함수
            //   function search (element) {
            //       //검색한 영화만 보여주기 위해 먼저 영화 카드들 모두 숨김
            //       card.style.display = "none";
            //       //검색 비교할 영화 제목들도 모두 소문자로 변환
            //       const l_tt = tt.toLowerCase();
            //       if(l_tt.includes(element)){
            //           return card.style.display = "block";
            //       } else {
            //         return alert("잘못 입력하셨습니다.");
            //       }
            //   }

            //   const input = document.querySelector("#input");
            //   const formSearch = document.querySelector("#search");
            //   formSearch.addEventListener('submit',function (event) {
            //     event.preventDefault();
            //     search(input);
            //   })

            //  // //입력한 문자값대로 영화 검색하는 함수
            //  function search (element) {
            //     if (element === tt.toLowerCase()) {
            //         return console.log(element);
            //     }
            // }





            //  form.addEventListener('submit', function(e) {
            //      console.log('제출');
            //  })


        }

    })
    .catch(err => console.error(err));
