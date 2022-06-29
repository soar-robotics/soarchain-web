import { Fragment, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = ({ context, ...rest }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} {...rest} className='slider'>
      {context.map((item, index) => (
        <Carousel.Item key={index} className='text-center p-5'>
          <h1>{item.title}</h1>
          <p className='px-5'>{item.text}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
