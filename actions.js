/*
 * action types
 */

export const START_VISIT = 'START_VISIT';
export const CANCEL_VISIT = 'CANCEL_VISIT';

export const ENTER_DATE = 'ENTER_DATE';
export const RESET_DATE = 'RESET_DATE';

/*
 * other constants
 */

export const VisitStates = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS'
};

export const DefaultVisitState = VisitStates.SCHEDULED;

/*
 * action creators
 */

export function startVisit() {
  return { type: START_VISIT };
}

export function cancelVisit() {
  return { type: CANCEL_VISIT };
}

export function enterDate(date) {
  return { type: ENTER_DATE, date };
}

export function resetDate() {
  return { type: RESET_DATE };
}
