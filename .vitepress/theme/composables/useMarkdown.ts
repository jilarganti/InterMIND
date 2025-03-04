import MarkdownIt from "markdown-it"

export function useMarkdown() {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        breaks: false,
    })

    // Настройка открытия ссылок в новой вкладке
    const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        tokens[idx].attrSet("target", "_blank")
        tokens[idx].attrSet("rel", "noopener")
        return defaultRender(tokens, idx, options, env, self)
    }

    // Настройка обработки переносов строк
    md.set({ breaks: false })

    const renderMarkdown = (content: string): string => {
        return md.render(content)
    }

    return {
        renderMarkdown
    }
}