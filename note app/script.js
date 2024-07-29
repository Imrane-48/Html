document.getElementById('save').addEventListener('click', function() {
    const noteText = document.getElementById('note').value;
    if (noteText) {
        const savedNotes = document.getElementById('savedNotes');
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = noteText;
        savedNotes.appendChild(noteDiv);
        document.getElementById('note').value = '';
    }
});