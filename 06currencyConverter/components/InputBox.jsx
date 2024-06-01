import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  disabled={amountDisable}
                  onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
                  // iska target value string hai but hame amount me number chahiye isliye Number() use hua hai !
                  // onAmountChange && is used to check is function doesnot exist then it will not call it ! safety check

              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  disabled={currencyDisable}
                  onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                  // iska target value string hi hai aur hame string hi chahiye !
                  >
                    {currencyOptions.map((currency)=>{
                      // key is used in array loops for optimization
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    })}
              </select>
          </div>
      </div>
  );
}

export default InputBox;
