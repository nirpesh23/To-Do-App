
/**
 * Represents a to-do item.
 * @class
 */
export default class TodoItem {
    /**
     * Creates an instance of ToDoItems.
     * @param {string} name - The name of the to-do item.
     * @param {string} description - The description of the to-do item.
     * @param {Date} endDate - The start date of the to-do item.
     */
    constructor(name, description, endDate) {
        this.name = name,
        this.description = description,
        this.endDate = endDate
    }

}