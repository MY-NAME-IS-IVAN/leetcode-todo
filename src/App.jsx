import './App.css';
import ProblemsCategoryPanel from './components/ProblemsCategoryPanel/ProblemsCategoryPanel';

function App() {
  return (
    <>
      <h1 className='website-title'>LeetCode Todo List</h1>

      <p className='website-summary'>
        I want to get a job at BIG TECH, and LeetCode is a great way to practice
        data structures and algorithms for interviews. But with over 3,400
        problems on LeetCode, I don&apos;t have the time to solve them all. So,
        I asked ChatGPT and Gemini to create a list of 150 problems that will
        maximize my chances of landing an entry-level software developer role at
        MAANG. While LeetCode offers personalized lists, I wanted to build
        something myself. Here&apos;s the list!
      </p>

      <div className='problems-solved'>
        <div className='container'>
          <header>Total Problems Solved</header>
          <ul>
            <li>Total: 0 / 150</li>
            <li>Easy: 0 / 80</li>
            <li>Medium: 0 / 40</li>
            <li>Hard: 0 / 30</li>
          </ul>
        </div>
      </div>

      <ul className='problem-categories-list'>
        <ProblemsCategoryPanel />
      </ul>
    </>
  );
}

export default App;
