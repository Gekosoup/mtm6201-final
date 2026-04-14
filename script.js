/**
 * Animate the skills items on reveal
 */
document.addEventListener("DOMContentLoaded", function () {
  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  let skillsAnimation = document.querySelectorAll('.skills-animation');

  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function() {
        let progress = item.querySelectorAll('.progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });