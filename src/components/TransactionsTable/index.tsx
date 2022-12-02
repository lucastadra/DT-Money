import { useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

export default function TransactionsTable() {
    const transactions = useContext(TransactionsContext);
    console.log(transactions);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction: Transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                R$
                                {new Intl.NumberFormat('pt-Br', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-Br', {}).format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}
