import fs from 'fs';
import path from 'path';

export interface WriteArtifactOptions {
  /** Whether to create missing parent directories. Default: true. */
  ensureDir?: boolean;
  /** JSON.stringify space argument. Default: 2. */
  jsonSpace?: string | number | undefined;
  /** Whether to append a trailing newline. Default: true. */
  trailingNewline?: boolean;
  /** Optional log callback. */
  log?: (message: string) => void;
}

/**
 * Write a JSON artifact for the build-time generators.
 *
 * Centralizes mkdirSync, JSON.stringify, and optional logging so generators
 * stop copy-pasting fs.writeFileSync calls with inconsistent formatting.
 */
export function writeArtifact(
  filePath: string,
  data: unknown,
  options: WriteArtifactOptions = {},
): void {
  const { ensureDir = true, jsonSpace = 2, trailingNewline = true, log } = options;

  if (ensureDir) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }

  const json = JSON.stringify(data, null, jsonSpace);
  fs.writeFileSync(filePath, trailingNewline ? `${json}\n` : json);
  log?.(`Generated ${path.basename(filePath)}`);
}
