<script setup lang="ts">
import { watch, ref } from 'vue';
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

const props = defineProps<{
    messages: ChatMessage[];
}>();

const chatContainer = ref<HTMLElement | null>(null);

watch(
    props.messages,
  () => {
    setTimeout(() => {
        chatContainer.value?.scrollTo({ 
            top: chatContainer.value?.scrollHeight ?? 0,
            behavior: 'smooth' 
        });
    }, 0);
  }
);

</script>

<template>
    <div class="flex-1 overflow-y-auto p-4" ref="chatContainer">
        <div class="flex flex-col space-y-2">
            <!--  v-bind="message" =  :message="message.message" + :itsMine="message.itsMine" + :image="message.image"  -->
            <ChatBubble v-for="message in props.messages" :key="message.id" v-bind="message" />
        </div>
    </div>
</template>