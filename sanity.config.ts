"use client"

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { presentationTool } from "sanity/presentation"
import { structureTool } from "sanity/structure"
import { documentInternationalization } from "@sanity/document-internationalization"
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schemaTypes"

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft/enable",
        },
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: [
        { id: "es", title: "Español" },
        { id: "en", title: "English" },
        { id: "eu", title: "Euskera" },
      ],
      schemaTypes: ["post"],
      languageField: "language",
    }),
  ],
})
