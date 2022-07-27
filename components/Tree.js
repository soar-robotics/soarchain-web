function Tree({ title, context, bullet = false }) {
  const type = bullet ? 'tree-bullet' : 'tree';

  return (
    <div className={type}>
      <div className='container'>
        {title && <p className='text-title text-center'>{title}</p>}
        <div className={`${type}-list mt-5`}>
          {context.map((item, index) => (
            <span key={index} className={`${type}-list-item-${index % 2 === 0 ? 'left' : 'right'}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TreeWave({ context }) {
  return (
    <div className='tree-wave'>
      {context.map((item, index) => (
        <div key={index} className={`tree-wave-item${index % 2 === 0 ? '-left' : ''}`}>
          <div className='tree-wave-item-number'>{index + 1}</div>
          <div className={`tree-wave-item${index % 2 === 0 ? '-left' : ''}-text`}>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default Tree;
