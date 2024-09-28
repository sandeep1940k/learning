interface Background {
    class: string,
    properties: string,
}

const BACKGROUND: Background[] = [
    {
        class: 'bg-inherit',
        properties: 'background-color: inherit;',
    },
    {
        class: 'bg-current',
        properties: 'background-color: currentColor;',
    },
    {
        class: 'bg-transparent',
        properties: 'background-color: transparent;',
    },
    {
        class: 'bg-sky-300',
        properties: 'background-color: #87CEEB;',
    },
]

export default BACKGROUND