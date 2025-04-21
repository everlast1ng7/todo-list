<script setup lang="ts">
    import type { IMainLogoParams } from '@/static/logo/interfaces';

    const props = withDefaults(defineProps<IMainLogoParams>(), {
        width: '140px',
        height: '43px'
    });
</script>

<template>
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 43">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#21a2f5" />
                <stop offset="33%" stop-color="#56deec" />
                <stop offset="66%" stop-color="#efaf1a" />
                <stop offset="100%" stop-color="#d36729" />
            </linearGradient>
        </defs>
        <path
            d="M133.001 28.6844H111.989V7.18337C111.989 3.22873 108.856 0.0225022 104.991 0.0225022C103.156 0.0225022 101.487 0.744314 100.24 1.92621L100.228 1.93643C100.104 2.05503 99.9823 2.17771 99.8664 2.30449L99.1909 2.99358C99.067 3.104 98.9471 3.21851 98.8292 3.33711L83.9744 18.5361L69.1197 3.33711C69.0077 3.2226 68.8918 3.11218 68.7739 3.00585L68.0605 2.27586C66.7834 0.887442 64.9728 0.0184086 62.9623 0.0184086C59.0973 0.0184086 55.9636 3.22465 55.9636 7.17928V28.6599H42.0242V7.16088C42.0242 3.20624 38.8906 0 35.0255 0C34.8536 0 34.6837 0.00613988 34.5159 0.0184086H6.9987C3.13363 0.0184086 0 3.22465 0 7.17928C0 11.1339 3.13363 14.3401 6.9987 14.3401H28.0308V36.3176C28.2806 40.0391 31.3083 42.9816 35.0095 42.9816H63.0023C66.6236 42.9816 69.6013 40.1679 69.963 36.563V24.4476L79.0202 33.7146C80.3891 35.1153 82.1838 35.8146 83.9784 35.8125C85.7731 35.8146 87.5677 35.1153 88.9367 33.7146L97.9938 24.4476V35.8207C97.9938 37.7428 98.7332 39.487 99.9383 40.7732C101.213 42.1453 103.014 43 105.008 43H133.001C136.866 43 140 39.7938 140 35.8391C140 31.8845 136.866 28.6782 133.001 28.6782V28.6844Z"
            fill="url(#logoGradient)"
            class="logo-path"
        />
    </svg>
</template>

<style scoped lang="scss">
    @import '../../assets/styles/index.scss';

    .logo {
        width: v-bind('props.width');
        height: v-bind('props.height');
        transition: all 0.3s ease;
    }

    .logo-path {
        &:hover {
            animation: gradient-flow 3s linear infinite;
        }
    }

    @keyframes gradient-flow {
        0% {
            filter: hue-rotate(0deg);
        }
        25% {
            filter: hue-rotate(90deg) saturate(1.5);
        }
        50% {
            filter: hue-rotate(180deg);
        }
        75% {
            filter: hue-rotate(270deg) saturate(1.5);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
</style>
