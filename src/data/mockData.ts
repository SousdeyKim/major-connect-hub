import { Major, Mentor, University, TimeSlot } from '@/types';

export const universities: University[] = [
  { id: 'itc', name: 'Institute of Technology of Cambodia', nameKh: 'វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា', location: 'Phnom Penh' },
  { id: 'rupp', name: 'Royal University of Phnom Penh', nameKh: 'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ', location: 'Phnom Penh' },
  { id: 'num', name: 'National University of Management', nameKh: 'សាកលវិទ្យាល័យជាតិគ្រប់គ្រង', location: 'Phnom Penh' },
  { id: 'uc', name: 'University of Cambodia', nameKh: 'សាកលវិទ្យាល័យកម្ពុជា', location: 'Phnom Penh' },
  { id: 'puc', name: 'Pannasastra University of Cambodia', nameKh: 'សាកលវិទ្យាល័យបញ្ញាសាស្រ្តកម្ពុជា', location: 'Phnom Penh' },
];

export const majors: Major[] = [
  {
    id: 'computer-science',
    name: 'Computer Science',
    nameKh: 'វិទ្យាសាស្ត្រកុំព្យូទ័រ',
    description: 'Study of computation, algorithms, and information systems',
    overview: 'Computer Science is the study of computers and computational systems. It encompasses theory, design, development, and application of software and hardware systems.',
    misconceptions: [
      'You need to be a math genius to succeed',
      'It\'s all about coding - actually involves problem-solving, design, and communication',
      'You\'ll be fixing computers for family members',
      'AI will replace all programmers'
    ],
    careerPaths: ['Software Engineer', 'Data Scientist', 'Product Manager', 'DevOps Engineer', 'AI/ML Engineer'],
    icon: '💻',
    category: 'Technology'
  },
  {
    id: 'business-administration',
    name: 'Business Administration',
    nameKh: 'គ្រប់គ្រងពាណិជ្ជកម្ម',
    description: 'Learn to manage organizations and lead teams effectively',
    overview: 'Business Administration provides a broad foundation in management principles, covering finance, marketing, operations, and strategic planning.',
    misconceptions: [
      'It\'s an easy degree with no real skills',
      'You\'ll be a CEO right after graduation',
      'Only for people who want office jobs',
      'Numbers aren\'t important'
    ],
    careerPaths: ['Business Analyst', 'Marketing Manager', 'HR Manager', 'Operations Manager', 'Entrepreneur'],
    icon: '📊',
    category: 'Business'
  },
  {
    id: 'civil-engineering',
    name: 'Civil Engineering',
    nameKh: 'វិស្វកម្មស៊ីវិល',
    description: 'Design and build infrastructure that shapes communities',
    overview: 'Civil Engineering focuses on the design, construction, and maintenance of infrastructure like roads, bridges, buildings, and water systems.',
    misconceptions: [
      'Just about building bridges',
      'Too much math, no creativity',
      'Declining field due to automation',
      'Only work outdoors in harsh conditions'
    ],
    careerPaths: ['Structural Engineer', 'Construction Manager', 'Urban Planner', 'Environmental Engineer', 'Project Manager'],
    icon: '🏗️',
    category: 'Engineering'
  },
  {
    id: 'medicine',
    name: 'Medicine',
    nameKh: 'វេជ្ជសាស្ត្រ',
    description: 'Heal and care for people through medical science',
    overview: 'Medicine is the science and practice of diagnosing, treating, and preventing disease. It requires dedication, empathy, and continuous learning.',
    misconceptions: [
      'Doctors are always wealthy',
      'Medical school guarantees success',
      'It\'s only about memorization',
      'Work-life balance is impossible'
    ],
    careerPaths: ['General Practitioner', 'Specialist Doctor', 'Surgeon', 'Medical Researcher', 'Public Health Officer'],
    icon: '🩺',
    category: 'Health'
  },
  {
    id: 'architecture',
    name: 'Architecture',
    nameKh: 'ស្ថាបត្យកម្ម',
    description: 'Create spaces that inspire and serve communities',
    overview: 'Architecture combines art and engineering to design buildings and structures. It balances aesthetics, functionality, sustainability, and human needs.',
    misconceptions: [
      'Just drawing pretty buildings',
      'You need to be an artist',
      'All architects are rich and famous',
      'Software will replace architects'
    ],
    careerPaths: ['Architect', 'Interior Designer', 'Urban Designer', 'Landscape Architect', 'Sustainability Consultant'],
    icon: '🏛️',
    category: 'Design'
  },
  {
    id: 'law',
    name: 'Law',
    nameKh: 'នីតិសាស្ត្រ',
    description: 'Understand and practice the rules that govern society',
    overview: 'Law is the study of legal systems, principles, and practices. It prepares students for careers in legal practice, policy-making, and advocacy.',
    misconceptions: [
      'Lawyers just argue in court',
      'You need to memorize every law',
      'All lawyers make a lot of money',
      'It\'s a boring desk job'
    ],
    careerPaths: ['Lawyer', 'Judge', 'Legal Consultant', 'Corporate Counsel', 'Human Rights Advocate'],
    icon: '⚖️',
    category: 'Social Sciences'
  },
];

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const dates = ['2026-02-01', '2026-02-02', '2026-02-03', '2026-02-05', '2026-02-06'];
  const times = [
    { start: '09:00', end: '10:30' },
    { start: '13:00', end: '14:30' },
    { start: '15:00', end: '16:30' },
    { start: '18:00', end: '19:30' },
  ];

  dates.forEach((date, di) => {
    times.forEach((time, ti) => {
      slots.push({
        id: `slot-${di}-${ti}`,
        date,
        startTime: time.start,
        endTime: time.end,
        isAvailable: Math.random() > 0.3,
      });
    });
  });

  return slots;
};

