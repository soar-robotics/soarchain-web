import Link from 'next/link';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';

import { exploreSliderContext, showcaseSliderContext } from '../utils/context/sliderContext';

export const ShowcaseSlider = ({ ...rest }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      indicators={false}
      onSelect={handleSelect}
      nextIcon={
        <span className='bg-white rounded-circle p-1'>
          <ChevronRight color='black' />
        </span>
      }
      prevIcon={
        <span className='bg-white rounded-circle p-1'>
          <ChevronLeft color='black' />
        </span>
      }
      {...rest}
      className='slider'
    >
      {showcaseSliderContext.map((item, index) => (
        <Carousel.Item key={index}>
          <div className='d-flex flex-column flex-md-row justify-content-center gap-4 align-items-center w-50 mx-auto'>
            <span className='w-25 w-md-100'>{item.icon}</span>
            <span className='display-6 font-weight-light m-0 text-center'>{item.title}</span>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export const ExploreSlider = ({ ...rest }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      indicators={false}
      onSelect={handleSelect}
      variant='dark'
      nextIcon={
        <span className='bg-primary rounded-circle p-1'>
          <ChevronRight color='white' />
        </span>
      }
      prevIcon={
        <span className='bg-primary rounded-circle p-1'>
          <ChevronLeft color='white' />
        </span>
      }
      {...rest}
      className='slider'
    >
      {exploreSliderContext.map((item, index) => (
        <Carousel.Item key={index}>
          <div className='d-flex flex-column gap-4 align-items-center w-75 mx-auto text-center'>
            <span className='display-6 fw-bold m-0'>{item.title}</span>
            <div className='separator'></div>
            <span>{item.description}</span>
            <Link href='/solutions/soarchain'>
              <a className='btn btn-primary py-2 px-5 text-uppercase text-white'>
                <small>learn more</small>
              </a>
            </Link>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
