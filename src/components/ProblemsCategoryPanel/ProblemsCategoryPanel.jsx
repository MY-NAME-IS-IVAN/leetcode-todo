import './ProblemsCategoryPanel.css';
import arraysAndStringsCategory from '../../data';

const ProblemsCategoryPanel = () => {
  return (
    <li className='problems-category-panel'>
      <h2>Arrays and Strings</h2>
      <ol className='prolbems-list'>
        {arraysAndStringsCategory.map((problem, index) => {
          let name = '';

          if (problem.name.length > 23) {
            name = `${problem.name.substring(0, 20)}...`;
          } else {
            name = problem.name;
          }

          return (
            <li key={index} className='problem-panel'>
              <a href={problem.link} target='_blank' className='problem-name'>
                {index + 1}. {name}
              </a>
              <p className={`difficulty ${problem.difficulty.toLowerCase()}`}>
                {problem.difficulty}
              </p>
              <input type='checkbox' className='checkbox' />
            </li>
          );
        })}
      </ol>
    </li>
  );
};

export default ProblemsCategoryPanel;
