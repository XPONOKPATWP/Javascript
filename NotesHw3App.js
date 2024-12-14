$(document).ready(function () {

    // Add new note
    $('#addNoteButton').click(function () {
        const noteText = $('#noteInput').val().trim();
        if (noteText === '') return; // Don't add empty notes

        const noteHTML = `
            <li>
                <input type="checkbox" class="note-checkbox">
                <label>${noteText}</label>
                <button class="delete">Delete</button>
            </li>
        `;

        $('#notesList').append(noteHTML);
        $('#noteInput').val(''); // Clear input field
    });

    // Mark note as completed or incomplete
    $('#notesList').on('change', '.note-checkbox', function () {
        $(this).parent().toggleClass('completed');
    });

    // Delete a note
    $('#notesList').on('click', '.delete', function () {
        $(this).parent().remove();
    });

});
