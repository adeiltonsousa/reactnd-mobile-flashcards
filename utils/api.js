import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'Mobile_Flashcards:decks';

const startingData = {
  Bloco_01: {
    title: 'Bloco_01',
    questions: [
      {
        question: 'Este projeto foi desenvolvido com React Native?',
        answer: 'Correct'
      },
      {
        question: 'Este Projeto foi desenvolvido com Python',
        answer: 'Incorrect'
      }
    ]
  },
  Bloco_02: {
    title: 'Bloco_02',
    questions: [
      {
        question: 'Esta pergunta tem resposta sim?',
        answer: 'Yes'
      },
      {
        question: 'Esta pergunta está correta! Certo?',
        answer: 'Correct'
      }
    ]
  }
}



export function addCardToDeck(title, card) {
  return getDecks()
    .then((decks) => {
      decks[title].questions.push(card);
      AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks));
    });
}

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    if(result !== null) {
      return JSON.parse(result) 
    } else {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(startingData));
      return startingData;
    }
  });
}

export function saveDeckTitle(title) {
  const deckObj = { title, questions: [] };
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: deckObj
  }));
}

export function getDeck(title) {
  return getDecks()
    .then((decks) => decks[title]);
}
