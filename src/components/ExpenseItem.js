import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2021, 4, 2)
  const expenseTitle = 'Battery change'
  const expenseCost = 499

  return (
    <div className='expense-item'>
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseCost}zł</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
