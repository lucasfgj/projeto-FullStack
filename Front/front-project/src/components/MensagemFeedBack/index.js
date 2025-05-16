//src\components\MensagemFeedBack\index.js

import './styles.css'

function MensagemFeedBack({mensagem, tipo, visivel, onclose}){
    if(!visivel){
        return null
    }

    return(
        <div 
        id='mensagem'
        className={'mensagem ${tipo} visivel'} 
        onclick={onclose}
        >
        {mensagem}
        </div>
    )
}

export default MensagemFeedBack;