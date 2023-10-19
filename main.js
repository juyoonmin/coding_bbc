(() => {
    const stepElems = document.querySelectorAll('.step')
    const graphicElems = document.querySelectorAll('.graphic-item')
    
    
    // 각 단계 요소를 루프하고 인덱스 값과 함께 데이터 인덱스 속성을 할당
    for (let i = 0; i < stepElems.length; i++){
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;
    }


    window.addEventListener('scroll', () =>{
        let step;
        let boundingRect;

        for (let i = 0; i <stepElems.length; i++){
            step = stepElems[i];
            boundingRect =step.getBoundingClientRect();

            // step 요소의 상단이 윈도우 높이의 10-80% 이내에 있는지 확인
            if(boundingRect.top > window.innerHeight * 0.1 &&
               boundingRect.top < window.innerHeight * 0.8){
                    // step 요소가 뷰포트에 있는 경우 visible 클래스를 해당하는 graphic-item에 추가
                    graphicElems[step.dataset.index].classList.add('visible');
               }
        }
    })

})();