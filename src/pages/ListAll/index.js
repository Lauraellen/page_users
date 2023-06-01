import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';
import Table from '../../components/Table';
import { HiOutlineUsers } from 'react-icons/hi'
import { toast } from 'react-toastify';

import './style.css';

import ClientUsers from '../../services/user.js';


export default function ListAll() {

    function getUsers(e) {

        const list = ClientUsers.listAll();
        // const update = await ClientUsers.list();
        // console.log('update', update);
        // if (update.status === 200) {
        //     toast.success('Busca realizada com sucesso');
        // } else {
        //     toast.error('Ops algo deu errado!');
        // }
    }

    getUsers();
    
    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Usuários">
                    <HiOutlineUsers size={30} />
                </Title>

                <div className="container">
                    <Table></Table>

                </div>
            </div>
        </div>
    )
}