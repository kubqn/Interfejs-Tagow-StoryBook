import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'

export interface ITagControls {
  pageSize: number
  sortBy: 'popular' | 'activity' | 'name'
  order: 'desc' | 'asc'
  setPageSize: (size: number) => void
  setSortBy: (sortBy: 'popular' | 'activity' | 'name') => void
  setOrder: (order: 'desc' | 'asc') => void
}

const TagControls: React.FC<ITagControls> = ({
  pageSize,
  sortBy,
  order,
  setPageSize,
  setSortBy,
  setOrder,
}) => {
  const handlePageSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value)
    if (!isNaN(value)) {
      value = Math.min(Math.max(1, value), 100)
      setPageSize(value)
    }
  }

  const handleSortByChange = (e: SelectChangeEvent<unknown>) => {
    setSortBy(e.target.value as 'popular' | 'activity' | 'name')
  }

  const handleOrderChange = (e: SelectChangeEvent<unknown>) => {
    setOrder(e.target.value as 'desc' | 'asc')
  }

  return (
    <Grid container spacing={5} justifyContent='center'>
      <Grid item xs={2}>
        <TextField
          label='Page Size'
          type='number'
          value={pageSize}
          onChange={handlePageSize}
          variant='outlined'
          fullWidth
          inputProps={{ min: 1, max: 100 }}
        />
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortBy} onChange={handleSortByChange} label='Sort By'>
            <MenuItem value='popular'>Popular</MenuItem>
            <MenuItem value='activity'>Activity</MenuItem>
            <MenuItem value='name'>Name</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel>Order</InputLabel>
          <Select value={order} label='Order' onChange={handleOrderChange}>
            <MenuItem value='desc'>Descending</MenuItem>
            <MenuItem value='asc'>Ascending</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default TagControls
