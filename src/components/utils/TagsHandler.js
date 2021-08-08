
export const getAlltags = (state) => {
  let allTags = [];

  // *** to push all the tags from state to an array
  state.forEach((element) =>
    element.tags ? allTags.push(element.tags) : null
  );
  return allTags;
};

export const getListTags = (state, allTags) => {
  let listTags = [];
  let tagIndex = [];

  // *** to remove duplicates
  listTags = allTags.filter(
    (item, index, self) => index === self.findIndex((t) => t === item)
  );
  state.map((item, inx) =>
    listTags.map((list) => (item.tags === list ? tagIndex.push(inx) : null))
  );
  return listTags;
};

export const getTagsCount = (allTags,listTags) => {
    let result = [];

    listTags.forEach((element) => {
      if (allTags.filter((i) => i === element)) {
        result = {
          ...result,
          [element]: allTags.filter((i) => i === element).length,
        };
      }
    });
    return result;
  };