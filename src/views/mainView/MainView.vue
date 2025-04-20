<script setup lang="ts">
    import MainLogo from '@/components/UI/logo/MainLogo.vue';
    import VariantButton from '@/components/UI/button/VariantButton.vue';
    import IconPlusButton from '@/components/icons/IconPlusButton.vue';
    import TaskList from '@/components/sections/taskList/TaskList.vue';
    import { useTasksStore } from '@/components/stores/tasks';
    import { Paths } from '@/router/routes';

    const tasksStore = useTasksStore();
</script>

<template>
    <div class="main-page section_content_center">
        <div class="content_wrapper">
            <div class="main-page__content">
                <main-logo class="main-page__logo" title="Задачник"></main-logo>
                <task-list :tasks="tasksStore.getTasks"></task-list>
            </div>
            <div class="main-page__button">
                <p class="main-page__stats">
                    <span>Задач: {{ tasksStore.tasks.length }}</span> /
                    <span>Багов: {{ tasksStore.bugs }}</span>
                </p>
                <variant-button
                    @click="$router.push(Paths.createTaskView)"
                    variant="primary"
                    width="171px"
                >
                    <icon-plus-button></icon-plus-button>
                    Добавить задачу
                </variant-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../../assets/styles/index.scss';

    .main-page {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100dvh - 40px);

        &__content {
            flex: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        &__logo {
            padding-bottom: rem(88px);
        }

        &__button {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: rem(16px);
            width: 100%;
        }

        &__stats {
            color: var(--stats-color);
            font-size: rem(14px);
            font-weight: 400;
            letter-spacing: -0.14px;
        }
    }
</style>
