import './App.css';
import Form from './components/Form/Form';
import Advertising from './components/advertising/Advertising';
import Container from './components/container/Container';


const App = () => {
  return (
    <div className="todo">
      <Form/>
      <Container/>
      <Advertising/>
    </div>
      
    
  );
}

export default App;
