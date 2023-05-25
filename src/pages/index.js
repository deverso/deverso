import React from 'react'
// import { graphql } from 'gatsby'
// import SEO from '../components/seo'
// import PostItem from '../components/PostItem'
// import TitlePage from '../components/TitlePage'
// import LocalizedLink from '../components/LocalizedLink'
// import useTranslations from '../components/useTranslations'

// import * as S from '../components/ListWrapper/styled'
import { Profile } from '../components/Profile'
import {
    Github,
    LinkedinSquare,
    Google,
    Blogger,
    StackOverflow,
    Behance,
} from 'styled-icons/boxicons-logos'
import { Phone } from 'styled-icons/boxicons-regular'
import styled from 'styled-components'

const getAge = birthDate =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10)

function randomColor () {
    const hex = ((Math.random() * 0xffffff) << 0).toString(16)
    return `#${hex}`
}

export const S = {
    Title: styled.h1`
        font-size: 40px;
        font-weight: bold;
        line-height: 48px;
    `,
    SubTitle: styled.h3`
        font-size: 30px;
        font-weight: bold;
        line-height: 48px;
        margin: 0;
        margin-bottom: 10px;
    `,
    Email: styled.div`
        font-size: 20px;
    `,
    AboutMe: styled.section`
        margin-bottom: 40px;
    `,
    AboutMeAge: styled.div`
        font-size: 18px;
    `,
    MoreAboutMe: styled.section`
        margin-bottom: 40px;
    `,
    MoreAboutMeDescription: styled.p`
        font-size: 18px;
        margin-bottom: 16px;
    `,
    Occupation: styled.h2`
        font-size: 20px;
        margin: 0;
        margin-bottom: 40px;
    `,
    Experiences: styled.section`
        page-break-before: always;
    `,
    Experience: styled.div`
        line-height: 32px;
        margin-bottom: 30px;
    `,
    DescriptionJobs: styled.ul`
        font-size: 18px;
        list-style: disc;
        padding-left: 20px;
    `,
    Company: styled.div`
        font-size: 24px;
        font-weight: bold;
        margin-bottom: -10px;
    `,
    CompanyOccupation: styled.div`
        font-size: 18px;
    `,
    CompanyTime: styled.div`
        font-size: 18px;
    `,
    PostItemTag: styled.span`
        background: var(--bg-light);
        display: inline-flex;
        font-size: 1.6rem;
        margin-bottom: var(--space-sm);
        padding: 0 1rem;
        height: 2.5rem;
        margin: 0.2rem;
        border-radius: 1.2rem;
        align-items: center;

        @media print {
            background-color: var(--bg-light) !important;
            -webkit-print-color-adjust: exact;
        }
    `,
    DateTime: styled.div`
        font-size: 14px;
        margin-bottom: -15px;

        + div {
            margin-bottom: 10px;
        }
    `,
    LatestProjectWrapper: styled.div``,
    LatestProject: styled.div`
        line-height: 42px;
        margin-bottom: 40px;
        break-inside: avoid;
    `,
    LatestProjectName: styled.div`
        font-size: 24px;
        font-weight: bold;
        margin-bottom: -10px;
    `,
    LatestProjectPreview: styled.div`
        font-size: 18px;
    `,
    LatestProjectTechnologies: styled.div``,
    Contact: styled.section`
        margin-bottom: 40px;
    `,
    ContactDetail: styled.div`
        font-size: 18px;
    `,
    Education: styled.section`
        page-break-before: always;
        margin-bottom: 40px;
    `,
    EducationDate: styled.time`
        font-size: 16px;
    `,
    EducationCourseName: styled.div`
        font-size: 24px;
        font-weight: bold;
        margin-bottom: -10px;
    `,
    EducationSchoolName: styled.div`
        font-size: 18px;
    `,
    ComplementaryEducation: styled.section`
        page-break-before: always;
        margin-bottom: 40px;
    `,
    WorkExpirence: styled.section`
        break-inside: avoid;
        margin-bottom: 40px;
    `,
    SideProjects: styled.section`
        page-break-before: always;
        margin-bottom: 40px;
    `,
    WrapperPagePrint: styled.div`
        page-break-before: always;
    `,
    Languages: styled.section`
        margin-bottom: 40px;
    `,
    Timeline: styled.div`
        /* Styling */
        .timeline {
            position: relative;
            margin-bottom: 60px;
        }
        .timeline:before {
            background-color: black;
            content: '';
            margin-left: -1px;
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 100%;
        }

        .timeline-event {
            position: relative;
        }

        .timeline-event-copy {
            padding: 1em;
            position: relative;
            break-inside: avoid;
        }
        .timeline-event-copy h3 {
            font-size: 1.75em;
        }
        .timeline-event-copy h4 {
            font-size: 1.2em;
            margin-bottom: 1.2em;
        }
        .timeline-event-copy strong {
            font-weight: 700;
        }
        .timeline-event-copy p:not(.timeline-event-thumbnail) {
            padding-bottom: 1.2em;
        }

        .timeline-event-icon {
            -moz-transition: -moz-transform 0.2s ease-in;
            -o-transition: -o-transform 0.2s ease-in;
            -webkit-transition: -webkit-transform 0.2s ease-in;
            transition: transform 0.2s ease-in;
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            background-color: black;
            outline: 10px solid white;
            display: block;
            margin: 0.5em 0.5em 0.5em -0.5em;
            position: absolute;
            top: 0;
            left: 6px;
            width: 0.5em;
            height: 0.5em;
        }

        .timeline-event-thumbnail {
            transition: box-shadow 0.5s ease-in 0.1s;
            font-size: 16px;
            box-shadow: inset 0 0 0 0em #ef795a;
            display: inline-block;
        }
    `,
}

