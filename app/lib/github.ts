export type ProjectRepo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    fork: boolean;
    archived: boolean;
};

type GitHubRepoApi = ProjectRepo & {
    private?: boolean;
};

function normalizeHomepage(value: unknown): string | null {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (!trimmed) return null;
    return trimmed;
}

export async function getGitHubReposForProjects(username: string): Promise<ProjectRepo[]> {
    const url = new URL(`https://api.github.com/users/${encodeURIComponent(username)}/repos`);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("sort", "updated");

    const res = await fetch(url.toString(), {
        headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "portfolio-site",
        },
        next: { revalidate: 60 * 60 },
    });

    if (!res.ok) return [];

    const data = (await res.json()) as GitHubRepoApi[];

    const repos = data
        .filter((r) => !r.private && !r.fork && !r.archived)
        .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description ?? null,
            html_url: r.html_url,
            homepage: normalizeHomepage(r.homepage),
            language: r.language ?? null,
            stargazers_count: r.stargazers_count ?? 0,
            forks_count: r.forks_count ?? 0,
            updated_at: r.updated_at,
            fork: r.fork,
            archived: r.archived,
        }))
        .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (Date.parse(b.updated_at) - Date.parse(a.updated_at)))
        .slice(0, 8);

    return repos;
}

