import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import ProblemsList from './components/ProblemsList/ProblemsList';

import arraysAndStringsCategory from './ProblemsData/ArraysAndStrings';
import dynamicProgramming from './ProblemsData/DynamicProgramming';
import linkedLists from './ProblemsData/LinkedLists';
import mathAndBitManipulation from './ProblemsData/MathAndBitManipulation';
import sortingAndSearching from './ProblemsData/SortingAndSearching';
import treesAndGraphs from './ProblemsData/TreesAndGraphs';

function App() {
  let problems;

  if (localStorage.getItem('All Problems')) {
    problems = JSON.parse(localStorage.getItem('All Problems'));
  } else {
    problems = [
      ['Arrays and Strings', arraysAndStringsCategory],
      ['Linked Lists', linkedLists],
      ['Trees and Graphs', treesAndGraphs],
      ['Sorting and Searching', sortingAndSearching],
      ['Dynamic Programming', dynamicProgramming],
      ['Math & Bit Manipulation', mathAndBitManipulation],
    ];

    localStorage.setItem('All Problems', JSON.stringify(problems));
  }

  const [problemsList, setProblemsList] = useState(problems);

  const allProblemItems = problems.map((problem) => problem[1]).flat(1);

  const easyProblemsCount = allProblemItems.filter(
    (problem) => problem.difficulty.toLowerCase() == 'easy'
  ).length;
  const mediumProblemsCount = allProblemItems.filter(
    (problem) => problem.difficulty.toLowerCase() == 'medium'
  ).length;
  const hardProblemsCount = allProblemItems.filter(
    (problem) => problem.difficulty.toLowerCase() == 'hard'
  ).length;

  const easyProblemsSolved = allProblemItems.filter(
    (problem) => problem.difficulty.toLowerCase() == 'easy' && problem.solved
  ).length;
  const mediumProblemsSolved = allProblemItems.filter(
    (problem) => problem.difficulty.toLowerCase() == 'medium' && problem.solved
  ).length;
  const hardProblemsSolved = allProblemItems.filter(
    (problem) => problem.difficulty.toLowerCase() == 'hard' && problem.solved
  ).length;

  return (
    <>
      <Header
        easyProblemsCount={easyProblemsCount}
        mediumProblemsCount={mediumProblemsCount}
        hardProblemsCount={hardProblemsCount}
        easyProblemsSolved={easyProblemsSolved}
        mediumProblemsSolved={mediumProblemsSolved}
        hardProblemsSolved={hardProblemsSolved}
      />
      <ProblemsList
        problemsList={problemsList}
        setProblemsList={setProblemsList}
      />
    </>
  );
}

export default App;
