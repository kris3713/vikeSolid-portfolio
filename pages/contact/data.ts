import { Mail, MapPin, type LucideProps } from 'lucide-solid';
import { type JSX } from 'solid-js';

import { GitHub, LinkedIn } from '../../components/CustomIcons';

type Info = {
  lucideIcon?: (props: LucideProps) => JSX.Element;
  icon?: () => JSX.Element;
  label: string;
  desc: string;
  url?: string;
};

const info: Info[] = [
  {
    lucideIcon: Mail,
    label: 'Email',
    desc: 'Kris37Schneider@vivaldi.net',
    url: 'mailto:Kris37Schneider@vivaldi.net'
  },
  {
    lucideIcon: MapPin,
    label: 'Location',
    desc: 'Canada, Alberta, Calgary'
  },
  {
    icon: GitHub,
    label: 'GitHub',
    desc: 'github.com/kris3713',
    url: 'https://github.com/kris3713'
  },
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    desc: 'www.linkedin.com/in/kris-schneider-b6715b230',
    url: 'https://www.linkedin.com/in/kris-schneider-b6715b230/'
  }
];

export default info;
