// Course data for ProTrainings integration
// Replace the affiliateLink URLs with your actual ProTrainings affiliate links
// You can find your affiliate links in your ProTrainings affiliate dashboard

export const courses = [
  {
    id: 1,
    title: 'First Aid at Work',
    category: 'first-aid',
    description: 'Comprehensive first aid training for workplace environments. Covers essential life-saving skills and emergency response procedures.',
    duration: '3 Days',
    level: 'Level 3',
    price: 'From £150',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    // TODO: Replace with your ProTrainings affiliate link
    // Format: https://protrainings.uk/courses/[course-slug]?ref=[your-affiliate-id]
    affiliateLink: 'https://protrainings.uk/courses/first-aid-at-work',
    featured: true,
  },
  {
    id: 2,
    title: 'Health and Safety in the Workplace',
    category: 'health-safety',
    description: 'Essential health and safety training covering risk assessment, hazard identification, and workplace safety regulations.',
    duration: '1 Day',
    level: 'Level 2',
    price: 'From £75',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    // TODO: Replace with your ProTrainings affiliate link
    affiliateLink: 'https://protrainings.uk/courses/health-safety-workplace',
    featured: true,
  },
  {
    id: 3,
    title: 'Food Safety and Hygiene',
    category: 'food-safety',
    description: 'Complete food safety training for food handlers. Covers HACCP, food hygiene regulations, and safe food handling practices.',
    duration: '1 Day',
    level: 'Level 2',
    price: 'From £65',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
    // TODO: Replace with your ProTrainings affiliate link
    affiliateLink: 'https://protrainings.uk/courses/food-safety',
    featured: true,
  },
  {
    id: 4,
    title: 'Paediatric First Aid',
    category: 'first-aid',
    description: 'Specialized first aid training for those working with children and infants. Meets Ofsted requirements.',
    duration: '2 Days',
    level: 'Level 3',
    price: 'From £120',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
    // TODO: Replace with your ProTrainings affiliate link
    affiliateLink: 'https://protrainings.uk/courses/paediatric-first-aid',
    featured: false,
  },
  {
    id: 5,
    title: 'Mental Health First Aid',
    category: 'healthcare',
    description: 'Learn to identify, understand, and help someone experiencing a mental health issue. Become a certified Mental Health First Aider.',
    duration: '2 Days',
    level: 'Level 3',
    price: 'From £200',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
    // TODO: Replace with your ProTrainings affiliate link
    affiliateLink: 'https://protrainings.uk/courses/mental-health-first-aid',
    featured: false,
  },
  {
    id: 6,
    title: 'Safeguarding Children',
    category: 'childcare',
    description: 'Essential safeguarding training for anyone working with children. Covers child protection policies and procedures.',
    duration: '1 Day',
    level: 'Level 2',
    price: 'From £80',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
    // TODO: Replace with your ProTrainings affiliate link
    affiliateLink: 'https://protrainings.uk/courses/safeguarding-children',
    featured: false,
  },
  // Add more courses below following the same format
]

export const categories = [
  { id: 'all', name: 'All Courses' },
  { id: 'health-safety', name: 'Health & Safety' },
  { id: 'first-aid', name: 'First Aid' },
  { id: 'food-safety', name: 'Food Safety' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'childcare', name: 'Childcare' },
  // Add more categories as needed
]
