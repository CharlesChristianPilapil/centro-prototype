import FeaturesTab from './features-tab';
import Section from './section';
import { features } from '@/constants/home';

const FeaturesWrapper = () => {
  return (
    <Section>
      <div className='grid'>
        {features.map((e, index) => (
          <FeaturesTab
            image={e.image}
            title={e.title}
            description={e.description}
            index={index}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default FeaturesWrapper;
