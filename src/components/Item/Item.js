import PropTypes from 'prop-types'

function Item({marca='Faltou a marca', anoLancamento=0}) {
    return (
        <>
        <li>{marca} - {anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Falta a marca',
    anoLancamento: 0
}

export default Item