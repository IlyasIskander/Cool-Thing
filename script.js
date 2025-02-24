document.addEventListener('DOMContentLoaded', (event) => {
    const covers = document.querySelectorAll('.cover1, .cover2, .cover3');
    covers.forEach((cover) => {
        cover.addEventListener('animationend', (e) => {
            if (e.target === covers[covers.length - 1]) {
                document.body.style.overflowY = 'auto';
                document.body.style.overflowX = 'hidden';
                document.body.style.overscrollBehaviorY = 'none';
            }
        });
    });
});