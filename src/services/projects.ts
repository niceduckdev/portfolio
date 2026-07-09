import { getCollection } from "astro:content";
import {sortOnDate} from "@lib/sort.ts";

export async function getHighlightedProject() {
    const projects = await getCollection("projects");
    return projects.filter((project) => project.data.highlighted)[0]
}

export async function getAllProjects() {
    const projects = await getCollection("projects");
    return sortOnDate(projects);
}