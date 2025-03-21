


/** 🌟 品牌理念全屏滚动逻辑 - 仅在 `brand.html` 加载 */
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
    let isScrolling = false; // 防止滚动过快

    if (!slides.length) return; // 只有 `brand.html` 需要执行

    // 🌟 初始化第一个幻灯片可见
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    // 🚀 监听滚动事件（向上 / 向下切换）
    window.addEventListener("wheel", (event) => {
        if (isScrolling) return;
        isScrolling = true;
        setTimeout(() => isScrolling = false, 800);

        if (event.deltaY > 0) {
            nextBrandSlide();
        } else {
            prevBrandSlide();
        }
    });

    // 🚀 切换到下一张幻灯片
    function nextBrandSlide() {
        if (currentSlide < slides.length - 1) {
            slides[currentSlide].classList.remove("active");
            dots[currentSlide].classList.remove("active");
            currentSlide++;
            slides[currentSlide].classList.add("active");
            dots[currentSlide].classList.add("active");
        }
    }

    // 🚀 切换到上一张幻灯片
    function prevBrandSlide() {
        if (currentSlide > 0) {
            slides[currentSlide].classList.remove("active");
            dots[currentSlide].classList.remove("active");
            currentSlide--;
            slides[currentSlide].classList.add("active");
            dots[currentSlide].classList.add("active");
        }
    }

    // 🚀 小圆点点击跳转
    window.scrollToSlide = function (index) {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");
        currentSlide = index;
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    };
});