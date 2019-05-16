// Definitions by: Acid Chicken (硫酸鶏) <https://github.com/acid-chicken>
// Definitions: https://github.com/bemybaby/types
// TypeScript Version: 3.4.5

export {}

declare global {
  interface ArrayConstructor {
    /**
     * Returns a new array from a set of elements.
     * @param item1 One of elements to include in the new array object.
     * @param item2 One of elements to include in the new array object.
     * @param item3 One of elements to include in the new array object.
     * @param item4 One of elements to include in the new array object.
     * @param item5 One of elements to include in the new array object.
     * @param item6 One of elements to include in the new array object.
     * @param item7 One of elements to include in the new array object.
     * @param item8 One of elements to include in the new array object.
     */
    of<T1, T2, T3, T4, T5, T6, T7, T8>(item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8): [T1, T2, T3, T4, T5, T6, T7, T8]

    /**
     * Returns a new array from a set of elements.
     * @param item1 One of elements to include in the new array object.
     * @param item2 One of elements to include in the new array object.
     * @param item3 One of elements to include in the new array object.
     * @param item4 One of elements to include in the new array object.
     * @param item5 One of elements to include in the new array object.
     * @param item6 One of elements to include in the new array object.
     * @param item7 One of elements to include in the new array object.
     */
    of<T1, T2, T3, T4, T5, T6, T7>(item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7): [T1, T2, T3, T4, T5, T6, T7]

    /**
     * Returns a new array from a set of elements.
     * @param item1 One of elements to include in the new array object.
     * @param item2 One of elements to include in the new array object.
     * @param item3 One of elements to include in the new array object.
     * @param item4 One of elements to include in the new array object.
     * @param item5 One of elements to include in the new array object.
     * @param item6 One of elements to include in the new array object.
     */
    of<T1, T2, T3, T4, T5, T6>(item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6): [T1, T2, T3, T4, T5, T6]

    /**
     * Returns a new array from a set of elements.
     * @param item1 One of elements to include in the new array object.
     * @param item2 One of elements to include in the new array object.
     * @param item3 One of elements to include in the new array object.
     * @param item4 One of elements to include in the new array object.
     * @param item5 One of elements to include in the new array object.
     */
    of<T1, T2, T3, T4, T5>(item1: T1, item2: T2, item3: T3, item4: T4, item5: T5): [T1, T2, T3, T4, T5]

    /**
     * Returns a new array from a set of elements.
     * @param item1 One of elements to include in the new array object.
     * @param item2 One of elements to include in the new array object.
     * @param item3 One of elements to include in the new array object.
     * @param item4 One of elements to include in the new array object.
     */
    of<T1, T2, T3, T4>(item1: T1, item2: T2, item3: T3, item4: T4): [T1, T2, T3, T4]

    /**
     * Returns a new array from a set of elements.
     * @param item1 One of elements to include in the new array object.
     * @param item2 One of elements to include in the new array object.
     * @param item3 One of elements to include in the new array object.
     */
    of<T1, T2, T3>(item1: T1, item2: T2, item3: T3): [T1, T2, T3]

    /**
     * Returns a new array from a set of elements.
     * @param item1 One of elements to include in the new array object.
     * @param item2 One of elements to include in the new array object.
     */
    of<T1, T2>(item1: T1, item2: T2): [T1, T2]

    /**
     * Returns a new array from a set of elements.
     * @param item1 One of elements to include in the new array object.
     */
    of<T1>(item1: T1): [T1]
  }
}
