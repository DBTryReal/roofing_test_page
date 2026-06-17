// ---
import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

// ── Colección (books) ─────────────────────────────────────────────────
// const books = defineCollection({
//     loader: glob({ base: "src/content/books", pattern: "*.md" }),
//     schema: z.object({
//         title: z.string(),
//         author: z.string(),
//         rating: z.number(),
//         summary: z.string()
//     })
// })

// ── Colección páginas únicas (about) ──────────────────────────────────
// Un solo .md → una sola página. Se usa getEntry() para cargarlo.
const pages = defineCollection({
    loader: glob({
        base: "src/content", // carpeta raíz de content/
        pattern: "*.md"      // solo los .md directos (no subcarpetas)
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        founding_year: z.number().optional()
    })
})

// ── Colección (services) ──────────────────────────────────────────────
// Múltiples .md → múltiples páginas. Se usa getCollection() + [id].astro.
const services = defineCollection({
    // loader: glob({ pattern: "**/[^_]*.md", base: "src/content/services" }),
    loader: glob({
        base: "src/content/services",
        pattern: "*.md"
    }),
    schema: z.object({
        title: z.string(),
        tagline: z.string(),
        price: z.number(),
        // image: z.string().optional(),
        // featured: z.boolean().default(false),
        icon: z.string(),
        order: z.number().optional() // para ordenar la lista
    })
})

export const collections = {
    // books,
    pages,
    services
}
