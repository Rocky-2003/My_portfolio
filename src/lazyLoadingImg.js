export default function lazyLoading() {
  document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazyload");
    const Observer = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazyload");
          // lazyImageObserver.unobserve(lazyImage);
        }
      });
    };


    // Checking is the intersectionObserver is present in window or not
    if ("IntersectionObserver" in window) {
      // Using InstersectionObsever API for checking is the images are in viewport
      let lazyImageObserver = new IntersectionObserver(Observer);
      lazyImages.forEach(function (lazyImage) {


        // Calling IntersectionObserverApi API
        lazyImageObserver.observe(lazyImage);
      });


    } else {
      // Fallback for browsers that do not support IntersectionObserver
      let lazyLoadThrottleTimeout;
      function lazyload() {
        if (lazyLoadThrottleTimeout) {
          clearTimeout(lazyLoadThrottleTimeout);
        }

        lazyLoadThrottleTimeout = setTimeout(function () {
          let scrollTop = window.pageYOffset;
          lazyImages.forEach(function (img) {
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.classList.remove("lazyload");
            }
          });
          if (lazyImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  });
}
