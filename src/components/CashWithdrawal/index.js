import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balanceAmount: 2000,
  }

  onClickAmount = value => {
    this.setState(preState => ({
      balanceAmount: preState.balanceAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balanceAmount} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="container">
        <div className="card">
          <div className="profile-card">
            <div className="profile">
              <p className="profile-para">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-card">
            <p className="balance-para">Your Balance</p>
            <div className="amount-card">
              <p className="amount">{balanceAmount}</p>
              <p className="para">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-para">Withdraw</p>
          <p className="amount-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                amountDetails={eachAmount}
                key={eachAmount.id}
                onClickAmount={this.onClickAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
