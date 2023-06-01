export default function ListAll(props) {

    const data = props.message.data;
    return (

        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>


    )
}