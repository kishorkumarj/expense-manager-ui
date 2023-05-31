import { Row, Col} from 'antd';
import { AccountInterface } from '../interface';
import AccountCard from '../../../components/AccountCard';

const CreditCard = ({
  cards
}:{
  cards: Array<AccountInterface>
}) => {

  if (cards.length < 1){
    return <p>No cards added</p>
  }

	return (
    <Row gutter={12}>
      {cards.map((card: AccountInterface) => {
        return (
          <Col md={6} lg={6} sm={24} xs={24} xl={6} 
            key={card._id}>
              <AccountCard account={card}/>
          </Col>
        )
      })}
    </Row>
	)
}

export default CreditCard;