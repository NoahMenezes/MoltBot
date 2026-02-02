import config from '@/payload.config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { ImportMap } from 'payload'


const importMap: ImportMap = {
  // This is typically generated, but for a basic setup we can start simple
}

type Args = {
  params: Promise<{
    payload: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config, params, searchParams })

const Page = async ({ params, searchParams }: Args) => {
  const { payload } = await params;
  
  return (
    <RootPage
      config={config}
      params={Promise.resolve({ segments: payload ?? [] })}
      searchParams={searchParams}
      importMap={importMap}

    />
  )
}

export default Page
