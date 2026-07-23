document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Navbar Scroll Effect ──────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── 2. Mobile Menu Toggle ────────────────────────────────────────────
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        navLinks.classList.remove('open');
        mobileToggle.querySelector('.material-icons-round').textContent = 'menu';
        document.body.style.overflow = '';
      } else {
        navLinks.classList.add('open');
        mobileToggle.querySelector('.material-icons-round').textContent = 'close';
        document.body.style.overflow = 'hidden';
      }
    });

    // Close menu when tapping a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (mobileToggle.querySelector('.material-icons-round')) {
          mobileToggle.querySelector('.material-icons-round').textContent = 'menu';
        }
        document.body.style.overflow = '';
      });
    });
  }

  // ── 3. Live Search & Tag Filter ──────────────────────────────────────
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');
  const topicDetails = document.querySelectorAll('.topic-detail');
  const faqItems = document.querySelectorAll('.faq-item');
  const noResultsMsg = document.getElementById('noResults');

  function performSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    let hasResults = false;

    // Filter Quick Link Cards
    cards.forEach(card => {
      const searchData = card.getAttribute('data-search') || '';
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const text = card.querySelector('p')?.textContent.toLowerCase() || '';
      
      if (searchTerm === '' || searchData.includes(searchTerm) || title.includes(searchTerm) || text.includes(searchTerm)) {
        card.style.display = 'block';
        hasResults = true;
      } else {
        card.style.display = 'none';
      }
    });

    // Filter Detailed Topics
    topicDetails.forEach(topic => {
      const text = topic.textContent.toLowerCase();
      if (searchTerm === '' || text.includes(searchTerm)) {
        topic.style.display = 'block';
        hasResults = true;
      } else {
        topic.style.display = 'none';
      }
    });

    // Filter FAQs
    faqItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (searchTerm === '' || text.includes(searchTerm)) {
        item.style.display = 'block';
        hasResults = true;
      } else {
        item.style.display = 'none';
      }
    });

    // Show/Hide No Results Box
    if (noResultsMsg) {
      if (!hasResults && searchTerm.length > 0) {
        noResultsMsg.style.display = 'block';
      } else {
        noResultsMsg.style.display = 'none';
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        performSearch('');
        searchInput.blur();
      }
    });
  }

  // Tag filter buttons click
  const tagBtns = document.querySelectorAll('.tag-btn');
  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tagText = btn.getAttribute('data-tag') || btn.textContent.trim();
      if (searchInput) {
        searchInput.value = tagText;
        performSearch(tagText);
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // ── 4. Contact Form Gmail & Mail Compose Handler ─────────────────────
  const contactForm = document.getElementById('contactForm');
  const sendGmailBtn = document.getElementById('sendGmailBtn');
  const sendMailAppBtn = document.getElementById('sendMailAppBtn');

  function composeEmailData() {
    const category = document.getElementById('category')?.value || 'Bug Report';
    const subject = document.getElementById('subject')?.value.trim() || '';
    const device = document.getElementById('device')?.value.trim() || '';
    const body = document.getElementById('body')?.value.trim() || '';

    if (!subject || !body) {
      if (!subject) document.getElementById('subject')?.focus();
      else if (!body) document.getElementById('body')?.focus();
      return null;
    }

    const emailSubject = `[Noisy Support] ${category}: ${subject}`;
    const emailBody = `Category: ${category}\nDevice / OS: ${device || 'Not specified'}\n\nDescription:\n${body}`;

    return { emailSubject, emailBody };
  }

  if (sendGmailBtn) {
    sendGmailBtn.addEventListener('click', () => {
      const data = composeEmailData();
      if (!data) {
        alert('Please fill in the Issue Summary and Description fields.');
        return;
      }

      // Direct Gmail Web Compose URL
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=soundhp.team@gmail.com&su=${encodeURIComponent(data.emailSubject)}&body=${encodeURIComponent(data.emailBody)}`;
      window.open(gmailUrl, '_blank');
    });
  }

  if (sendMailAppBtn) {
    sendMailAppBtn.addEventListener('click', () => {
      const data = composeEmailData();
      if (!data) {
        alert('Please fill in the Issue Summary and Description fields.');
        return;
      }

      // Mailto scheme for default mail app
      const mailtoUrl = `mailto:soundhp.team@gmail.com?subject=${encodeURIComponent(data.emailSubject)}&body=${encodeURIComponent(data.emailBody)}`;
      window.location.href = mailtoUrl;
    });
  }

  // ── 5. Intersection Observer for Scroll Animations ───────────────────
  const animateElements = document.querySelectorAll('.animate-in');
  
  if (animateElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    });

    animateElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    animateElements.forEach(el => el.classList.add('visible'));
  }
});

// ── 6. Global FAQ Accordion Toggle ──────────────────────────────────────
window.toggleFaq = function(element) {
  const faqItem = element.closest('.faq-item');
  if (!faqItem) return;

  const isOpen = faqItem.classList.contains('open');
  
  // Close other FAQs
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) item.classList.remove('open');
  });

  if (!isOpen) {
    faqItem.classList.add('open');
  } else {
    faqItem.classList.remove('open');
  }
};
