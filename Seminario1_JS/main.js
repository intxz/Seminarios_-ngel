fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json => {
    const comments = json;

    const resFilter_postId = comments.filter(comment => comment.postId == 1);
    console.log("All users with postId = 1");
    console.log("All users with" + resFilter_postId);

    const resFilter_end = comments.filter(comment => comment.email.endsWith('.com'));
    console.log("All users hallo with a email ended in .com");
    console.log(resFilter_end);
    
    const resMap_email = comments.map(comment => {
        return {
            email: `${comment.email}`
        };
    });
    console.log("All the emails from the API");
    console.log(resMap_email);

    const resCombination = comments.filter(comment => comment.email.endsWith('.com')).map(comment => {
        return {
            email: `${comment.email}`
        };
    });
    console.log("All the emails ended in .com from the API");
    console.log(resCombination);

    const resSumPostId = comments.reduce((total,comment) => total + comment.postId, 0);
    console.log("All the sum from postIds");
    console.log("The sum of all the postIds is: " + resSumPostId);

    const resSumId = comments.reduce((total, comment) => total + comment.id, 0);
    console.log("All the sum from the ids");
    console.log("The sum of all ids is: " + resSumId);

    const reverse = comments.sort((a, b) => a.id < b.id ? 1:-1);
    console.log("API revered");
    console.log(reverse);
});
