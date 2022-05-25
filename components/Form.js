import React, { useState } from 'react';

const Form = ({ setIsAuth }) => {
  const [pw, setPw] = useState('');

  const onSubmit = () => {
    pw === 'srweb1234' && setIsAuth(true);
  };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPw(e.target.value)}
        />
        <button type="button" class="btn btn-success " onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
