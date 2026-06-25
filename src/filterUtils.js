export const filterPostsBySearch = (posts, searchTerm) => {
  return posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
