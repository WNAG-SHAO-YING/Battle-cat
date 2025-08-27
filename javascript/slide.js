  let index = 0;
        function refresh() {
            if(index<0){
                index= 3;
            }
            else if(index>3){
                index = 0;
            }
            let slider = document.querySelector('.slider')
            let width = getComputedStyle(slider).width
            width = Number(width.slice(0, -2))
            slider.querySelector('.slider-content').style.left = index * width * -1 +
                "px"
        }
        function leftshift() {
            index--;
            refresh()
        }
        function rightshift() {
            index++;
            refresh()
        }
        function setIndex(idx) {
            index = idx;
            refresh()
        }
        refresh()