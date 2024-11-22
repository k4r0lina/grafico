import { getCSS, tickConfig, incluirTexto } from "./common.js "

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['Afro-asiática','Nilo-Sahariana','Niger-Congo','Khoisan']
    const quantidadeUsuarios = ['30','9','60','1']
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Línguas faladas na África.',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Família Linguística.',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Quantidades das línguas faladas.',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }

        }

    }
    const grafico = document.createElement('div')
    grafico.className - 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
    incluirTexto(`
O continente africano é extremamente diverso em termos linguísticos, com um número impressionante de línguas e dialetos falados. A diversidade linguística da África é uma das maiores do mundo, e estima-se que haja mais de 2.000 línguas faladas no continente. Essas línguas podem ser agrupadas em várias famílias linguísticas, com algumas delas compartilhando características comuns. A seguir, apresento um índice das principais famílias linguísticas da África, bem como a distribuição aproximada das línguas faladas em cada uma delas.`)

}

quantidadeUsuarios()