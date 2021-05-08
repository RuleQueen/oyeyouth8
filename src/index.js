
const { addDialog, prompt } = require('bottender-proposal-multi-turns');

function getNumber() {
  return Math.floor(Math.random() * 100);
}

function createMathChallenge() {
  const left = getNumber();
  const right = getNumber();

  return {
    question: `${left} + ${right} = ?`,
    answer: `${left + right}`,
  };
}

const Challenge = addDialog('Challenge', [
  async context => {