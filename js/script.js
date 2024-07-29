const table = document.querySelector('.table')
const width = document.querySelector('.width')
const height = document.querySelector('.height')
const send = document.querySelector('.send')
const color = document.querySelector('.color')

send.onclick = () => {
    table.innerHTML = ``
    for (let i = 0; i < height.value; i++) {
        const row = document.createElement('tr')
        table.appendChild(row)
        for (let k = 0; k < width.value; k++) {
            const cell = document.createElement('td')
            row.appendChild(cell)
            cell.onclick = () => {
                cell.style.background = `${color.value}`
            }
        }
    }
    
}
