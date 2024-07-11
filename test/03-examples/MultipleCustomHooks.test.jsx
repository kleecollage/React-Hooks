import { fireEvent, screen } from "@testing-library/dom"
import { render } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock('../../src/hooks/useFetch.js')
jest.mock('../../src/hooks/useCounter.js')

describe('Prueba sobre el componente <MultipleCustomHooks/>', () => { 
    
    const mockIncrement = jest.fn()
    
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks();
    })
    
    // **************************************************** //
    test('debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
        render(<MultipleCustomHooks />)
        // screen.debug()
        // evaluamos el estado inicial en lugar de hacer snapshot
        expect(screen.getByText('Informacion de pokemons'));
        expect(screen.getByText('Cargando'))
        expect(screen.getAllByRole('button', { name:'Anterior' }))
        expect(screen.getAllByRole('button', { name:'Siguiente' }))
    })
    // **************************************************** //
    test('debe mostrar un pokemon', () => { 
        useFetch.mockReturnValue({
            data: {
                name: 'pikachu',
                sprites:
                    {
                        front_default: "https://google.com",
                        back_default: "https://imagenes.com",
                        front_shiny: "https://googleimages.com",
                        back_shiny: "https://pictionary.com",
                    }
            },
            isLoading: false,
        })
        render(<MultipleCustomHooks />)
        // screen.debug()
        expect(screen.queryByText((content) => content.includes('pikachu'))).toBeTruthy();
        expect((screen.getAllByRole('img'))).toHaveLength(4)
     })
    // **************************************************** //
    test('debe de llamar la funcion de incrementar', () => {  
        useFetch.mockReturnValue({
            data: {
                name: 'pikachu',
                sprites:
                    {
                        front_default: "https://google.com",
                        back_default: "https://imagenes.com",
                        front_shiny: "https://googleimages.com",
                        back_shiny: "https://pictionary.com",
                    }
            },
            isLoading: false,
        })

        render(<MultipleCustomHooks />)
        // screen.debug()
        const nextBtn = screen.getByRole('button', { name: 'Siguiente' })
        fireEvent.click(nextBtn);

        expect(mockIncrement).toHaveBeenCalled()
    })
})