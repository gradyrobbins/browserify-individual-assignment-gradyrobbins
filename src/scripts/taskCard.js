// Grady R.
// this file builds an HTML representation of how the tasks are to be displayed on the DOM.
// also be aware of event bubbling, verify event listener works on dynamically generated list item
console.log("taskCard.js")

const taskEntry = (item) => {
    return `
        <div class="taskEntry">
            <p class="task__name">
                Favorite Place: ${item.title}
            </p>
            <p>
            Description: ${item.content}
            </p>
            <button class="task__delete" id="edit--${item.id}">Click to Delete this place from the list</button>
        </div>
    `
}

module.exports = taskEntry