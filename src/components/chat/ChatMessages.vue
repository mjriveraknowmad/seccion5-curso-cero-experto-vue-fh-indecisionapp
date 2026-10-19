<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';

</script>

<template>
    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <ChatBubble :message="'Hola, vamos a tomar un café?'" :itsMine="true" />
            <!-- https://yesno.wtf/assets/no/14-cb78bf7104f848794808d61b9cd83eba.gi -->
            <ChatBubble :message="'Sí, claro'" :itsMine="false" 
                :image="'https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif'"/>
        </div>
    </div>
</template>