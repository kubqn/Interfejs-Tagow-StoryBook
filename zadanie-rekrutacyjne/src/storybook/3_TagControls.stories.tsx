import { action } from '@storybook/addon-actions'
import TagControls, { ITagControls } from '../components/TagControls'

export default {
  title: 'TagControls',
  component: TagControls,
}

export const Actions = (args: ITagControls) => <TagControls {...args} />

Actions.args = {
  pageSize: 10,
  sortBy: 'popular',
  order: 'desc',
  setPageSize: action('setPageSize'),
  setSortBy: action('setSortBy'),
  setOrder: action('setOrder'),
}
