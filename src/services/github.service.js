import axios from "axios";
import { createProfile, getProfile, getProfiles } from "../models/github.models.js";


export const githubAnalyzerService = async (username) => {

    const { data } = await axios.get(
        `https://api.github.com/users/${username}`
    );
    console.log(data);

    const profile = {
        username: data.login,
        name: data.name || data.login,
        bio: data.bio || "",
        followers: data.followers,
        following: data.following,
        publicRepos: data.public_repos,
        publicGists: data.public_gists,
        avatarUrl: data.avatar_url,
        profileUrl: data.html_url,
        company: data.company || "",
        location: data.location || "",
        githubCreatedAt: new Date(data.created_at)
    };

    await createProfile(profile);

    return profile;
}

export const getAllProfilesService = async () => {

    const profiles = await getProfiles();

    return profiles;

};

export const getSingleProfileService = async (username) => {

    return await getProfile(username);

};