let isEditMode = false;

document.addEventListener('DOMContentLoaded', function() {
    loadSavedContent();
    init();
});

function init() {
    // Add edit mode toggle button
    const header = document.querySelector('header');
    let editButton = document.getElementById('edit-toggle');
    if (!editButton) {
        editButton = document.createElement('button');
        editButton.id = 'edit-toggle';
        editButton.textContent = 'Edit Mode';
        editButton.style.cssText = 'position: absolute; top: 10px; right: 10px; background: #e74c3c; color: white; border: none; padding: 5px 10px; cursor: pointer;';
        header.appendChild(editButton);
    }

    editButton.addEventListener('click', function() {
        isEditMode = !isEditMode;
        toggleEditMode(isEditMode);
        editButton.textContent = isEditMode ? 'Exit Edit' : 'Edit Mode';
        editButton.style.background = isEditMode ? '#27ae60' : '#e74c3c';
    });

    // Make nav links work
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

function toggleEditMode(edit) {
    document.body.classList.toggle('edit-mode', edit);
    const sections = document.querySelectorAll('section');
    const headerH1 = document.querySelector('header h1');
    if (edit) {
        headerH1.setAttribute('contenteditable', 'true');
        headerH1.style.border = '1px dashed #ccc';
    } else {
        headerH1.removeAttribute('contenteditable');
        headerH1.style.border = '';
    }
    sections.forEach(section => {
        if (edit) {
            section.setAttribute('contenteditable', 'true');

            // Add delete button
            if (!section.querySelector('.delete-section')) {
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-section';
                deleteBtn.textContent = 'Delete Section';
                deleteBtn.addEventListener('click', function() {
                    if (confirm('Delete this section?')) {
                        section.remove();
                        updateNav();
                        saveContent();
                    }
                });
                section.appendChild(deleteBtn);
            }
        } else {
            section.removeAttribute('contenteditable');

            // Remove delete button
            const deleteBtn = section.querySelector('.delete-section');
            if (deleteBtn) deleteBtn.remove();
        }
    });

    // Add section button
    let addSectionBtn = document.getElementById('add-section');
    if (edit && !addSectionBtn) {
        addSectionBtn = document.createElement('button');
        addSectionBtn.id = 'add-section';
        addSectionBtn.textContent = 'Add New Section';
        document.body.insertBefore(addSectionBtn, document.querySelector('footer'));

        addSectionBtn.addEventListener('click', function() {
            const sectionName = prompt('Enter section name:');
            if (sectionName) {
                const newSection = document.createElement('section');
                newSection.id = sectionName.toLowerCase().replace(/\s+/g, '-');
                newSection.innerHTML = `<h2>${sectionName}</h2><p>New content here...</p>`;
                document.body.insertBefore(newSection, document.querySelector('footer'));
                updateNav();
                saveContent();
            }
        });
    } else if (!edit && addSectionBtn) {
        addSectionBtn.remove();
    }

    // Save button
    let saveBtn = document.getElementById('save-changes');
    if (edit && !saveBtn) {
        saveBtn = document.createElement('button');
        saveBtn.id = 'save-changes';
        saveBtn.textContent = 'Save Changes';
        document.body.insertBefore(saveBtn, document.querySelector('footer'));

        saveBtn.addEventListener('click', function() {
            saveContent();
            alert('Changes saved!');
        });
    } else if (!edit && saveBtn) {
        saveBtn.remove();
    }
}

function updateNav() {
    const nav = document.querySelector('nav');
    nav.innerHTML = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const link = document.createElement('a');
        link.href = '#' + section.id;
        link.textContent = section.querySelector('h2').textContent;
        nav.appendChild(link);
    });
}

function saveContent() {
    const content = document.body.innerHTML;
    localStorage.setItem('siteContent', content);
}

function loadSavedContent() {
    const saved = localStorage.getItem('siteContent');
    if (saved) {
        document.body.innerHTML = saved;
        // Re-initialize after loading to attach event listeners
        init();
    }
}