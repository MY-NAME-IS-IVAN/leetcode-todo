import ProblemCheckbox from '../ProblemCheckbox/ProblemCheckbox';
import './ProblemsCategoryPanel.css';
import PropTypes from 'prop-types';

const ProblemsCategoryPanel = ({
  categoryName,
  problemsList,
  allProblems,
  setProblemsList,
  problemsArrayIndex,
}) => {
  return (
    <li className='problems-category-panel'>
      <hgroup className='category-header'>
        <h2>{categoryName}</h2>
        <p>({problemsList.length} Problems)</p>
      </hgroup>

      <ol className='prolbems-list'>
        {problemsList.map((problem, index) => {
          let name = '';

          if (problem.name.length > 23) {
            name = `${problem.name.substring(0, 20)}...`;
          } else {
            name = problem.name;
          }

          {
            const isSolved = allProblems[problemsArrayIndex][1][index].solved;
            return (
              <li
                key={index}
                className={`problem-panel ${isSolved ? 'solved' : ''}`}
              >
                <div className='left-section'>
                  <ProblemCheckbox
                    allProblems={allProblems}
                    problemIndex={index}
                    problemsArrayIndex={problemsArrayIndex}
                    setProblemsList={setProblemsList}
                  />
                  <a
                    href={problem.link}
                    target='_blank'
                    className='problem-name'
                    title={problem.name}
                  >
                    {name}
                  </a>
                </div>
                <p className={`difficulty ${problem.difficulty.toLowerCase()}`}>
                  {problem.difficulty}
                </p>
              </li>
            );
          }
        })}
      </ol>
    </li>
  );
};

ProblemsCategoryPanel.propTypes = {
  categoryName: PropTypes.string.isRequired,
  problemsList: PropTypes.array.isRequired,
  problemsArrayIndex: PropTypes.number.isRequired,
  allProblems: PropTypes.array.isRequired,
  setProblemsList: PropTypes.func.isRequired,
};

export default ProblemsCategoryPanel;
