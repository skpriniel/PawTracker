// Navigation menu interactivity
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Optional: You can add page navigation logic here
        console.log('Navigating to:', this.textContent);
    });
});

// Sign out button functionality
const signOutBtn = document.querySelector('.sign-out-btn');

signOutBtn.addEventListener('click', function() {
    const confirmSignOut = confirm('Are you sure you want to sign out?');
    
    if (confirmSignOut) {
        // Add sign out logic here (e.g., redirect to login page)
        alert('Signing out...');
        console.log('User signed out');
        // window.location.href = 'index.html'; // Redirect to login page
    }
});

// Add hover effect enhancement for stat cards
const statCards = document.querySelectorAll('.stat-card');

statCards.forEach(card => {
    card.addEventListener('click', function() {
        console.log('Stat card clicked:', this.querySelector('h3').textContent);
        // You can add modal or detailed view functionality here
    });
});

// Optional: Animate stat values on page load
window.addEventListener('load', function() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            stat.style.transition = 'all 0.6s ease';
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'Escape' to show sign out confirmation
    if (e.key === 'Escape') {
        signOutBtn.click();
    }
    
    // Arrow key navigation through menu items
    const activeItem = document.querySelector('.nav-item.active');
    const currentIndex = Array.from(navItems).indexOf(activeItem);
    
    if (e.key === 'ArrowDown' && currentIndex < navItems.length - 1) {
        e.preventDefault();
        navItems[currentIndex + 1].click();
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        navItems[currentIndex - 1].click();
    }
});