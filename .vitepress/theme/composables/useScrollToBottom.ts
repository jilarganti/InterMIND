import { nextTick } from "vue"
import type { Ref } from "vue"

export function useScrollToBottom(messagesContainerRef: Ref<HTMLDivElement | null>) {
    const scrollToBottom = async (): Promise<void> => {
        await nextTick()
        if (messagesContainerRef.value) {
            const container = messagesContainerRef.value
            container.scrollTop = container.scrollHeight
        }
    }

    return {
        scrollToBottom
    }
}