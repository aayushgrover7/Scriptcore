// Central content for ScriptCore, sourced from the project brief.

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Chapters', to: '/chapters' },
  { label: 'Events', to: '/events' },
  { label: 'Resources', to: '/resources' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export const IMPACT_STATS = [
  { value: 70, suffix: '+', label: 'Students Taught' },
  { value: 20, suffix: '+', label: 'Workshops Hosted' },
  { value: 3, suffix: '+', label: 'Schools Reached' },
  { value: 20, suffix: '+', label: 'Volunteers' },
]

export const WHAT_WE_DO = [
  {
    title: 'Learn',
    icon: 'book',
    text: 'Students gain foundational programming knowledge through engaging workshops and courses.',
  },
  {
    title: 'Build',
    icon: 'hammer',
    text: 'Participants create real-world projects that strengthen technical and problem-solving skills.',
  },
  {
    title: 'Lead',
    icon: 'star',
    text: 'Students develop leadership abilities through teaching, mentoring, and chapter involvement.',
  },
]

export const FEATURED_PROGRAMS = [
  {
    title: 'Python Fundamentals',
    text: 'Learn variables, loops, functions, and project development.',
    tag: 'Beginner',
  },
  {
    title: 'Web Development',
    text: 'Build websites using HTML, CSS, and JavaScript.',
    tag: 'Beginner → Intermediate',
  },
  {
    title: 'Java Basics',
    text: 'Explore object-oriented programming and modern technology concepts.',
    tag: 'Beginner → Intermediate',
  },
]

export const PROGRAMS = [
  {
    title: 'Python Programming',
    level: 'Beginner',
    icon: 'python',
    topics: ['Variables', 'Loops', 'Functions', 'Lists & Dictionaries', 'File Handling', 'Beginner Projects'],
    outcome: 'Build your first applications and develop a strong programming foundation.',
  },
  {
    title: 'Java Programming',
    level: 'Beginner to Intermediate',
    icon: 'java',
    topics: ['Variables & Data Types', 'Conditionals', 'Loops', 'Methods', 'Classes & Objects', 'AP Computer Science Concepts'],
    outcome: 'Learn object-oriented programming and create larger software projects.',
  },
  {
    title: 'Web Development',
    level: 'Beginner to Intermediate',
    icon: 'web',
    topics: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX Fundamentals', 'Website Deployment'],
    outcome: 'Design and publish professional websites from scratch.',
  },
  {
    title: 'LEGO Robotics',
    level: 'Beginner',
    icon: 'robot',
    topics: ['Robot Design', 'Building Techniques', 'Sensors & Motors', 'Block-Based Programming', 'Problem-Solving Challenges', 'FIRST LEGO League Concepts'],
    outcome: 'Design, build, and program robots to complete real-world missions.',
  },
  {
    title: 'Competitive Programming',
    level: 'Intermediate',
    icon: 'trophy',
    topics: ['Algorithms', 'Data Structures', 'Logic Puzzles', 'Coding Challenges', 'Competition Strategies'],
    outcome: 'Strengthen problem-solving skills and prepare for coding competitions.',
  },
  {
    title: 'Public Speaking & Presentation',
    level: 'All Levels',
    icon: 'mic',
    topics: ['Speech Writing', 'Presentation Design', 'Confidence Building', 'Leadership Communication', 'Technical Presentations', 'Audience Engagement'],
    outcome: 'Communicate ideas effectively, lead discussions, and present projects.',
  },
  {
    title: 'Leadership & Mentorship',
    level: 'Intermediate to Advanced',
    icon: 'compass',
    topics: ['Team Management', 'Workshop Facilitation', 'Event Planning', 'Mentoring Students', 'Community Outreach'],
    outcome: 'Develop leadership skills while making a positive impact in your community.',
  },
]

export const LEARNING_PATH = [
  {
    tier: 'Beginner',
    items: ['LEGO Robotics', 'Python Programming', 'Java Programming', 'Public Speaking'],
  },
  {
    tier: 'Intermediate',
    items: ['Web Development', 'Artificial Intelligence', 'Competitive Programming'],
  },
  {
    tier: 'Advanced',
    items: ['Leadership & Mentorship'],
  },
]

export const WHY_PROGRAMS = [
  'Hands-on learning',
  'Project-based curriculum',
  'Real-world applications',
  'Leadership opportunities',
  'Beginner-friendly environment',
  'Taught by passionate student instructors',
]

export const TIMELINE = [
  { year: '2023', title: 'ScriptCore Founded', text: 'A small group of students set out to make CS education accessible to everyone.' },
  { year: '2024', title: 'First Community Workshops', text: 'Launched our first workshop series and welcomed our earliest cohort of learners.' },
  { year: '2026', title: 'Expansion Into Multiple Schools', text: 'Grew into a multi-chapter network reaching students across several schools.' },
  { year: 'Future', title: 'National Network of Student-Led STEM Education', text: 'Building toward a nationwide community of student innovators and mentors.' },
]

export const EVENTS_UPCOMING = [
  {
    type: 'Workshop',
    title: 'Intro to Python: Build Your First App',
    date: 'July 12, 2026',
    location: 'Community Library · Room B',
    text: 'A hands-on beginner workshop covering variables, loops, and your first mini-project.',
  },
  {
    type: 'Hackathon',
    title: 'ScriptCore Summer Hack',
    date: 'August 9–10, 2026',
    location: 'Innovation Hub',
    text: '24 hours of building, mentorship, and prizes for student teams of all skill levels.',
  },
  {
    type: 'Competition',
    title: 'Regional Coding Challenge',
    date: 'September 21, 2026',
    location: 'Online',
    text: 'Test your algorithms and data-structures skills against students across the region.',
  },
]

export const EVENTS_PAST = [
  { title: 'Web Dev Bootcamp', date: 'March 2026', recap: 'Three sessions, 28 students shipped their first live websites.' },
  { title: 'LEGO Robotics Day', date: 'January 2026', recap: 'Teams designed and programmed robots to complete a mission course.' },
  { title: 'Java & AP CS Prep', date: 'November 2025', recap: 'A focused series helping students prepare for AP Computer Science.' },
]

export const RESOURCES = [
  { title: 'Slides', icon: 'slides', text: 'Presentation decks from every workshop, ready to review or reuse.' },
  { title: 'Lesson Plans', icon: 'plan', text: 'Structured, beginner-friendly curriculum guides for each program.' },
  { title: 'Coding Challenges', icon: 'puzzle', text: 'Practice problems and challenges to sharpen your skills at home.' },
  { title: 'Recorded Workshops', icon: 'video', text: 'Catch up on past sessions with full workshop recordings.' },
]

export const PROJECTS = [
  { title: 'Weather Dashboard', author: 'Web Development', text: 'A responsive app pulling live weather data with a clean UI.', tags: ['JavaScript', 'API'] },
  { title: 'Maze-Solving Robot', author: 'LEGO Robotics', text: 'An autonomous robot using sensors to navigate a course.', tags: ['Robotics', 'Logic'] },
  { title: 'Quiz Game', author: 'Python', text: 'A terminal quiz game with scoring and a question bank.', tags: ['Python', 'Beginner'] },
  { title: 'Portfolio Website', author: 'Web Development', text: 'A personal site showcasing student work and skills.', tags: ['HTML', 'CSS'] },
  { title: 'Number Guessing AI', author: 'Competitive Programming', text: 'A binary-search powered guessing engine.', tags: ['Algorithms'] },
  { title: 'Library Manager', author: 'Java', text: 'An OOP project modeling books, members, and checkouts.', tags: ['Java', 'OOP'] },
]

export const SUCCESS_STORIES = [
  {
    name: 'Maya R.',
    role: 'Now a peer instructor',
    quote: 'I joined ScriptCore knowing nothing about code. A year later I am teaching the Python workshop I once took.',
  },
  {
    name: 'Devon L.',
    role: 'Robotics → Competitive Programming',
    quote: 'The robotics program got me hooked, and the competition team taught me how to really think through problems.',
  },
  {
    name: 'Priya S.',
    role: 'Built her first website',
    quote: 'The web development track helped me publish my first real site. Now I build pages for local clubs.',
  },
]

export const TEAM = [
  { name: 'Alex Chen', role: 'Founder & President', focus: 'Python · Curriculum', initials: 'AC' },
  { name: 'Jordan Patel', role: 'Vice President', focus: 'Web Development', initials: 'JP' },
  { name: 'Sam Rivera', role: 'Head of Robotics', focus: 'LEGO Robotics', initials: 'SR' },
  { name: 'Taylor Kim', role: 'Events Lead', focus: 'Hackathons & Workshops', initials: 'TK' },
  { name: 'Morgan Lee', role: 'Outreach Coordinator', focus: 'Schools & Partnerships', initials: 'ML' },
  { name: 'Casey Nguyen', role: 'Mentorship Lead', focus: 'Leadership Program', initials: 'CN' },
]

export const CHAPTERS = [
  { name: 'Northgate High', city: 'Founding Chapter', members: 24, status: 'Active' },
  { name: 'Riverside Academy', city: 'Established 2025', members: 18, status: 'Active' },
  { name: 'Lincoln STEM School', city: 'Established 2026', members: 15, status: 'Active' },
  { name: 'Your School', city: 'Start a chapter', members: 0, status: 'Open' },
]

export const SOCIALS = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
]

export const CONTACT_EMAIL = 'hello@scriptcore.org'
