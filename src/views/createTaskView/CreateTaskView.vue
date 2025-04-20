<script setup lang="ts">
    import MainLogo from '@/components/UI/logo/MainLogo.vue';
    import VariantButton from '@/components/UI/button/VariantButton.vue';
    import MainInput from '@/components/UI/field/MainInput.vue';
    import MainCheckbox from '@/components/UI/checkbox/MainCheckbox.vue';
    import { useTasksStore } from '@/components/stores/tasks';
    import { Paths } from '@/router/routes';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const tasksStore = useTasksStore();

    const taskName = ref<string>('');
    const isBug = ref<boolean>(false);
    const isInputError = ref<boolean>(false);

    function createNewTask(): void {
        if (taskName.value.trim() !== '') {
            tasksStore.addTask(taskName.value, isBug.value);
            taskName.value = '';
            router.push(Paths.root);
        } else {
            isInputError.value = true;
        }
    }
</script>

<template>
    <div class="create-task-page section_content_center">
        <div class="content_wrapper">
            <div class="create-task-page__content">
                <main-logo class="create-task-page__logo" title="Задачник"></main-logo>
                <main-input
                    class="create-task-page__input"
                    title="Название задачи"
                    text="Будет отображаться на главной странице"
                    placeholder="Введите название"
                    v-model="taskName"
                    :is-error="isInputError"
                    @input="isInputError = false"
                    @keyup.enter="createNewTask"
                ></main-input>
                <main-checkbox v-model="isBug" text="Является багом"></main-checkbox>
            </div>
            <div class="create-task-page__button">
                <variant-button @click="$router.push(Paths.root)" variant="secondary" width="96px"
                    >Вернуться</variant-button
                >
                <variant-button @click="createNewTask" variant="primary" width="86px"
                    >Создать</variant-button
                >
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../../assets/styles/index.scss';

    .create-task-page {
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

        &__input {
            margin-bottom: rem(20px);
        }

        &__logo {
            padding-bottom: rem(66px);
        }

        &__button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: rem(16px);
            width: 100%;
        }
    }
</style>
