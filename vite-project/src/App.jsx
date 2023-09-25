import { useSelector } from 'react-redux'
import Routers from './routers/Routers'


const App = () => {
  const {counterValue} = useSelector((state) => state.counter)
  console.log(counterValue, '+++');
  
  return (
    <>
    <Routers/>
     </>
  )
}

export default App
