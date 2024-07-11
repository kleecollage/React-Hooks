import { useContext } from "react"
import { userContext } from "./context/UserContext";


export const LoginPage = () => {

  const { user, setUser }= useContext( userContext );
    return (
      <>
            <h1>LoginPage</h1>
        <hr />
        
        <pre>
          {JSON.stringify( user, null, 3) }
        </pre>

        <button
          className="btn btn-primary"
          onClick={() => setUser({ id: 123, name: 'Pepe', email:'pepe@mail.com' })}
        >
          Establecer Usuaurio
        </button>
      </>
  )
}
