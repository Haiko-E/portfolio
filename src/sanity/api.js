import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';
import { parseISO, format } from 'date-fns';

const imageBuilder = createImageBuilder(useSanityClient());

export async function getFirstProject() {
  const query = `*[_type == "project"]{..., backgroundimage{alttext, asset->}, "tags": tags[]->name}`;
  const firstProject = await useSanityClient().fetch(query);
  return firstProject;
}

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export function formatDate(date) {
  const dateString = parseISO(date);
  const formattedDateString = format(dateString, 'MMMM yyyy');
  return `${formattedDateString}`;
}
