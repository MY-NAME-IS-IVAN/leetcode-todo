import './ProblemsList.css'

import ProblemsCategoryPanel from '../../components/ProblemsCategoryPanel/ProblemsCategoryPanel';
import PropTypes from 'prop-types';

const ProblemsList = ({ problemsList, setProblemsList }) => {
  return (
    <ul className='problem-categories-list'>
      {problemsList.map((problems, problemsArrayIndex) => {
        return (
          <ProblemsCategoryPanel
            key={problemsArrayIndex}
            categoryName={problems[0]}
            problemsList={problems[1]}
            problemsArrayIndex={problemsArrayIndex}
            allProblems={problemsList}
            setProblemsList={setProblemsList}
          />
        );
      })}
    </ul>
  );
};

ProblemsList.propTypes = {
  problemsList: PropTypes.array.isRequired,
  setProblemsList: PropTypes.func.isRequired,
};

export default ProblemsList;
