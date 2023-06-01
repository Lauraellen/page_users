import Sidebar from '../../components/Sidebar';


export default function ListAll() {

    return (
        <div>
            <Sidebar />

            <div>
                <span>OLA LIST ALL</span>
                {/* <Title name="Registrar novo usuário">
                    <FaUserNinja size={30} />
                </Title> */}

                {/* <div className="container">
                    <form className="form-profile" onSubmit={handleSave}>
                        
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label>Senha</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                        <button type="submit">Salvar</button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}