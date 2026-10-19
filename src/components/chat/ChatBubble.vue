<script setup lang="ts">
interface Props {
    message: string;
    itsMine: boolean;
    image?: string;
}
const {itsMine, message, image} = defineProps<Props>();
</script>

<template>
    <div :class="['flex', itsMine ? 'justify-end' : 'justify-start']">
        <div :class="['text-black p-2 rounded-lg max-w-xs', itsMine ? 'bg-blue-200' : 'bg-gray-300']">
            {{ message }}
            <img v-if="image" :src="image" alt="Yes/No response" class="w-52 h-52 object-cover rounded-md" />
        </div>
    </div>
</template>