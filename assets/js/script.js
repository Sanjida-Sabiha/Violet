document.addEventListener('DOMContentLoaded', function () {
    const testimonialContent = document.querySelectorAll('.testimonial');
    const testimonialButtons = document.querySelectorAll('.testimonial-btn');
    const testimonialImages = [
      'assets/img/homepage/testimonial.png',
      'assets/img/homepage/testimonial.png',
      'assets/img/homepage/testimonial.png'
    ];
    const testimonialImage = document.getElementById('testimonial-image');

    function showTestimonial(index) {
      testimonialContent.forEach((content, idx) => {
        content.classList.toggle('hidden',  idx !== index);
      });
      testimonialButtons.forEach((button, idx) => {
        button.classList.toggle('bg-opacity-40', idx !== index);
        button.classList.toggle('bg-btnBg', idx === index);
      });
      testimonialImage.src = testimonialImages[index];
    }

    testimonialButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = parseInt(button.dataset.index);
        showTestimonial(index);
      });
    });

    // Initialize first testimonial as visible
    showTestimonial(0);
  });











  