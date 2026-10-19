import { ref } from "vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no.interface";

export const useChat = () => {

  const messages = ref<ChatMessage[]>([]);

  const getResponse = async (): Promise<YesNoResponse> => {
    const resp = await fetch("https://yesno.wtf/api");
    return (await resp.json()) as YesNoResponse;
  };

  const sendMessage = async (message: string) => {
    messages.value.push({
      id: new Date().getTime(),
      message,
      itsMine: true,
    });

    if (!message.endsWith("?")) return;

    const { answer, image } = await getResponse();

    messages.value.push({
        id: new Date().getTime(),
        message: answer === "yes" ? "Sí" : "No",
        itsMine: false,
        image: image,
    });
  };

  return { messages, sendMessage };
};
