import react from 'react';
import Counter from './Counter.jsx';
import Header from './Header.jsx';

class App extends react.Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;
