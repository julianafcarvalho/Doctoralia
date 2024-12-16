
const { test, expect } = require('@playwright/test');

test.describe('Agendamento de consultas', () => {
  
  test('Agendar uma nova consulta', async ({ page }) => {
    await page.goto('https://teleconsultaportugal.com/consultas-online/');
    await page.selectOption('select#horario', { label: '10:00' });
    await page.click('button#agendar');
    const confirmationMessage = await page.innerText('.message');
    expect(confirmationMessage).toBe('Consulta agendada com sucesso!');
  });

  test('Cancelar uma consulta recém-criada', async ({ page }) => {
    await page.goto('https://teleconsultaportugal.com/consultas-online/');
    await page.selectOption('select#horario', { label: '10:00' });
    await page.click('button#agendar');
    await page.click('button#cancelar');
    const confirmationMessage = await page.innerText('.message');
    expect(confirmationMessage).toBe('Consulta cancelada com sucesso!');
  });

  test('Tentar agendar em horário ocupado', async ({ page }) => {
    await page.goto('https://teleconsultaportugal.com/consultas-online/');
    await page.selectOption('select#horario', { label: '10:00' });
    await page.click('button#agendar');
    await page.selectOption('select#horario', { label: '10:00' });
    const errorMessage = await page.innerText('.error');
    expect(errorMessage).toBe('Este horário já está ocupado!');
  });

  test('Verificar horários disponíveis', async ({ page }) => {
    await page.goto('https://teleconsultaportugal.com/consultas-online/');
    const availableSlots = await page.$$eval('select#horario option', options => options.map(option => option.textContent));
    expect(availableSlots).toContain('10:00');
    expect(availableSlots).toContain('11:00');
  });

  test('Restrição de cancelamento recente', async ({ page }) => {
    await page.goto('https://teleconsultaportugal.com/consultas-online/');
    await page.selectOption('select#horario', { label: '10:00' });
    await page.click('button#agendar');
    await page.waitForTimeout(1000); // Aguarda 1 segundo
    await page.click('button#cancelar');
    const errorMessage = await page.innerText('.error');
    expect(errorMessage).toBe('Não é possível cancelar a consulta antes de 5 minutos.');
  });

});
