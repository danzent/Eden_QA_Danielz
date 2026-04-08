describe('Eden PACS - Menú circular MPR', () => {
  const url = 'https://pacs.evacenter.com/v2/mpr?studyId=738cb683-8426-42a1-b27e-921f455b70c4&tab=images&ac=dXNlcj1ldmEtY2VudGVyQHZpc2l0YW50LmNvbSZwYXNzd29yZD0zOTc5NzRlNS1hOWExLTQyOWYtYWRmMS02YzJkOTQ4ODhhYmImZXh0cmFfdmFsaWRhdGlvbj02ODkxNjNiYS0wMzAzLTRlYTEtYTRlMC1mNGE5Y2RiYTQ0YWQ%3D%3D%3D&md=1&serieId=0d018bf7-c18f-4882-b8fb-440fb72299d8&fromViewer=mobile_viewer';

  it('abre link, abre menú y deja Longitud visible/activa', () => {
    cy.viewport(1600, 900);
    cy.visit(url);

    cy.get('canvas.cornerstone-canvas', { timeout: 30000 })
      .first()
      .should('be.visible')
      .then(($canvas) => {
        const rect = $canvas[0].getBoundingClientRect();

        const openX = Math.floor(rect.left + 250);
        const openY = Math.floor(rect.top + 250);

        const medicionX = Math.floor(rect.left + 165);
        const medicionY = Math.floor(rect.top + 145);

        const longitudX = Math.floor(rect.left + 105);
        const longitudY = Math.floor(rect.top + 120);

        // 1) VISOR YA CARGADO
        cy.wait(1500);
        cy.screenshot('01-visor-cargado');

        // 2) ABRIR MENÚ CIRCULAR
        cy.get('body').realClick({
          x: openX,
          y: openY,
          button: 'right',
          position: 'topLeft'
        });

        cy.wait(1200);
        cy.screenshot('02-menu-circular-abierto');

        // 3) HOVER EN GRUPO MEDICIÓN
        cy.get('body').realMouseMove(medicionX, medicionY, { position: 'topLeft' });
        cy.wait(1200);

        // 4) HOVER EN LONGITUD / SUBOPCIONES DESPLEGADAS
        cy.get('body').realMouseMove(longitudX, longitudY, { position: 'topLeft' });
        cy.wait(1500);

        // Screenshot justo cuando se ve Longitud
        cy.screenshot('03-longitud-visible');

        // 5) CLICK REAL EN LONGITUD PARA DEJARLA ACTIVA
        cy.get('body').realClick({
          x: longitudX,
          y: longitudY,
          position: 'topLeft'
        });

        cy.wait(1500);

        // Screenshot cuando ya quedó seleccionada/activa
        cy.screenshot('04-longitud-seleccionada');
      });
  });
});