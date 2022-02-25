import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivinhe a palavra em 6 tentativas. Após cada palpite, a cor das peças
        será mude para mostrar o quão próximo seu palpite estava da palavra.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="T" />
        <Cell value="R" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra L está na palavra e no local correto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="present"
        />
        <Cell value="T" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra S está na palavra, mas no lugar errado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="E" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra U não está na palavra em nenhum lugar.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Esta é uma versão de código aberto do jogo de adivinhação de palavras
        que todos conhecemos e amamos -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          veja o código aqui!
        </a>{' '}
      </p>
    </BaseModal>
  )
}
