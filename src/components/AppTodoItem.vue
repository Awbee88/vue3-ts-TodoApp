<template>
    <li class="todo-item" :class="{ 'todo-item--done': props.completed }">
        <div class="todo-item__header" @click="toggleTodo(props.id)">
            <div class="todo-item__status">
                <i class="bi bi-check2"></i>
            </div>
            <span class="todo-item__text">{{ props.text }}</span>
            <button
                class="todo-item__remove-button"
                @click="removeTodo(props.id)"
            >
                <i class="bi bi-trash3"></i>
            </button>
        </div>
        <div class="todo-item__description">
            {{ props.description || 'Add description' }}
        </div>
        <div class="todo-item__footer">
            <AppEditTodo :todo="props" />
        </div>
    </li>
</template>

<script setup lang="ts">
    import AppEditTodo from './AppEditTodo.vue';
    import type { ITodoItem } from '@/interfaces/ITodo';
    import { useTodoStore } from '@/stores/todo';

    const { toggleTodo, removeTodo } = useTodoStore();

    const props = defineProps<ITodoItem>();
</script>
