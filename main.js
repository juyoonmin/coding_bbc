(() => {
    const stepElems = document.querySelectorAll('.step')
    const graphicElems = document.querySelectorAll('.graphic-item')
    // 현재 활성화된(visible 클래스가 붙은) .graphic-item을 지정
    let currentItem = graphicElems[0];
    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
        // 요소가 뷰포트에 들어가거나 나갈 때 이 콜백 기능이 실행
        // 첫번째 항목의 대상 요소에서 "data-index" 속성 값 추출
        // 1을 곱하여 숫자 값으로 변환
        ioIndex = entries[0].target.dataset.index * 1;
    });

    // 각 단계 요소를 루프하고 인덱스 값과 함께 데이터 인덱스 속성을 할당
    for (let i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }

    function activate() {
        currentItem.classList.add('visible')
    }

    function inactivate() {
        currentItem.classList.remove('visible');
    }


    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;

        for (let i = ioIndex -1; i < ioIndex + 2; i++) {
            step = stepElems[i];
            // 이 인덱스에 step 요소가 없으면 다음 반복으로 건너뜀
            if (!step) continue;
            boundingRect = step.getBoundingClientRect();

            // step 요소의 상단이 윈도우 높이의 10-80% 이내에 있는지 확인
            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {


                inactivate();
                // 현재 보이는 step에 해당하는 currentItem을 graphic-item으로 설정
                currentItem = graphicElems[step.dataset.index];
                activate();

            }
        }
    })

    activate();

})();