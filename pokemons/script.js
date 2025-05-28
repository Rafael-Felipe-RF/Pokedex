// Create 10 divs and add click event to toggle highlight

document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '800px';
    container.style.margin = '0 auto';

    for (let i = 0; i < 10; i++) {
        const div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.background = '#f2f2f2';
        div.style.border = '1px solid #000';
        div.style.margin = '10px';
        div.style.transition = 'all 0.2s';

        div.addEventListener('click', function () {
            if (!div.classList.contains('highlighted')) {
                div.style.width = '150px';
                div.style.height = '150px';
                div.style.background = '#007bff';
                div.classList.add('highlighted');
            } else {
                div.style.width = '100px';
                div.style.height = '100px';
                div.style.background = '#f2f2f2';
                div.classList.remove('highlighted');
            }
        });

        container.appendChild(div);
    }

    document.body.appendChild(container);
});