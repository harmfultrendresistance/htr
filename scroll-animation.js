// scroll-animation.js

// Function to create professional animations
function createProfessionalAnimation(target, duration, distance, origin, delay) {
    ScrollReveal().reveal(target, {
      duration: duration,
      distance: distance,
      origin: origin,
      easing: 'ease-in-out', // Smooth easing for a professional feel
      delay: delay,
      reset: true,
    });
  }
  
  // Initialize ScrollReveal for general elements
  createProfessionalAnimation('.animated-element', 800, '20px', 'bottom', 100);
  
  // Additional animations for specific elements
  createProfessionalAnimation('.animated-element h2', 800, '20px', 'bottom', 200);
  createProfessionalAnimation('.animated-element p', 800, '20px', 'bottom', 200);
  createProfessionalAnimation('.animated-element img', 800, '20px', 'bottom', 200);
  createProfessionalAnimation('.animated-element iframe', 800, '20px', 'bottom', 200);
  
  // Advanced feature: Adding rotations to certain elements
  createProfessionalAnimation('.animated-element.rotate', 800, '15px', 'bottom', 0);
  createProfessionalAnimation('.animated-element.rotate img', 800, '20px', 'bottom', 100);
  