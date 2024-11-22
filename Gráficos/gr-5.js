import { getCSS, tickConfig, incluirTexto } from "./common.js "

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['Cristianismo','Islamismo','Religiões Tradicionais','Outras Religiões']
    const quantidadeUsuarios = ['40','40','15','5']
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
            text: 'Indice das religiões no continente africano.',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Religiões.',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Porcentagem.',
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
    incluirTexto(`A África é um continente de grande diversidade religiosa, com várias religiões praticadas em diferentes regiões. As religiões predominantes incluem o Cristianismo, o Islamismo, e as Religiões Tradicionais Africanas. Além disso, há uma presença significativa de Outras Religiões (como o Hinduísmo e o Judaísmo), particularmente em algumas áreas devido a influências externas e imigrantes.

A seguir está um`)

}

quantidadeUsuarios()