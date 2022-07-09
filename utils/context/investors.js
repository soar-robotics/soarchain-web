import { Shield, Cast, Cloud, Cpu } from 'react-feather';

const solutionsIcons = { size: 120, stroke: 1 };

export const solutionsList = [
  {
    title: 'Safety & Emergency',
    icon: (
      <Shield
        size={solutionsIcons.size}
        strokeWidth={solutionsIcons.stroke}
        className='text-purple'
      />
    ),
  },
  {
    title: 'Artificial Intelligence',
    icon: (
      <Cpu size={solutionsIcons.size} strokeWidth={solutionsIcons.stroke} className='text-purple' />
    ),
  },
  {
    title: 'Smart City',
    icon: (
      <Cloud
        size={solutionsIcons.size}
        strokeWidth={solutionsIcons.stroke}
        className='text-purple'
      />
    ),
  },
  {
    title: 'Advertisement',
    icon: (
      <Cast
        size={solutionsIcons.size}
        strokeWidth={solutionsIcons.stroke}
        className='text-purple'
      />
    ),
  },
];
