import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import { Paths } from './routes';
import type { Component } from 'vue';

interface IRoute {
    path: string;
    component: Component;
    name: string;
    props?: (route: RouteLocationNormalized) => {
        id: number;
        title: string;
        isBug: boolean;
    };
}

const routes: IRoute[] = [
    {
        path: Paths.root,
        component: () => import('@/views/mainView/MainView.vue'),
        name: 'MainView'
    },
    {
        path: Paths.createTaskView,
        component: () => import('@/views/createTaskView/CreateTaskView.vue'),
        name: 'CreateTaskView'
    },
    {
        path: Paths.changeTaskView + '/:id',
        component: () => import('@/views/changeTaskView/ChangeTaskView.vue'),
        name: 'ChangeTaskView',
        props: (route) => ({
            id: Number(route.params.id),
            title: String(route.query.title),
            isBug: Number(route.query.isBug) === 1
        })
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
