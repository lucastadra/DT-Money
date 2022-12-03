import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelance web',
                    type: 'deposit',
                    category: 'Desenvolvimento',
                    amount: 4000,
                    createdAt: new Date('2022-11-29 03:00:00'),
                },
                {
                    id: 2,
                    title: 'Mercado',
                    type: 'withdraw',
                    category: 'Compras',
                    amount: 500,
                    createdAt: new Date('2022-12-01 03:00:00'),
                },
            ],
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create('transaction', data);
        });
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
