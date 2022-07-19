import Image from 'next/image';

export const mobilityConnectivityAspects = [
  {
    title: 'Softwarization of Mobility',
    image: <Image alt='mobility' src='/mobility/mobility.png' width={720} height={405} />,
    description: (
      <div>
        <p>
          We see a shift to Software-defined vehicles: The transformation of the vehicles from a
          product that is mainly hardware-based to a software-centric electronic device on wheels.
        </p>

        <small>
           Vehicles are getting equipped with more sensors with higher levels of sophistication and
          optimization.
          <br />  ADAS (Advanced driver-assistance system) are getting better at assisted driving,
          leading the way to higher levels of automation with a goal to reach fully autonomous
          driving.
          <br /> A group of cars in an urban environment literally forms a community.
          <br /> In a well-functioning and efficient community, communication between the
          participants is of utmost importance.
        </small>
      </div>
    ),
  },
  {
    title: 'Smart city',
    image: <Image alt='traffic' src='/mobility/connectivity.png' width={1140} height={642} />,
    description: (
      <p>
        A smart city is a technologically modern urban area that uses different types of electronic
        methods, voice activation methods and sensors to collect specific data. Information gained
        from that data is used to manage assets, resources and services efficiently; in return, that
        data is used to improve operations across the city.
        <br />
        Soarchain is creating smart cities by utilizing the connectivity of vehicles between each
        other and with the infrastructure.
      </p>
    ),
  },
  {
    title: 'Traffic Safety',
    description: (
      <div>
        <p>
          With the help of c-v2x emergency and safety apps, MOTUS offers a future with nearly zero
          accidents.
        </p>

        <small>
           Traffic accidents kill more than 1.25 million people around the world each year. Beside
          the lives lost, these accidents take a huge economic toll, with so much human potential
          being lost.
          <br />  According to the NHTSA, connected cars could prevent up to 80% of multi-vehicle
          crashes.
          <br /> V2X technology will drastically decrease the frequency of traffic accidents and
          the money wasted on them.
        </small>
      </div>
    ),
  },
  {
    title: 'Sustainability',
    description: (
      <small>
         Roads that are safer are less congested. Lowering congestion reduces CO2 emissions.
        <br />  Cooperative driving reduces accelerations and travel times.
        <br /> The protection of micro mobility users provided by V2X would encourage the use of
        these technologies.
        <br /> According to 5GAA, it is possible to reduce carbon emissions by 45% when V2X is
        utilized in vehicles
      </small>
    ),
  },
];
