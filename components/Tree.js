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

export default Tree;
