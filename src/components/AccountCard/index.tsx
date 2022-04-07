import './styles.scss';
import { AccountInterface } from '../../pages/Home/interface';
import Divider from '../Divider';

const AccountCard = ({
  account
}:{
  account: AccountInterface
}) => {
  return (
    <div className="account-container">
      <div className='account-image'>

      </div>
      <div className='data-container'>
        <div className='account-name'>{account.account_name}</div>
        <Divider marginTop={2} marginBottom={2}/>
        <div className='account-balance'>Balance: {account.balance}</div>
      </div>
    </div>
  )
}

export default AccountCard;