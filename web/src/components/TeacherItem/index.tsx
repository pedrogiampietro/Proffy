import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (

    <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/26656644?s=460&u=5a101d4217b75059c7c3d5f374604e9a6b8483d7&v=4" alt="Pedro Giampietro"/>
                    <div>
                        <strong>Pedro Giampietro</strong>
                        <span>Historia</span>
                    </div>
                    </header>
                    <p>
                        Eu não sei o que colocar aqui, mas como tem que por algo..
                        <br /><br />
                        Ah e aqui também, mas vamo lá, textinho de criatividade!
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                            <button type="button">
                                <img src={whatsappIcon} alt="Whatsapp"/>
                                Entrar em contato
                            </button>
                        </p>
                    </footer>
    </article>

    )
}


export default TeacherItem;