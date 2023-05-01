import './App.css';
import Header from './components/header';
import Form from './components/form/form';
import GridComponent from './components/grid/grid';
import {DataProvider} from './components/context.js';

function App() {
  return (
    <div className="App">
    <DataProvider>
      <Header/>
      <section className="mySection">
        <Form/>
        <GridComponent/>
      </section>
    </DataProvider>
    </div>
  );
}

export default App;
