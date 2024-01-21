<template>
    <AppHeader />

    <AppFilters :filterType="todoStore.filterType" />

    <main class="app-main">
        <AppTodoList :todoList="todoStore.filteredTodoList" />

        <AppAddTodo />
    </main>

    <AppFooter
        :active="todoStore.activeTodos.length"
        :completed="todoStore.completedTodos.length"
    />
</template>

<script setup lang="ts">
    import AppHeader from './components/AppHeader.vue';
    import AppFilters from './components/AppFilters.vue';
    import AppTodoList from './components/AppTodoList.vue';
    import AppAddTodo from './components/AppAddTodo.vue';
    import AppFooter from './components/AppFooter.vue';

    import { onMounted, watch } from 'vue';
    import { useTodoStore } from '@/stores/todo';
    import type { ITodoItem } from '@/interfaces/ITodo';

    const todoStore = useTodoStore();

    onMounted(() => {
        const todoListlocalStorageItems: ITodoItem[] = JSON.parse(
            window.localStorage.getItem('todoList') || '[]',
        );

        if (todoListlocalStorageItems.length) {
            todoStore.setTodos(todoListlocalStorageItems);
        } else {
            window.localStorage.setItem(
                'todoList',
                JSON.stringify(todoStore.todoList),
            );
        }
    });

    watch(
        () => todoStore.todoList,
        (newValue) => {
            window.localStorage.setItem('todoList', JSON.stringify(newValue));
        },
        { deep: true },
    );
</script>
