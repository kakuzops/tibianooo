import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Sobre" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       Tibian.ooo foi criado por Libosi, jogador de Kalibra apaixonado pelos mistérios tibianos.  
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">Compartilhe esta página e divirta-se com seus amigos. Siga para mais novidades: </p>
      <p>
        <br />
         <a href="https://instagram.com/libosi_" target="_blank" className="text-sm text-dark-500 dark:text-dark-300" >Instagram</a>
        <br/>
        <a href="https://twitch.tv/libosi_" target="_blank" className="text-sm text-dark-500 dark:text-dark-300" >Twitch</a>
      </p>
    </BaseModal>
  )
}
