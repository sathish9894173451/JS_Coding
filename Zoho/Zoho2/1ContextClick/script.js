document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showContextMenu(e);
});

document.addEventListener('click', function () {
    hideContextMenu();
});

function showContextMenu(e) {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
}

function hideContextMenu() {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display = 'none';
}

function showPopup(menuName) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    popupContent.innerText = menuName;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
