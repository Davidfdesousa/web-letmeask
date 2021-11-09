import ilustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

export function Home() {
  return (
    <section>
      <aside>
        <img src={ilustration} alt="" />
        <h1>
          Toda pergunta tem <br />
          uma resposta.
        </h1>
        <p>
          Aprenda e compartilhe conhecimento <br />
          com outras pessoas
        </p>
      </aside>

      <main>
        <img src={logo} alt="" />
        <button>Crie sua conta Google</button>
        <form action="">
          <input type="text" />
          <p>ou entre em uma sala</p>
          <input type="text" />
          <button>Entrar na sala</button>
        </form>
      </main>
    </section>
  );
}
