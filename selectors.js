import { createSelector } from 'reselect';
import { VisitStates } from './constants';

function missingCompletedDateErrors(completedDate, visitState) {
  let errors = [];
  if ((visitState === VisitStates.IN_PROGRESS) && (!completedDate)) {
    errors.push("Please enter a Completion Date");
  }

  return errors;
}

function missingRequiredQuestionsErrors(missingRequiredQuestionsCount) {
  let errors = [];
  if (missingRequiredQuestionsCount > 0) {
    errors.push(`You are missing ${missingRequiredQuestionsCount} questions`);
  }

  return errors;
}

const questionsSelector = (state) => state.questionsList;
const completedDateSelector = (state) => state.completedDate;
const visitStateSelector = (state) => state.visitState;

const missingRequiredQuestionsCountSelector = createSelector(
  [questionsSelector],
  (questions) => {
    return questions.filter(
      question => question.required && !question.answer
    ).length;
  }
);

const missingRequiredQuestionsErrorsSelector = createSelector(
  [ missingRequiredQuestionsCountSelector ],
  (missingRequiredQuestionsCount) => {
    return missingRequiredQuestionsErrors(missingRequiredQuestionsCount);
  }
)

const missingCompletedDateErrorsSelector = createSelector(
  [ completedDateSelector, visitStateSelector ],
  (completedDate, visitState) => {
    return missingCompletedDateErrors(completedDate, visitState);
  }
);

const errorsSelector = createSelector(
  [ missingRequiredQuestionsErrorsSelector, missingCompletedDateErrorsSelector ],
  (missingRequiredQuestionsErrors, missingCompletedDateErrors) => {
    return [...missingRequiredQuestionsErrors, ...missingCompletedDateErrors];
  }
);

export const visitsSelector = createSelector(
  [questionsSelector, completedDateSelector, visitStateSelector, errorsSelector],
  (questionsList, completedDate, visitState, errors) => {
    return {
      questionsList: questionsList,
      completedDate: completedDate,
      visitState: visitState,
      errors: errors
    }
  }
);
