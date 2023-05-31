import { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';
import Transactions from './Transactions';
import { getAccountsAPI } from '../../utils/apis';
import Accounts from './Accounts';
import CreditCard from './CreditCard';
import { AccountInterface } from './interface';
import { SectionHeader } from '../../components/Title';
import Divider from '../../components/Divider';
import { PlusCircleOutlined } from '@ant-design/icons';

const Home = () => {

  const [loading, setLoading] = useState<Boolean>(false);
  const [accounts, setAccounts] = useState<AccountInterface[]>([]);
  const [creditCards, setCreditCards] = useState<AccountInterface[]>([]);

  useEffect(() => {
    const getAccountDetail = async () => {
      setLoading(true)
      const res: any = await getAccountsAPI();
      if (!res.hasError){
        const accounts = res.data.filter((item: any) => item.account_type === 'Account')
        const ccs = res.data.filter((item: any) => item.account_type === 'Credit Card')
        setAccounts(accounts);
        setCreditCards(ccs);
      }
      setLoading(false)
    }

    getAccountDetail()
  }, [])

  return (
    <>
      <Card>
        <Row>
          <Col lg={18} xl={18} sm={24} md={18} xs={24}>
            <SectionHeader headerText='Transactions' />
          </Col>
          <Col lg={6} xl={6} sm={24} md={6} xs={24}
            style={{textAlign: 'right'}}>
            <Button
              icon={<PlusCircleOutlined />}
              className='btn-info-outlined'>New</Button>
          </Col>
        </Row>
        <Divider />
        <Transactions />
      </Card>

      <Card style={{marginTop: '20px'}}>
        <SectionHeader headerText='Accounts' />
        <Divider />

        {loading ? null
         :<Accounts accounts={accounts}/>
        }
      </Card>

      <Card style={{marginTop: '20px'}}>
        <SectionHeader headerText='Credit Cards' />
        <Divider />

        {loading ? null
          : <CreditCard cards={creditCards} />
        }
      </Card>
    </>
  )
}


export default Home;