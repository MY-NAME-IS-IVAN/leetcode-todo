import './Header.css';
import PropTypes from 'prop-types';

const Header = ({
  easyProblemsCount,
  mediumProblemsCount,
  hardProblemsCount,

  easyProblemsSolved,
  mediumProblemsSolved,
  hardProblemsSolved,
}) => {
  const root = document.documentElement;
  root.style.setProperty(
    '--easy-problems-progress',
    `${(easyProblemsSolved / easyProblemsCount) * 100}%`
  );
  root.style.setProperty(
    '--medium-problems-progress',
    `${(mediumProblemsSolved / mediumProblemsCount) * 100}%`
  );
  root.style.setProperty(
    '--hard-problems-progress',
    `${(hardProblemsSolved / hardProblemsCount) * 100}%`
  );

  return (
    <header className='main-header'>
      <div className='about-container'>
        <h1 className='website-title'>Essential LeetCode List</h1>
        <p className='website-summary'>
          I want to get a job at BIG TECH, and LeetCode is a great way to
          practice data structures and algorithms for interviews. But with over
          3,400 problems on LeetCode, I don&apos;t have the time to solve them
          all. So, I asked ChatGPT and Gemini to create a list of 150 problems
          that will maximize my chances of landing an entry-level software
          developer role at MAANG. While LeetCode offers personalized lists, I
          wanted to build something myself. Here&apos;s the list!
        </p>
      </div>
      <div className='progress-container'>
        <ul className='progress-list'>
          <li className='progress-cirlce easy'>
            <div className='progress-inner-cirlce'>
              <p>Easy</p>
              <p>
                {easyProblemsSolved} / {easyProblemsCount}
              </p>
            </div>
          </li>
          <li className='progress-cirlce medium'>
            <div className='progress-inner-cirlce'>
              <p>Medium</p>
              <p>
                {mediumProblemsSolved} / {mediumProblemsCount}
              </p>
            </div>
          </li>
          <li className='progress-cirlce hard'>
            <div className='progress-inner-cirlce'>
              <p>Hard</p>
              <p>
                {hardProblemsSolved} / {hardProblemsCount}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  easyProblemsCount: PropTypes.number.isRequired,
  mediumProblemsCount: PropTypes.number.isRequired,
  hardProblemsCount: PropTypes.number.isRequired,

  easyProblemsSolved: PropTypes.number.isRequired,
  mediumProblemsSolved: PropTypes.number.isRequired,
  hardProblemsSolved: PropTypes.number.isRequired,
};

export default Header;