const experiences = [
    {
        company: 'Freelancer Developer',
        occupation: '',
        time: 'Jul 2020 - Present',
        label_color: randomColor(),
        technologies: [
        ],
        description: [
            'General freelancer development',
        ],
    },{
        company: 'Zmes',
        occupation: 'Teach Lead Software Engineer',
        time: 'Nov 2020 - Jul 2020',
        label_color: randomColor(),
        technologies: [
            'PHP',
            'Laravel',
            'Ruby',
            'Node.JS',
            'React',
            'styled-components',
            'Google Cloud Platform',
            'Vercel CI/CD',
            'Vue.JS',
            'REST API',
            'Docker',
        ],
        description: [
            'Helping built a new product from scratch.',
            'Create ETL structure',
            'Working as front and backend engineer',
        ],
    },
    {
        company: 'Dafiti',
        occupation: 'Software Engineer',
        time: 'Oct 2019 - Oct 2020',
        technologies: [
            'PHP',
            'React',
            'GraphQL',
            'SSR',
            'Node.JS',
            'styled-components',
            'Kubernetes',
            'Docker',
            'BFF',
            'REST API',
        ],
        description: [
            'Worked on the squad responsible for build the new PWA',
            'Maintenance of legacy e-commerce system',
            'Improved the CI/CD on legacy softwares',
        ],
    },
    {
        company: 'Neemo',
        occupation: 'Product Manager / Software Engineer',
        time: 'Dec 2018 - May 2019',
        technologies: [
            'Ruby on Rails',
            'SCRUM',
            'Kanban',
        ],
        description: [
            'Improve product, planning, benchmark.',
            'Helping with Ruby on Rails development',
            'Bug fix and small improvements.',
        ],
    },
    {
        company: 'Tray Plataforma de E-commerce',
        occupation: 'Development Coordinator',
        time: 'May 2018 - Sep 2018',
        technologies: [
          'PHP',
          'Laravel',
          'RabbitMQ',
          'PostgreSQL',
          'JavaScript',
          'Vue.js',
          'Restful API',
          'TDD',
          'Git',
          'Gitlab CI',
          'Docker',
          'SCRUM',
          'Kanban',
        ],
        description: [
            'Leading the development team, helping improve a newly help desk software',
            'Working as scrum master, but also with personal management',
            'Find the bests technologies to put in the product.',
            'Improved the existing software and implemented new ones',
        ],
    },
    {
        company: 'Tray Plataforma de E-commerce',
        occupation: 'Software Development Team Lead',
        time: 'Jul 2017 - Apr 2018',
        technologies: [
          'Ruby on Rails',
          'RabbitMQ',
          'PostgreSQL',
          'JavaScript',
          'Vue.js',
          'Restful API',
          'TDD',
          'Git',
          'Gitlab CI',
          'Docker',
          'Vagrant',
          'Ansible',
          'SCRUM',
          'Kanban',
        ],
        description: [
            'Performinmg as scrum master, helping the scrum ceremonies, solving impediments',
            'Using Ansible to provisioning server for our application',
            'Responsible for keep an eye on our app health (mostly using New Relic and inside report softwares)',
            'Developing features and bugs fix',
        ],
    },
    {
      company: 'Tray Plataforma de E-commerce',
        occupation: 'Software Engineer',
        time: 'Oct 2013 - Jun 2017',
        technologies: [
          'PHP',
          'MySQL',
          'CakePHP',
          'JavaScript',
          'ElasticSearch',
          'Sidekiq',
          'Redis',
          'Ruby on Rails',
          'PostgreSQL',
          'Vue.js',
          'Docker',
          'Vagrant',
          'SCRUM',
          'Kanban',
        ],
        description: [
            'Development of new features and bug fixes',
            'E-commerce platform',
            'Online payment platform',
        ],
    },
    {
        company: 'Arca Solutions',
        occupation: 'iOS Developer',
        time: 'Mar 2013 - Sep 2013',
        technologies: ['Objective-C', 'PHP'],
        description: [
            'Customization of already made app with new features',
            'Development of API changes to fit the custom changes',
        ],
    },
    {
        company: 'Arca Solutions',
        occupation: 'Software Engineer',
        time: 'Mar 2011 - Sep 2013',
        technologies: [
            'PHP',
            'MySQL',
            'Javascript',
            'jQuery',
            'HTML',
            'CSS',
            'Bootstrap'
        ],
        description: [
            'Customization of yellow pages system with new features',
        ],
    },
    {
        company: 'Unimagem',
        occupation: 'Software Engineer',
        time: 'Feb 2010 - Mar 2011',
        technologies: [
            'PHP',
            'MySQL',
            'Javascript',
            'jQuery',
            'HTML',
            'CSS',
        ],
        description: [
            'Development of institutional website',
            'Development of e-learning platform',
            'Monitoring the system during e-learning session',
        ],
    },
    {
        company: 'ZR Mídia',
        occupation: 'Software Engineer',
        time: 'Sep 2008 - Jan 2010',
        technologies: [
            'PHP',
            'MySQL',
            'Javascript',
            'jQuery',
            'HTML',
            'CSS',
            'Photoshop'
        ],
        description: [
            'Development of institutional website',
            'Improvements on in-house CMS',
        ],
    },
]

