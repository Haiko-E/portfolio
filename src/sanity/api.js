import { useSanityClient } from 'astro-sanity';

export async function getFirstProject() {
  const query = `*[_type == "post"]`;
  const firstProject = await useSanityClient().fetch(query);
  return firstProject;
}
