import reactReduxPamApp from './reducers';

/*
 * action types
 */

export const TOGGLE_VISIT = 'TOGGLE_VISIT';

export const ENTER_DATE = 'ENTER_DATE';
export const RESET_DATE = 'RESET_DATE';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';

/*
 * action creators
 */

export function toggleVisit() {
  return { type: TOGGLE_VISIT };
}

export function enterDate(date) {
  return { type: ENTER_DATE, date };
}

export function answerQuestion(questionId, answer) {
  return { type: ANSWER_QUESTION, questionId, answer };
}
