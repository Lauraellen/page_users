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

                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="2">Sem dados</td>
                    </tr>
                )}
            </tbody>
        </table>


    )
}