(() => {
    const stepElems = document.querySelectorAll('.step')
    const graphicElems = document.querySelectorAll('.graphic-item')
    // 현재 활성화된(visible 클래스가 붙은) .graphic-item을 지정
    let currentItem = graphicElems[0];

    // 각 단계 요소를 루프하고 인덱스 값과 함께 데이터 인덱스 속성을 할당
    for (let i = 0; i < stepElems.length; i++) {
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

        for (let i = 0; i < stepElems.length; i++) {
            step = stepElems[i];
            boundingRect = step.getBoundingClientRect();

            // step 요소의 상단이 윈도우 높이의 10-80% 이내에 있는지 확인
            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {


                inactivate();

                currentItem = graphicElems[step.dataset.index];
                activate();

            }
        }
    })

    activate();

})();