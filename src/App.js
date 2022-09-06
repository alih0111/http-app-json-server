import './App.css';
import Discussion from './container/Discussion/Discussion';
import {ToastContainer}from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='App'>
      {/* <Comment/>
      <FullComment/>
      <NewComment/> */}
      <ToastContainer/>
      <Discussion/>
    </div>
  );
}

export default App;
