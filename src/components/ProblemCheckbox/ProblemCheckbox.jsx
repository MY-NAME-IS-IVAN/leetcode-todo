import { useState } from 'react';
import './ProblemCheckbox.css';
import { MdDone } from 'react-icons/md';

import PropTypes from 'prop-types';

const ProblemCheckbox = ({ problemsArrayIndex, problemIndex, allProblems, setProblemsList }) => {
  const [isChecked, setIsChecked] = useState(
    allProblems[problemsArrayIndex][1][problemIndex].solved
  );

  return (
    <button
      className={`problem-checkbox ${isChecked ? 'checked' : ''}`}
      onClick={() => {
        allProblems[problemsArrayIndex][1][problemIndex].solved = !isChecked;
        const newProblemsData = [...allProblems];
        setProblemsList(newProblemsData);

        setIsChecked(!isChecked);
        localStorage.setItem('All Problems', JSON.stringify(allProblems));
      }}
    >
      <MdDone className='checked-icon' />
    </button>
  );
};

ProblemCheckbox.propTypes = {
  problemIndex: PropTypes.number.isRequired,
  problemsArrayIndex: PropTypes.number.isRequired,

  allProblems: PropTypes.array.isRequired,
  setProblemsList: PropTypes.func.isRequired,
};

export default ProblemCheckbox;
