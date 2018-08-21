// author: Grady R.
// purpose:  Task Form builder, creates an Form whose field values should push to APIObject, 

console.log("tasksForm.js")

const TaskFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#taskName").value = ""
            document.querySelector("#taskDescription").value = ""
        }
    },
    renderTaskForm: {
        value: () => {
            return `
                <fieldset>
                    <label for="taskName">Name a favorite Place:</label>
                    <input required type="text" id="taskName">
                </fieldset>

                <fieldset>
                    <label for="taskDescription">Why is this place special to you?</label>
                    <input required type="text" id="taskDescription">
                </fieldset>

                <button id="completedTask">Click here to save this task to the API</button>
                
            `
        }
    }

})


module.exports = TaskFormManager



