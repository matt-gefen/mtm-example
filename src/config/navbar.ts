export type NavBarComponentPrimative = {
  title: string
  href?: string
  description?: string
}
export type NavBarComponent = NavBarComponentPrimative & {
  components?: NavBarComponent[]
}

export type NavBarSection = {
  title: string
  href?: string
  components?: NavBarComponent[] | undefined
}

export const rightNavData = [
  {
    title: 'More',
    components: [
      {
        title: 'About',
        href: '',
      },
      { title: 'Resources', href: '' },
      {
        title: 'Why Recognize?',
        components: [
          {
            title: 'For Employees',
            href: '',
          },
          {
            title: 'For Champions',
            href: '',
          },
          {
            title: 'For Paying Tribute',
            href: '',
          },
        ],
      },
      {
        title: 'Why MTM?',
        components: [
          {
            title: 'ACE Technology',
            href: '',
          },
        ],
      },
    ],
  },
  {
    title: 'Contact',
  },
]

export const centralNavData: NavBarSection[] = [
  {
    title: 'Services',
    components: [
      {
        title: 'Service Awards',
        href: '',
      },
      {
        title: 'Social Recognition',
        href: '',
      },
      {
        title: 'Spot Awards',
        href: '',
      },
      {
        title: 'Championships',
        href: '',
        components: [
          {
            title: 'Rings & Jewlery',
            href: '',
          },
          {
            title: 'Playbook',
            href: '',
          },
          {
            title: 'Trophies & Awards',
            href: '',
          },
          {
            title: 'Specialty',
            href: '',
          },
        ],
      },
      {
        title: 'Company Celebrations',
        href: '',
      },
    ],
  },
  {
    title: 'Shop',
  },
  {
    title: 'Payments',
  },
]