export const mentors: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Sokha Chan',
    nameKh: 'ចាន់ សុខា',
    university: universities[0],
    major: majors[0],
    yearOfStudy: 4,
    academicBackground: 'Scholarship recipient, Dean\'s list student. Completed internship at a leading tech company.',
    satisfaction: 'enjoys',
    rating: 4.8,
    reviewCount: 23,
    bio: 'Passionate about software development and helping students discover the joy of programming. Happy to share my journey from struggling with first coding assignments to loving what I do.',
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'mentor-2',
    name: 'Bopha Srey',
    nameKh: 'ស្រី បុប្ផា',
    university: universities[1],
    major: majors[0],
    yearOfStudy: 3,
    academicBackground: 'Active in coding competitions. Contributing to open source projects.',
    satisfaction: 'neutral',
    rating: 4.5,
    reviewCount: 15,
    bio: 'I can give you an honest perspective on Computer Science - the good and the challenging parts. My experience has been mixed but valuable.',
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'mentor-3',
    name: 'Virak Prum',
    nameKh: 'ប្រុំ វីរៈ',
    university: universities[2],
    major: majors[1],
    yearOfStudy: 4,
    academicBackground: 'President of Business Club, organized multiple startup events.',
    satisfaction: 'enjoys',
    rating: 4.9,
    reviewCount: 31,
    bio: 'Business Administration opened doors I never expected. Let me help you understand what this degree really offers beyond the textbooks.',
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'mentor-4',
    name: 'Kunthea Mao',
    nameKh: 'ម៉ៅ គន្ធា',
    university: universities[0],
    major: majors[2],
    yearOfStudy: 5,
    academicBackground: 'Completed fieldwork projects, involved in sustainable infrastructure research.',
    satisfaction: 'enjoys',
    rating: 4.7,
    reviewCount: 19,
    bio: 'Civil Engineering is challenging but incredibly rewarding. I love seeing designs come to life and contribute to Cambodia\'s development.',
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'mentor-5',
    name: 'Dara Kim',
    nameKh: 'គីម តារា',
    university: universities[3],
    major: majors[3],
    yearOfStudy: 6,
    academicBackground: 'Currently in clinical rotations, volunteer at community health clinics.',
    satisfaction: 'neutral',
    rating: 4.6,
    reviewCount: 27,
    bio: 'Medicine is a long journey. I want to be honest about both the sacrifices and the profound fulfillment it brings.',
    availableSlots: generateTimeSlots(),
  },
  {
    id: 'mentor-6',
    name: 'Sovanna Ly',
    nameKh: 'ឡី សុវណ្ណា',
    university: universities[4],
    major: majors[4],
    yearOfStudy: 4,
    academicBackground: 'Won regional design competition, interned at architecture firm.',
    satisfaction: 'enjoys',
    rating: 4.8,
    reviewCount: 14,
    bio: 'Architecture is where art meets function. I\'d love to share how creative and technical skills come together in this field.',
    availableSlots: generateTimeSlots(),
  },
];

export const getMentorsByMajor = (majorId: string): Mentor[] => {
  return mentors.filter(mentor => mentor.major.id === majorId);
};

export const getMajorById = (majorId: string): Major | undefined => {
  return majors.find(major => major.id === majorId);
};

export const getMentorById = (mentorId: string): Mentor | undefined => {
  return mentors.find(mentor => mentor.id === mentorId);
};
