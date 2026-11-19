// sub페이지 관련 스크립트
// 변수선언
let tabMnu = document.querySelectorAll('.tab_mnu ul a');
let tabCon = document.querySelector('.tab_con');
const lists = document.querySelectorAll('.m_list li');


// 클릭시 해당 메뉴 서식 적용하고, 해당 cont보이게 하기
tabMnu.forEach(function (item, i) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    // act 서식 제거
    tabMnu.forEach(function (item) {
      item.classList.remove('act');
    })

    // 사용자가 클릭한 탭 메뉴에 act서식을 적용
    this.classList.add('act');

    // 사용자가 클릭한 탭메뉴 a태그의 부모요소 
    let parentli = this.parentNode;

    // console.log(parentli); //부모 확인
    // console.log(i); //n번째 값 확인

    // 모든 콘텐츠를 숨기고
    for (let j = 0; j < tabCon.children.length; j++) {
      tabCon.children[j].style.display = 'none';
    }

    // 해당 i번째 콘텐츠 보이게 하기
    tabCon.children[i].style.display = 'block';
  });

  lists.forEach(item => {
    const qLength = item.querySelector('.list_q');
    const aLength = item.querySelector('.list_a');

    qLength.addEventListener('click', function () {
      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        aLength.style.maxHeight = aLength.scrollHeight + 'px';
      } else {
        aLength.style.maxHeight = 0 + 'px';
      }
    });
  });
})