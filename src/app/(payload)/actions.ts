'use server'

import { handleServerFunctions as fn } from '@payloadcms/next/layouts'
import config from '@/payload.config'
import { importMap } from './admin/importMap'

export async function handleServerFunctions(args: any) {
    return fn({
        ...args,
        config,
        importMap,
    })
}
