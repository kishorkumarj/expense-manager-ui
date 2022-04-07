import { useState, useEffect } from "react";
import { getTransactionsAPI } from '../../../utils/apis';
import { message, Spin } from 'antd';
import TransactionCard from "./TransactionCard";
import './transaction.scss';

const Transactions = () => {

	const [loading, setLoading] = useState<Boolean>(false);
	const [transactions, setTransactions] = useState<Object[]>([]);

	useEffect(() => {
		const getTransactions = async () => {
			setLoading(true);
			const res: any = await getTransactionsAPI();
			if (res.hasError){
				message.error('failed to load transactions')
			}else{
				setTransactions(res.data);
			}
			setLoading(false);
		}

		getTransactions();
	}, [])
	
  useEffect(() => {
    const getAccountDetails = async () => {
      setLoading(true);
      setLoading(false);
    }
    getAccountDetails();
  }, [])

	if (loading){
		return <Spin />
	}

	return (
		<>
			{transactions.length ? 
			<>
				{transactions.map((item: any) => {
					return (
					  <TransactionCard
              key={item._id}
              transaction={item} />
					)
				})}
			</>
			: <p>No transactions available.</p>}
		</>	
	)
}

export default Transactions;