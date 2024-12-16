# QA Engineer Technical Challenge - Documentação de Testes

## Descrição

O objetivo deste desafio foi realizar a documentação dos cenários de teste para o fluxo de agendamento de consultas, incluindo a criação de uma matriz de risco para priorização dos testes, com base na probabilidade e impacto dos problemas encontrados. No entanto, durante a execução do teste da API de agendamento de consultas, foi identificado um erro no banco de dados, o que impossibilitou a execução da automação na plataforma original.

Devido ao erro de banco de dados (arquivo `database.sqlite` não encontrado), optei por testar uma plataforma alternativa, o [Teleconsulta Portugal](https://teleconsultaportugal.com/consultas-online/), que simula o fluxo de agendamento de consultas, embora com a entrega sendo mais demorada devido à mudança de plataforma.

## Cenários de Teste

### Cenário 1: Agendar uma nova consulta
- **Descrição:** O usuário tenta agendar uma nova consulta em um horário disponível.
- **Passos:**
  1. O usuário acessa a plataforma de agendamento.
  2. Seleciona um horário disponível.
  3. Clica em "Agendar".
  4. A consulta é confirmada e aparece na lista de consultas agendadas.
- **Resultado Esperado:** A consulta é agendada corretamente e confirmada na plataforma.

### Cenário 2: Cancelar uma consulta recém-criada
- **Descrição:** O usuário tenta cancelar uma consulta que foi criada recentemente.
- **Passos:**
  1. O usuário acessa a lista de consultas agendadas.
  2. Seleciona uma consulta recém-criada.
  3. Clica em "Cancelar".
  4. A consulta é removida da lista de consultas.
- **Resultado Esperado:** A consulta é cancelada com sucesso.

### Cenário 3: Verificar horários disponíveis
- **Descrição:** O sistema exibe corretamente os horários disponíveis para o agendamento.
- **Passos:**
  1. O usuário acessa a plataforma.
  2. O sistema exibe os horários disponíveis.
- **Resultado Esperado:** Somente horários válidos e disponíveis são exibidos.

### Cenário 4: Tentativa de agendamento em horário ocupado
- **Descrição:** O usuário tenta agendar uma consulta em um horário já ocupado.
- **Passos:**
  1. O usuário seleciona um horário ocupado.
  2. Clica em "Agendar".
- **Resultado Esperado:** O sistema deve informar que o horário já está ocupado.

### Cenário 5: Restrição de cancelamento recente
- **Descrição:** O usuário tenta cancelar uma consulta criada nos últimos 5 minutos.
- **Passos:**
  1. O usuário agenda uma consulta.
  2. Tenta cancelar a consulta imediatamente após o agendamento.
- **Resultado Esperado:** O sistema deve impedir o cancelamento da consulta.

## Matriz de Risco

A matriz de risco foi criada com base na probabilidade e no impacto dos cenários. As pontuações de probabilidade e impacto são atribuídas com base na análise de como esses problemas afetariam a experiência do usuário final.

| ID   | Caso de Teste                              | Probabilidade (1-5) | Impacto (1-5) | Nível de Risco (P x I) | Prioridade |
|------|--------------------------------------------|---------------------|---------------|------------------------|------------|
| TC01 | Agendar uma nova consulta                  | 3                   | 5             | 15                     | Alta       |
| TC02 | Cancelar uma consulta recém-criada         | 2                   | 4             | 8                      | Média      |
| TC03 | Verificar horários disponíveis             | 4                   | 3             | 12                     | Alta       |
| TC04 | Tentar agendar em horário ocupado          | 5                   | 2             | 10                     | Média      |
| TC05 | Restrição de cancelamento recente          | 2                   | 3             | 6                      | Baixa      |

## Justificativa para Priorizações

- **Agendar uma nova consulta** é uma das funcionalidades mais críticas, pois qualquer falha impactaria diretamente a experiência do usuário. Por isso, tem alta prioridade.
- **Verificar horários disponíveis** também tem alta prioridade, pois sem a exibição correta de horários, o agendamento não seria possível.
- **Cancelar uma consulta recém-criada** e **tentar agendar em horário ocupado** têm uma probabilidade de ocorrência média e um impacto significativo na experiência do usuário, portanto, têm prioridade média.
- **Restrição de cancelamento recente** tem a menor prioridade, pois afeta um cenário específico e não é tão comum.

## Conclusão

A documentação foi criada com base nos cenários fornecidos e inclui a matriz de risco para priorização dos testes. A mudança para o site alternativo [Teleconsulta Portugal](https://teleconsultaportugal.com/consultas-online/) foi necessária devido ao erro identificado na API original.

