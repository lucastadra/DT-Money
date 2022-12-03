import { FormEvent, useState, useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);

    const [transactionCategory, setTransactionCategory] = useState('');
    const [transactionTitle, setTransactionTitle] = useState('');
    const [transactionType, setTransactionType] = useState('deposit');
    const [transactionAmount, setTransactionAmount] = useState(0);

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault(); // Previne reloading ao submeter

        await createTransaction({
            title: transactionTitle,
            type: transactionType,
            amount: transactionAmount,
            category: transactionCategory,
        });

        setTransactionCategory('');
        setTransactionTitle('');
        setTransactionAmount(0);
        setTransactionType('deposit');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                    value={transactionTitle}
                    onChange={(event) =>
                        setTransactionTitle(event.target.value)
                    }
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={transactionAmount}
                    onChange={(event) =>
                        setTransactionAmount(Number(event.target.value))
                    }
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={transactionType === 'deposit'}
                        activeColor="green"
                        onClick={() => {
                            setTransactionType('deposit');
                        }}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        isActive={transactionType === 'withdraw'}
                        activeColor="red"
                        onClick={() => {
                            setTransactionType('withdraw');
                        }}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={transactionCategory}
                    onChange={(event) =>
                        setTransactionCategory(event.target.value)
                    }
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
