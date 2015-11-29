import Immutable from 'immutable';

export const VisitStates = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS'
}

export const DefaultVisitState = VisitStates.SCHEDULED

export const DefaultQuestionsList = Immutable.OrderedMap(
  {
    1: {
      id: 1,
      question: 'How many items were in stock?',
      answer: 'I think 3',
      required: true
    },
    // 2: {
    //   id: 2,
    //   question: 'Were the displays in good order?',
    //   answer: '',
    //   required: false
    // },
    // 3: {
    //   id: 3,
    //   question: 'Were there any damaged items?',
    //   answer: 'Perhaps',
    //   required: false
    // },
    // 4: {
    //   id: 4,
    //   question: 'How were the fixtures?',
    //   answer: '',
    //   required: false
    // }
  }
)
