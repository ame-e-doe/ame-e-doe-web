import './App.css';
import { useGetAllCategorys } from './hooks/use-category';

function App() {
  const { categorys } = useGetAllCategorys();

  return (
    <div className='App'>
      <ul>
        {categorys?.map((categoria) => {
          return (
            <li key={categoria.id}>
              <p>{categoria.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
