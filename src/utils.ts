export const renderArr = (data: any, filter: string): any[] => {
  let filterArr;

  if (filter === "active") {
    filterArr = data
      .filter((todo: any) => !todo.completed)
      .sort((a: any, b: any) => a.pos - b.pos);
  } else {
    if (filter === "completed") {
      filterArr = data
        .filter((todo: any) => todo.completed)
        .sort((a: any, b: any) => a.pos - b.pos);
    } else {
      filterArr = data.sort((a: any, b: any) => a.pos - b.pos);
    }
  }

  return filterArr;
};
