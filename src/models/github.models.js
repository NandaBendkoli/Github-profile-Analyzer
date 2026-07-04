import db from "../config/db.js";

export const createProfile = async (profile) => {

    const query = `
        INSERT INTO github_profiles (
            username,
            name,
            bio,
            followers,
            following,
            public_repos,
            public_gists,
            avatar_url,
            profile_url,
            company,
            location,
            github_created_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(query, [
        profile.username,
        profile.name,
        profile.bio,
        profile.followers,
        profile.following,
        profile.publicRepos,
        profile.publicGists,
        profile.avatarUrl,
        profile.profileUrl,
        profile.company,
        profile.location,
        profile.githubCreatedAt
    ]);
};

export const getProfiles = async () => {

    const [rows] = await db.execute(
        `SELECT * FROM github_profiles`
    );

    return rows;
};

export const getProfile = async (username) => {

    const [rows] = await db.execute(
        `SELECT * FROM github_profiles WHERE username = ?`,
        [username]
    );

    return rows[0];
};