import React from 'react'
type Amount = {
    amount: Number;
}
const FormatPrice = ({amount}:Amount) => {

    const formattedAmount = new Number(amount).toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }
    )


  return (
    <div>
        {formattedAmount}
    </div>
  )
}

export default FormatPrice