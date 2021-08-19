import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>2nd May 2021</div>
      <div className='expense-item__description'>
        <h2>Battery change</h2>
        <div className='expense-item__price'>499zł</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
