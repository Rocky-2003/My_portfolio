export default function ScrollSmoot() {
  
  const menuLinks = document.querySelectorAll(".items a");
  console.log('smothscrool');

  menuLinks.forEach((links) => {
    links.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  });
}
