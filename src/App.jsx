import './App.css';

const services = [
  {
    title: 'Comprehensive Courses',
    desc: 'Master C & C++, Java Full Stack, .NET, React Advanced, AI, and more with industry-aligned curriculum.'
  },
  {
    title: 'Interview Prep',
    desc: 'Sharpen your skills with mock interviews, coding challenges, and expert guidance.'
  },
  {
    title: 'Resume Building',
    desc: 'Craft a standout resume with personalized tips and templates from hiring experts.'
  },
  {
    title: '100% Placement Support',
    desc: 'Get dedicated placement assistance, job referrals, and real-world projects.'
  },
  {
    title: 'Internship Opportunities',
    desc: 'Access exclusive internships to gain hands-on experience and boost your career.'
  }
];

const courses = [
  {
    name: 'C & C++',
    curriculum: [
      'Programming Basics',
      'Data Structures',
      'OOP Concepts',
      'File Handling',
      'Projects & Problem Solving'
    ]
  },
  {
    name: 'Java Full Stack Development',
    curriculum: [
      'Core Java',
      'Spring Boot',
      'REST APIs',
      'Frontend (React/Angular)',
      'Database Integration',
      'Deployment & DevOps'
    ]
  },
  {
    name: '.NET',
    curriculum: [
      'C# Fundamentals',
      '.NET Core',
      'Web APIs',
      'Entity Framework',
      'MVC Architecture',
      'Cloud Deployment'
    ]
  },
  {
    name: 'React Advanced',
    curriculum: [
      'React Hooks & Context',
      'State Management',
      'Performance Optimization',
      'Testing & Debugging',
      'Real-world Projects'
    ]
  },
  {
    name: 'AI',
    curriculum: [
      'Python for AI',
      'Machine Learning Basics',
      'Deep Learning',
      'NLP & Computer Vision',
      'AI Projects'
    ]
  },
  {
    name: 'Interview Prep',
    curriculum: [
      'DSA Mastery',
      'System Design',
      'Behavioral Rounds',
      'Mock Interviews',
      'HR & Technical Guidance'
    ]
  },
  {
    name: 'Resume Building',
    curriculum: [
      'Resume Writing',
      'ATS Optimization',
      'Portfolio Projects',
      'LinkedIn Profile',
      'Personal Branding'
    ]
  },
  {
    name: 'Placement & Internship',
    curriculum: [
      'Placement Drives',
      'Industry Connect',
      'Internship Projects',
      'Job Referrals',
      'Career Counseling'
    ]
  }
];

function App() {
  return (
    <div className="App">
      {/* Header with logo and navigation */}
      <header className="header">
        <img src="/codeveda2.png" alt="CodeVeda Logo" className="logo" />
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#services">Our Services</a>
          <a href="#about">About Us</a>
          <a href="#courses">Courses</a>
          <a href="#placement">Placement</a>
          <a href="#contact">Contact</a>
          <a href="#registration" className="join-now">Join Now</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Decode the Knowledge of Code</h1>
        <p>Empowering your tech journey with top-notch courses, placement support, and more.</p>
        <a href="#registration" className="cta-btn">Join Now</a>
      </section>

      {/* Our Services */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: '#F5F6FA', borderRadius: 12, boxShadow: '0 2px 8px #0A234210', padding: '1.5rem', maxWidth: 260, minWidth: 220 }}>
              <h3 style={{ color: '#FF6F00', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: '#22223B', fontSize: '1em' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.1em', color: '#22223B' }}>
          <b>CodeVeda</b> is on a mission to decode the knowledge of code for everyone. We blend expert-led teaching, hands-on projects, and real-world placement support to help you launch and accelerate your tech career. Our vision is to make high-quality tech education accessible, practical, and outcome-driven for all learners.
        </p>
      </section>

      {/* Courses */}
      <section id="courses" className="courses">
        <h2>Courses & Curriculum</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {courses.map((course, i) => (
            <div key={i} style={{ background: '#F5F6FA', borderRadius: 12, boxShadow: '0 2px 8px #0A234210', padding: '1.5rem', maxWidth: 260, minWidth: 220 }}>
              <h3 style={{ color: '#0A2342', marginBottom: 8 }}>{course.name}</h3>
              <ul style={{ textAlign: 'left', color: '#22223B', fontSize: '0.98em', paddingLeft: 18 }}>
                {course.curriculum.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Placement */}
      <section id="placement" className="placement">
        <h2>Placement & Success</h2>
        <p style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.1em', color: '#22223B' }}>
          We offer 100% placement support with dedicated career counseling, resume reviews, mock interviews, and direct job referrals. Our alumni have landed roles at top tech companies and startups. Join CodeVeda and unlock your path to a successful tech career!
        </p>
      </section>

      {/* Contact Details */}
      <section id="contact" className="contact">
        <h2>Contact Details</h2>
        <div style={{ fontSize: '1.1em', color: '#22223B', lineHeight: '2em' }}>
          <div><b>Address:</b> 123, Tech Park, Bengaluru, India</div>
          <div><b>Email:</b> info@codeveda.org</div>
          <div><b>Phone:</b> +91 98765 43210</div>
        </div>
      </section>

      {/* Registration / Join Now */}
      <section id="registration" className="registration">
        <h2>Join Now</h2>
        <form style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2em' }}>
          <input type="text" placeholder="Full Name" required style={{ padding: '0.8em', borderRadius: 6, border: '1px solid #DDD' }} />
          <input type="email" placeholder="Email Address" required style={{ padding: '0.8em', borderRadius: 6, border: '1px solid #DDD' }} />
          <input type="tel" placeholder="Phone Number" required style={{ padding: '0.8em', borderRadius: 6, border: '1px solid #DDD' }} />
          <input type="text" placeholder="Address" required style={{ padding: '0.8em', borderRadius: 6, border: '1px solid #DDD' }} />
          <button type="submit" className="cta-btn">Register</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CodeVeda. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
