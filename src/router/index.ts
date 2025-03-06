import { createRouter, createWebHistory } from 'vue-router';
import { Paths } from './routes';
import type { Component } from 'vue';

interface IRoute {
    path: string;
    component: Component;
}

const routes:IRoute[] = [
    {
        path: Paths.root,
        component: () => import('@/views/MainPage.vue'),
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;
