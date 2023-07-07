const grid = new Muuri('.grid', {
  layout: {
      rounding: false
  }
});

window.addEventListener('load', () => {
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('imagenes-cargadas');

  const enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach((elemento) => {
      elemento.addEventListener('click', (evento) => {
          evento.preventDefault();
          enlaces.forEach((enlace) => {
              enlace.classList.remove('activo');
          })
          evento.target.classList.add('activo');

          const categoria = evento.target.innerHTML.toLowerCase();
          categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
      });
  });
});

const grid2 = new Muuri('.grid2', {
  layout: {
      rounding: false
  }
});

window.addEventListener('load', () => {
  grid.refreshItems().layout();
  document.getElementById('grid2').classList.add('imagenes-cargadas');

  const enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach((elemento) => {
      elemento.addEventListener('click', (evento) => {
          evento.preventDefault();
          enlaces.forEach((enlace) => {
              enlace.classList.remove('activo');
          })
          evento.target.classList.add('activo');

          const categoria = evento.target.innerHTML.toLowerCase();
          categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
      });
  });
});