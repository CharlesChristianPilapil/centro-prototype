import Wrapper from './wrapper';
import Select from './Select';
import Option from './Option';

const Filter = () => {
  const year = [
    {
      value: 0,
      text: `2024`,
    },
    {
      value: 1,
      text: `2023`,
    },
    {
      value: 2,
      text: `2022`,
    },
    {
      value: 3,
      text: `2021`,
    },
  ];

  const region = [
    {
      value: 0,
      text: `region 1`,
    },
    {
      value: 1,
      text: `region 2`,
    },
    {
      value: 2,
      text: `region 3`,
    },
    {
      value: 3,
      text: `region 4`,
    },
  ];

  const province = [
    {
      value: 0,
      text: `Metro Manila`,
    },
    {
      value: 1,
      text: `Quirino`,
    },
    {
      value: 2,
      text: `Quezon`,
    },
    {
      value: 3,
      text: `Pampanga`,
    },
  ];

  const city = [
    {
      value: 0,
      text: `Makati`,
    },
    {
      value: 1,
      text: `Caloocan`,
    },
    {
      value: 2,
      text: `Cavite`,
    },
    {
      value: 3,
      text: `Pasay`,
    },
  ];

  return (
    <Wrapper title='Filter'>
      <form className='grid grid-cols-4 space-x-4 mx-4'>
        <Select id='Year'>
          {year.map((e) => (
            <Option value={e.value} key={e.value}>
              {e.text}
            </Option>
          ))}
        </Select>
        <Select id='Region'>
          {region.map((e) => (
            <Option value={e.value} key={e.value}>
              {e.text}
            </Option>
          ))}
        </Select>
        <Select id='Province'>
          {province.map((e) => (
            <Option value={e.value} key={e.value}>
              {e.text}
            </Option>
          ))}
        </Select>
        <Select id='City/Municipality'>
          {city.map((e) => (
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
