// ACTIVE NAVBAR
let nav = document.querySelector('.navigation-warp');
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}
// NAV HIDE 
let navLink= document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.collapse.navbar-collapse');
navLink.forEach(function(e) {
    e.addEventListener("click", function() {
        navCollapse.classList.remove("Show");
    })
})
// COUNTER DESIGN 
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end) {
                clearInterval(timer);
            }
        }, step)
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 3000);
    counter("count3", 0, 1440, 3000);
    counter("count4", 200, 7110, 3000);
})