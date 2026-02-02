import config from '@/payload.config'
import { RootLayout } from '@payloadcms/next/layouts'
import { handleServerFunctions } from './actions'
import React from 'react'
import { ImportMap } from 'payload'

const importMap: ImportMap = {}

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={handleServerFunctions}>
    {children}
  </RootLayout>
)

export default Layout
