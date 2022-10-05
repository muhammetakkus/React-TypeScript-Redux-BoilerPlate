
import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {

  const isAuth = false

  const routers = useRoutes(routes(isAuth))
  
  return (
    <>  
      {routers}
    </>
  )
}

export default App
