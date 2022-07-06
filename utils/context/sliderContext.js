import Image from 'next/image';

import { Shield } from 'react-feather';

export const showcaseSliderContext = [
  {
    title: 'Securing the data',
    icon: <Image src='/icon/security.png' alt='security' width={144} height={185} />,
  },
  {
    title: 'Empower people',
    icon: <Image src='/icon/power.png' alt='power' width={144} height={185} />,
  },
  {
    title: 'Connected vehicles',
    icon: <Image src='/icon/connection.png' alt='connection' width={144} height={185} />,
  },
  {
    title: 'Autonomy',
    icon: <Image src='/icon/autonomy.png' alt='autonomy' width={170} height={185} />,
  },
];

export const exploreSliderContext = [
  {
    title: 'A communication layer for mobility',
    description:
      'With utilizing celular vehicle to everything technology, we bring connected vehicles.',
  },
  {
    title: 'Open source',
    description: 'Anyone can contribute to the network and develop on it.',
  },
  {
    title: 'Designed for safety and efficiency',
    description: 'A future with no accidents in traffic with full autonomy.',
  },
  {
    title: 'A tool for smart cities',
    description: 'Help cities to evolve with your data.',
  },
  {
    title: 'Providing a mobility economy',
    description: 'Unlock the business potential of novel revenue streams in the mobility space.',
  },
];
