import { sortOnDate } from "@lib/sort";
import { fromContent, type Project } from "@models/project";
import { getCollection } from "astro:content";

export async function getProjects(): Promise<Project[]> {
    return sortOnDate(
        (await getCollection("projects")).map((project) =>
            fromContent(project),
        ),
    );
}
