<script setup lang="ts">
    import TaskItem from '@/components/sections/taskList/TaskItem.vue';
    import type { ITasks } from '@/static/mainView/interfaces';

    interface IProps {
        tasks: ITasks[];
    }

    const props = defineProps<IProps>();
</script>

<template>
    <div class="task-list">
        <TransitionGroup name="list">
            <task-item
                class="task-item"
                v-for="task in props.tasks"
                :key="task.id"
                :task="task"
            ></task-item>
        </TransitionGroup>
    </div>
</template>

<style scoped lang="scss">
    @import '../../../assets/styles/index.scss';

    .task-list {
        display: flex;
        flex-direction: column;
        max-height: 40dvh;
        overflow-y: auto;
        overflow-x: hidden;
        padding-right: rem(4px);

        &::-webkit-scrollbar {
            width: 2px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05);
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
        }
    }

    .task-item {
        border-top: var(--task-border);
        border-bottom: var(--task-border);

        &:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        &:first-child {
            border-top: none;
            padding-top: 0;
        }
    }
</style>
