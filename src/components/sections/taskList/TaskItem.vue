<script setup lang="ts">
    import type { ITasks } from '@/static/mainView/interfaces';
    import IconChange from '@/components/icons/IconChange.vue';
    import IconDelete from '@/components/icons/IconDelete.vue';
    import { useRouter } from 'vue-router';
    import { useTasksStore } from '@/stores/tasks';

    const router = useRouter();

    const tasksStore = useTasksStore();

    interface IProps {
        task: ITasks;
    }

    const props = defineProps<IProps>();

    function routeToChangeTaskPage(): void {
        router.push({
            name: 'ChangeTaskView',
            params: {
                id: props.task.id
            }
        });
    }
</script>

<template>
    <div class="task-item">
        <div class="task-item__title">
            <span :class="props.task.isBug ? 'task-item__id task-item__id--bug' : 'task-item__id'"
                ># {{ props.task.id }}</span
            >
            <span
                :class="
                    props.task.isBug ? 'task-item__name task-item__name--bug' : 'task-item__name'
                "
                >{{ props.task.title }}</span
            >
        </div>
        <div class="task-item__changes">
            <icon-change @click="routeToChangeTaskPage"></icon-change>
            <icon-delete @click="tasksStore.removeTask(props.task.id)"></icon-delete>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../../../assets/styles/index.scss';

    .task-item {
        padding-top: rem(16px);
        padding-bottom: rem(16px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: rem(14px);
        width: 100%;

        &__title {
            display: flex;
            align-items: center;
            gap: rem(4px);
        }

        &__id {
            color: var(--id-color);
            font-size: rem(14px);
            font-weight: 700;
            white-space: nowrap;

            &--bug {
                color: var(--id-bug-color);
            }
        }

        &__name {
            color: var(--task-name-color);
            font-size: rem(14px);
            font-weight: 400;

            &--bug {
                color: var(--task-name-bug-color);
            }
        }

        &__changes {
            display: flex;
            align-items: center;
            gap: rem(4px);
        }
    }
</style>
