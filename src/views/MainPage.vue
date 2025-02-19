<script setup lang="ts">
    import GameHeader from '../components/GameHeader.vue';
</script>

<template>
    <div class="main-page">
        <game-header></game-header>
        <div class="game-container">
            <svg height="250" width="200" class="figure-container">
                <!-- Rod -->
                <line x1="60" y1="20" x2="140" y2="20" />
                <line x1="140" y1="20" x2="140" y2="50" />
                <line x1="60" y1="20" x2="60" y2="230" />
                <line x1="20" y1="230" x2="100" y2="230" />

                <!-- Head -->
                <circle cx="140" cy="70" r="20" />
                <!-- Body -->
                <line x1="140" y1="90" x2="140" y2="150" />
                <!-- Arms -->
                <!-- <line x1="140" y1="120" x2="120" y2="100" />
          <line x1="140" y1="120" x2="160" y2="100" /> -->
                <!-- Legs -->
                <!-- <line x1="140" y1="150" x2="120" y2="180" />
          <line x1="140" y1="150" x2="160" y2="180" /> -->
            </svg>

            <div class="wrong-letters-container">
                <div class="wrong-letters">
                    <p>Ошибки</p>
                    <span>п , </span>
                    <span>м , </span>
                    <span>с </span>
                </div>
            </div>

            <div class="word">
                <span class="letter">л</span>
                <span class="letter"></span>
                <span class="letter">д</span>
                <span class="letter"></span>
                <span class="letter"></span>
            </div>
        </div>

        <!-- Container for final message -->
        <div v-if="false" class="popup-container">
            <div class="popup">
                <h2>Поздравляю, вы победили! 😃</h2>
                <!-- <h2>Вы проиграли. 😕</h2> -->
                <!-- <h3>...имя: Лидия</h3> -->
                <button>Сыграть еще раз</button>
            </div>
        </div>

        <!-- Notification -->
        <div class="notification-container show">
            <p>Вы уже вводили этот символ</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../assets/styles/index.scss';

    .main-page {
        background-color: #ffffff;
        color: #3a3a3a;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 80vh;
        margin: 0;
        overflow: hidden;
    }

    h1 {
        margin: 20px 0 0;
    }

    .game-container {
        padding: 20px 0;
        position: relative;
        margin: auto;
        height: 350px;
    }

    .figure-container {
        fill: transparent;
        stroke: #3a3a3a;
        stroke-width: 4px;
        stroke-linecap: round;
    }

    .figure-part {
        display: none;
    }

    .wrong-letters-container {
        position: absolute;
        top: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        text-align: right;
    }

    .wrong-letters-container p {
        margin: 0 0 5px;
    }

    .wrong-letters-container span {
        font-size: 24px;
    }

    .word {
        display: flex;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }

    .letter {
        border-bottom: 3px solid #54bc6c;
        display: inline-flex;
        font-size: 30px;
        align-items: center;
        justify-content: center;
        margin: 0 3px;
        height: 50px;
        width: 20px;
    }

    .popup-container {
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .popup {
        background: #54bc6c;
        border-radius: 5px;
        box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
    }

    .popup h2,
    .popup h3 {
        color: #fff;
    }

    .popup button {
        cursor: pointer;
        background-color: #fff;
        color: #54bc6c;
        border: 0;
        margin-top: 20px;
        padding: 12px 20px;
        font-size: 16px;
    }

    .popup button:active {
        transform: scale(0.98);
    }

    .popup button:focus {
        outline: 0;
    }

    .notification-container {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px 10px 0 0;
        padding: 15px 20px;
        position: absolute;
        bottom: -50px;
        transition: transform 0.3s ease-in-out;
    }

    .notification-container p {
        margin: 0;
    }

    .notification-container.show {
        transform: translateY(-50px);
    }
</style>
