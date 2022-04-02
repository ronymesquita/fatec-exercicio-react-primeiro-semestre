import './App.css';
import imagem1 from './images/jose_silva.jpg';

const imagem2 = process.env.REACT_APP_IMAGEM2;

const containerStyle = () => ({
  backgroundColor: '#eeeeee',
  width: '64%',
  margin: '1rem auto 0px auto',
  textAlign: 'center',
  borderRadius: '.25rem',
  padding: '1rem',
  border: '1px solid #000'
})

function App() {
  return (
    <main>
      <div style={containerStyle()}>
        <section>
          <h1>Profissionais de saúde</h1>
        </section>
        <section style={{
          borderRadius: '.25rem',
          minHeight: '12vh',
          border: '1px solid #e2e2e2',
          padding: '.5rem',
          display: 'flex',
          justifyContent: 'space-around'
        }}
        >
          <div class="image-container">
            <img src={imagem1} alt="José da Silva" class="image" />
            <p class="caption">José da Silva</p>
          </div>

          <div class="image-container">
            <img src={imagem2} alt="Maria da Silva" class="image" />
            <p class="caption">Maria da Silva</p>
          </div>

          <div class="image-container">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80" alt="Jaqueline Mendes" class="image" />
            <p class="caption">Jaqueline Mendes</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
