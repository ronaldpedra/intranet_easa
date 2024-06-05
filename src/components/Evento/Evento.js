import Button from "../Button/Button"

function Evento() {

    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }
    function segundoEvento() {
        console.log('Ativando o segundo evento!')
    }

    return (
        <div>
            <p>Clique para disparar um Evento!</p>
            <Button event={meuEvento} text='Primeiro Evento' />
            <Button event={segundoEvento} text='Segundo Evento' />
        </div>
    )
}

export default Evento