import { footer } from '@/constants/home';
import Link from 'next/link';

const FooterNav = () => {
  const data = footer.navlink;

  return (
    <ul className='flex flex-wrap space-x-5 justify-center'>
      {data.map((e) => (
        <li key={e.href}>
          <Link href={e.href}> {e.name} </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
