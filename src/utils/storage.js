/**
 * Save an object to localStorage.
 *
 * @param {string} key - The key under which the value should be stored.
 * @param {Object} value - The value to be stored.
 */
export const saveObject = (key, value) => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error(`Error saving data to localStorage for key "${key}":`, error);
    }
};

/**
* Save an value to localStorage.
*
* @param {string} key - The key under which the value should be stored.
* @param {string|boolean|number} value - The value to be stored.
*/
export const saveValue = (key, value) => {
    localStorage.setItem(key, value)
};

/**
 * Retrieve an object from localStorage.
 *
 * @param {string} key - The key of the value to be retrieved.
 * @returns {Object|null} - The parsed object from localStorage, or null if not found or an error occurred.
 */
export const getObject = (key) => {
    try {
        const serializedValue = localStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
        console.error(`Error reading data from localStorage for key "${key}":`, error);
        return null;
    }
};

/**
 * Retrieve a value from localStorage.
 *
 * @param {string} key - The key of the value to be retrieved.
 * @returns {string|boolean|number|null} - The value from localStorage, or null if not found.
 */
export const getValue = (key) => {
    return localStorage.getItem(key);
};
