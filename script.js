// Abre o modal quando o botão é clicado
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

// Fecha o modal quando o botão de fechar é clicado
document.querySelector('#modal .close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Abre o modal de Gols por clubes/seleção quando o botão é clicado
document.getElementById('openModalGols').addEventListener('click', function() {
    var modalGols = document.getElementById('myModalGols');
    modalGols.style.display = 'block';
    // Remova a classe que oculta o conteúdo do modal
    modalGols.querySelector('.modal-content').classList.remove('hidden');
});

// Fecha o modal de Gols por clubes/seleção quando o botão de fechar é clicado
document.querySelector('#myModalGols .close').addEventListener('click', function() {
    var modalGols = document.getElementById('myModalGols');
    modalGols.style.display = 'none';
});
