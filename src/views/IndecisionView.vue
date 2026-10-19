<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
    {
        id: 1,
        message: 'Hola, vamos a tomar un café?',
        itsMine: true
    },
    {
        id: 2,
        message: 'Sí, claro',
        itsMine: false,
        image: 'https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif'
    }
]);
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>John Doe</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox />
  </div>
</template>