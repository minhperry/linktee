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
      title: 'Games',
      links: [
        {
          title: 'Steam',
          url: 'https://steamcommunity.com/id/minhperry',
          icon: {
            riClass: 'steam',
            mode: fillType,
          },
        },
        {
          title: 'Epic Games',
          url: 'https://www.epicgames.com/id/minhperry',
          icon: {
            riClass: 'gamepad',
            mode: fillType,
          },
        },
        {
          title: 'Minecraft',
          url: 'https://namemc.com/profile/minhperry.1',
          icon: {
            riClass: 'image-2',
            mode: fillType,
          },
        },
        {
          title: 'osu!',
          url: 'https://osu.ppy.sh/users/16509922',
          icon: {
            riClass: 'disc',
            mode: fillType,
          },
        }
      ]
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
          },
        },
        {
          title: 'Telegram',
          url: 'https://t.me/ligmaname',
          icon: {
            riClass: 'telegram',
            mode: fillType,
          },
        },
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/baonhieulatoitet',
          icon: {
            riClass: 'facebook',
            mode: fillType,
          },
        },
      ],
    },
    {
      title: 'Media Services',
      links: [
        {
          title: 'YouTube',
          url: 'https://www.youtube.com/@minhperry',
          icon: {
            riClass: 'youtube',
            mode: fillType,
          },
        },
        {
          title: 'Spotify',
          url: 'https://open.spotify.com/user/21b45qpa7gbq2uauwnfzdmb7i',
          icon: {
            riClass: 'spotify',
            mode: fillType,
          },
        },
        {
          title: 'SoundCloud',
          url: 'https://soundcloud.com/niminightmareenjoyer',
          icon: {
            riClass: 'soundcloud',
            mode: fillType,
          },
        },
        {
          title: 'Twitch',
          url: 'https://www.twitch.tv/minhperry',
          icon: {
            riClass: 'twitch',
            mode: fillType,
          },
        },
        {
          title: 'TikTok',
          url: 'https://www.tiktok.com/@minhperry02',
          icon: {
            riClass: 'tiktok',
            mode: fillType,
          },
        },
      ],
    },
  ];
}
