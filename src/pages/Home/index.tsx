import React from 'react';
import { Card, Button } from 'antd';

import {
  HomeFilled,
} from '@ant-design/icons'

const Home = () => {

  return (
    <>
      <Card>
        <h2>Transactions</h2>
        <Button
          className="btn-info-outlined"
          icon={<HomeFilled />}
          >Toggle</Button>
      </Card>

      <Card style={{marginTop: '20px'}}>
        <h2>Accounts</h2>
      </Card>

      <Card style={{marginTop: '20px'}}>
        <h2>Credit Cards</h2>
      </Card>
    </>
  )
}


export default Home;