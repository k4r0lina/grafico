import { getCSS, tickConfig,incluirTexto } from "./common.js "

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['Rondônia','Amapá','Sergipe','Acre','Espírito Santo']
    const quantidadeUsuarios = ['5,8','5,2','4,8','3,3','3,1']
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'line',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Estados com mais Quilombos no Brasil',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Regiões do Brasil',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Quantidades de Quilombos',
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
    incluirTexto(`aaaaa`)

}

quantidadeUsuarios()