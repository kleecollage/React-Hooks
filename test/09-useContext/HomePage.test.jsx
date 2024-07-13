import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en componente <HomePage/>', () => { 
    const user = {
        id: 1,
        name: 'alberto'
    }
    // ********************************************************* //
    test('debe mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )
        // screen.debug()
        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null')
    })
    // ********************************************************* //
    test('debe mostrar el componente CON el usuario', () => { 
        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre'); //aria-label

        expect(preTag.innerHTML).toContain(`${user.id}`)
        expect(screen.getByText('alberto')).toBeTruthy
     })
 })