import { useState } from 'react';

export default (persistState = {}) => {
  const [inputs, setInputs] = useState(persistState);
  const handleInputChange = event => {
    event.persist();
    setInputs(input => ({ ...input, [event.target.name]: event.target.value }));
  };
  return [inputs, handleInputChange];
};
