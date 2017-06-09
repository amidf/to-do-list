$(document).ready(() => {
    createWrapper();
    createList();
    createInput();
});

function createWrapper() {
    const $wrapper = $('<div></div>');
    $wrapper.addClass('wrapper');
    $('body').prepend($wrapper);
}

function createList() {
    const $ul = $('<ul></ul>');
    $ul.attr('class','list-group pmd-z-depth-3 pmd-list pmd-card-list');
    $('.wrapper').append($ul);

    $ul.on('click', (event) => {
        if (event.target.tagName === 'LI') {
            $(event.target).hide('fast', () => { $(event.target).remove(); });
        }
    });
}

function createInput() {
    const $form = $('<form></form>');
    const $label = $('<label></label>');
    const $input = $('<input type="text" title="item">')

    $form.attr('class', 'form-group pmd-textfield pmd-z-depth-3');

    $label.attr('for', 'input');
    $label.attr('class', 'control-label');
    $label.text('Name of item:');

    $input.attr('id', 'input');
    $input.attr('class', 'form-control');

    $('.wrapper').append($form);
    $form.append($label);
    $form.append($input);

    $form.on('submit', () => { return false; });

    $input.on('keydown', (event) => {
        if (event.keyCode === 13) {
            createItemList($input.val());
            $input.val('');
        }
    });
}

function createItemList(inputValue) {
    const $li = $('<li></li>');
    $li.addClass('list-group-item');
    $li.text(inputValue);
    $('.list-group').append($li);
}
