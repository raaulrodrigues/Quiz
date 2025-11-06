import { decode } from 'base-64'; // MUDANÇA 1

export interface Question {
  question: string;
  correctAnswer: string;
  answers: string[];
}

export const fetchQuizQuestions = async (categoryId: number): Promise<Question[]> => {
  const AMOUNT = 10;
  const DIFFICULTY = 'easy';
  const TYPE = 'multiple';
  const ENCODE = 'base64'; 

  const API_URL = `https://opentdb.com/api.php?amount=${AMOUNT}&category=${categoryId}&difficulty=${DIFFICULTY}&type=${TYPE}&encode=${ENCODE}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Falha na resposta da rede.');
    }
    
    const data = await response.json();

    if (data.response_code !== 0) {
      throw new Error('API retornou um código de erro.');
    }

    const decodedQuestions: Question[] = data.results.map((q: any) => {
      const allAnswers: string[] = [...q.incorrect_answers, q.correct_answer];
      
      const decodedAnswers = allAnswers.map(a => decode(a)); // MUDANÇA 2
      
      return {
        question: decode(q.question), // MUDANÇA 3
        correctAnswer: decode(q.correct_answer), // MUDANÇA 4
        answers: decodedAnswers.sort(() => Math.random() - 0.5) 
      };
    });

    return decodedQuestions;

  } catch (error) {
    console.error('Erro ao buscar perguntas:', error);
    throw error;
  }
};