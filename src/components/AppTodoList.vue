<template>
    <ul v-for="todo in props.todoList" class="todo-list">
        <AppTodoItem
            :id="todo.id"
            :text="todo.text"
            :description="todo.description"
            :completed="todo.completed"
            :key="todo.id"
        />
    </ul>
</template>

<script setup lang="ts">
    import AppTodoItem from './AppTodoItem.vue';
    import type { ITodoItem } from '@/interfaces/ITodo';

    const props = defineProps({
        todoList: Array as () => ITodoItem[],
    });
</script>
