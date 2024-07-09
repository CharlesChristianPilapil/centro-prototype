import { Card } from '@/app/ui/services/Card';
import { ICard } from '@/util/interface';

export const FeatureCard = ({ id, icon, title, description }: ICard) => {
  return (
    <>
      <Card
        style='justify-center items-center'
        height='350px'
        width='350px'
        radius='20px'
      >
        <div>{icon}</div>
        <p className='font-bold text-lg mt-6'>{title}</p>
      </Card>
    </>
  );
};
