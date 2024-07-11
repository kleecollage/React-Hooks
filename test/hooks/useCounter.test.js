import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks"

describe('Pruebas en custom Hook useCounter', () => { 
    // ***************************************************** //
    test('debe retornar los valores por defecto', () => { 
        const { result } = renderHook(() => useCounter())
        const { counter, decrement, increment, reset } = result.current
        console.log(result)

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })
    // ***************************************************** //
    test('debe generar al counter con el valor de 100', () => { 
        const { result } = renderHook(() => useCounter(100))        
        expect(result.current.counter).toBe(100);
     })
    // ***************************************************** //
    test('debe de incrementar el contador', () => { 
        const { result } = renderHook(() => useCounter(50))
        const { increment, counter } = result.current

        act(() => {
            increment();
            increment(3);
        })
        expect(result.current.counter).toBe(54)

      })
    // ***************************************************** //
    test('debe de decrementar el contador', () => { 
        const { result } = renderHook(() => useCounter(50))
        const { decrement, counter } = result.current

        act(() => {
            decrement();
            decrement(3);
        })
        expect(result.current.counter).toBe(46)
      })
    // ***************************************************** //
    test('debe volver el contador al estado inicial', () => { 
        const { result } = renderHook(() => useCounter(20))
        const { reset, decrement, increment, counter } = result.current

        act(() => { 
            decrement(25);
            increment(450);
            reset()
        })

        expect(counter).toBe(20)

     })
})