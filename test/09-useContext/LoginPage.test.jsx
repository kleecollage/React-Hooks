import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en componente <LoginPage/>', () => { 
    // ****************************************************** //
    test('debe mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>       
        )
        // screen.debug()
        const preLabel = screen.getByLabelText('pre');
        
        expect(preLabel.innerHTML).toBe('null');
    })
    // ****************************************************** //
    test('debe llamar setUser cuando se hace click', () => { 
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>       
        )
        const setUserBtn = screen.getByRole('button');        
        fireEvent.click(setUserBtn);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 123,
            name: 'Pepe',
            email: 'pepe@mail.com' 
        })

     })
 })