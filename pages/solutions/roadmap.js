import { roadmapContext } from '../../utils/context/roadmap';

function Roadmap() {
  return (
    <main id='roadmap'>
      <section className='showcase'>
        <div className='container'>
          <p className='text-header-showcase text-center mb-5 pb-5'>Soarchain Roadmap</p>
          <div className='roadmap-tree'>
            {roadmapContext.map((item, index) => (
              <div key={index} className='roadmap-tree-item'>
                <span className='roadmap-tree-item-year'>{item.year}</span>
                <span className='roadmap-tree-item-month'>{item.month}</span>
                <span className='tree-right'>
                  <div className='tree-right-list'>
                    {item.activities.map((x, idx) => (
                      <span key={idx} className='tree-right-list-item'>
                        {x}
                      </span>
                    ))}
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Roadmap;
