const express = require('express');
const router = express.Router();

// Dynamic data (in real app, this comes from a database)
const teamMembers = [
  { name: 'Aryan Sharma', role: 'CEO & Founder', emoji: '👨‍💼' },
  { name: 'Priya Singh', role: 'Lead Developer', emoji: '👩‍💻' },
  { name: 'Rahul Verma', role: 'UI/UX Designer', emoji: '🎨' },
  { name: 'Sneha Patel', role: 'Marketing Head', emoji: '📢' }
];

const services = [
  { icon: '🌐', title: 'Web Development', desc: 'Modern, fast, and scalable websites built for growth.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Cross-platform apps that deliver seamless experiences.' },
  { icon: '☁️', title: 'Cloud Solutions', desc: 'Azure-powered infrastructure that scales with you.' },
  { icon: '🔒', title: 'Cybersecurity', desc: 'End-to-end security to protect your digital assets.' },
  { icon: '📊', title: 'Data Analytics', desc: 'Turn your raw data into actionable insights.' },
  { icon: '🤖', title: 'AI Integration', desc: 'Smart AI features embedded into your products.' }
];

// Home page
router.get('/', (req, res) => {
  res.render('index', {
    title: 'NexaWave — Digital Solutions',
    services,
    teamMembers,
    currentYear: new Date().getFullYear()
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us — NexaWave',
    teamMembers,
    currentYear: new Date().getFullYear()
  });
});

// Services page
router.get('/services', (req, res) => {
  res.render('services', {
    title: 'Our Services — NexaWave',
    services,
    currentYear: new Date().getFullYear()
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us — NexaWave',
    currentYear: new Date().getFullYear(),
    message: null
  });
});

// Contact form POST
router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  // In real app: save to DB or send email
  console.log(`New message from ${name} (${email}): ${subject}`);
  res.render('contact', {
    title: 'Contact Us — NexaWave',
    currentYear: new Date().getFullYear(),
    message: `Thank you ${name}! Your message has been received. We'll reply to ${email} shortly.`
  });
});

// API endpoint (dynamic data example)
router.get('/api/stats', (req, res) => {
  res.json({
    clients: 150,
    projects: 320,
    countries: 28,
    yearsActive: 8
  });
});

module.exports = router;
