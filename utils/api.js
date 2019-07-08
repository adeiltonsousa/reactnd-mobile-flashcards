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