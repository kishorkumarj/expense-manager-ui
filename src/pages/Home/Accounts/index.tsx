import { Row, Col} from 'antd';
import { AccountInterface } from "../interface";
import AccountCard from '../../../components/AccountCard';

const Accounts = ({
  accounts
}:{
  accounts: Array<AccountInterface>
}) => {

  if (accounts.length < 1){
    return <p>No cards added</p>
  }

	return (
    <Row gutter={12}>
      {accounts.map((account: AccountInterface) => {
        return (
          <Col md={6} lg={6} sm={24} xs={24} xl={6} 
            key={account._id}>
              <AccountCard account={account}/>
          </Col>
        )
      })}
    </Row>
	)
}

export default Accounts;