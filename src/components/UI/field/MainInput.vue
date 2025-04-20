<script setup lang="ts">
    interface IProps {
        title?: string;
        text?: string;
        placeholder: string;
        isError?: boolean;
    }

    const model = defineModel<string>();

    const props = withDefaults(defineProps<IProps>(), {
        title: '',
        text: '',
        isError: false
    });
</script>

<template>
    <div class="input-wrapper">
        <p class="input-wrapper__title">{{ props.title }}</p>
        <input
            class="input-wrapper__field"
            :class="{ 'input-wrapper__field--error': props.isError }"
            type="text"
            :placeholder="props.placeholder"
            v-model="model"
        />
        <p class="input-wrapper__text">{{ props.text }}</p>
    </div>
</template>

<style scoped lang="scss">
    @import '../../../assets/styles/index.scss';

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: rem(8px);
        width: 100%;

        &__title {
            font-size: rem(14px);
            font-weight: 500;
            letter-spacing: -0.14px;
            color: var(--input-title-color);
        }

        &__text {
            letter-spacing: -0.12px;
            font-weight: 500;
            font-size: rem(12px);
            color: var(--input-text-color);
        }

        &__field {
            background-color: var(--input-background);
            border: var(--input-border);
            color: var(--input-color);
            width: 100%;
            padding: rem(14px) rem(20px);
            font-size: rem(14px);
            letter-spacing: -0.14px;
            font-weight: 400;
            outline: none;
            transition: border 0.3s ease;

            &:placeholder {
                color: var(--input-placeholder);
            }

            &:focus {
                border: var(--input-border-hover);
            }

            &--error {
                border: var(--input-border-error);
            }
        }
    }
</style>
