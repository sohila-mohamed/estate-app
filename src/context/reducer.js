export const initialState = {
  likes: [],
  clicked:false,
  colors: {
    light: { color: "#919191" },
    orange: { color: "#FDAE5C" }
  },
};

  export const reducer = (state, action) => {
    switch (action.type) {
      case "LIKE_PROPERTY":
          return {
            ...state,
            likes: [...state.likes, action.item],
            clicked: true,
            //colors: state.colors.orange,
          };

      case "REMOVE":
        let newHeart = [...state.likes];
        const index = state.likes.findIndex((likesItem) => likesItem.id === action.id);
        if (index >= 0){
          newHeart.splice(index, 1);
        } else {
          console.warn(
          `Cant remove product (id: ${action.id}) as its not in list!`
          )
        }
        //delete newHeart.likes[index];
      default:
        return state;
    }
  };

  export default reducer;
