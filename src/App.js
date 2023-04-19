import logo from './logo.svg';
import './App.css';
import Form from './examples/example-1/Index';
import Index from './examples/example-2/Index';
import { ThemeContextProvider } from './examples/example-3/themeContext';
import Header from './examples/example-3/Header';
import Content from './examples/example-3/Content';
import TodoList from './examples/example-4/TodoList';

function App() {
  return (
    <ThemeContextProvider>
    <div className="App">
      <Header/>
      <Content/>
      <Form/>
      <Index/>
      <TodoList/>
    </div>
    </ThemeContextProvider>
  );
}

export default App;
