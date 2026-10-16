import { Component } from '@angular/core';
import { Button } from '../reusable/button/button';
import { Logo } from '../reusable/logo/logo';
import { Card } from '../reusable/card/card';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Button, Logo, Card, UpperCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  videoId = 't8QNiGy4eOI';

  frameworkItems = [
    {
      id: 0,
      heading: 'P',
      title: 'PUBLISH',
      subTitle: '',
      content: 'Build the skills to communicate and publish meaningful research.',
      link: '#',
      linkText: 'Explore resources →',
      showOverlay: true,
      showOuterBorder: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
      outerBorderTextTag: '',
      showOuterTextTag: false,
    },
    {
      id: 1,
      heading: 'R',
      title: 'RESEARCH',
      subTitle: '',
      content: 'Develop sound research knowledge, skills and practice.',
      link: '#',
      linkText: 'Explore training →',
      showOverlay: true,
      showOuterBorder: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
      outerBorderTextTag: '',
      showOuterTextTag: false,
    },
    {
      id: 2,
      heading: 'I',
      title: 'IMPACT',
      subTitle: '',
      content: 'Connect research with meaningful academic and societal outcome.',
      link: '#',
      linkText: 'Explore opportunities →',
      showOverlay: true,
      showOuterBorder: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
      outerBorderTextTag: '',
      showOuterTextTag: false,
    },
    {
      id: 3,
      heading: 'C',
      title: 'COLLABORATE',
      subTitle: '',
      content: 'Build connections, mentorship and cross-disciplinary partnerships.',
      link: '#',
      linkText: 'Explore resources →',
      showOverlay: true,
      showOuterBorder: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
      outerBorderTextTag: '',
      showOuterTextTag: false,
    },
  ];

  upcomingEvents = [
    {
      id: 0,
      heading: 'training',
      title: 'YRA Global Research Bootcamp 2026',
      subTitle: '20 Aug · Online · 4 Weeks',
      content: 'Intensive research training for emerging researchers and scholars.',
      link: '#',
      linkText: 'Register now →',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: 'research bootcamp',
      showOuterTextTag: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
    },
    {
      id: 1,
      heading: 'seminar',
      title: 'How to Write a Systematic Literature Review',
      subTitle: '30 Aug · Online · 1 Day',
      content: 'Practical session on systematic literature review and publication.',
      link: '#',
      linkText: 'View details →',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: 'slr masterclass',
      showOuterTextTag: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
    },
    {
      id: 2,
      heading: 'workshop',
      title: 'Data Analysis with SPSS for Researchers',
      subTitle: '10 Sep · Online · 2 Days',
      content: 'Hands-on training on data analysis and interpretation.',
      link: '#',
      linkText: 'View details →',
      showOverlay: false,
      showOuterBorder: true,
      outerBorderTextTag: 'data analysis',
      showOuterTextTag: true,
      showButton: false,
      buttonType: '',
      buttonText: '',
    },
  ];

  resources = [
    {
      id: 0,
      heading: 'F',
      title: 'Free Resources',
      subTitle: '',
      content: 'Explore guides, templates and learning materials.',
      link: '#',
      linkText: '',
      showOverlay: false,
      showOuterBorder: false,
      showButton: true,
      buttonType: 'white',
      buttonText: 'Browse free →',
      outerBorderTextTag: '',
      showOuterTextTag: false,
    },
    {
      id: 1,
      heading: 'P',
      title: 'Premium Resources',
      subTitle: '',
      content: 'Access premium guides, templates and research toolkits.',
      link: '#',
      linkText: '',
      showOverlay: false,
      showOuterBorder: false,
      showButton: true,
      buttonType: 'orange',
      buttonText: 'Browse premium →',
      outerBorderTextTag: '',
      showOuterTextTag: false,
    }
  ]

  clickChildButton(buttonName: string) {
    console.log(`Button clicked: ${buttonName}`);
  }
}
