import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en componente <TodoItem/>', () => { 
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };
    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() );

    // ******************************************************* //
    test('debe de mostrar el Todo pendiente', () => { 
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    })
    // ******************************************************* //
    test('debe de monstrar el Todo completado', () => { 
        todo.done = true;
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
    })
    // ******************************************************* //
    test('span debe llamar el ToggleTodo cuando se hace click', () => { 
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
     })
    // ******************************************************* //
    test('el boton deb de llamar deleteTodo', () => { 
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );
        const deleteBtn = screen.getByRole('button');
        fireEvent.click(deleteBtn);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
    // ******************************************************* //
 })