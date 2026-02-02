'use server'

import { handleServerFunctions as fn } from '@payloadcms/next/layouts'

export async function handleServerFunctions(args: any) {
    return fn(args)
}
