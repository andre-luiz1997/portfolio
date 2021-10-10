export const slider = (element: HTMLElement | null) => {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    if(element == null) return;
    let scrollableContainer = element.querySelector('.scrollable') as HTMLElement;
    if(scrollableContainer == null) return;

    const showArrows = () => {
        // if((scrollableContainer.scrollLeft - scrollableContainer.offsetWidth) >= -300){
        //     arrowLeft.classList.remove('hide');
        // } else {
        //     arrowLeft.classList.add('hide');
        // }
        // if((scrollableContainer.scrollLeft + scrollableContainer.offsetWidth + 100) >=  scrollableContainer.scrollWidth){
        //     arrowRight.classList.add('hide');
        // }else{
        //     arrowRight.classList.remove('hide');
        // }
    }

    const animateSlider = (dir = 1) => {
        scrollableContainer.scroll({
            left: scrollableContainer.scrollLeft + (scrollableContainer.offsetWidth * dir),
            behavior: 'smooth'
        });

        setTimeout(() => {
            showArrows();
        }, 500);
    }

    let arrowLeft = document.createElement('div');
    arrowLeft.innerHTML = '<span>&lsaquo;</span>';
    let arrowRight = document.createElement('div');
    arrowRight.innerHTML = '<span>&rsaquo;</span>';

    arrowLeft.classList.add('arrowLeft','arrow');
    arrowRight.classList.add('arrowRight','arrow');

    element.parentElement?.appendChild(arrowLeft);
    element.parentElement?.appendChild(arrowRight);
    scrollableContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollableContainer.classList.add('active');
        startX = e.pageX - element.offsetLeft;
        scrollLeft = scrollableContainer.scrollLeft;
    });

    scrollableContainer.addEventListener('mouseleave', (e) => {
        isDown = false;
        scrollableContainer.classList.remove('active');
    });

    scrollableContainer.addEventListener('mouseup', (e) => {
        isDown = false;
        scrollableContainer.classList.remove('active');
    });

    scrollableContainer.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollableContainer.offsetLeft;
        const walk = (x - startX) * 1;
        scrollableContainer.scrollLeft = scrollLeft - walk;
        showArrows();
    });

    arrowLeft.addEventListener('click', (e) => {
        e.preventDefault();
        animateSlider(-1);
    });

    arrowRight.addEventListener('click', (e) => {
        e.preventDefault();
        animateSlider(1);
    });

}