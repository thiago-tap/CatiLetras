export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Ótimo trabalho!', 'Incrível', 'Muito bem!']
export const GAME_COPIED_MESSAGE = 'Jogo copiado para a área de transferência'
export const ABOUT_GAME_MESSAGE = 'Sobre este jogo'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Não há letras suficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode só pode ser ativado no início!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Deve usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Adivinha deve conter ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Excluir'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Adivinhar Distribuição'
export const NEW_WORD_TEXT = 'Nova palavra em'
export const SHARE_TEXT = 'Compartilhar'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Taxa de sucesso'
export const CURRENT_STREAK_TEXT = 'Sequência atual'
export const BEST_STREAK_TEXT = 'Melhor sequência'
