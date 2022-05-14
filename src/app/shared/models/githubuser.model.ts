export class GithubUser {

    constructor(data?: any) {
        this.avatar_url = data.avatar_url;
        this.bio = data.bio;
        this.followers = data.followers;
        this.followers_url = data.followers_url;
        this.following = data.following;
        this.location = data.location;
        this.public_repos = data.public_repos;
        this.repos_url = data.repos_url;
    }
avatar_url: string;
bio: string;
followers: number;
followers_url: string;
following: number;
following_url: string;
location: string;
public_repos: number;
repos_url: string;
}