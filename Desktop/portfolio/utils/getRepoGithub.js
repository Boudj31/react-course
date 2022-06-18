import axios from "axios";

const getRepoGithub = async (token) => {

try {
    const username = 'Boudj31';
    if (token) {
        const res = await axios.get(
          `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        let repos = res.data.items;
        let latestSixRepos = repos.splice(0, 6);
        return latestSixRepos;
      } else {
        const res = await axios.get(
          `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
        );
        let repos = res.data.items;
        let latestSixRepos = repos.splice(0, 6);
        return latestSixRepos;
      }
    
} catch (error) {
    console.log(err);
}
}

export default getRepoGithub;