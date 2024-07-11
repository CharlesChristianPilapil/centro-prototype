import Wrapper from './wrapper';
import Select from './Select';
import Option from './Option';

const Filter = () => {
  const values = [
    {
      value: 0,
      text: `hotdog`,
    },
    {
      value: 1,
      text: `cheesedog`,
    },
    {
      value: 2,
      text: `footlong`,
    },
    {
      value: 3,
      text: `hungarian`,
    },
  ];

  return (
    <Wrapper title='Filter'>
      <form className='grid grid-cols-4 space-x-4 mx-4'>
        <Select id='Year'>
          {values.map((e) => (
            <Option value={e.value} key={e.value}>
              {e.text}
            </Option>
          ))}
        </Select>
        <Select id='Region'>
          {values.map((e) => (
            <Option value={e.value} key={e.value}>
              {e.text}
            </Option>
          ))}
        </Select>
        <Select id='Province'>
          {values.map((e) => (
            <Option value={e.value} key={e.value}>
              {e.text}
            </Option>
          ))}
        </Select>
        <Select id='City/Municipality'>
          {values.map((e) => (
            <Option value={e.value} key={e.value}>
              {e.text}
            </Option>
          ))}
        </Select>
      </form>
    </Wrapper>
  );
};

export default Filter;
