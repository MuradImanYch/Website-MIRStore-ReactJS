/**
 * Based on provided id will return object itself
 * @param {Array} arr
 * @param {string|int} key
 * @param {string|int|boolean} value
 * @return {array}
 */
 export const getContentFromArrayBasedOnKey = (arr, key, value) => {
    return arr.filter(function (obj) {
      return obj[key] === value;
    });
}