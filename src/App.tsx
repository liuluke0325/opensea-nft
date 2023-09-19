
import './App.css'
import Item from './components/Item'
import { SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { listAPI, NftModel } from './apis/list'

function App() {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const [list, setList] = useState<NftModel[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    (async () => {
      const resp = await listAPI.getList('goerli', '0x85fD692D2a075908079261F5E351e7fE0267dB02')
      setList(resp.data.nfts);
      console.log(resp, 'hey')
    })();

  }, [])
  return (
    <>
      <div>
        Luke Project
      </div>
      <SimpleGrid columns={{ sm: 2, md: 4 }} spacing='40px'>
        {/* TODO infinite scroll */}
        {list.map(it => {
          return <Item key={it.identifier} imageSrc={it.image_url} name={it.name}></Item>
        })}
      </SimpleGrid>

    </>
  )
}

export default App
