import { footer } from '@/constants/home';
import NavLink from '../NavLink';

const FooterNav = () => {
  const data = footer.navlink;

  return (
    <ul className='flex flex-wrap space-x-5 justify-center'>
      {data.map((e) => (
        <li key={e.href}>
          <NavLink href={e.href} label={e.name} />
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
