import client from './config';

const userPath = '/user';

export const listUsers = [
    {
        name: 'Laura',
        email: 'laura.ellen@gec.inatel.br',
        nasc: '17/04/1996',
    },
    {
        name: 'Pedro',
        email: 'pedro@ges.inatel.br',
        nasc: '20/07/2000',
    },
    {
        name: 'Daiane',
        email: 'daiane@gec.inatel.br',
        nasc: '19/11/1999',
    },
    {
        name: 'Ana Karoline',
        email: 'ana.k@gea.inatel.br',
        nasc: '09/02/2001',
    },
    {
        name: 'Samuel',
        email: 'samuel@ges.inatel.br',
        nasc: '27/04/2000s',
    }
]

const ClientUsers = {
    async listAll() {
        try {
            const response = await client.get(`/list`);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async listByFilter(data) {
        try {
            const response = await client.put(`${userPath}/listByFilter`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
};

export default ClientUsers;