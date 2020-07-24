import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'
import { Context } from './types'

/**
 * Prepare template files.
 */
export default async (ctx: Context): Promise<void> => {
  const cwd = path.join(ctx.src, ctx.config.source ?? 'template')

  const filters = ctx.config.filters
  const ignore = filters != null ? Object.keys(filters).filter(i => !filters[i](ctx.answers)) : undefined

  const entries = await glob('**', { cwd, ignore, dot: true, stats: true })

  await Promise.all(entries.map(async entry => {
    const contents = await fs.promises.readFile(path.join(cwd, entry.path))
    ctx.files.push({ path: entry.path, stats: entry.stats, contents })
  }))
}
