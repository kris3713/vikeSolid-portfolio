import LinkedIn_Icon from '../assets/icons8-linkedin-30.svg';
import GitHub_Icon from './../assets/github.svg';

type Props = {
  href?: string;
  'aria-label'?: string;
}

const GitHub = (props: Props) => (
  <a
    id='github'
    href={props.href}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={props['aria-label'] ?? 'GitHub'}
  >
    <img width={24} height={24} src={GitHub_Icon} />
  </a>
);

const LinkedIn = () => (
  <a
    id='linkedin'
    href='https://www.linkedin.com/in/kris-schneider-b6715b230/'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='LinkedIn'
  >
    <img width={30} height={30} src={LinkedIn_Icon} />
  </a>
);

export { GitHub, LinkedIn };
