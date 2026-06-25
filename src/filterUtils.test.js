import { filterPostsBySearch } from "./filterUtils";

test('should filter posts by search term correctly', () => {
    //1. prepate fake test data
    const mockPosts = [
        {id: '1', title: 'Great pizza recipe'},
        {id: '2', title: 'Amazing gaming setup'},
        {id: '3', title: 'React and Redux tutorial'}
    ];

    //2. We start the function with search set to 'pizza'
    const result = filterPostsBySearch(mockPosts, 'pizza');

    // 3. We tell Jest, what type of result we expect
    expect(result).toHaveLength(1); //we hope to find 1 post
    expect(result[0].title).toBe('Great pizza recipe'); //We hope that the title will be this
});