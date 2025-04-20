import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ITasks } from '@/static/mainView/interfaces';

export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref<ITasks[]>([
        { id: 1, title: 'Адаптировать ленд для AI', isBug: false },
        { id: 2, title: 'Пофиксить баг в портале', isBug: true },
        { id: 3, title: 'Попить кофе', isBug: false },
        { id: 4, title: 'Прочитать книгу', isBug: false },
        { id: 5, title: 'Поиграть в доту', isBug: false },
        { id: 6, title: 'Написать аналог Twitch', isBug: false },
        { id: 7, title: 'Сделать ZM LINK', isBug: false },
        { id: 8, title: 'Пойти на завод', isBug: true },
    ]);

    const getTasks = computed(() => {
        return [...tasks.value].sort((a, b) => {
            if (a.isBug && !b.isBug) return -1;
            if (!a.isBug && b.isBug) return 1;
            return 0;
        });
    });

    const bugs = computed(() => {
        return tasks.value.filter((task: ITasks) => task.isBug).length;
    });

    const getTaskById = (id: number) => {
        return computed(() => tasks.value.find((task: ITasks) => task.id === id));
    };

    function addTask(title: string, isBug: boolean): void {
        const newId: number =
            tasks.value.length > 0
                ? Math.max(...tasks.value.map((task: ITasks) => task.id)) + 1
                : 1;

        tasks.value.push({
            id: newId,
            title,
            isBug: isBug
        });
    }

    function removeTask(id: number): void {
        const index: number = tasks.value.findIndex((task: ITasks) => task.id === id);
        if (index !== -1) {
            tasks.value.splice(index, 1);
        }
    }

    function updateTask(id: number, updates: Partial<Omit<ITasks, 'id'>>): void {
        const task: ITasks | undefined = tasks.value.find((tsk: ITasks) => tsk.id === id);
        if (task) {
            Object.assign(task, updates);
        }
    }

    return {
        tasks,
        getTasks,
        getTaskById,
        addTask,
        removeTask,
        updateTask,
        bugs
    };
});
