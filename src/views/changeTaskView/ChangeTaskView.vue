<script setup lang="ts">
    import MainLogo from '@/components/UI/logo/MainLogo.vue';
    import VariantButton from '@/components/UI/button/VariantButton.vue';
    import MainInput from '@/components/UI/field/MainInput.vue';
    import MainCheckbox from '@/components/UI/checkbox/MainCheckbox.vue';
    import IconDelete from '@/components/icons/IconDelete.vue';
    import { useTasksStore } from '@/components/stores/tasks';
    import { Paths } from '@/router/routes';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const tasksStore = useTasksStore();

    interface IProps {
        id: number;
        title: string;
        isBug: boolean;
    }

    const props = defineProps<IProps>();

    const taskName = ref<string>(props.title);
    const isBug = ref<boolean>(props.isBug);
    const taskId = ref<number>(props.id);

    const isInputError = ref<boolean>(false);

    function saveChangeTask(): void {
        if (taskName.value.trim() !== '') {
            tasksStore.updateTask(taskId.value, { title: taskName.value, isBug: isBug.value });
            router.push(Paths.root);
        } else {
            isInputError.value = true;
        }
    }

    function removeChangeTask(): void {
        tasksStore.removeTask(taskId.value);
        router.push(Paths.root);
    }
</script>

<template>
    <div class="change-task-page section_content_center">
        <div class="content_wrapper">
            <div class="change-task-page__content">
                <main-logo class="change-task-page__logo" title="Задачник"></main-logo>
                <main-input
                    class="change-task-page__input"
                    placeholder="Тестовая задача"
                    v-model="taskName"
                    :is-error="isInputError"
                    @input="isInputError = false"
                ></main-input>
                <main-checkbox v-model="isBug" text="Является багом"></main-checkbox>
            </div>
            <div class="change-task-page__button">
                <variant-button @click="$router.push(Paths.root)" variant="secondary" width="96px"
                    >Вернуться</variant-button
                >
                <div class="change-task-page__buttons">
                    <variant-button @click="removeChangeTask" variant="secondary" width="36px"
                        ><icon-delete></icon-delete
                    ></variant-button>
                    <variant-button @click="saveChangeTask" variant="primary" width="96px"
                        >Сохранить</variant-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../../assets/styles/index.scss';

    .change-task-page {
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
            padding-bottom: rem(93px);
        }

        &__button {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: rem(16px);
            width: 100%;
        }

        &__buttons {
            display: flex;
            align-items: center;
            gap: rem(8px);
        }
    }
</style>
