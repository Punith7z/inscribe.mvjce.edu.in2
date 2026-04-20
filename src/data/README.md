# Data Files

This directory contains data files for the application.

## Files

- `domains.js` - Domain/workshop information
- `events.js` - Event listings
- `team.js` - Team member information

## Adding Data

### Team Members

Edit `team.js` to add team members. The structure is:

```javascript
export const facultyCoordinator = [
  {
    id: 1,
    name: 'Name',
    role: 'Faculty Coordinator',
    image: '/images/path.jpg',
    domain: '',
    social: {
      instagram: 'https://instagram.com/...',
      github: 'https://github.com/...',
      linkedin: 'https://linkedin.com/in/...'
    }
  }
]

export const leadership = [
  {
    id: 1,
    name: 'Name',
    role: 'President',
    image: '/images/path.jpg',
    domain: '',
    social: {
      instagram: 'https://instagram.com/...',
      github: 'https://github.com/...',
      linkedin: 'https://linkedin.com/in/...'
    }
  }
]

export const domainLeads = [
  {
    id: 1,
    name: 'Name',
    role: 'Domain Lead',
    domain: 'Web Development',
    image: '/images/path.jpg',
    social: {instagram: 'https://instagram.com/...',
      github: 'https://github.com/...',
      linkedin: 'https://linkedin.com/in/...'}
  }
]

export const teamMembers = [
  {
    domain: 'Web Development',
    members: [
      {
        id: 1,
        name: 'Name',
        role: 'Member',
        image: '/images/path.jpg',
        social: {
                instagram: 'https://instagram.com/...',
                github: 'https://github.com/...',
                linkedin: 'https://linkedin.com/in/...'}
      }
    ]
  }
]
```

### Events

Edit `events.js` to add events:

```javascript
export const events = [
  {
    id: 1,
    image: '/images/event.jpg',
    title: 'Event Title',
    tagline: 'Event tagline',
    description: 'Full event description'
  }
]
```

### Domains

Edit `domains.js` to modify domains:

```javascript
export const domains = [
  {
    id: 1,
    icon: 'fa-code', // Font Awesome icon class
    title: 'Domain Title',
    description: 'Short description',
    fullDescription: 'Full description'
  }
]
```

