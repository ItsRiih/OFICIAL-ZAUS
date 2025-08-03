// Basic checklist system for ZAUS Delegation 3P

document.addEventListener('DOMContentLoaded', () => {
  const panels = [
    {
      area: 'Atendimento',
      tasks: [
        'Atualizar leads novos e agendamentos',
        'Enviar lembretes de agendamento',
        'Triagem de novos atendimentos',
        'Follow-up de propostas',
        'Relatório de conversões e métricas'
      ]
    },
    {
      area: 'Projetos',
      tasks: [
        'Revisar prazos e criar pastas',
        'Validação de documentos pendentes',
        'Atualização de status no painel',
        'Check de entregas e pendências',
        'Planejamento da semana seguinte'
      ]
    },
    {
      area: 'Marketing',
      tasks: [
        'Definir roteiro da campanha',
        'Gravação de vídeos',
        'Postagem de conteúdo',
        'Disparo de campanha',
        'Reels com bastidores ou depoimento'
      ]
    }
  ];

  const container = document.getElementById('painel');
  if (!container) return;

  panels.forEach(panel => {
    const section = document.createElement('section');
    section.className = 'painel-section';
    const heading = document.createElement('h3');
    heading.textContent = panel.area;
    section.appendChild(heading);

    panel.tasks.forEach(task => {
      const label = document.createElement('label');
      label.className = 'task-item';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const span = document.createElement('span');
      span.textContent = task;
      label.appendChild(checkbox);
      label.appendChild(span);
      section.appendChild(label);
    });

    container.appendChild(section);
  });
});

