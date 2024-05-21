// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
  
    function navigateToSection(index) {
      sections[currentSection].style.display = 'none';
      sections[index].style.display = 'flex';
      currentSection = index;
    }
  
    document.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        if (currentSection < sections.length - 1) {
          navigateToSection(currentSection + 1);
        }
      } else {
        if (currentSection > 0) {
          navigateToSection(currentSection - 1);
        }
      }
    });
  });