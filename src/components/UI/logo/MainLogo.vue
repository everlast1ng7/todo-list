<script setup lang="ts">
    import IconLogo from '@/components/icons/IconLogo.vue';
    import type { IMainLogoParams } from '@/static/logo/interfaces';
    import { Paths } from '@/router/routes';

    interface IProps {
        IMainLogoParams?: IMainLogoParams;
        title: string;
    }

    const props = defineProps<IProps>();
</script>

<template>
    <div class="logo" @click="$router.push(Paths.root)">
        <icon-logo :IMainLogoParams="props.IMainLogoParams"></icon-logo>
        <p class="logo-title">{{ props.title }}</p>
    </div>
</template>

<style scoped lang="scss">
    @import '../../../assets/styles/index.scss';

    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: rem(5px);
        cursor: pointer;

        &-title {
            color: var(--logo-title-color);
            font-size: rem(20px);
            font-weight: 600;
        }
    }
</style>
