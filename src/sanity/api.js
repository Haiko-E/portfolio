import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export async function getFirstProject() {
  const query = `*[_type == "post"] { tag-> }`;
  const firstProject = await useSanityClient().fetch(query);
  return firstProject;
}

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}
