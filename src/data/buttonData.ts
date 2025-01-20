import { Link } from '../Buttons/LinkButton.tsx';

interface Category {
  title: string;
  links: Link[];
}

export function buttonData(fillType: 'fill' | 'line' = 'line'): Category[] {
  return [
    {
      title: 'Coding',
      links: [
        {
          title: 'GitHub',
          url: 'https://github.com/minhperry',
          icon: {
            riClass: 'github',
            mode: fillType,
          },
        },
        {
          title: 'GitLab',
          url: 'https://gitlab.com/minhperry',
          icon: {
            riClass: 'gitlab',
            mode: fillType,
          },
        },
        {
          title: 'CodeForces',
          url: 'https://codeforces.com/profile/redmcgn',
          icon: {
            riClass: 'code-s-slash',
            mode: fillType,
          },
        },
      ],
    },
    {
      title: 'Social Networking Services',
      links: [
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/minhperry02/',
          icon: {
            riClass: 'instagram',
            mode: fillType,
          },
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/minhperryy',
          icon: {
            riClass: 'twitter',
            mode: fillType,
          },
        },
        {
          title: 'Reddit',
          url: 'https://www.reddit.com/user/vietnam_redstoner',
          icon: {
            riClass: 'reddit',
            mode: fillType,
          },
        },
        {
          title: 'BlueSky',
          url: 'https://bsky.app/profile/minhperry.de',
          icon: {
            riClass: 'bluesky',
            mode: fillType,
          },
        },
        {
          title: 'Discord',
          url: '',
          icon: {
            riClass: 'discord',
            mode: fillType,
          }
        }
      ],
    },
  ];
}
