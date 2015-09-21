export const VisitStates = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS'
};

export const DefaultVisitState = VisitStates.SCHEDULED;

export const DefaultQuestionsList = [
  {
    id: 1,
    question: 'How many items were in stock?',
    answer: '',
    required: true
  },
  {
    id: 2,
    question: 'Were the displays in good order?',
    answer: '',
    required: false
  },
  {
    id: 3,
    question: 'Were there any damaged items?',
    answer: '',
    required: false
  },
  {
    id: 4,
    question: 'How were the fixtures?',
    answer: '',
    required: false
  }
];
