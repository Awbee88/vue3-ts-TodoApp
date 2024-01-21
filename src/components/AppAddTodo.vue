<template>
    <section class="add-todo">
        <vue-final-modal
            v-if="isFormVisible"
            v-model="isFormVisible"
            content-class="modal-content"
            classes="modal-container"
        >
            <form class="add-todo__form" @submit.prevent="addTodo">
                <button class="close-button" type="button" @click="toggleForm">
                    <i class="bi bi-x"></i>
                </button>

                <h2 class="add-todo__title">Add a new task</h2>

                <div class="form-group">
                    <label class="text-input__label">
                        Title:
                        <input
                            class="input text-input text-input--focus"
                            v-model="todoTitle"
                        />
                    </label>
                </div>
                <div class="form-group">
                    <label class="text-input__label">
                        Description:
                        <textarea
                            class="input text-input text-input--focus"
                            v-model="todoDescription"
                        ></textarea>
                    </label>
                </div>

                <div class="add-todo__buttons">
                    <button class="button button--filled">Add task</button>
                    <button
                        class="button button--delete"
                        @click.prevent="toggleForm"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </vue-final-modal>

        <button v-else class="add-todo__show-form-button" @click="toggleForm">
            <i class="bi bi-plus-lg"></i>
        </button>
    </section>
</template>

<script setup lang="ts">
    import type { ITodoItem } from '@/interfaces/ITodo';
    import { ref } from 'vue';
    import { useTodoStore } from '@/stores/todo';

    const todoStore = useTodoStore();

    const isFormVisible = ref(false);
    const todoTitle = ref('');
    const todoDescription = ref('');

    const toggleForm = () => {
        isFormVisible.value = !isFormVisible.value;
    };
    const addTodo = () => {
        if (!todoTitle.value) {
            alert('Please enter a task name');
            return;
        }

        todoStore.addTodo({
            id: Date.now(),
            text: todoTitle.value,
            description: todoDescription.value,
            completed: false,
        });

        resetForm();
        toggleForm();
    };

    function resetForm() {
        todoTitle.value = '';
        todoDescription.value = '';
    }
</script>
