class Github{
    constructor(){
        this.client_id = '5fd6f4634e42b7919655';
        this.client_secret = '529b782391cf97d6102924a5aad1ae0e6dd8d8cd';
        this.repos_count = 5 ;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}

