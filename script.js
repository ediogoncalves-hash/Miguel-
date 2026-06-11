// 1. CONFIGURAÇÃO DO GRÁFICO (Chart.js)
// Mostra visualmente que a produção subiu enquanto as emissões de carbono caíram
const ctx = document.getElementById('balanceChart').getContext('2d');
const balanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2022', '2023', '2024', '2025', '2026'], // Linha do tempo
        datasets: [
            {
                label: 'Produtividade da Safra (Sacas/HA)',
                data: [62, 65, 71, 78, 85], // Produção subindo
                borderColor: '#00e676',
                backgroundColor: 'rgba(0, 230, 118, 0.1)',
                tension: 0.3,
                borderWidth: 3
            },
            {
                label: 'Uso de Defensivos Químicos (%)',
                data: [100, 85, 60, 45, 30], // Impacto caindo
                borderColor: '#ff1744',
                backgroundColor: 'rgba(255, 23, 68, 0.1)',
                tension: 0.3,
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: '#8a99ad' } // Cor do texto das legendas
            }
        },
        scales: {
            y: {
                grid: { color: '#2a3558' },
                ticks: { color: '#8a99ad' }
            },
            x: {
                grid: { color: '#2a3558' },
                ticks: { color: '#8a99ad' }
            }
        }
    }
});

// 2. INTERATIVIDADE DO MAPA
// Dados que vão aparecer dinamicamente na tela ao clicar nas zonas do mapa
const dadosZonas = {
    preservacao: `
        <div class="zone-details animate-fade">
            <h4 style="color: #4ade80;">Área de Preservação</h4>
            <p><strong>Status:</strong> Protegida (Reserva Legal)</p>
            <p><strong>Biodiversidade:</strong> 142 espécies catalogadas.</p>
            <p><strong>Crédito de Carbono:</strong> Gerando bônus verde para reinvestimento tecnológico.</p>
            <div class="badge-eco">Pegada de Carbono Negativa</div>
        </div>
    `,
    lavoura: `
        <div class="zone-details animate-fade">
            <h4 style="color: #facc15;">Lavoura Inteligente</h4>
            <p><strong>Cultura:</strong> Soja com rotação de culturas.</p>
            <p><strong>Tecnologia:</strong> Monitoramento por drones e sensores IoT no solo.</p>
            <p><strong>Sustentabilidade:</strong> Manejo Integrado de Pragas (MIP) reduziu químicos em 70%.</p>
        </div>
    `,
    solar: `
        <div class="zone-details animate-fade">
            <h4 style="color: #60a5fa;">Usinas Solares & Irrigação</h4>
            <p><strong>Energia:</strong> 100% autossuficiente via painéis fotovoltaicos.</p>
            <p><strong>Gotejamento:</strong> Irrigação automatizada baseada na previsão do tempo.</p>
            <p><strong>Economia:</strong> Redução de 40% no desperdício de água potável.</p>
        </div>
    `
};

function inspecionarZona(nomeZona) {
    const container = document.getElementById('dynamic-details');
    // Aplica o HTML correspondente à zona clicada
    container.innerHTML = dadosZonas[nomeZona];
}
