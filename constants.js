export const VisitStates = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS'
};

export const DefaultVisitState = VisitStates.SCHEDULED;

export const DefaultQuestionsList = [
  {
    id: 1,
    question: 'What day is it today?',
    answer: ''
  },
  {
    id: 2,
    question: 'How hot is it outside?',
    answer: ''
  },
  {
    id: 3,
    question: 'What is your favourite food?',
    answer: ''
  }
];
