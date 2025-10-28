#!/usr/bin/env tsx

/**
 * Fixes YAML frontmatter errors in translated Markdown files
 * - Adds quotes to description fields containing colons
 * - Adds quotes to content fields in meta tags containing colons
 */

import { readFileSync, writeFileSync } from "fs";
import { glob } from "glob";
import path from "path";

const ROOT_DIR = process.cwd();

async function fixYamlFrontmatter() {
  console.log("🔧 Fixing YAML frontmatter in translated files...\n");

  // Find all translated markdown files
  const pattern = path.join(ROOT_DIR, "packages/*/docs/i18n/**/*.md");
  const files = await glob(pattern);

  console.log(`📁 Found ${files.length} translated files\n`);

  let fixedCount = 0;

  for (const filePath of files) {
    let content = readFileSync(filePath, "utf-8");
    let modified = false;

    // Check if file has frontmatter
    if (!content.startsWith("---")) continue;

    const lines = content.split("\n");
    const newLines: string[] = [];
    let inFrontmatter = false;
    let frontmatterEnd = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Track frontmatter boundaries
      if (line === "---") {
        if (!inFrontmatter) {
          inFrontmatter = true;
        } else {
          frontmatterEnd = i;
          newLines.push(line);
          break;
        }
        newLines.push(line);
        continue;
      }

      if (inFrontmatter) {
        // Fix description field with unquoted colon
        if (line.match(/^description:\s+[^"'][^:]*:/)) {
          const match = line.match(/^description:\s+(.+)$/);
          if (match) {
            const value = match[1];
            // Only quote if not already quoted
            if (!value.startsWith('"') && !value.startsWith("'")) {
              newLines.push(`description: "${value}"`);
              modified = true;
              continue;
            }
          }
        }

        // Fix content field in meta tags with unquoted colon
        if (line.match(/^\s+content:\s+[^"'][^:]*:/)) {
          const match = line.match(/^(\s+content:\s+)(.+)$/);
          if (match) {
            const indent = match[1];
            const value = match[2];
            // Only quote if not already quoted
            if (!value.startsWith('"') && !value.startsWith("'")) {
              newLines.push(`${indent}"${value}"`);
              modified = true;
              continue;
            }
          }
        }
      }

      newLines.push(line);
    }

    // Add remaining lines after frontmatter
    if (frontmatterEnd > -1) {
      newLines.push(...lines.slice(frontmatterEnd + 1));
    }

    if (modified) {
      writeFileSync(filePath, newLines.join("\n"));
      const relativePath = path.relative(ROOT_DIR, filePath);
      console.log(`✅ Fixed: ${relativePath}`);
      fixedCount++;
    }
  }

  console.log(`\n✨ Fixed ${fixedCount} files`);
}

fixYamlFrontmatter().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
