<template>
    <footer class="app-footer">
        {{ props.active }} more to do, {{ props.completed }} completed
    </footer>
</template>

<script setup lang="ts">
    import type { ITodoStats } from '@/interfaces/ITodo';

    const props = defineProps<ITodoStats>();
</script>
