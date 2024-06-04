function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    return console.log('Cadastrou o Usuário!')
  }
  return (
    <div>
      <h1>Meu Cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" name="" id="" placeholder="Digite seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
