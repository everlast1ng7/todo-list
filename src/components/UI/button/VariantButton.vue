<script setup lang="ts">
    interface IProps {
        variant: 'primary' | 'secondary';
        type?: 'button' | 'submit' | 'reset';
        width?: string;
        height?: string;
    }

    const props = withDefaults(defineProps<IProps>(), {
        variant: 'primary',
        width: '80px',
        height: '38px',
        type: 'button'
    });
</script>

<template>
    <button :class="['button', `button--${props.variant}`]" :type="props.type">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
    @import '../../../assets/styles/index.scss';

    .button {
        border-radius: 4px;
        width: v-bind('props.width');
        height: v-bind('props.height');
        padding: rem(10px);
        letter-spacing: -0.14px;
        font-weight: 500;
        font-size: rem(14px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: rem(4px);
        text-align: center;
        border: none;
        outline: none;
        cursor: pointer;
        white-space: nowrap;
        transition: 0.3s ease;

        &--primary {
            background-color: var(--background-button-primary);
            color: var(--color-button-primary);

            &:hover {
                background-color: var(--background-button-hover-primary);
            }
        }

        &--secondary {
            background-color: var(--background-button-secondary);
            color: var(--color-button-secondary);

            &:hover {
                background-color: var(--background-button-hover-secondary);
            }
        }
    }
</style>
