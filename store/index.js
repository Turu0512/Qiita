export const state = () => ({
  animals: [
    { id: 1, name: "カバ" },
    { id: 2, name: "うさぎ" },
    { id: 3, name: "犬" },
  ],
  items: [],
});
// ------------------Mutations-------------------------------
export const mutations = {
  items(state) {
    const newItems = new Array();
    for (let i = 0; i < state.animals.length; i++) {
      newItems[i] = new Array();
    }
    state.items = newItems;
  },
};
