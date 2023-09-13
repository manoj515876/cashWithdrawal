import './index.css'

const DenominationItem = props => {
  const {amountDetails, onClickAmount} = props
  const {value} = amountDetails

  const onAmount = () => {
    onClickAmount(value)
  }

  return (
    <li>
      <button className="amount-btn" type="button" onClick={onAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
