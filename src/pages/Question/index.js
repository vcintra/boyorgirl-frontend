import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function Question(){
  const history = useHistory();

  const renderCustomResultPage = (obj) => {
    history.push('/end');
  }
  
  return (
    <div className="react-quiz-container">
       <Quiz quiz={quiz} showDefaultResult={false} customResultPage={renderCustomResultPage} shuffle={true} continueTillCorrect={true} showInstantFeedback={true}/>
    </div>
  );
}