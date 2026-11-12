// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.BASE_PATH || (repositoryName ? `/${repositoryName}` : undefined);

export default defineConfig({ base });
