<template>
    <button
        class="button button--primary todo-item__edit-button"
        type="button"
        @click="toggleForm"
    >
        Edit
    </button>
    <vue-final-modal
        v-if="isFormVisible"
        v-model="isFormVisible"
        content-class="modal-content"
        classes="modal-container"
    >
        <form class="add-todo__form" @submit.prevent="editTodoHandler">
            <button class="close-button" type="button" @click="toggleForm">
                <i class="bi bi-x"></i>
            </button>

            <h2 class="add-todo__title">Add a new task</h2>

            <div class="form-group">
                <label class="text-input__label">
                    Title:
                    <input
                        v-model="todoTitle"
                        class="input text-input text-input--focus"
                    />
                </label>
            </div>
            <div class="form-group">
                <label class="text-input__label">
                    Description:
                    <textarea
                        v-model="todoDescription"
                        class="input text-input text-input--focus"
                    ></textarea>
                </label>
            </div>

            <div class="add-todo__buttons">
                <button class="button button--filled">Save</button>
                <button
                    class="button button--delete"
                    @click.prevent="toggleForm"
                >
                    Cancel
                </button>
            </div>
        </form>
    </vue-final-modal>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useTodoStore } from '@/stores/todo';
    import type { ITodoItem } from '@/interfaces/ITodo';

    const { editTodo, todoList } = useTodoStore();

    const props = defineProps<{
        todo: ITodoItem;
    }>();

    const todoTitle = ref(props.todo.text);
    const todoDescription = ref(props.todo.description);

    const isFormVisible = ref(false);
    const toggleForm = () => {
        isFormVisible.value = !isFormVisible.value;
    };

    const editTodoHandler = () => {
        if (!todoTitle.value) {
            alert('Please enter a task name');
            return;
        }

        editTodo({
            id: props.todo.id,
            text: todoTitle.value,
            description: todoDescription.value,
            completed: props.todo.completed,
        });

        toggleForm();
    };
</script>
