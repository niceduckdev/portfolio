import { sortOnDate } from "@lib/sort";
import { fromContent, type Project } from "@models/project";
import { getCollection } from "astro:content";

export async function getProjects(): Promise<Project[]> {
    return sortOnDate(
        (await getCollection("projects")).map((project) =>
            fromContent(project),
        ),
    ).filter((project) => !project.hidden)
}

export async function getHighlightedProject(): Promise<Project> {
    const projects = await getProjects();
    return projects.filter((project) => project.highlighted)[0];
}