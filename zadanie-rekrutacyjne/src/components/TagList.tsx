import { CircularProgress, Typography } from '@mui/material'
import Tag, { ITag } from './Tag'

export interface ITagList {
  isLoading: boolean
  error: Error | null
  tags: ITag[]
}

const TagList: React.FC<ITagList> = ({ isLoading, error, tags }) => {
  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.3rem',
  }

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : error ? (
        <Typography variant='body1' color='error'>
          Error fetching data: {error.message}
        </Typography>
      ) : tags.length === 0 ? (
        <Typography variant='body1'>No data were found.</Typography>
      ) : (
        <ul style={listStyle}>
          {tags.map((tag) => (
            <Tag key={tag.name} {...tag} />
          ))}
        </ul>
      )}
    </>
  )
}

export default TagList
