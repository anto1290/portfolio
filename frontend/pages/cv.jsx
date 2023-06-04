import Head from 'next/head'
import Utama from '../layouts/utama'

const Cv = () => {
  return (
    <Utama>
      <Head>
        <title>CV - Muhammad Nurwibawanto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full h-full py-16 px-2">
        <div className="grid grid-cols-8 gap-8">
          <div className='col-span-8 flex justify-center'>
            <iframe id='cvFrame' src='https://drive.google.com/file/d/1VDUz6VCbMeeexHHKobAxxXtx81eYn7bn/preview' style={{ width: '90%', height: '800px' }}>
            </iframe>
          </div>
        </div>
      </div>
    </Utama>
  )
}

export default Cv