const sideProjects = [
    // {
    //     name: 'Spotifood - Food with music',
    //     year: '2021',
    //     link: {
    //         github: 'https://github.com/emunhoz/spotifood',
    //         production: 'https://spotifood-ten.vercel.app/#/',
    //         figma:
    //             'https://www.figma.com/file/OIo3gx7ydjfIOC6oSI9A0a/Spotifood?node-id=0%3A1',
    //     },
    //     technologies: [
    //         'React',
    //         'styled-components',
    //         'Design System',
    //         'Figma',
    //         'Mobile First',
    //         'Lerna',
    //         'Monorepo',
    //         'Yarn workspaces',
    //         'Vercel CI/CD',
    //         'Unit test',
    //         'Integrations test',
    //     ],
    // },
]

const Resume = () => {
    return (
        <>
            <S.AboutMe>
                <S.Title>Danilo Fernando Deverso</S.Title>
                <S.Occupation>Software Engineer</S.Occupation>
            </S.AboutMe>

            <S.Contact>
                <S.ContactDetail>
                    <Google size='20' />{' '}
                    <a href='mailto:deverso@gmail.com'>
                        deverso@gmail.com
                    </a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <LinkedinSquare size='20' />{' '}
                    <a href='https://www.linkedin.com/in/danilodeverso'>
                        https://www.linkedin.com/in/danilodeverso
                    </a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <Github size='20' />{' '}
                    <a href='https://github.com/deverso'>https://github.com/deverso</a>
                </S.ContactDetail>
                <S.ContactDetail>
                    <Blogger size='20' />{' '}
                    <a href='https://deverso.dev/'>
                        Personal website
                    </a>
                </S.ContactDetail>
            </S.Contact>

            <S.MoreAboutMe>
                <S.SubTitle>About me</S.SubTitle>
                <S.MoreAboutMeDescription>
                  Brazilian, {getAge('1989-09-18')} years.
                </S.MoreAboutMeDescription>
                <S.MoreAboutMeDescription>
                    I have more than 12 years of experience in web development, working with different technologies and tools, most of those years I worked with e-commerce systems or other type of SaaS.
                </S.MoreAboutMeDescription>
                <S.MoreAboutMeDescription>
                    Main technologies:
                    <S.PostItemTag>PHP</S.PostItemTag>
                    <S.PostItemTag>Node.JS</S.PostItemTag>
                    <S.PostItemTag>Ruby on Rails</S.PostItemTag>
                    <S.PostItemTag>Laravel</S.PostItemTag>
                    <S.PostItemTag>React</S.PostItemTag>
                    <S.PostItemTag>styled-components</S.PostItemTag>
                    <S.PostItemTag>AWS</S.PostItemTag>
                    <S.PostItemTag>Google Cloud Platform</S.PostItemTag>
                    <S.PostItemTag>Vercel</S.PostItemTag>
                    <S.PostItemTag>GraphQL</S.PostItemTag>
                    <S.PostItemTag>Micro-services</S.PostItemTag>
                </S.MoreAboutMeDescription>
            </S.MoreAboutMe>

            <S.Education>
                <S.SubTitle>Educations</S.SubTitle>
                <div>
                    <S.EducationDate>Jan 2007 - Jul 2009</S.EducationDate>
                    <S.EducationCourseName>
                      Information Systems Technologist
                    </S.EducationCourseName>
                    <S.EducationSchoolName>
                      FIB - Faculdades Integradas de Bauru - Bauru, São Paulo - Brazil
                    </S.EducationSchoolName>
                </div>
            </S.Education>

            <S.Languages>
                <S.SubTitle>Languages</S.SubTitle>
                <div>
                    <S.EducationCourseName>Portuguese</S.EducationCourseName>
                    <S.EducationSchoolName>Native</S.EducationSchoolName>
                </div>
                <div>
                    <S.EducationCourseName>English</S.EducationCourseName>
                    <S.EducationSchoolName>
                      Upper-Intermediate (B2)
                    </S.EducationSchoolName>
                </div>
            </S.Languages>

            <S.ComplementaryEducation>
                <S.SubTitle>Licenses & certifications</S.SubTitle>
                <div>
                    <S.EducationDate>2019</S.EducationDate>
                    <S.EducationCourseName>
                      Scrum Foundation Professional Certificate
                    </S.EducationCourseName>
                    <S.EducationSchoolName>CertiProf®</S.EducationSchoolName>
                </div>
            </S.ComplementaryEducation>

            <S.WorkExpirence>
                <S.SubTitle>Experiences</S.SubTitle>

                <S.Timeline>
                    <ul className='timeline'>
                        {experiences.map(
                            (
                                {
                                    company,
                                    occupation,
                                    time,
                                    technologies,
                                    description,
                                },
                                key
                            ) => (
                                <li className='timeline-event' key={key}>
                                    <label className='timeline-event-icon'></label>
                                    <div className='timeline-event-copy'>
                                        <p className='timeline-event-thumbnail'>
                                            {time}
                                        </p>
                                        <S.Company>{company}</S.Company>
                                        <S.CompanyOccupation>
                                            {occupation}
                                        </S.CompanyOccupation>
                                        <div style={{ marginBottom: '20px' }}>
                                            {technologies.map((item, key) => (
                                                <S.PostItemTag key={key}>
                                                    {item}
                                                </S.PostItemTag>
                                            ))}
                                        </div>
                                        <S.DescriptionJobs>
                                            {description.map((item, key) => (
                                                <li key={key}>{item}</li>
                                            ))}
                                        </S.DescriptionJobs>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </S.Timeline>
            </S.WorkExpirence>

            <S.SideProjects>
                {/* <S.SubTitle id='last-side-projects'>
                    Last side projects
                </S.SubTitle> */}

                <S.LatestProjectWrapper>
                    {sideProjects.map(
                        ({ name, year, link, technologies }, key) => (
                            <S.LatestProject key={key}>
                                <S.DateTime>{year}</S.DateTime>
                                <S.LatestProjectName>
                                    {name}
                                </S.LatestProjectName>
                                <S.LatestProjectPreview>
                                    Preview: <a href={link.production}>Live</a>
                                </S.LatestProjectPreview>
                                {link.figma && (
                                    <S.LatestProjectPreview>
                                        Figma interface:{' '}
                                        <a href={link.figma}>interface</a>
                                    </S.LatestProjectPreview>
                                )}
                                <S.LatestProjectPreview>
                                    Github source:{' '}
                                    <a href={link.github}>Code</a>
                                </S.LatestProjectPreview>
                                <S.LatestProjectTechnologies>
                                    {technologies.map((item, key) => (
                                        <S.PostItemTag key={key}>
                                            {item}
                                        </S.PostItemTag>
                                    ))}
                                </S.LatestProjectTechnologies>
                            </S.LatestProject>
                        )
                    )}
                </S.LatestProjectWrapper>
            </S.SideProjects>
        </>
    )
}

export default Resume
