import { html } from "satori-html"

export const templates: Record<string, (data?: Record<string, any>) => any> = {
  default: () => html`<div tw="flex items-center justify-between p-24">
    <h1>Blackhole</h1>
    <p>Engineer</p>
  </div>`,
  blog: (data) => html`<div tw="flex items-center justify-between p-24">
    <h1>${data?.title}</h1>
    <p>Engineer</p>
  </div>`
}