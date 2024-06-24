// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Joseph Kim',
  domain: 'josephsookim.com', // add without https:// , used in meta tags and share urls
  image: '/images/people/JOSEPH_PFP.jpg',
  email: 'josephkimcodes@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'josephsookim.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'josephsookim',
    linkedin: 'josephsookim',
    facebook: '',
    twitter: '',
    instagram: 'josephsookim',
    codestats: '' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RESUME_JOSEPH_KIM.pdf' // add files in static folder
  },
  uses: {
    enabled: false,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Paper Triangles', src: '/images/companies/papertriangles.png', url: 'https://www.papertriangles.com/' },
      { name: 'DataAnnotation.tech', src: '/images/companies/dataannotationtech.png', url: 'https://www.dataannotation.tech/' },
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      { name: 'Jacob Jun', designation: 'Software Engineer Intern, Google', image: '/images/people/jacob_jun.jpeg', linkedin: 'https://www.linkedin.com/in/jacob-jun/', content: 'Collaborating with Joseph has been a truly enriching experience. He consistently demonstrates an exceptional work ethic, dedicating himself tirelessly to every task and project. His perseverance, even in the face of challenging situations, is particularly admirable, as he approaches each obstacle with a positive attitude and a solution-oriented mindset. Joseph\'s commitment and resilience not only drive projects forward but also inspire those around him to strive for excellence.' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'resume',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech/life',
        haveALook: 'have a look',
        friendlyNeighborhood: 'i am a',
        description: 'i used to be a freelancer, but right now im finding my passion in software engineering',
        words: ['developer', 'hard worker', 'designer', 'teammate', 'programmer', 'leader'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts via email: josephkimcodes@gmail.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'what do i say'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my peers/mentors say'
      }
    }
  }
}
