function Soarchain() {
  return (
    <main className='soarchain'>
      <section className='showcase'>
        <div className='container'>
          <div className='showcase-content showcase-content-right'>
            <h5 className='text-purple text-uppercase fw-bold'>soarchain is</h5>

            <span className='text-title'>
              A communication <br /> layer for mobility
            </span>
            <p className='mt-3'>
              With utilizing celular vehicle to everything technology, we bring connected vehicles.
            </p>
          </div>
          <div className='showcase-content showcase-content-left'>
            <h5 className='text-purple text-uppercase fw-bold d-none d-md-block'>soarchain is</h5>
            <span className='text-title'>
              Decentralized connectivity layer that facilitates the real-time interaction and
              transaction between vehicles
            </span>
            <p className='mt-3'>
              We offer a trustless, permissionless, decentralized and distributed way to enable
              connectivity between vehicles. <br />
              Participant vehicles of the network are incentivized to cryptographically prove their
              availability to the other participants through the network Participants prove their
              availability by broadcasting standardized V2X messages through an Cellular V2X
              (LTE-V2X) air interface. <br />
              The broadcast messages are received and verified by other network participants. Each
              participant in the network is expected to both broadcast and receive messages.
              <br />
              Broadcasting honest and correct messages & Receiving and verifying these messages are
              rewarded through the network’s incentive mechanism.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Soarchain;
