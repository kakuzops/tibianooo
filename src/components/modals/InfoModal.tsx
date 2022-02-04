import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivinhe a palavra em 6 tentativas. Após cada palpite, a cor das peças será
        mude para mostrar o quão próximo seu palpite estava da palavra. <br/>
      </p>
       <p className="text-sm text-gray-500 dark:text-gray-300">
        As palavras são itens, <b>NPCS</b> ou criaturas do <b>Tibia.</b>
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" status="correct" />
        <Cell value="U" />
        <Cell value="I" />
        <Cell value="D" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
         A letra G está na palavra e no local correto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="U" />
        <Cell value="P" status="present" />
        <Cell value="I" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra P está na palavra, mas no lugar errado <br /> (a mimir).
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="A" />
        <Cell value="B" />
        <Cell value="L" status="absent" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra L não está na palavra em nenhum lugar (deletera).
      </p>
    </BaseModal>
  )
}
