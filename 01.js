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
            let title = document.createElement('h2');
            let overview = document.createElement('p');
            let image = document.createElement('img');
            let vote_average = document.createElement('p');

            //CSS에서 사용하기 위해 각 요소 id 설정함
            title.id = "title"
            overview.id = "overview"
            image.id = "poster"

            // movie 구역 안에 새로운 card라는 구역 만들어 영화 정보 저장
            const card = document.createElement('div');
            movie.appendChild(card);
            card.id = "card";

            // //영화 정보 내용 추가
            title.textContent = tt;
            overview.textContent = ov;
            image.src = `https://image.tmdb.org/t/p/w500${pp}`;
            vote_average.textContent = `영화 평점 : ${va}`;

            // //영화 정보들을 만들었던 card 구역 안에 하위 요소로 추가
            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(overview);
            card.appendChild(vote_average);

            //이미지 클릭시 아이디값 나오는 창 만들기
            //이미지클릭하면 영화 id값 보여주는 alert창 만들기
            //화살표 함수 이용
            const imgclick = () => {
                alert("영화 id : " + id);

            }

            //image에 addEventListener 사용해서 클릭하면 imgclick 행동 일어남
            image.addEventListener('click', imgclick);



            //검색한 문자값 포함한 영화만 화면에 나오게 하는 함수
            function search() {
                //검색한 문자값 input으로 받아와서 저장 
                const input = document.getElementById("input").value;
                //입력받은 문자값 모두 소문자로 변환
                const l_input = input.toLowerCase();
                //card에 나와있는 영화 제목들 모두 소문자로 변환
                const l_tt = tt.toLowerCase();
                //영화 제목에 입력받은 문자값 포함되어 있으면 카드 보여주고
                //포함되어 있지 않으면 숨김
                if (l_tt.includes(l_input)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }

            //영화 찾는 search함수 실행하는 기능 구현할 form 구역 formSearch라는 이름으로 저장
            const formSearch = document.querySelector("#search");
            // form 구역 내에 submit이 생기면 search함수 실행하는 이벤트 저장
            formSearch.addEventListener('submit', function (event) {
                //검색할 때 계속 처음 상태로 되돌아가지는 상태를 막는 함수
                event.preventDefault();
                search();
            })

           // console.log(movie);

        }

    })
    .catch(err => console.error(err));


    console.log(movie);