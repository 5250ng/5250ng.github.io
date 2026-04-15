// Astro content collections config — we import docs markdown directly in
// pages (not via getEntry), but declaring the collection silences the
// deprecation warning about auto-generated collections.
import { defineCollection } from 'astro:content';

const docs = defineCollection({
  // No schema — these files are rendered via direct import, not queried.
});

export const collections = { docs };
