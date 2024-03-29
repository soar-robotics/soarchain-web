import Image from 'next/image';

export const motusExploreItems = [
  'Higher autonomy, less human interaction',
  'Drive more efficiently and economically',
  'Get rewarded with cryptocurrency',
  'Compatible with your existing car',
];

export const motusMainFeatures = [
  'Direct vehicle-to-vehicle wireless communication',
  'State-of-the-art Cellular-V2X physical layer',
  'Cellular communication (5G-NR/4G-LTE)',
  'Storage and processing power for executing proof-of-availability',
  'Wi-Fi and Bluetooth for user/driver connectivity',
  'Proof-of-availability with signed and encrypted Cooperative Awareness Message',
];

export const motusUseCases = [
  {
    title: 'Safety & Emergency',
    description: (
      <p>
        Traffic safety & predictive collision warnings -
        <br />
        Real time weather & hazard notifications -
        <br />
        Automatic emergency calls (eCall) -
        <br />
        Roadside assistance and medical emergencies -
        <br />
        Driver-assist features & skills improvement -
        <br />
        Safe city intelligence system -
      </p>
    ),
  },
  {
    title: 'Artificial Intelligence',
    description: (
      <p>
        - Training data for autonomous vehicles
        <br />
        - Intelligent traffic rerouting
        <br />
        - Remote driving features
        <br /> - Behavioral assistance
        <br /> - Autonomous vehicle simulation & risk management
      </p>
    ),
  },
  {
    title: 'Smart City',
    description: (
      <p>
        Traffic flow assistance -
        <br />
        Urban planning -
        <br />
        Parking services -
        <br /> Automated road toll collection -
        <br /> Intelligent road infrastructure -
      </p>
    ),
  },
  {
    title: 'Entertainment',
    description: (
      <p>
        - Audio and video content
        <br />
        - In-car VR and AR experiences <br />
        - Social media interaction
        <br /> - Interactive & geolocated advertising
        <br /> - Office and productivity solutions
      </p>
    ),
  },
  {
    title: 'Insurance',
    description: (
      <p>
        Usage-based insurance contracts -
        <br />
        Pay-as-you-drive -
        <br />
        Pay-how-you-drive -
        <br />
        Intelligent insurance risk assessment -
        <br /> Vehicle usage monitoring and scoring -
      </p>
    ),
  },
  {
    title: 'Manufacturers',
    description: (
      <p>
        - R&D performance improvements
        <br />
        - Data-driven design improvements
        <br />
        - Wear and tear analytics
        <br /> - Supplier performance scorecard
      </p>
    ),
  },
  {
    title: 'Advertisement',
    description: (
      <p>
        Location-based promotion & reviews -
        <br />
        On-demand services and smart virtual assistants -
        <br />
        Business advisory services -
        <br /> Concierge services -
        <br /> In-car offerings and targeted tailored advertising -
      </p>
    ),
  },
  {
    title: 'Charging / Energy',
    description: (
      <p>
        - Charging station planning and deployment
        <br />
        - Energy usage analysis
        <br />- Charging station locator and offerings
      </p>
    ),
  },
  {
    title: 'Logistics',
    description: (
      <p>
        Location based delivery and offerings -
        <br />
        Convoy platooning -
        <br />
        Efficient logistics transportation -
        <br /> Concierge services -
        <br /> In-car offerings and targeted tailored advertising -
      </p>
    ),
  },
  {
    title: 'Maintenance',
    description: (
      <p>
        - Remote diagnostics & prognosis
        <br />
        - DIY diagnostics
        <br />
        - State safety tests
        <br /> - State emission tests
        <br /> - Predictive failure warning
      </p>
    ),
  },
  {
    title: 'Fleet Management',
    description: (
      <p>
        GPS vehicle tracking -
        <br />
        Driver safety -
        <br />
        Operational efficiency -
        <br /> Intelligent navigation -
      </p>
    ),
  },
  {
    title: 'Mobility Services',
    description: (
      <p>
        - Ride-sharing services
        <br />
        - Car pooling
        <br />- Ride-hailing services
      </p>
    ),
  },
];

export const motusOverview = [
  {
    title: (
      <span>
        Earn <br /> while Driving
      </span>
    ),
    description: (
      <p>
        Transactions between other vehicles are validated by the network and users get rewarded with
        SR cryptocurrency. Also, you are contributing to safer roads for everyone including
        yourself.
      </p>
    ),
  },
  {
    title: (
      <span>
        Enjoy <br /> your Privacy
      </span>
    ),
    description: (
      <p>
        Your identity is safe with MOTUS, free to choose what to share and what not to. There is no
        central authority to track and record your data.
      </p>
    ),
  },
  {
    title: (
      <span>
        Ready <br /> to use
      </span>
    ),
    description: (
      <p>
        With plug-and-play design you can connect it to your existing vehicle. MOTUS is compatible
        with most of the vehicles on the market. We are providing everything you need to start
        connecting.
      </p>
    ),
  },
];

export const motusTechSpecs = {
  core: ['1.8GHz 4-Core ARM Processor', '4 GB LPDDR4', '128 GB eMMC'],

  sensors: ['9DOF MEMS', 'Trusted Platform Module (TPM)', 'Hardware Security Module (HSM)'],

  interfaces: [
    'MicroSD',
    'SIM Card',
    '4 x ADC',
    'Display Support',
    'CV2X',
    'GNSS',
    'LTE up to Cat 16',
    'Wi-Fi 6 802.11 a/b/g/n/ac/ax',
    'BT 5.1',
    'CAN FD',
  ],

  power: ['Input Voltage Range : 4-30V'],

  mechanical: ['Dimensions : 65 x 30 x 135 (mm)'],
};
