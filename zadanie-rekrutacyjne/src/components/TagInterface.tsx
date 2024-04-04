import { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'
import TagControls from './TagControls'
import TagList from './TagList'
import { ITag } from './Tag'

const API_URL: string = 'https://api.stackexchange.com/tags'
const REQUEST_DELAY: number = 500

const TagInterface: React.FC = () => {
  const [tags, setTags] = useState<ITag[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any | null>(null)
  const [pageSize, setPageSize] = useState<number>(10)
  const [sortBy, setSortBy] = useState<'popular' | 'activity' | 'name'>(
    'popular'
  )
  const [order, setOrder] = useState<'desc' | 'asc'>('desc')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(API_URL, {
          params: {
            pagesize: pageSize,
            order: order,
            sort: sortBy,
            site: 'stackoverflow',
          },
        })
        setTags(
          response.data.items.map((tag: any) => ({
            ...tag,
            backgroundColor: '#' + Math.random().toString(16).substr(-6),
          }))
        )
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }

    const timeoutId = setTimeout(fetchData, REQUEST_DELAY)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [pageSize, sortBy, order])

  return (
    <div style={{ backgroundColor: '#eff8fc' }}>
      <Typography variant='h4' gutterBottom align='center'>
        Interfejs użytkownika przeglądarki tagów - Jakub Kantowicz
      </Typography>

      <TagControls
        pageSize={pageSize}
        sortBy={sortBy}
        order={order}
        setPageSize={setPageSize}
        setSortBy={setSortBy}
        setOrder={setOrder}
      />

      <TagList isLoading={isLoading} error={error} tags={tags} />
    </div>
  )
}

export default TagInterface
