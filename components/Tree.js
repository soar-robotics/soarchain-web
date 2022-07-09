function Tree({ title, context }) {
  return (
    <div className='tree'>
      <div className='container'>
        {title && <p className='text-title text-center'>{title}</p>}
        <div className='tree-list mt-5'>
          {context.map((item, index) => (
            <span key={index} className={`tree-list-item-${index % 2 === 0 ? 'left' : 'right'}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tree;
