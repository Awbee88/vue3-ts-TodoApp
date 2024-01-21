import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { ITodoItem } from '@/interfaces/ITodo';
import type { TTodoFilters } from '@/types/TodoTypes';

export const useTodoStore = defineStore('todo', () => {
    const todoList = reactive<ITodoItem[]>([
        {
            id: 0,
            text: 'Learn the basics of Typescript',
            description:
                'Understand the fundamentals of TypeScript syntax and features',
            completed: false,
        },
        {
            id: 1,
            text: 'Implement reactive data in Vue',
            description:
                'Incorporate reactivity into Vue components for dynamic updates',
            completed: true,
        },
        {
            id: 2,
            text: 'Create a new component',
            description:
                'Develop a new reusable UI component for the application',
            completed: false,
        },
        {
            id: 3,
            text: 'Refactor existing code',
            description:
                'Restructure and improve the codebase for better maintainability',
            completed: true,
        },
        {
            id: 4,
            text: 'Write unit tests',
            description:
                'Create automated tests to verify the functionality of individual units of code',
            completed: false,
        },
        {
            id: 5,
            text: 'Optimize performance',
            description: 'Improve the speed and efficiency of the application',
            completed: true,
        },
        {
            id: 6,
            text: 'Fix bugs',
            description: 'Identify and resolve software defects and errors',
            completed: false,
        },
        {
            id: 7,
            text: 'Add new feature',
            description:
                'Introduce a new capability or enhancement to the application',
            completed: false,
        },
        {
            id: 8,
            text: 'Learn about composition API',
            description:
                'Explore the composition API for building Vue 3 components',
            completed: true,
        },
        {
            id: 9,
            text: 'Deploy to production',
            description:
                'Release the application to the live environment for end users',
            completed: false,
        },
    ]);

    let filterType = ref<TTodoFilters>('All');

    const activeTodos = computed<ITodoItem[]>(() => {
        return todoList.filter((todo) => !todo.completed);
    });

    const completedTodos = computed<ITodoItem[]>(() => {
        return todoList.filter((todo) => todo.completed);
    });

    const setTodos = (todos: ITodoItem[]) => {
        todoList.splice(0, todoList.length, ...todos);
    };

    const toggleTodo = (id: number) => {
        const todoIndex = todoList.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            todoList[todoIndex].completed = !todoList[todoIndex].completed;
        }
    };

    const removeTodo = (id: number) => {
        const todoIndex = todoList.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            todoList.splice(todoIndex, 1);
        }
    };

    const editTodo = (newTodo: ITodoItem) => {
        const todoIndex = todoList.findIndex((todo) => todo.id === newTodo.id);
        if (todoIndex !== -1) {
            todoList[todoIndex] = newTodo;
        }
    };

    const addTodo = (todoItem: ITodoItem) => {
        todoList.push(todoItem);
    };

    const setFilterType = (newFilterType: TTodoFilters) => {
        filterType.value = newFilterType;
    };

    const filteredTodoList = computed<ITodoItem[]>(() => {
        if (filterType.value === 'Active') {
            return activeTodos.value;
        } else if (filterType.value === 'Completed') {
            return completedTodos.value;
        } else {
            return todoList;
        }
    });

    return {
        todoList,
        activeTodos,
        completedTodos,
        toggleTodo,
        removeTodo,
        addTodo,
        setTodos,
        setFilterType,
        filterType,
        filteredTodoList,
        editTodo,
    };
});
