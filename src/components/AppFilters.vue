<template>
    <aside class="app-filters">
        <section class="toggle-group">
            <template v-for="filterBtn in filtersList" :key="filterBtn.text">
                <button
                    type="button"
                    class="button"
                    :class="{
                        'button--primary': props.filterType === filterBtn.text,
                    }"
                    @click="setFilterType(filterBtn.text)"
                >
                    {{ filterBtn.text }}
                </button>
            </template>
        </section>
    </aside>
</template>

<script setup lang="ts">
    import type { TTodoFilters } from '@/types/TodoTypes';
    import { useTodoStore } from '@/stores/todo';

    const { setFilterType } = useTodoStore();

    const props = defineProps<{
        filterType: TTodoFilters;
    }>();

    const filtersList: { text: TTodoFilters }[] = [
        { text: 'All' },
        { text: 'Active' },
        { text: 'Completed' },
    ];
</script>
