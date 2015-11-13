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
    errors.push(`You are missing ${missingRequiredQuestionsCount} question(s)`);
  }

  return errors;
}

const questionsSelector = (state) => state.questionsList;

const completedDateSelector = (state) => {
  const completedDate = state.completedDate.present;
  return completedDate;
}

const completedDateWithHistorySelector = (state) => state.completedDate;

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

const undoDisabledSelector = createSelector(
  [completedDateWithHistorySelector],
  (completedDateWithHistory) => {
    if (completedDateWithHistory) {
      return completedDateWithHistory.past.length === 0
    } else {
      return true;
    }
  }
);
const redoDisabledSelector = createSelector(
  [completedDateWithHistorySelector],
  (completedDateWithHistory) => {
    if (completedDateWithHistory) {
      return completedDateWithHistory.future.length === 0
    } else {
      return true;
    }
  }
);

export const visitsSelector = createSelector(
  [ questionsSelector, completedDateSelector, visitStateSelector,
    errorsSelector, undoDisabledSelector, redoDisabledSelector],
  (questionsList, completedDate, visitState, errors, undoDisabled, redoDisabled) => {
    return {
      questionsList: questionsList,
      completedDate: completedDate,
      visitState: visitState,
      errors: errors,
      undoDisabled: undoDisabled,
      redoDisabled: redoDisabled
    }
  }
);
